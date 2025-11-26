import React, { useState, useRef } from 'react';
import { SimulationCanvas } from '../components/SimulationCanvas';
import { RefreshCw, Car, ArrowUp, ArrowDown, Timer, Zap, MousePointer2 } from 'lucide-react';

const InteractiveLabs: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  // Lab 1 State: 4-Way Stop
  const [stopOrder, setStopOrder] = useState<number[]>([]);
  const [lab1Success, setLab1Success] = useState<boolean | null>(null);

  const handleCarClick = (carId: number) => {
    onComplete();
    if (stopOrder.includes(carId)) return;
    const newOrder = [...stopOrder, carId];
    setStopOrder(newOrder);

    // Logic: Car 1 (Bottom/Red) arrived first (4s ago), Car 2 (Left/Blue) arrived second.
    // Correct order: 1 then 2.
    if (newOrder.length === 2) {
      if (newOrder[0] === 1 && newOrder[1] === 2) {
        setLab1Success(true);
      } else {
        setLab1Success(false);
      }
    }
  };

  const resetLab1 = () => {
    setStopOrder([]);
    setLab1Success(null);
  };

  // Lab 2 State: Following Distance
  const [condition, setCondition] = useState<'Dry' | 'Wet' | 'Snow'>('Dry');
  const [gap, setGap] = useState(3);
  
  const getRequiredGap = () => {
    if (condition === 'Dry') return 3;
    if (condition === 'Wet') return 4;
    return 6;
  };
  
  const gapStatus = gap >= getRequiredGap() ? 'Safe' : 'Too Close';

  // Lab 4 State: Hill Parking
  const [slope, setSlope] = useState<'Uphill' | 'Downhill'>('Uphill');
  const [curb, setCurb] = useState<boolean>(true);
  const [wheelAngle, setWheelAngle] = useState(0); // -45 (Left) to 45 (Right)
  const [parkingFeedback, setParkingFeedback] = useState<{valid: boolean, msg: string} | null>(null);

  const checkParking = () => {
      onComplete();
      const isUphillCurb = slope === 'Uphill' && curb;
      // Rule: Uphill with Curb = Turn AWAY (Left). All others = Turn TOWARD (Right).
      // Left is negative angle, Right is positive angle.
      
      let isValid = false;
      let msg = "";

      if (wheelAngle === 0) {
          isValid = false;
          msg = "Wheels are straight! Vehicle will roll into traffic.";
      } else if (isUphillCurb) {
          isValid = wheelAngle < 0;
          msg = isValid 
            ? "Correct! The back of the wheel hits the curb if brakes fail." 
            : "Incorrect. For Uphill + Curb, turn wheels AWAY (Left).";
      } else {
          isValid = wheelAngle > 0;
          msg = isValid 
            ? "Correct! Vehicle will roll away from traffic." 
            : "Incorrect. Turn wheels RIGHT (Toward curb/side).";
      }
      setParkingFeedback({valid: isValid, msg});
  };

  // Lab 5 State: Reaction Time
  const [gameState, setGameState] = useState<'idle' | 'waiting' | 'ready' | 'early' | 'result'>('idle');
  const [reactionTime, setReactionTime] = useState<number>(0);
  const timerRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);

  const startReactionTest = () => {
      setGameState('waiting');
      setReactionTime(0);
      // Random delay between 2s and 5s
      const delay = 2000 + Math.random() * 3000;
      timerRef.current = setTimeout(() => {
          setGameState('ready');
          startTimeRef.current = Date.now();
      }, delay);
  };

  const handleReactionClick = () => {
      onComplete();
      if (gameState === 'waiting') {
          clearTimeout(timerRef.current);
          setGameState('early');
      } else if (gameState === 'ready') {
          const time = Date.now() - startTimeRef.current;
          setReactionTime(time);
          setGameState('result');
      }
  };

  const getReactionGrade = (ms: number) => {
      if (ms < 300) return { text: "Excellent!", color: "text-emerald-500" };
      if (ms < 500) return { text: "Average", color: "text-yellow-500" };
      return { text: "Slow/Distracted", color: "text-red-500" };
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Interactive Labs</h2>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">5 Modules Available</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Lab 1: Right of Way */}
        <SimulationCanvas 
            title="Lab 1: 4-Way Stop Logic" 
            description="Two cars arrive at different times. Click the cars in the correct order to proceed."
        >
            <div className="relative w-64 h-64 bg-slate-200">
            {/* Roads */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-full bg-slate-600 border-x-2 border-dashed border-slate-400"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-16 bg-slate-600 border-y-2 border-dashed border-slate-400"></div>
            
            {/* Stop Lines */}
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 w-16 h-1 bg-white"></div>
            <div className="absolute top-1/2 left-[38%] -translate-y-1/2 w-1 h-16 bg-white"></div>
            
            {/* Car 1 (Red) - Bottom - Arrived First */}
            <button 
                onClick={() => handleCarClick(1)}
                disabled={stopOrder.includes(1)}
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-red-500 rounded transition-transform ${stopOrder.includes(1) ? '-translate-y-32 opacity-50' : 'hover:scale-105'} flex flex-col items-center justify-center shadow-lg`}
            >
                <span className="text-[8px] text-white font-bold">1</span>
            </button>
            
            {/* Car 2 (Blue) - Left - Arrived Second */}
            <button 
                onClick={() => handleCarClick(2)}
                disabled={stopOrder.includes(2)}
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-8 bg-blue-500 rounded transition-transform ${stopOrder.includes(2) ? 'translate-x-32 opacity-50' : 'hover:scale-105'} flex items-center justify-center shadow-lg`}
            >
                <span className="text-[8px] text-white font-bold">2</span>
            </button>

            {/* Messages */}
            <div className="absolute top-2 right-2 text-xs bg-white/90 p-2 rounded shadow text-slate-700 w-32">
                <div>Red wait: 4s</div>
                <div>Blue wait: 1s</div>
            </div>
            
            {lab1Success !== null && (
                <div className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10`}>
                <div className="bg-white p-4 rounded-lg text-center">
                    <div className={`font-bold mb-2 ${lab1Success ? 'text-emerald-600' : 'text-red-600'}`}>
                    {lab1Success ? 'Correct!' : 'Collision Risk!'}
                    </div>
                    <button onClick={resetLab1} className="text-xs bg-slate-100 px-3 py-1 rounded hover:bg-slate-200 flex items-center mx-auto">
                    <RefreshCw size={12} className="mr-1" /> Retry
                    </button>
                </div>
                </div>
            )}
            </div>
        </SimulationCanvas>

        {/* Lab 2: Following Distance */}
        <SimulationCanvas 
            title="Lab 2: Safe Following Distance" 
            description="Adjust the gap (seconds) based on weather conditions. Colorado recommends 3s for dry, more for wet/snow."
        >
            <div className="w-full max-w-md p-4 bg-slate-800 rounded-lg text-white">
                <div className="flex justify-center space-x-2 mb-6">
                    {['Dry', 'Wet', 'Snow'].map(c => (
                        <button 
                            key={c}
                            onClick={() => { setCondition(c as any); onComplete(); }}
                            className={`px-4 py-1 text-xs rounded-full transition-colors ${condition === c ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Visualizer */}
                <div className="relative h-20 bg-slate-700 rounded mb-6 overflow-hidden flex items-center px-4">
                    <div className="w-full h-0.5 bg-slate-500 relative">
                        <Car className="absolute -top-3 right-0 text-white" />
                        <Car 
                            className="absolute -top-3 text-indigo-400 transition-all duration-500" 
                            style={{ right: `${Math.min(gap * 10 + 10, 90)}%` }} 
                        />
                        
                        <div className="absolute top-4 w-full text-center text-xs text-slate-400">
                            {gap} Seconds Gap
                        </div>
                    </div>
                </div>

                <input 
                    type="range" 
                    min="1" 
                    max="8" 
                    value={gap}
                    onChange={(e) => setGap(parseInt(e.target.value))}
                    className="w-full mb-4 accent-indigo-500"
                />

                <div className={`text-center font-bold p-2 rounded ${gapStatus === 'Safe' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                    Status: {gapStatus}
                </div>
            </div>
        </SimulationCanvas>

        {/* Lab 3: Truck Zones */}
        <SimulationCanvas
            title="Lab 3: Truck 'No-Zones'"
            description="Identify the safe passing areas around a large truck."
        >
            <div className="relative w-full max-w-md h-40 bg-slate-100 flex items-center justify-center">
                {/* Truck */}
                <div className="w-32 h-12 bg-slate-700 relative flex items-center justify-center text-white text-[10px] font-bold rounded">
                    TRUCK
                    
                    {/* No Zones */}
                    <div className="absolute -left-12 top-0 h-full w-10 bg-red-500/20 border border-red-500/50 flex items-center justify-center text-[8px] text-red-600">Rear</div>
                    <div className="absolute -right-8 top-0 h-full w-6 bg-red-500/20 border border-red-500/50 flex items-center justify-center text-[8px] text-red-600">Front</div>
                    <div className="absolute left-0 -top-10 w-full h-8 bg-red-500/20 border border-red-500/50 flex items-center justify-center text-[8px] text-red-600">Left Side</div>
                    <div className="absolute left-0 -bottom-10 w-full h-8 bg-red-500/20 border border-red-500/50 flex items-center justify-center text-[8px] text-red-600">Right Side</div>
                </div>
            </div>
        </SimulationCanvas>

        {/* Lab 4: Hill Parking */}
        <SimulationCanvas
            title="Lab 4: Hill Parking Logic"
            description="Configure the hill and curb, then turn the wheels to the safe direction."
        >
            <div className="w-full bg-slate-50 p-4 flex flex-col items-center">
                <div className="flex space-x-4 mb-6 text-sm">
                    <button onClick={() => setSlope(s => s === 'Uphill' ? 'Downhill' : 'Uphill')} className="flex items-center px-3 py-1 bg-white border rounded shadow-sm min-w-[100px] justify-center">
                        {slope === 'Uphill' ? <ArrowUp size={14} className="mr-2 text-indigo-500"/> : <ArrowDown size={14} className="mr-2 text-orange-500"/>}
                        {slope}
                    </button>
                    <button onClick={() => setCurb(!curb)} className={`px-3 py-1 border rounded shadow-sm min-w-[100px] transition-colors ${curb ? 'bg-indigo-100 border-indigo-200 text-indigo-800' : 'bg-white text-slate-500'}`}>
                        {curb ? 'Has Curb' : 'No Curb'}
                    </button>
                </div>

                {/* Visual */}
                <div className="relative w-40 h-40 bg-slate-200 rounded-lg border-2 border-slate-300 mb-6 overflow-hidden">
                    {/* Curb */}
                    {curb && <div className="absolute right-0 top-0 h-full w-4 bg-stone-400 border-l border-stone-500"></div>}
                    {/* Road Line */}
                    {!curb && <div className="absolute right-4 top-0 h-full w-1 bg-white/50 dashed"></div>}
                    
                    {/* Car Wheels */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-24 bg-indigo-600 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-500">
                        {/* Front Wheels */}
                        <div 
                            className="absolute -top-4 -left-1 w-4 h-8 bg-black rounded transition-transform duration-300"
                            style={{ transform: `rotate(${wheelAngle}deg)` }}
                        ></div>
                        <div 
                            className="absolute -top-4 -right-1 w-4 h-8 bg-black rounded transition-transform duration-300"
                            style={{ transform: `rotate(${wheelAngle}deg)` }}
                        ></div>
                        <span className="text-[10px] text-white font-bold">{slope === 'Uphill' ? 'UP' : 'DOWN'}</span>
                    </div>
                </div>

                <div className="flex space-x-2 mb-4">
                    <button onClick={() => setWheelAngle(-35)} className={`px-4 py-2 text-xs font-bold rounded ${wheelAngle < 0 ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>Turn Left (Away)</button>
                    <button onClick={() => setWheelAngle(0)} className={`px-4 py-2 text-xs font-bold rounded ${wheelAngle === 0 ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>Straight</button>
                    <button onClick={() => setWheelAngle(35)} className={`px-4 py-2 text-xs font-bold rounded ${wheelAngle > 0 ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>Turn Right (Toward)</button>
                </div>

                <button onClick={checkParking} className="w-full py-2 bg-slate-800 text-white text-sm rounded font-bold hover:bg-slate-700">Check Safety</button>
                
                {parkingFeedback && (
                    <div className={`mt-2 text-xs font-bold p-2 rounded w-full text-center ${parkingFeedback.valid ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {parkingFeedback.msg}
                    </div>
                )}
            </div>
        </SimulationCanvas>

        {/* Lab 5: Reaction Time */}
        <SimulationCanvas
            title="Lab 5: Traffic Signal Reaction"
            description="Test your reaction time. Wait for the light to turn green, then click immediately."
        >
            <div 
                className="w-full h-64 bg-slate-900 rounded-lg flex flex-col items-center justify-center relative cursor-pointer select-none"
                onMouseDown={handleReactionClick}
            >
                {/* Traffic Light */}
                <div className="bg-black p-4 rounded-2xl border-4 border-slate-700 shadow-2xl mb-6 flex space-x-4">
                    <div className={`w-12 h-12 rounded-full transition-all duration-100 ${gameState === 'waiting' || gameState === 'early' ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]' : 'bg-red-900'}`}></div>
                    <div className={`w-12 h-12 rounded-full transition-all duration-50 ${gameState === 'ready' || gameState === 'result' ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]' : 'bg-emerald-900'}`}></div>
                </div>

                <div className="text-white text-center">
                    {gameState === 'idle' && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); startReactionTest(); }}
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-bold flex items-center"
                        >
                            <Timer className="mr-2" size={16}/> Start Test
                        </button>
                    )}
                    {gameState === 'waiting' && <p className="text-red-400 font-bold animate-pulse">WAIT FOR GREEN...</p>}
                    {gameState === 'early' && (
                        <div>
                            <p className="text-orange-400 font-bold mb-2">Too Early!</p>
                            <button onClick={(e) => { e.stopPropagation(); setGameState('idle'); }} className="text-xs underline text-slate-400">Try Again</button>
                        </div>
                    )}
                    {gameState === 'ready' && <p className="text-emerald-400 font-bold text-2xl">CLICK NOW!</p>}
                    {gameState === 'result' && (
                        <div className="animate-bounce-in">
                            <p className="text-4xl font-bold mb-1">{reactionTime} ms</p>
                            <p className={`text-sm font-bold ${getReactionGrade(reactionTime).color}`}>{getReactionGrade(reactionTime).text}</p>
                            <button onClick={(e) => { e.stopPropagation(); setGameState('idle'); }} className="mt-4 px-4 py-1 bg-slate-700 rounded text-xs hover:bg-slate-600">Retry</button>
                        </div>
                    )}
                </div>
                
                {gameState !== 'idle' && gameState !== 'result' && (
                    <div className="absolute bottom-4 text-slate-500 text-[10px] flex items-center">
                        <MousePointer2 size={12} className="mr-1" /> Tap anywhere to react
                    </div>
                )}
            </div>
        </SimulationCanvas>
      </div>
    </div>
  );
};

export default InteractiveLabs;