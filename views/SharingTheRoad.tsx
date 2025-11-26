import React, { useEffect, useState } from 'react';
import { Users, Truck, Bike, TrainFront, Info, ArrowRight, AlertTriangle } from 'lucide-react';

const SharingTheRoad: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const [activeZone, setActiveZone] = useState<'front' | 'rear' | 'left' | 'right' | null>(null);
  const [cyclistSignal, setCyclistSignal] = useState<'left' | 'right' | 'right-alt' | 'stop'>('left');
  const [gapMode, setGapMode] = useState<'car' | 'motorcycle'>('motorcycle');

  const zoneInfo = {
      front: { title: "Front No-Zone", desc: "Extends 20 feet ahead. Trucks take longer to stop. Do not cut in front!", color: "bg-red-500" },
      rear: { title: "Rear No-Zone", desc: "Extends 200 feet behind. If you can't see the driver's mirrors, they can't see you.", color: "bg-orange-500" },
      left: { title: "Left Side Zone", desc: "From cab to trailer middle. Passing side, but pass quickly. Do not linger.", color: "bg-yellow-500" },
      right: { title: "Right Side Zone", desc: "Huge blind spot extending 3 lanes. NEVER pass a truck on the right.", color: "bg-red-600" }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <Users className="mr-3 text-indigo-600" /> Sharing the Road
      </h2>

      {/* Interactive Truck No-Zones */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-700 flex items-center"><Truck size={20} className="mr-2 text-orange-500"/> Truck "No-Zones" Explorer</h3>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold">Click zones to explore</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Visual */}
              <div className="relative w-64 h-80 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(0,0,0,0.05)_25px),linear-gradient(90deg,transparent_24px,rgba(0,0,0,0.05)_25px)] bg-[size:25px_25px]"></div>
                  
                  {/* Truck Body */}
                  <div className="relative w-16 h-48 bg-slate-700 rounded shadow-xl z-10 flex flex-col items-center">
                      <div className="w-full h-12 bg-slate-800 rounded-t border-b border-slate-600"></div> {/* Cab */}
                      <div className="w-full flex-1 bg-slate-300 rounded-b border border-slate-400 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-slate-500 -rotate-90">TRAILER</span>
                      </div>
                  </div>

                  {/* Zones */}
                  {/* Front */}
                  <button 
                    onClick={() => setActiveZone('front')}
                    className={`absolute top-8 w-16 h-16 rounded-t-full opacity-60 transition-all hover:opacity-80 ${activeZone === 'front' ? 'bg-red-500 opacity-90 animate-pulse' : 'bg-red-300'}`}
                  ></button>
                  
                  {/* Rear */}
                  <button 
                    onClick={() => setActiveZone('rear')}
                    className={`absolute bottom-2 w-24 h-24 rounded-b-full opacity-60 transition-all hover:opacity-80 ${activeZone === 'rear' ? 'bg-orange-500 opacity-90 animate-pulse' : 'bg-orange-300'}`}
                  ></button>

                  {/* Left */}
                  <button 
                    onClick={() => setActiveZone('left')}
                    className={`absolute left-4 top-20 w-16 h-40 -skew-y-12 opacity-50 transition-all hover:opacity-70 ${activeZone === 'left' ? 'bg-yellow-500 opacity-80 animate-pulse' : 'bg-yellow-300'}`}
                  ></button>

                  {/* Right */}
                  <button 
                    onClick={() => setActiveZone('right')}
                    className={`absolute right-2 top-20 w-20 h-48 skew-y-12 opacity-50 transition-all hover:opacity-70 ${activeZone === 'right' ? 'bg-red-600 opacity-80 animate-pulse' : 'bg-red-300'}`}
                  ></button>
              </div>

              {/* Info Panel */}
              <div className="flex-1 w-full">
                  <div className="h-32 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4 flex flex-col justify-center">
                      {activeZone ? (
                          <div className="animate-fade-in">
                              <h4 className={`font-bold text-sm mb-1 ${activeZone === 'right' || activeZone === 'front' ? 'text-red-600' : 'text-orange-600'}`}>
                                  {zoneInfo[activeZone].title}
                              </h4>
                              <p className="text-sm text-slate-700">{zoneInfo[activeZone].desc}</p>
                          </div>
                      ) : (
                          <p className="text-slate-400 text-sm text-center italic">Select a colored zone to learn about truck blind spots.</p>
                      )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 p-3 rounded border border-blue-100 text-xs">
                          <span className="font-bold text-blue-800 block mb-1">Wide Turns</span>
                          Trucks often swing wide LEFT to make a RIGHT turn. Do not squeeze between truck and curb.
                      </div>
                      <div className="bg-orange-50 p-3 rounded border border-orange-100 text-xs">
                          <span className="font-bold text-orange-800 block mb-1">Runaway Ramps</span>
                          Gravel beds on mountains for trucks with failed brakes. NEVER park on these.
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
          {/* Bicycle Safety */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center"><Bike size={20} className="mr-2 text-emerald-500"/> Cyclist Signals & Space</h3>
              
              {/* Hand Signal Visualizer */}
              <div className="bg-slate-100 rounded-lg p-4 mb-4 flex flex-col items-center">
                  <div className="flex space-x-2 mb-4">
                      <button onClick={() => setCyclistSignal('left')} className={`px-2 py-1 text-[10px] rounded border ${cyclistSignal === 'left' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Left</button>
                      <button onClick={() => setCyclistSignal('right')} className={`px-2 py-1 text-[10px] rounded border ${cyclistSignal === 'right' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Right (Arm)</button>
                      <button onClick={() => setCyclistSignal('right-alt')} className={`px-2 py-1 text-[10px] rounded border ${cyclistSignal === 'right-alt' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Right (Alt)</button>
                      <button onClick={() => setCyclistSignal('stop')} className={`px-2 py-1 text-[10px] rounded border ${cyclistSignal === 'stop' ? 'bg-emerald-600 text-white' : 'bg-white'}`}>Stop</button>
                  </div>

                  <div className="relative w-32 h-32">
                      {/* Cyclist Body */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-emerald-700 rounded-full z-10"></div>
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-900 rounded-full z-20"></div>
                      
                      {/* Arms */}
                      {/* Left Arm */}
                      <div className={`absolute top-12 left-1/2 w-12 h-3 bg-emerald-600 origin-left transition-all duration-500 z-0 rounded-full
                          ${cyclistSignal === 'left' ? '-translate-x-12' : 
                            cyclistSignal === 'right' ? '-translate-x-12 -rotate-90 -translate-y-10' : 
                            cyclistSignal === 'stop' ? '-translate-x-12 rotate-90 translate-y-10' : 
                            'translate-x-0 rotate-90' // right-alt, left arm normal? No, right-alt uses right arm. Left arm on bars.
                           }
                      `}></div>
                      
                      {/* Right Arm (Only for Right Alt) */}
                      {cyclistSignal === 'right-alt' && (
                          <div className="absolute top-12 right-1/2 w-12 h-3 bg-emerald-600 origin-right translate-x-12 rounded-full"></div>
                      )}
                  </div>
                  <p className="text-xs font-bold text-emerald-800 mt-2 uppercase tracking-wider">
                      {cyclistSignal === 'left' && "Left Turn"}
                      {cyclistSignal === 'right' && "Right Turn (Traditional)"}
                      {cyclistSignal === 'right-alt' && "Right Turn (New/Alt)"}
                      {cyclistSignal === 'stop' && "Slowing / Stopping"}
                  </p>
              </div>

              <div className="bg-emerald-50 p-3 rounded border border-emerald-100 text-xs">
                  <div className="flex items-center font-bold text-emerald-800 mb-1">
                      <Info size={14} className="mr-1"/> 3-Foot Passing Rule
                  </div>
                  <p className="text-slate-600">
                      You must give at least <span className="font-bold">3 feet</span> of space when passing a bicyclist. You may cross a double yellow line to pass if traffic is clear.
                  </p>
              </div>
          </div>

          {/* Motorcycle & Rail */}
          <div className="space-y-6">
              {/* Motorcycle */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-700 mb-4">Motorcycle Safety Gap</h3>
                  
                  <div className="flex items-center justify-center space-x-4 mb-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <div className="flex flex-col items-center">
                          <button onClick={() => setGapMode('car')} className={`w-full text-[10px] font-bold px-2 py-1 rounded mb-2 ${gapMode === 'car' ? 'bg-slate-800 text-white' : 'bg-white border'}`}>Car Follow</button>
                          <div className="font-bold text-slate-400 text-2xl">3s</div>
                      </div>
                      <div className="h-12 w-px bg-slate-300"></div>
                      <div className="flex flex-col items-center">
                          <button onClick={() => setGapMode('motorcycle')} className={`w-full text-[10px] font-bold px-2 py-1 rounded mb-2 ${gapMode === 'motorcycle' ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>Bike Follow</button>
                          <div className="font-bold text-indigo-600 text-2xl">4s</div>
                      </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">
                      Motorcycles can stop quicker than cars but are vulnerable to road debris. Increase following distance to <span className="font-bold">4 seconds</span>.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                      <li>Look Twice, Save a Life.</li>
                      <li>Motorcycles are entitled to full lane width.</li>
                      <li>Don't share a lane with a motorcycle.</li>
                  </ul>
              </div>

              {/* Light Rail */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-700 mb-3 flex items-center"><TrainFront size={18} className="mr-2 text-blue-500"/> Light Rail Rules</h3>
                  <div className="space-y-2">
                      <div className="flex items-start p-2 bg-blue-50 rounded border border-blue-100">
                          <AlertTriangle size={14} className="text-blue-600 mr-2 shrink-0 mt-0.5"/>
                          <div className="text-xs text-blue-900">
                              <span className="font-bold block">Any Track, Any Time</span>
                              Trains can come from either direction on any track. Never assume.
                          </div>
                      </div>
                      <div className="flex items-start p-2 bg-slate-50 rounded border border-slate-100">
                          <ArrowRight size={14} className="text-slate-600 mr-2 shrink-0 mt-0.5"/>
                          <div className="text-xs text-slate-700">
                              Never drive around lowered gates.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SharingTheRoad;