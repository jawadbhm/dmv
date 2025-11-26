import React, { useEffect } from 'react';
import { Signpost, CornerUpRight, Repeat, TrainFront, ArrowLeftRight } from 'lucide-react';

const HighwaysManeuvers: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <Signpost className="mr-3 text-indigo-600" /> Highways & Maneuvers
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Freeway Driving */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-4">Freeway Driving</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-lg">
                <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Entering (Merging)</div>
                <p className="text-xs text-slate-600">
                    Use the acceleration lane to match the speed of highway traffic. Do NOT stop on the ramp unless absolutely necessary. Signal, check gap, merge.
                </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
                <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Exiting</div>
                <p className="text-xs text-slate-600">
                    Signal early. Do NOT slow down on the main highway; use the <span className="font-bold">deceleration lane</span> to reduce speed.
                </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
                <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Highway Hypnosis</div>
                <p className="text-xs text-slate-600">
                    Avoid staring at one spot. Keep eyes moving. Stop every 2 hours or 100 miles to rest.
                </p>
            </div>
          </div>
        </div>

        {/* Passing Rules */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center"><ArrowLeftRight size={18} className="mr-2 text-indigo-500"/> Passing Rules</h3>
            <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 shrink-0"></div>
                    <span>Pass on the left. Only pass on right if vehicle ahead is turning left or on multi-lane roads.</span>
                </li>
                <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 shrink-0"></div>
                    <span>Return to your lane before you come within <span className="font-bold">200 feet</span> of any oncoming vehicle.</span>
                </li>
                <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 shrink-0"></div>
                    <span className="text-red-800 font-medium">Do NOT Pass:</span>
                </li>
                <ul className="pl-6 list-disc space-y-1 text-red-700/80">
                    <li>On hills or curves where view is obstructed</li>
                    <li>Within 100 ft of intersection/railroad</li>
                    <li>Within 100 ft of bridge/tunnel</li>
                    <li>School bus with flashing red lights</li>
                </ul>
            </ul>
        </div>

        {/* Proper Turns */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-4">Proper Turns</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
                <CornerUpRight className="mr-3 text-slate-400 mt-1" size={16} />
                <div className="text-xs text-slate-600">
                    <span className="font-bold block text-slate-800">Right Turns</span>
                    Turn from the right-most lane into the right-most lane. Do not swing wide.
                </div>
            </li>
            <li className="flex items-start">
                <CornerUpRight className="mr-3 text-slate-400 mt-1 -scale-x-100" size={16} />
                <div className="text-xs text-slate-600">
                    <span className="font-bold block text-slate-800">Left Turns</span>
                    Turn from the left-most lane (closest to centerline) into the first available lane to the right of the centerline.
                </div>
            </li>
          </ul>
          
          <div className="mt-6 p-3 bg-blue-50 border border-blue-100 rounded text-[10px] text-blue-800 flex items-center">
            <Repeat size={14} className="mr-2"/>
            <span><span className="font-bold">U-Turns:</span> Illegal on interstates, near hill crests/curves (where visibility is &lt; 500ft), or where posted.</span>
          </div>
        </div>
        
        {/* Parallel Parking */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4">Parallel Parking Steps</h3>
            <ol className="text-xs text-slate-600 space-y-2 list-decimal pl-4">
                <li><span className="font-bold text-slate-800">Position:</span> Pull up parallel to the front car, about 2 feet away.</li>
                <li><span className="font-bold text-slate-800">Back In:</span> Check traffic. Back slowly, turning wheel sharp right.</li>
                <li><span className="font-bold text-slate-800">Straighten:</span> When your front seat is opposite their rear bumper, straighten wheel and continue backing.</li>
                <li><span className="font-bold text-slate-800">Finish:</span> Turn wheel sharp left to swing front in. Center car in space (12 inches from curb).</li>
            </ol>
        </div>

        {/* Railroad Safety */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center"><TrainFront size={18} className="mr-2 text-red-500" /> Railroad Safety</h3>
            <ul className="text-xs space-y-2">
                <li className="flex items-center text-slate-600">
                    <span className="text-red-500 font-bold mr-2">×</span> <span className="font-bold mr-1">Don't Shift:</span> Never shift gears while crossing tracks.
                </li>
                <li className="flex items-center text-slate-600">
                    <span className="text-red-500 font-bold mr-2">×</span> <span className="font-bold mr-1">Don't Stop:</span> Never stop on tracks. If gate lowers, keep going if safe or crash through gate if trapped.
                </li>
                <li className="flex items-center text-slate-600">
                    <span className="text-indigo-500 font-bold mr-2">⊛</span> <span className="font-bold mr-1">15-50 Feet:</span> Stop within this range if lights flashing or train approaching.
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default HighwaysManeuvers;