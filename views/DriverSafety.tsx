import React, { useEffect, useState } from 'react';
import { ShieldCheck, Eye, Zap, AlertTriangle, Smartphone, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const DriverSafety: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  // Aggressive Driving State
  const [aggressiveScore, setAggressiveScore] = useState(0);
  const [checkedBehaviors, setCheckedBehaviors] = useState<boolean[]>(new Array(6).fill(false));
  
  const aggressiveBehaviors = [
      "Mentally condemn other drivers as incompetent",
      "Close up space to stop others from merging",
      "Tailgate to get someone to speed up",
      "Honk or yell at someone in anger",
      "Make obscene gestures",
      "Deliberately prevent passing"
  ];

  const toggleBehavior = (idx: number) => {
      const newChecked = [...checkedBehaviors];
      newChecked[idx] = !newChecked[idx];
      setCheckedBehaviors(newChecked);
      setAggressiveScore(newChecked.filter(b => b).length);
  };

  // Distraction State
  const [speed, setSpeed] = useState(55);
  const textTime = 5; // seconds
  const distanceTraveled = Math.round(speed * 1.467 * textTime); // 1.467 fps per mph
  const footballFields = (distanceTraveled / 360).toFixed(1); // 360ft incl endzones

  // Scanning State
  const [scanStep, setScanStep] = useState(0); // 0: start, 1: left, 2: right, 3: left-again, 4: safe
  
  const handleScan = (direction: 'left' | 'right') => {
      if (scanStep === 0 && direction === 'left') setScanStep(1);
      else if (scanStep === 1 && direction === 'right') setScanStep(2);
      else if (scanStep === 2 && direction === 'left') setScanStep(3);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <ShieldCheck className="mr-3 text-indigo-600" /> Driver Safety
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Defensive Driving */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:col-span-2">
            <h3 className="font-bold text-slate-700 mb-4">Defensive Driving Core</h3>
            <div className="space-y-4">
                <div className="flex">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-4 h-fit">
                        <Eye className="text-indigo-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-slate-800">Scanning</h4>
                        <p className="text-xs text-slate-600 mt-1">Look 10-15 seconds ahead (about one block in city, quarter mile on highway). Scan left-right-left at intersections.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-4 h-fit">
                        <Zap className="text-indigo-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-slate-800">Space Cushion</h4>
                        <p className="text-xs text-slate-600 mt-1">Maintain space on all sides. Don't drive in blind spots. Keep 3-second following distance.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-4 h-fit">
                        <AlertTriangle className="text-indigo-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-slate-800">Aggressive Drivers</h4>
                        <p className="text-xs text-slate-600 mt-1">Don't engage. Get out of their way. Do not make eye contact. Report extreme cases if safe.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Health & Distractions */}
        <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
                <h3 className="font-bold text-slate-700 mb-4">Fitness to Drive</h3>
                
                <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded text-xs">
                        <span className="font-bold text-red-700 block mb-1">Distractions</span>
                        Texting, eating, passengers. <span className="font-bold">Texting while driving</span> is illegal for all ages and carries 4 points.
                    </div>
                    <div className="bg-orange-50 p-3 rounded text-xs">
                        <span className="font-bold text-orange-700 block mb-1">Fatigue</span>
                        Drowsy driving is as dangerous as drunk driving. If you are tired: Stop. Walk around. Drink coffee. Rest.
                    </div>
                    <div className="bg-indigo-50 p-3 rounded text-xs">
                        <span className="font-bold text-indigo-700 block mb-1">Seat Belts & Child Safety</span>
                        Colorado Law requires seat belts for driver and front passenger.
                        <br/><span className="font-bold">Children:</span> Under 1yr/20lbs (Rear-facing), 1-4yrs/40lbs (Car seat), 4-8yrs (Booster).
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Interactive Labs Section */}
      <h3 className="text-lg font-bold text-slate-700 pt-4 border-t border-slate-200">Safety Labs</h3>
      <div className="grid md:grid-cols-2 gap-6">
          
          {/* Aggressive Driving Assessment */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-slate-800">Aggressive Driving Self-Check</h4>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      aggressiveScore === 0 ? 'bg-emerald-100 text-emerald-700' : 
                      aggressiveScore < 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}>
                      Risk Level: {aggressiveScore === 0 ? 'Safe' : aggressiveScore < 3 ? 'Moderate' : 'High'}
                  </div>
              </div>
              <p className="text-xs text-slate-500 mb-4 italic">Do you ever...</p>
              <div className="space-y-2 mb-4">
                  {aggressiveBehaviors.map((behavior, idx) => (
                      <label key={idx} className="flex items-center p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
                          <input 
                              type="checkbox" 
                              checked={checkedBehaviors[idx]} 
                              onChange={() => toggleBehavior(idx)}
                              className="mr-3 accent-indigo-600"
                          />
                          <span className="text-xs text-slate-700">{behavior}</span>
                      </label>
                  ))}
              </div>
              <p className="text-[10px] text-slate-400 text-center">
                  If you checked even a few, you may be at risk of aggressive driving.
              </p>
          </div>

          {/* Distraction Visualizer */}
          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold mb-2 flex items-center"><Smartphone size={18} className="mr-2 text-indigo-400"/> The Cost of Distraction</h4>
              <p className="text-xs text-slate-400 mb-6">
                  Average time to read a text is <span className="font-bold text-white">5 seconds</span>. How far do you travel "blind"?
              </p>
              
              <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2">
                      <span>Speed: {speed} mph</span>
                      <span className="text-indigo-400 font-bold">{distanceTraveled} feet</span>
                  </div>
                  <input 
                      type="range" 
                      min="20" 
                      max="80" 
                      step="5"
                      value={speed} 
                      onChange={(e) => setSpeed(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
              </div>

              <div className="relative h-16 bg-green-700 rounded border border-green-600 overflow-hidden flex items-center px-2 mb-2">
                  {/* Football Field Lines */}
                  <div className="absolute inset-0 flex justify-between px-4">
                      {[...Array(11)].map((_, i) => <div key={i} className="h-full w-px bg-white/30"></div>)}
                  </div>
                  <div className="z-10 flex items-center text-[10px] font-bold text-white/90 uppercase tracking-widest w-full justify-center opacity-50">Football Field (360 ft)</div>
                  
                  {/* Distance Indicator */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-indigo-500/50 border-r-2 border-indigo-400 transition-all duration-300 flex items-center pl-2"
                    style={{ width: `${(distanceTraveled / 360) * 100}%`, maxWidth: '100%' }}
                  >
                      {distanceTraveled > 360 && <span className="text-xs font-bold text-white drop-shadow-md">OVERLAP!</span>}
                  </div>
              </div>
              <p className="text-center text-xs text-slate-300">
                  You traveled <span className="text-white font-bold">{footballFields}</span> football fields without looking!
              </p>
          </div>

          {/* Scanning Trainer */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <h4 className="font-bold text-slate-700 mb-4 w-full text-left">Intersection Scanning Trainer</h4>
              
              <div className="relative w-64 h-40 bg-slate-100 rounded-lg border border-slate-200 mb-6 flex items-center justify-center overflow-hidden">
                  {/* Roads */}
                  <div className="absolute w-full h-12 bg-slate-300 top-1/2 -translate-y-1/2"></div>
                  <div className="absolute h-full w-12 bg-slate-300 left-1/2 -translate-x-1/2"></div>
                  
                  {/* User Car */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-12 bg-indigo-600 rounded shadow-lg z-10 transition-all duration-500" style={{ transform: scanStep === 4 ? 'translateY(-150px)' : 'none' }}></div>

                  {/* Vision Cones */}
                  {scanStep === 1 && <div className="absolute bottom-14 left-1/2 -translate-x-full w-32 h-32 bg-yellow-400/30 rounded-full origin-bottom-right rotate-[-45deg] animate-pulse pointer-events-none"></div>}
                  {scanStep === 2 && <div className="absolute bottom-14 left-1/2 w-32 h-32 bg-yellow-400/30 rounded-full origin-bottom-left rotate-[45deg] animate-pulse pointer-events-none"></div>}
                  {scanStep === 3 && <div className="absolute bottom-14 left-1/2 -translate-x-full w-32 h-32 bg-emerald-400/30 rounded-full origin-bottom-right rotate-[-45deg] animate-pulse pointer-events-none"></div>}
              </div>

              <div className="flex space-x-4">
                  <button 
                    onClick={() => handleScan('left')}
                    disabled={scanStep === 4}
                    className={`px-4 py-2 rounded font-bold text-sm transition-all ${scanStep === 0 || scanStep === 2 ? 'bg-indigo-600 text-white animate-pulse' : 'bg-slate-100 text-slate-400'}`}
                  >
                      {scanStep === 2 ? 'Look Left Again' : 'Look Left'}
                  </button>
                  <button 
                    onClick={() => handleScan('right')}
                    disabled={scanStep === 4}
                    className={`px-4 py-2 rounded font-bold text-sm transition-all ${scanStep === 1 ? 'bg-indigo-600 text-white animate-pulse' : 'bg-slate-100 text-slate-400'}`}
                  >
                      Look Right
                  </button>
              </div>

              {scanStep === 3 && (
                  <button 
                    onClick={() => setScanStep(4)}
                    className="mt-4 px-8 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold shadow-lg animate-bounce"
                  >
                      Safe to Go!
                  </button>
              )}
              
              {scanStep === 4 && (
                  <div className="mt-4 flex items-center text-emerald-600 font-bold text-sm">
                      <CheckCircle className="mr-2" size={16}/> Perfect! Left-Right-Left.
                      <button onClick={() => setScanStep(0)} className="ml-4 text-xs underline text-slate-500">Reset</button>
                  </div>
              )}
          </div>
      </div>
    </div>
  );
};

export default DriverSafety;