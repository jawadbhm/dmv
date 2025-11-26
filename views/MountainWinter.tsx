import React, { useEffect } from 'react';
import { Mountain, Snowflake, Tractor, AlertCircle, ArrowUp } from 'lucide-react';

const MountainWinter: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <Mountain className="mr-3 text-indigo-600" /> Mountain & Winter Driving
      </h2>

      {/* Traction Law */}
      <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 bg-blue-600 text-xs font-bold uppercase rounded-bl-xl">Active Sept - May</div>
        
        <h3 className="font-bold text-lg mb-2 flex items-center"><Snowflake className="mr-2" /> I-70 Traction Law (Code 15)</h3>
        <p className="text-slate-300 text-sm mb-6 max-w-2xl">
            During active Traction Law, all vehicles on I-70 between Dotsero and Morrison must meet strict requirements.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                <div className="text-xs text-blue-300 uppercase font-bold mb-2">Code 15 Requirements</div>
                <ul className="text-sm space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> 4WD or AWD Vehicles</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> Snow Tires (M+S icon)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span> Tires with <span className="font-bold text-white mx-1">3/16"</span> min tread</li>
                </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                <div className="text-xs text-red-300 uppercase font-bold mb-2">Code 16 (Severe)</div>
                <p className="text-xs text-slate-300 mb-3">All vehicles must have chains or AutoSock.</p>
                <div className="text-xs text-slate-400 italic">
                    Fines range from $130 to $650+ if you block traffic.
                </div>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
          {/* Mountain Driving */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4">Mountain Driving Core</h3>
            
            <div className="mb-4 bg-orange-50 border border-orange-100 p-3 rounded-lg flex items-start">
                <ArrowUp className="text-orange-500 mr-2 shrink-0 mt-1" size={16}/>
                <div className="text-xs text-orange-900">
                    <span className="font-bold block">The Golden Rule</span>
                    Uphill traffic has the right-of-way. If the road is too narrow, the downhill vehicle must back up to a wider spot.
                </div>
            </div>

            <ul className="text-xs space-y-3 text-slate-600">
                <li className="flex items-start">
                    <span className="font-bold text-slate-800 mr-1">Steep Grades:</span> Shift to a lower gear to use engine braking. Avoid riding the brakes (brake fade).
                </li>
                <li className="flex items-start">
                    <span className="font-bold text-slate-800 mr-1">Runaway Ramps:</span> Gravel beds for trucks that lose brakes. Never park or stop on them.
                </li>
                <li className="flex items-start">
                    <span className="font-bold text-slate-800 mr-1">Passing:</span> Only pass when you can see clearly ahead. Be aware of limited power at high altitudes.
                </li>
            </ul>
          </div>

          {/* Rural Driving */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center"><Tractor size={18} className="mr-2 text-indigo-500"/> Rural Driving</h3>
            <p className="text-xs text-slate-500 mb-4">Rural roads account for many fatalities due to high speeds and hazards.</p>
            
            <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded flex flex-col">
                    <span className="text-xs font-bold text-slate-800">Hidden Hazards</span>
                    <span className="text-[10px] text-slate-500">Driveways, farm vehicles, and livestock may be hidden by crops or brush.</span>
                </div>
                <div className="bg-slate-50 p-3 rounded flex flex-col">
                    <span className="text-xs font-bold text-slate-800">Road Surface</span>
                    <span className="text-[10px] text-slate-500">Gravel can cause skids. "Washboard" roads affect steering.</span>
                </div>
                <div className="bg-slate-50 p-3 rounded flex flex-col">
                    <span className="text-xs font-bold text-slate-800">Wildlife</span>
                    <span className="text-[10px] text-slate-500">Scan roadsides. If you see one animal, expect more. 90% of animal crashes occur at dusk/dawn.</span>
                </div>
            </div>
          </div>
      </div>
      
      {/* Winter Checklist */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center"><AlertCircle className="mr-2 text-indigo-500" size={18}/> Winter Emergency Kit</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> Chains/AutoSock</div>
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> Ice Scraper</div>
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> Jumper Cables</div>
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> Flashlight</div>
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> Blanket/Warm Clothes</div>
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> Shovel/Sand</div>
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> First Aid Kit</div>
              <div className="flex items-center"><div className="w-4 h-4 border rounded mr-2"></div> Food/Water</div>
          </div>
      </div>
    </div>
  );
};

export default MountainWinter;