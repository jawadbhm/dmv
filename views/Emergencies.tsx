import React, { useEffect, useState } from 'react';
import { 
  Siren, Wrench, AlertOctagon, Info, ArrowRight, RotateCcw, AlertTriangle, 
  CheckCircle, XCircle, PawPrint, TrainFront, Thermometer, 
  Flame, Droplets, Snowflake, CloudRain, EyeOff, Navigation, Search 
} from 'lucide-react';

const Emergencies: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const [activeLab, setActiveLab] = useState<'skid' | 'brake' | 'blowout'>('skid');

  // Skid Trainer State
  const [skidDir, setSkidDir] = useState<'left' | 'right'>('left'); // Rear slides this way
  const [skidStatus, setSkidStatus] = useState<'active' | 'success' | 'fail'>('active');

  const handleSteer = (steerDir: 'left' | 'right') => {
      // If rear slides LEFT, car points RIGHT. We want to go straight, so we steer LEFT.
      // Logic: Steer in same direction as rear slide (or "into the skid").
      if (steerDir === skidDir) {
          setSkidStatus('success');
      } else {
          setSkidStatus('fail');
      }
  };

  const resetSkid = () => {
      setSkidDir(Math.random() > 0.5 ? 'left' : 'right');
      setSkidStatus('active');
  };

  // Brake Failure State
  const [brakeStep, setBrakeStep] = useState(0);
  const [brakeFeedback, setBrakeFeedback] = useState('');
  
  const brakeActions = [
      { id: 'pump', label: 'Pump Brakes', correctStep: 0 },
      { id: 'shift', label: 'Shift to Lower Gear', correctStep: 1 },
      { id: 'park', label: 'Apply Parking Brake', correctStep: 2 },
      { id: 'off', label: 'Turn Off Engine', correctStep: -1 }, // Wrong
      { id: 'swerve', label: 'Swerve Hard', correctStep: -1 } // Wrong
  ];

  const handleBrakeAction = (action: any) => {
      if (action.correctStep === brakeStep) {
          setBrakeStep(brakeStep + 1);
          setBrakeFeedback('Correct! Next step...');
      } else if (action.correctStep === -1) {
          setBrakeFeedback('NO! That could cause a crash or lock steering.');
      } else {
          setBrakeFeedback('Order matters! Try a different first step.');
      }
  };

  // Blowout State
  const [blowoutChoice, setBlowoutChoice] = useState<string | null>(null);

  // Quick Reference Guide State
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const scenarios = [
      // Control & Maneuvers
      { id: 'skid_rear', category: 'Control', title: 'Skid Recovery (Rear)', desc: 'Rear wheels slide sideways. 1) Release gas. 2) Don\'t brake. 3) Steer in direction you want to go.', icon: AlertOctagon, color: 'text-red-500' },
      { id: 'offroad', category: 'Control', title: 'Off-Road Recovery', desc: 'Wheels drop off pavement. 1) Don\'t jerk wheel. 2) Ease off gas. 3) Steer back gently when slow.', icon: AlertOctagon, color: 'text-red-400' },
      
      // Mechanical Failures
      { id: 'brake', category: 'Mechanical', title: 'Brake Failure', desc: 'Pedal sinks. 1) Pump brakes rapidly. 2) Use parking brake slowly. 3) Shift to lower gear.', icon: Wrench, color: 'text-orange-500' },
      { id: 'tire_front', category: 'Mechanical', title: 'Tire Blowout', desc: 'Pull to side. 1) Grip wheel hard. 2) Don\'t brake. 3) Ease off gas and coast.', icon: Wrench, color: 'text-orange-500' },
      { id: 'power', category: 'Mechanical', title: 'Power Steering Fail', desc: 'Engine dies. Steering is heavy. 1) Grip wheel with both hands. 2) Push brake hard (power assist lost).', icon: Wrench, color: 'text-red-400' },
      { id: 'hood', category: 'Mechanical', title: 'Hood Fly-Up', desc: 'View blocked. 1) Look through hinge gap or out side window. 2) Brake smooth. 3) Pull off.', icon: AlertOctagon, color: 'text-red-400' },
      { id: 'accel', category: 'Mechanical', title: 'Stuck Accelerator', desc: 'Pedal jammed. 1) Shift to Neutral. 2) Brake firm. 3) Find escape path. 4) Turn off engine once stopped.', icon: AlertOctagon, color: 'text-red-500' },
      { id: 'overheat', category: 'Mechanical', title: 'Engine Overheating', desc: 'Gauge high/Steam. 1) Turn off AC. 2) Turn ON Heat (fans engine). 3) Pull over. 4) Never open hot radiator.', icon: Thermometer, color: 'text-red-500' },
      { id: 'wet_brake', category: 'Mechanical', title: 'Wet Brakes', desc: 'After deep water. 1) Test brakes lightly. 2) Drive slowly while pressing brake lightly to dry pads.', icon: Droplets, color: 'text-blue-500' },
      { id: 'fire', category: 'Mechanical', title: 'Engine Fire', desc: 'Smoke/Flames. 1) Stop quickly. 2) Off engine. 3) GET OUT. 4) Do NOT open hood (oxygen feeds fire).', icon: Flame, color: 'text-orange-600' },
      { id: 'lights', category: 'Mechanical', title: 'Headlight Failure', desc: 'Darkness. 1) Try dimmer switch. 2) Turn on hazards/fog lights. 3) Pull off road immediately.', icon: EyeOff, color: 'text-yellow-500' },
      { id: 'wiper', category: 'Mechanical', title: 'Wiper Failure', desc: 'Blind in rain/snow. 1) Roll down window to see. 2) Slow down. 3) Pull off road.', icon: CloudRain, color: 'text-slate-500' },

      // Situational
      { id: 'oncoming', category: 'Situational', title: 'Oncoming Vehicle', desc: 'Car in your lane. 1) Blow horn/Flash lights. 2) Brake. 3) Steer Right (Ditch/Shoulder). Never left.', icon: AlertOctagon, color: 'text-red-500' },
      { id: 'water', category: 'Situational', title: 'Vehicle in Water', desc: 'Sinking. 1) Windows down immediately. 2) Unbuckle. 3) Climb out before water rises.', icon: AlertOctagon, color: 'text-red-500' },
      { id: 'animals', category: 'Situational', title: 'Animals on Road', desc: 'Large animal ahead. 1) Brake firmly. 2) Do NOT swerve (rollover risk). 3) Sound horn (if not close).', icon: PawPrint, color: 'text-yellow-600' },
      { id: 'rail', category: 'Situational', title: 'Stalled on Tracks', desc: 'Train coming? 1) GET OUT. 2) Run 45° toward train (avoid debris). No train? Call ENS number on blue sign.', icon: TrainFront, color: 'text-red-600' },
      { id: 'stuck', category: 'Situational', title: 'Stuck in Snow/Mud', desc: 'Wheels spinning. 1) Turn wheels side to side (clear area). 2) Very light gas. 3) "Rock" vehicle (Drive/Reverse).', icon: Navigation, color: 'text-amber-600' },

      // Environmental
      { id: 'hydro', category: 'Environmental', title: 'Hydroplaning', desc: 'Tires riding on water. 1) Ease off gas. 2) Do NOT brake. 3) Steer straight/gently.', icon: Droplets, color: 'text-blue-400' },
      { id: 'ice', category: 'Environmental', title: 'Black Ice', desc: 'Invisible ice. 1) Do NOT touch brakes. 2) Keep wheel straight. 3) Coast until traction returns.', icon: Snowflake, color: 'text-cyan-500' },
  ];

  const filteredScenarios = scenarios.filter(s => {
      const matchesFilter = filter === 'All' || s.category === filter;
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Mechanical', 'Situational', 'Environmental', 'Control'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-2xl font-bold text-red-600 flex items-center">
            <Siren className="mr-3" /> Emergency Maneuvers
        </h2>
        <div className="flex bg-red-50 p-1 rounded-lg mt-4 md:mt-0">
            <button onClick={() => setActiveLab('skid')} className={`px-3 py-1.5 text-xs font-bold rounded ${activeLab === 'skid' ? 'bg-white shadow text-red-600' : 'text-red-400 hover:bg-red-100'}`}>Skid Control</button>
            <button onClick={() => setActiveLab('brake')} className={`px-3 py-1.5 text-xs font-bold rounded ${activeLab === 'brake' ? 'bg-white shadow text-red-600' : 'text-red-400 hover:bg-red-100'}`}>Brake Failure</button>
            <button onClick={() => setActiveLab('blowout')} className={`px-3 py-1.5 text-xs font-bold rounded ${activeLab === 'blowout' ? 'bg-white shadow text-red-600' : 'text-red-400 hover:bg-red-100'}`}>Tire Blowout</button>
        </div>
      </div>

      {/* Interactive Lab Area */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          
          {/* Skid Trainer */}
          {activeLab === 'skid' && (
              <div className="p-8 flex flex-col items-center">
                  <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-slate-800">Skid Recovery Trainer</h3>
                      <p className="text-sm text-slate-500">The rear of your car is sliding. Steer to regain control.</p>
                  </div>

                  <div className="relative w-64 h-40 bg-slate-100 rounded-xl border-2 border-slate-200 mb-8 flex items-center justify-center overflow-hidden">
                      {/* Road Lines */}
                      <div className="absolute top-1/2 w-full h-0 border-t-2 border-dashed border-slate-300"></div>
                      
                      {/* Car */}
                      <div 
                        className={`relative w-20 h-10 bg-indigo-600 rounded shadow-lg flex items-center justify-center transition-transform duration-500
                            ${skidStatus === 'active' ? (skidDir === 'left' ? 'rotate-12' : '-rotate-12') : ''}
                            ${skidStatus === 'success' ? 'rotate-0' : ''}
                            ${skidStatus === 'fail' ? (skidDir === 'left' ? 'rotate-45 opacity-50' : '-rotate-45 opacity-50') : ''}
                        `}
                      >
                          <div className="absolute right-0 w-1 h-full bg-black/20"></div> {/* Front */}
                          {skidStatus === 'active' && (
                              <div className={`absolute -bottom-4 text-xs font-bold text-orange-500 animate-bounce ${skidDir === 'left' ? 'left-0' : 'right-0'}`}>
                                  Slide!
                              </div>
                          )}
                      </div>
                  </div>

                  {skidStatus === 'active' && (
                      <div className="flex space-x-4">
                          <button onClick={() => handleSteer('left')} className="px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 flex items-center">
                              <RotateCcw size={16} className="mr-2"/> Steer Left
                          </button>
                          <button onClick={() => handleSteer('right')} className="px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 flex items-center">
                              Steer Right <RotateCcw size={16} className="ml-2 -scale-x-100"/>
                          </button>
                      </div>
                  )}

                  {skidStatus !== 'active' && (
                      <div className="text-center animate-fade-in">
                          {skidStatus === 'success' ? (
                              <div className="text-emerald-600 font-bold text-lg mb-2 flex items-center justify-center"><CheckCircle className="mr-2"/> Recovered!</div>
                          ) : (
                              <div className="text-red-600 font-bold text-lg mb-2 flex items-center justify-center"><XCircle className="mr-2"/> Spun Out!</div>
                          )}
                          <p className="text-sm text-slate-600 mb-4">
                              {skidStatus === 'success' 
                                ? "You steered into the skid (the direction you want to go)." 
                                : "You steered opposite to the slide, causing a spin."}
                          </p>
                          <button onClick={resetSkid} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Try Again</button>
                      </div>
                  )}
              </div>
          )}

          {/* Brake Failure */}
          {activeLab === 'brake' && (
              <div className="p-8">
                  <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-slate-800">Brake Failure Simulator</h3>
                      <p className="text-sm text-slate-500">Your pedal hit the floor! Select the correct actions in order.</p>
                  </div>

                  <div className="max-w-md mx-auto">
                      {/* Progress Steps */}
                      <div className="flex justify-between mb-8 relative">
                          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10"></div>
                          {[1, 2, 3].map((step) => (
                              <div key={step} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${brakeStep >= step ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                  {step}
                              </div>
                          ))}
                      </div>

                      {brakeStep < 3 ? (
                          <div className="grid grid-cols-1 gap-3">
                              {brakeActions.map((action) => (
                                  <button 
                                    key={action.id}
                                    onClick={() => handleBrakeAction(action)}
                                    className="p-4 border rounded-lg hover:bg-slate-50 text-left font-medium text-slate-700 transition-colors"
                                  >
                                      {action.label}
                                  </button>
                              ))}
                          </div>
                      ) : (
                          <div className="text-center bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                              <CheckCircle className="mx-auto text-emerald-500 mb-2" size={32}/>
                              <h4 className="font-bold text-emerald-800">Safe Stop!</h4>
                              <p className="text-sm text-emerald-700 mt-2">
                                  You pumped the brakes to build pressure, shifted down to use engine braking, and carefully applied the parking brake.
                              </p>
                              <button onClick={() => {setBrakeStep(0); setBrakeFeedback('')}} className="mt-4 text-xs underline text-emerald-600">Replay Scenario</button>
                          </div>
                      )}

                      {brakeFeedback && brakeStep < 3 && (
                          <div className="mt-4 p-3 bg-orange-50 text-orange-800 text-sm rounded text-center font-medium animate-pulse">
                              {brakeFeedback}
                          </div>
                      )}
                  </div>
              </div>
          )}

          {/* Tire Blowout */}
          {activeLab === 'blowout' && (
              <div className="p-8 flex flex-col items-center">
                  <div className="text-center mb-8">
                      <h3 className="text-xl font-bold text-slate-800">Tire Blowout Reaction</h3>
                      <p className="text-sm text-slate-500">A tire just exploded at 65mph. What is your FIRST split-second reaction?</p>
                  </div>

                  {!blowoutChoice ? (
                      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                          <button onClick={() => setBlowoutChoice('brake')} className="aspect-square bg-red-50 hover:bg-red-100 border-2 border-red-100 rounded-xl flex flex-col items-center justify-center p-4 transition-all group">
                              <AlertTriangle size={32} className="text-red-400 mb-2 group-hover:scale-110 transition-transform"/>
                              <span className="font-bold text-red-800">Slam Brakes</span>
                          </button>
                          <button onClick={() => setBlowoutChoice('steer')} className="aspect-square bg-orange-50 hover:bg-orange-100 border-2 border-orange-100 rounded-xl flex flex-col items-center justify-center p-4 transition-all group">
                              <RotateCcw size={32} className="text-orange-400 mb-2 group-hover:scale-110 transition-transform"/>
                              <span className="font-bold text-orange-800">Jerk Wheel</span>
                          </button>
                          <button onClick={() => setBlowoutChoice('grip')} className="aspect-square bg-indigo-50 hover:bg-indigo-100 border-2 border-indigo-100 rounded-xl flex flex-col items-center justify-center p-4 transition-all group">
                              <div className="flex mb-2 space-x-1">
                                  <div className="w-2 h-6 bg-indigo-400 rounded"></div>
                                  <div className="w-2 h-6 bg-indigo-400 rounded"></div>
                              </div>
                              <span className="font-bold text-indigo-800">Grip Wheel Firmly</span>
                          </button>
                          <button onClick={() => setBlowoutChoice('gas')} className="aspect-square bg-yellow-50 hover:bg-yellow-100 border-2 border-yellow-100 rounded-xl flex flex-col items-center justify-center p-4 transition-all group">
                              <ArrowRight size={32} className="text-yellow-600 mb-2 -rotate-90 group-hover:scale-110 transition-transform"/>
                              <span className="font-bold text-yellow-800">Accelerate Hard</span>
                          </button>
                      </div>
                  ) : (
                      <div className="text-center max-w-md animate-fade-in">
                          {blowoutChoice === 'grip' ? (
                              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                                  <h4 className="text-xl font-bold text-emerald-700 mb-2">Correct!</h4>
                                  <p className="text-sm text-slate-700">
                                      Grip the wheel tightly to maintain control against the drag. Keep the vehicle going straight, then ease off the gas. Do NOT brake until you have control and have slowed down.
                                  </p>
                              </div>
                          ) : (
                              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                  <h4 className="text-xl font-bold text-red-700 mb-2">Dangerous!</h4>
                                  <p className="text-sm text-slate-700">
                                      {blowoutChoice === 'brake' && "Braking hard will cause the vehicle to spin or roll over because of the uneven traction."}
                                      {blowoutChoice === 'steer' && "Jerking the wheel can flip the vehicle. You must keep it straight first."}
                                      {blowoutChoice === 'gas' && "Accelerating isn't the primary goal, though maintaining momentum is better than braking. Grip is priority #1."}
                                  </p>
                              </div>
                          )}
                          <button onClick={() => setBlowoutChoice(null)} className="mt-6 px-6 py-2 bg-slate-800 text-white rounded-lg text-sm hover:bg-slate-700">Try Again</button>
                      </div>
                  )}
              </div>
          )}
      </div>

      {/* Quick Reference Guide */}
      <div className="mt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                  <h3 className="font-bold text-slate-700 flex items-center text-sm uppercase tracking-wider mb-2">
                      <Info size={16} className="mr-2"/> Quick Reference Guide
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                          <button 
                            key={cat} 
                            onClick={() => setFilter(cat)}
                            className={`text-[10px] font-bold px-3 py-1 rounded-full border transition-colors ${filter === cat ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'}`}
                          >
                              {cat}
                          </button>
                      ))}
                  </div>
              </div>
              <div className="relative w-full md:w-64">
                  <input 
                    type="text" 
                    placeholder="Search scenarios..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  />
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
             {filteredScenarios.map(s => (
                 <div key={s.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                     <div className="flex items-start justify-between mb-2">
                         <div className="flex items-center">
                             <s.icon size={18} className={`${s.color} mr-2 group-hover:scale-110 transition-transform`} />
                             <h3 className="font-bold text-sm text-slate-800">{s.title}</h3>
                         </div>
                         <span className="text-[9px] font-bold uppercase tracking-wide text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{s.category}</span>
                     </div>
                     <p className="text-[11px] text-slate-600 leading-relaxed">{s.desc}</p>
                 </div>
             ))}
             {filteredScenarios.length === 0 && (
                 <div className="col-span-full text-center py-8 text-slate-400 text-sm">
                     No scenarios found matching your filters.
                 </div>
             )}
          </div>
      </div>

      <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg mt-8">
          <h3 className="font-bold mb-4 flex items-center"><AlertTriangle className="mr-2 text-yellow-500"/> Accident Checklist</h3>
          <ul className="text-xs space-y-2">
              <li><span className="font-bold text-indigo-400">1. Stop Immediately:</span> Moving away is a crime (Hit & Run).</li>
              <li><span className="font-bold text-indigo-400">2. Check Injuries:</span> Call 911 if anyone is hurt.</li>
              <li><span className="font-bold text-indigo-400">3. Move Vehicle:</span> If no injuries and vehicle is movable, move to shoulder (Move It Law).</li>
              <li><span className="font-bold text-indigo-400">4. Exchange Info:</span> Name, Address, Phone, Insurance, License Plate.</li>
          </ul>
          <div className="mt-4 p-3 bg-white/10 rounded text-[10px] text-slate-300 border border-white/10">
             <span className="font-bold text-white">Note:</span> You must file an accident report with police/DMV if property damage exceeds $1,000 or if there is any injury.
          </div>
      </div>
    </div>
  );
};

export default Emergencies;