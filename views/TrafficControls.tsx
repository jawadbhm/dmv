import React, { useEffect, useState } from 'react';
import { Split, ArrowUpFromDot, Ban, TrafficCone, ArrowRight, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const TrafficControls: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const [lineType, setLineType] = useState<'broken' | 'solid' | 'double'>('broken');
  const [signalType, setSignalType] = useState<'red' | 'yellow' | 'green' | 'flashRed' | 'flashYellow' | 'arrowGreen' | 'arrowFlashYellow'>('red');
  const [activeTab, setActiveTab] = useState<'signals' | 'markings' | 'lanes'>('signals');

  const getSignalInfo = () => {
    switch (signalType) {
        case 'red': return { title: "Steady Red", desc: "Stop completely. You may turn right after stopping unless prohibited. You may turn left onto a one-way street from a one-way street." };
        case 'yellow': return { title: "Steady Yellow", desc: "The light is about to turn red. Stop if you can do so safely. Do not enter the intersection." };
        case 'green': return { title: "Steady Green", desc: "Go if the way is clear. You must yield to pedestrians and vehicles still in the intersection." };
        case 'flashRed': return { title: "Flashing Red", desc: "Treat as a STOP sign. Stop completely, yield to cross traffic/pedestrians, then proceed." };
        case 'flashYellow': return { title: "Flashing Yellow", desc: "Proceed with caution. Slow down and be alert for hazards." };
        case 'arrowGreen': return { title: "Green Arrow", desc: "Protected Turn. You have the right-of-way. Oncoming traffic has a red light." };
        case 'arrowFlashYellow': return { title: "Flashing Yellow Arrow", desc: "Unprotected Turn. You may turn, but must YIELD to oncoming traffic and pedestrians first." };
    }
  };

  const laneSignals = [
      { icon: <ArrowUpFromDot className="text-emerald-500" size={24}/>, label: "Green Arrow", desc: "You may drive in this lane." },
      { icon: <XCircle className="text-red-500" size={24}/>, label: "Red 'X'", desc: "Do NOT drive in this lane." },
      { icon: <XCircle className="text-yellow-500" size={24}/>, label: "Steady Yellow 'X'", desc: "Move out of this lane safely. It is about to close." },
      { icon: <ArrowRight className="text-white" size={24}/>, label: "Flashing Yellow 'X'", desc: "Lane is for left turns only (two-way left turn lane)." },
  ];

  const signColors = [
      { color: 'bg-red-600', name: 'Red', meaning: 'Stop / Prohibited' },
      { color: 'bg-green-600', name: 'Green', meaning: 'Direction / Guidance' },
      { color: 'bg-yellow-400 text-black', name: 'Yellow', meaning: 'General Warning' },
      { color: 'bg-orange-500', name: 'Orange', meaning: 'Construction / Work Zone' },
      { color: 'bg-blue-600', name: 'Blue', meaning: 'Motorist Services (Gas/Food)' },
      { color: 'bg-brown-600', name: 'Brown', meaning: 'Recreation / History' },
      { color: 'bg-white border border-black text-black', name: 'White', meaning: 'Regulatory / Law' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center mb-4 md:mb-0">
            <Split className="mr-3 text-indigo-600" /> Traffic Controls
        </h2>
        <div className="flex bg-slate-100 p-1 rounded-lg">
            <button onClick={() => setActiveTab('signals')} className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'signals' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>Signals & Signs</button>
            <button onClick={() => setActiveTab('markings')} className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'markings' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>Pavement Markings</button>
            <button onClick={() => setActiveTab('lanes')} className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'lanes' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>Lane Controls</button>
        </div>
      </div>

      {activeTab === 'signals' && (
        <div className="space-y-6">
            {/* Interactive Traffic Light */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-700 mb-6 flex items-center">Traffic Signal Logic</h3>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Visual Light */}
                    <div className="bg-slate-900 p-4 rounded-3xl border-4 border-slate-800 shadow-2xl flex flex-col space-y-4 w-24">
                        <div className={`w-16 h-16 rounded-full border-4 border-slate-700 transition-all duration-300 flex items-center justify-center ${signalType === 'red' || signalType === 'flashRed' ? 'bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)]' : 'bg-red-950'}`}>
                            {signalType === 'flashRed' && <div className="animate-ping w-full h-full rounded-full bg-red-500 opacity-20"></div>}
                        </div>
                        <div className={`w-16 h-16 rounded-full border-4 border-slate-700 transition-all duration-300 flex items-center justify-center ${signalType === 'yellow' || signalType === 'flashYellow' || signalType === 'arrowFlashYellow' ? 'bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)]' : 'bg-yellow-950'}`}>
                            {signalType === 'arrowFlashYellow' && <ArrowRight className="text-yellow-900 animate-pulse -rotate-180" size={32} strokeWidth={4} />}
                            {(signalType === 'flashYellow') && <div className="animate-ping w-full h-full rounded-full bg-yellow-400 opacity-20"></div>}
                        </div>
                        <div className={`w-16 h-16 rounded-full border-4 border-slate-700 transition-all duration-300 flex items-center justify-center ${signalType === 'green' || signalType === 'arrowGreen' ? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.6)]' : 'bg-emerald-950'}`}>
                            {signalType === 'arrowGreen' && <ArrowRight className="text-emerald-900 -rotate-180" size={32} strokeWidth={4} />}
                        </div>
                    </div>

                    {/* Controls & Desc */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                            <button onClick={() => setSignalType('red')} className={`p-2 text-xs font-bold rounded border ${signalType === 'red' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-slate-50 hover:bg-slate-100'}`}>Steady Red</button>
                            <button onClick={() => setSignalType('yellow')} className={`p-2 text-xs font-bold rounded border ${signalType === 'yellow' ? 'bg-yellow-100 border-yellow-500 text-yellow-700' : 'bg-slate-50 hover:bg-slate-100'}`}>Steady Yellow</button>
                            <button onClick={() => setSignalType('green')} className={`p-2 text-xs font-bold rounded border ${signalType === 'green' ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-slate-50 hover:bg-slate-100'}`}>Steady Green</button>
                            <button onClick={() => setSignalType('arrowGreen')} className={`p-2 text-xs font-bold rounded border ${signalType === 'arrowGreen' ? 'bg-emerald-100 border-emerald-500 text-emerald-700' : 'bg-slate-50 hover:bg-slate-100'}`}>Green Arrow</button>
                            <button onClick={() => setSignalType('flashRed')} className={`p-2 text-xs font-bold rounded border ${signalType === 'flashRed' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-slate-50 hover:bg-slate-100'}`}>Flashing Red</button>
                            <button onClick={() => setSignalType('flashYellow')} className={`p-2 text-xs font-bold rounded border ${signalType === 'flashYellow' ? 'bg-yellow-100 border-yellow-500 text-yellow-700' : 'bg-slate-50 hover:bg-slate-100'}`}>Flashing Yellow</button>
                            <button onClick={() => setSignalType('arrowFlashYellow')} className={`col-span-2 p-2 text-xs font-bold rounded border ${signalType === 'arrowFlashYellow' ? 'bg-yellow-100 border-yellow-500 text-yellow-700' : 'bg-slate-50 hover:bg-slate-100'}`}>Flashing Yellow Arrow</button>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-500 animate-fade-in">
                            <h4 className="text-lg font-bold text-slate-800 mb-1">{getSignalInfo().title}</h4>
                            <p className="text-sm text-slate-600">{getSignalInfo().desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sign Attributes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-700 mb-4">Sign Colors</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {signColors.map(s => (
                            <div key={s.name} className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors group">
                                <div className={`w-8 h-8 rounded-full shadow-sm mr-3 border border-slate-200 ${s.color}`}></div>
                                <div className="text-xs">
                                    <span className="block font-bold text-slate-800">{s.name}</span>
                                    <span className="text-slate-500 group-hover:text-indigo-600 transition-colors">{s.meaning}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-700 mb-4">Sign Shapes</h3>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-[8px] text-white font-bold" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>STOP</div>
                            <div className="ml-3 text-xs"><span className="font-bold block">Octagon</span>Stop</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-100 border-2 border-red-600 flex items-center justify-center text-[8px] text-red-600 font-bold" style={{clipPath: 'polygon(50% 100%, 0 0, 100% 0)'}}>YIELD</div>
                            <div className="ml-3 text-xs"><span className="font-bold block">Inverted Triangle</span>Yield</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center text-[8px] font-bold rotate-45 scale-75">WARN</div>
                            <div className="ml-3 text-xs"><span className="font-bold block">Diamond</span>Warning / Hazard</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center text-[8px] font-bold" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}>SCH</div>
                            <div className="ml-3 text-xs"><span className="font-bold block">Pentagon</span>School Zone</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center text-[8px] font-bold" style={{clipPath: 'polygon(100% 50%, 0 0, 0 100%)'}}>PASS</div>
                            <div className="ml-3 text-xs"><span className="font-bold block">Pennant</span>No Passing Zone</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-white border border-black flex items-center justify-center text-[8px] font-bold rounded-full">R/R</div>
                            <div className="ml-3 text-xs"><span className="font-bold block">Circle</span>Railroad Crossing Ahead</div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-white border border-black flex items-center justify-center text-[8px] font-bold text-center leading-none">X<br/>buck</div>
                            <div className="ml-3 text-xs"><span className="font-bold block">Crossbuck (X)</span>Railroad Tracks (Yield)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {activeTab === 'markings' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4">Yellow Line Explorer</h3>
            <div className="bg-slate-500 h-40 rounded-lg relative overflow-hidden flex items-center justify-center mb-6 border-x-[16px] border-emerald-700">
                {/* Road Surface */}
                <div className="absolute inset-0 flex flex-col justify-between py-2">
                    {/* White Edge Lines */}
                    <div className="w-full h-2 bg-white/90"></div>
                    <div className="w-full h-2 bg-white/90"></div>
                </div>

                {/* Cars */}
                <div className="absolute top-6 left-10 w-12 h-6 bg-red-500 rounded shadow-lg flex items-center justify-center text-[8px] text-white">You</div>
                <div className="absolute bottom-6 right-10 w-12 h-6 bg-blue-500 rounded shadow-lg flex items-center justify-center text-[8px] text-white rotate-180">Traffic</div>

                {/* Center Lines Visual */}
                <div className="w-full flex flex-col justify-center items-center space-y-1">
                    {lineType === 'broken' && <div className="w-full h-2 border-b-4 border-yellow-400 border-dashed"></div>}
                    {lineType === 'solid' && <div className="w-full h-1 bg-yellow-400"></div>}
                    {lineType === 'double' && (
                        <>
                            <div className="w-full h-1 bg-yellow-400"></div>
                            <div className="w-full h-1 bg-yellow-400"></div>
                        </>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
                <button onClick={() => setLineType('broken')} className={`p-2 text-xs rounded border text-center font-bold ${lineType === 'broken' ? 'bg-indigo-600 text-white' : 'bg-slate-50'}`}>Broken</button>
                <button onClick={() => setLineType('solid')} className={`p-2 text-xs rounded border text-center font-bold ${lineType === 'solid' ? 'bg-indigo-600 text-white' : 'bg-slate-50'}`}>Solid</button>
                <button onClick={() => setLineType('double')} className={`p-2 text-xs rounded border text-center font-bold ${lineType === 'double' ? 'bg-indigo-600 text-white' : 'bg-slate-50'}`}>Double Solid</button>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg text-sm border border-slate-100">
                <span className="font-bold block text-slate-800 mb-1">
                    {lineType === 'broken' && "Passing Permitted"}
                    {lineType === 'solid' && "No Passing (Caution)"}
                    {lineType === 'double' && "No Passing Allowed"}
                </span>
                <p className="text-slate-600 text-xs">
                    {lineType === 'broken' && "You may pass if the way is clear. Separates traffic moving in opposite directions."}
                    {lineType === 'solid' && "Do not pass. Used in areas where visibility is reduced or maneuver is unsafe."}
                    {lineType === 'double' && "Neither side may pass. You may cross only to turn left into a driveway or alley."}
                </p>
            </div>
            
            <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded flex items-center">
                    <div className="w-16 h-8 bg-slate-400 mr-3 relative overflow-hidden">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 border-b-2 border-slate-400 border-dashed"></div>
                    </div>
                    <div>
                        <div className="font-bold text-xs text-slate-800">Broken White Line</div>
                        <div className="text-[10px] text-slate-500">Separates lanes moving in SAME direction. Passing allowed.</div>
                    </div>
                </div>
                <div className="bg-slate-50 p-3 rounded flex items-center">
                    <div className="w-16 h-8 bg-slate-400 mr-3 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2"></div>
                    </div>
                    <div>
                        <div className="font-bold text-xs text-slate-800">Solid White Line</div>
                        <div className="text-[10px] text-slate-500">Stay in lane. Marks shoulder or discourages lane changes.</div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {activeTab === 'lanes' && (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-700 mb-4">Overhead Lane Use Signals</h3>
                <p className="text-xs text-slate-500 mb-6">Often found on reversible lanes in cities or tunnels.</p>
                
                <div className="flex justify-center space-x-2 sm:space-x-8 mb-8 bg-slate-800 p-6 rounded-lg">
                    {laneSignals.map((signal, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center w-20">
                            <div className="w-12 h-12 bg-black rounded border border-slate-600 flex items-center justify-center mb-2 shadow-lg">
                                {signal.icon}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {laneSignals.map((signal, idx) => (
                        <div key={idx} className="flex items-start p-3 rounded bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all shadow-sm">
                            <div className="w-8 h-8 bg-black rounded flex items-center justify-center shrink-0 mr-3">
                                {React.cloneElement(signal.icon as React.ReactElement<any>, { size: 16 })}
                            </div>
                            <div>
                                <div className="font-bold text-sm text-slate-800">{signal.label}</div>
                                <div className="text-xs text-slate-600">{signal.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-700 mb-4">Special Lane Controls</h3>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="w-8 h-8 bg-slate-800 text-white rounded flex items-center justify-center shrink-0 mr-3 font-bold text-xs">HOV</div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-800">High Occupancy Vehicle</h4>
                            <p className="text-xs text-slate-600 mt-1">Marked by a white diamond. Reserved for carpools, motorcycles, and buses. Signs indicate required number of people (e.g. 2+, 3+).</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-8 h-8 bg-white border-2 border-slate-800 text-slate-800 rounded flex items-center justify-center shrink-0 mr-3">
                            <ArrowUpFromDot size={16} />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-800">Shared Center Turn Lane</h4>
                            <p className="text-xs text-slate-600 mt-1">For left turns only. Do not travel in this lane for more than 200 feet. Do not use for passing.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-8 h-8 bg-white border-2 border-slate-800 text-slate-800 rounded flex items-center justify-center shrink-0 mr-3">
                            <Ban size={16} className="text-red-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-800">Restricted Lanes</h4>
                            <p className="text-xs text-slate-600 mt-1">Marked by signs or pavement markings (like white diamonds). Includes bike lanes and transit lanes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default TrafficControls;