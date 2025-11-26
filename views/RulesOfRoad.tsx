import React, { useEffect, useState } from 'react';
import { ClipboardCheck, ArrowRight, CircleDot, Gauge, Bus, Siren, Hand, CornerUpRight, AlertTriangle, ArrowUp, ArrowDown, Check, X, Car } from 'lucide-react';

const RulesOfRoad: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const [handSignal, setHandSignal] = useState<'left' | 'right' | 'stop'>('left');
  const [busScenario, setBusScenario] = useState<'undivided' | 'divided'>('undivided');
  const [moveOverScenario, setMoveOverScenario] = useState<'open' | 'blocked'>('open');
  const [intersectionScenario, setIntersectionScenario] = useState<'uncontrolled' | 'left' | 't-intersect'>('uncontrolled');
  const [hillScenario, setHillScenario] = useState<{slope: 'uphill'|'downhill', curb: boolean}>({slope: 'uphill', curb: true});

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <ClipboardCheck className="mr-3 text-indigo-600" /> Rules of the Road
      </h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Speed Limits */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center">
                <Gauge size={18} className="mr-2 text-indigo-500"/> Standard Speed Limits
            </h3>
            <p className="text-xs text-slate-500 mb-4">Unless otherwise posted, these limits apply:</p>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Narrow Mountain</span>
                    <span className="text-lg font-bold text-slate-900">20 mph</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Business District</span>
                    <span className="text-lg font-bold text-slate-900">25 mph</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Residential</span>
                    <span className="text-lg font-bold text-slate-900">30 mph</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Open Mountain</span>
                    <span className="text-lg font-bold text-slate-900">40 mph</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Urban Highway</span>
                    <span className="text-lg font-bold text-slate-900">55 mph</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Rural Interstate</span>
                    <span className="text-lg font-bold text-slate-900">65-75</span>
                </div>
            </div>
        </div>

        {/* Roundabouts */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center"><CircleDot size={18} className="mr-2 text-indigo-500" /> Roundabouts</h3>
            <div className="bg-slate-50 h-32 rounded-lg relative overflow-hidden mb-4 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-slate-300 relative animate-[spin_10s_linear_infinite]">
                    <div className="absolute -top-1 left-1/2 w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-[10px] font-bold text-emerald-600 bg-white/80 px-2 py-1 rounded">Counter<br/>Clockwise</div>
                </div>
                <div className="absolute bottom-2 right-2 text-[8px] text-red-500 flex items-center"><div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div> Yield on entry</div>
            </div>
            <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start"><ArrowRight size={12} className="mr-2 mt-0.5 text-indigo-500"/> <span className="font-bold mr-1">Slow Down:</span> Approach at 15-20 mph.</li>
                <li className="flex items-start"><ArrowRight size={12} className="mr-2 mt-0.5 text-indigo-500"/> <span className="font-bold mr-1">Yield:</span> Traffic inside the circle has the right of way.</li>
                <li className="flex items-start"><ArrowRight size={12} className="mr-2 mt-0.5 text-indigo-500"/> <span className="font-bold mr-1">Signal:</span> Signal right when exiting.</li>
            </ul>
        </div>

        {/* Interactive Hand Signals */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-700 flex items-center"><Hand size={18} className="mr-2 text-indigo-500"/> Signaling</h3>
                <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setHandSignal('left')} className={`px-2 py-1 text-[10px] font-bold rounded ${handSignal === 'left' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Left</button>
                    <button onClick={() => setHandSignal('right')} className={`px-2 py-1 text-[10px] font-bold rounded ${handSignal === 'right' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Right</button>
                    <button onClick={() => setHandSignal('stop')} className={`px-2 py-1 text-[10px] font-bold rounded ${handSignal === 'stop' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Stop</button>
                </div>
            </div>
            
            <div className="flex items-center justify-center bg-slate-50 rounded-lg p-6 mb-4 h-32 relative overflow-hidden">
                {/* Car Window */}
                <div className="absolute bottom-0 left-0 w-32 h-full bg-slate-200 border-r-4 border-slate-300"></div>
                
                {/* Driver Arm */}
                <div className={`absolute bottom-8 left-20 w-24 h-6 bg-blue-600 origin-left transition-all duration-500 rounded-full flex items-center justify-end pr-1 shadow-lg
                    ${handSignal === 'left' ? 'rotate-0' : ''}
                    ${handSignal === 'right' ? '-rotate-90 translate-y-4' : ''}
                    ${handSignal === 'stop' ? 'rotate-90 translate-y-4' : ''}
                `}>
                    <div className="w-6 h-8 bg-amber-300 rounded-full absolute right-[-4px]"></div> {/* Hand */}
                </div>
            </div>
            <p className="text-center text-xs font-bold text-indigo-900">
                {handSignal === 'left' && "Left Turn"}
                {handSignal === 'right' && "Right Turn"}
                {handSignal === 'stop' && "Stop or Slow Down"}
            </p>
        </div>

        {/* School Bus Law */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-700 flex items-center"><Bus size={18} className="mr-2 text-yellow-500"/> School Bus Law</h3>
                <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setBusScenario('undivided')} className={`px-2 py-1 text-[10px] font-bold rounded ${busScenario === 'undivided' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Undivided</button>
                    <button onClick={() => setBusScenario('divided')} className={`px-2 py-1 text-[10px] font-bold rounded ${busScenario === 'divided' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Divided</button>
                </div>
            </div>

            <div className="relative h-32 bg-slate-600 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                {/* Road markings */}
                <div className="absolute top-1/2 w-full h-0 border-t-2 border-dashed border-yellow-400"></div>
                {busScenario === 'divided' && <div className="absolute top-1/2 w-full h-4 bg-green-800 border-y border-green-900 z-10"></div>} {/* Median */}

                {/* Bus */}
                <div className="absolute top-2 left-10 bg-yellow-400 w-20 h-10 rounded flex items-center justify-center shadow-lg border border-yellow-600 z-20">
                    <span className="text-[8px] font-bold text-yellow-900">SCHOOL</span>
                    {/* Stop Sign */}
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 text-white text-[6px] flex items-center justify-center hexagon">STOP</div>
                    <div className="absolute top-0 -left-1 w-1 h-1 bg-red-500 animate-ping"></div>
                    <div className="absolute bottom-0 -left-1 w-1 h-1 bg-red-500 animate-ping"></div>
                </div>

                {/* Traffic Cars */}
                <div className={`absolute bottom-2 right-10 w-12 h-6 bg-blue-500 rounded transition-all duration-500 flex items-center justify-center ${busScenario === 'undivided' ? 'opacity-100' : 'opacity-50 blur-[1px]'}`}>
                    {busScenario === 'undivided' && <span className="text-[8px] text-white font-bold animate-pulse">STOP</span>}
                </div>
                <div className={`absolute bottom-2 right-32 w-12 h-6 bg-red-500 rounded transition-all duration-500 flex items-center justify-center ${busScenario === 'divided' ? 'translate-x-20' : 'opacity-0'}`}>
                    {busScenario === 'divided' && <span className="text-[8px] text-white font-bold">GO</span>}
                </div>
            </div>
            <p className="text-xs text-slate-600">
                {busScenario === 'undivided' ? "On undivided roads, ALL traffic must stop at least 20ft away." : "On divided highways with a median, oncoming traffic does NOT stop."}
            </p>
        </div>

        {/* Move Over Law */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-700 flex items-center"><Siren size={18} className="mr-2 text-red-500"/> Move Over Law</h3>
                <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setMoveOverScenario('open')} className={`px-2 py-1 text-[10px] font-bold rounded ${moveOverScenario === 'open' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Left Open</button>
                    <button onClick={() => setMoveOverScenario('blocked')} className={`px-2 py-1 text-[10px] font-bold rounded ${moveOverScenario === 'blocked' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Left Blocked</button>
                </div>
            </div>

            <div className="relative h-32 bg-slate-700 rounded-lg mb-4 overflow-hidden">
                {/* Emergency Vehicle */}
                <div className="absolute bottom-2 right-4 w-12 h-6 bg-blue-600 rounded border border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.8)] animate-pulse z-20"></div>
                
                {/* Lanes */}
                <div className="absolute top-1/2 w-full h-0 border-t border-dashed border-white/30"></div>

                {/* Blocked Car */}
                {moveOverScenario === 'blocked' && <div className="absolute top-2 right-20 w-12 h-6 bg-slate-500 rounded z-10"></div>}

                {/* User Car */}
                <div className={`absolute w-12 h-6 bg-indigo-500 rounded shadow-lg transition-all duration-1000 ease-in-out flex items-center justify-center text-[6px] text-white
                    ${moveOverScenario === 'open' ? 'top-4 left-32 -rotate-6' : 'bottom-4 left-20'}
                `}>
                    {moveOverScenario === 'open' ? 'MOVE OVER' : 'SLOW DOWN'}
                </div>
            </div>
            <p className="text-xs text-slate-600">
                {moveOverScenario === 'open' ? "If safe, you MUST change lanes to leave a gap." : "If you cannot change lanes, you MUST slow down significantly (at least 20mph below limit)."}
            </p>
        </div>

        {/* Intersection Right of Way */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-700 flex items-center"><CornerUpRight size={18} className="mr-2 text-indigo-500"/> Right of Way</h3>
                <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setIntersectionScenario('uncontrolled')} className={`px-2 py-1 text-[10px] font-bold rounded ${intersectionScenario === 'uncontrolled' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Uncontrolled</button>
                    <button onClick={() => setIntersectionScenario('left')} className={`px-2 py-1 text-[10px] font-bold rounded ${intersectionScenario === 'left' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>Left Turn</button>
                    <button onClick={() => setIntersectionScenario('t-intersect')} className={`px-2 py-1 text-[10px] font-bold rounded ${intersectionScenario === 't-intersect' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}`}>T-Shape</button>
                </div>
            </div>

            <div className="h-32 bg-slate-100 rounded-lg relative flex items-center justify-center mb-4 overflow-hidden">
                {/* Roads */}
                <div className="absolute w-full h-10 bg-slate-300"></div>
                <div className={`absolute h-full w-10 bg-slate-300 ${intersectionScenario === 't-intersect' ? 'bottom-0 h-1/2' : ''}`}></div>

                {/* Cars */}
                {intersectionScenario === 'uncontrolled' && (
                    <>
                        <Car size={20} className="absolute bottom-2 text-indigo-600 z-10" />
                        <Car size={20} className="absolute left-2 text-slate-500 rotate-90" />
                        <div className="absolute top-2 right-2 text-[10px] bg-white p-1 rounded border">Left Yields to Right</div>
                    </>
                )}
                {intersectionScenario === 'left' && (
                    <>
                        <Car size={20} className="absolute bottom-2 text-indigo-600 z-10 -rotate-45" />
                        <Car size={20} className="absolute top-2 text-slate-500 rotate-180 transition-all duration-1000 translate-y-10" />
                        <div className="absolute left-2 top-2 text-[10px] bg-white p-1 rounded border">Yield to Oncoming</div>
                    </>
                )}
                {intersectionScenario === 't-intersect' && (
                    <>
                        <Car size={20} className="absolute bottom-2 text-indigo-600 z-10" />
                        <Car size={20} className="absolute right-2 text-emerald-600 -rotate-90 animate-pulse" />
                        <div className="absolute left-2 top-2 text-[10px] bg-white p-1 rounded border">Ending Road Yields</div>
                    </>
                )}
            </div>
            <p className="text-xs text-slate-600">
                {intersectionScenario === 'uncontrolled' && "At uncontrolled intersections (no signs), the vehicle on the left must yield to the vehicle on the right."}
                {intersectionScenario === 'left' && "Left turning vehicles must always yield to oncoming traffic unless they have a green arrow."}
                {intersectionScenario === 't-intersect' && "Drivers on the road that ends (T-intersection) must yield to traffic on the through street."}
            </p>
        </div>

        {/* Hill Parking Rules */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center"><AlertTriangle size={18} className="mr-2 text-orange-500"/> Hill Parking Reference</h3>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex flex-col space-y-2 w-full md:w-auto">
                    <div className="flex space-x-2">
                        <button onClick={() => setHillScenario({...hillScenario, slope: 'uphill'})} className={`flex-1 px-3 py-2 text-xs font-bold rounded border ${hillScenario.slope === 'uphill' ? 'bg-indigo-600 text-white' : 'bg-slate-50'}`}>Uphill</button>
                        <button onClick={() => setHillScenario({...hillScenario, slope: 'downhill'})} className={`flex-1 px-3 py-2 text-xs font-bold rounded border ${hillScenario.slope === 'downhill' ? 'bg-indigo-600 text-white' : 'bg-slate-50'}`}>Downhill</button>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => setHillScenario({...hillScenario, curb: true})} className={`flex-1 px-3 py-2 text-xs font-bold rounded border ${hillScenario.curb ? 'bg-emerald-600 text-white' : 'bg-slate-50'}`}>With Curb</button>
                        <button onClick={() => setHillScenario({...hillScenario, curb: false})} className={`flex-1 px-3 py-2 text-xs font-bold rounded border ${!hillScenario.curb ? 'bg-emerald-600 text-white' : 'bg-slate-50'}`}>No Curb</button>
                    </div>
                </div>

                <div className="flex-1 bg-slate-100 p-4 rounded-lg flex items-center justify-center">
                    <div className="relative w-32 h-48 bg-slate-300 rounded-lg border-2 border-slate-400 overflow-hidden shadow-inner">
                        {/* Curb */}
                        {hillScenario.curb ? (
                            <div className="absolute right-0 h-full w-4 bg-stone-500 border-l border-stone-600"></div>
                        ) : (
                            <div className="absolute right-2 h-full w-1 border-r-2 border-dashed border-white/50"></div>
                        )}

                        {/* Car */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-20 bg-blue-600 rounded flex flex-col items-center justify-center text-[8px] text-white font-bold shadow-lg">
                            <div className="absolute -top-3 left-0 w-3 h-6 bg-black rounded transition-transform duration-500" 
                                style={{ 
                                    transform: hillScenario.slope === 'uphill' && hillScenario.curb ? 'rotate(-25deg)' : 'rotate(25deg)'
                                }}
                            ></div>
                            <div className="absolute -top-3 right-0 w-3 h-6 bg-black rounded transition-transform duration-500"
                                style={{ 
                                    transform: hillScenario.slope === 'uphill' && hillScenario.curb ? 'rotate(-25deg)' : 'rotate(25deg)'
                                }}
                            ></div>
                            {hillScenario.slope === 'uphill' ? 'UP' : 'DOWN'}
                        </div>
                    </div>
                    <div className="ml-6">
                        <h4 className="font-bold text-lg text-slate-800 mb-1">
                            {hillScenario.slope === 'uphill' && hillScenario.curb ? "Turn Wheels AWAY" : "Turn Wheels RIGHT"}
                        </h4>
                        <p className="text-sm text-slate-600 max-w-xs">
                            {hillScenario.slope === 'uphill' && hillScenario.curb 
                                ? "Turn wheels away from curb (Left). If brakes fail, the back of wheel hits curb." 
                                : "Turn wheels to the right (Toward shoulder/curb). If brakes fail, car rolls off road, not into traffic."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RulesOfRoad;