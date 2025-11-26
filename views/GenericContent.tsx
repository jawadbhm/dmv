import React, { useEffect } from 'react';
import { View } from '../types';
import { AlertCircle, ArrowRight } from 'lucide-react';

interface Props {
  view: View;
  onComplete: () => void;
}

const GenericContent: React.FC<Props> = ({ view, onComplete }) => {
  
  useEffect(() => {
    // Auto-complete simple read modules after 1 second
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const getContent = () => {
    switch (view) {
        case View.MOUNTAIN:
            return (
                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Mountain & Winter Driving</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-indigo-400 font-bold mb-2 uppercase text-xs tracking-wider">The Golden Rule</h3>
                                <p className="mb-4">Uphill traffic has the right of way. If the road is too narrow, the downhill vehicle must back up.</p>
                                <h3 className="text-indigo-400 font-bold mb-2 uppercase text-xs tracking-wider">Traction Law (Code 15)</h3>
                                <p className="text-sm text-slate-300">Active when conditions require. 4WD/AWD vehicles need 3/16" tread. 2WD vehicles need chains or Autosocks.</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                                <h4 className="font-bold flex items-center mb-2"><AlertCircle size={16} className="mr-2"/> Winter Kit Checklist</h4>
                                <ul className="text-sm space-y-2 list-disc pl-4 text-slate-300">
                                    <li>Chains / AutoSocks</li>
                                    <li>Blanket & Extra Clothing</li>
                                    <li>Flashlight & Batteries</li>
                                    <li>Ice Scraper / Snow Brush</li>
                                    <li>First Aid Kit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case View.EMERGENCIES:
             return (
                 <div className="space-y-4">
                     <h2 className="text-2xl font-bold text-slate-800 mb-6">Emergency Maneuvers</h2>
                     <div className="grid md:grid-cols-2 gap-4">
                         <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                             <div className="font-bold text-red-600 mb-2">Brake Failure</div>
                             <p className="text-sm text-slate-600">Pump brakes rapidly. Shift to lower gear. Carefully use parking brake.</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                             <div className="font-bold text-orange-600 mb-2">Tire Blowout</div>
                             <p className="text-sm text-slate-600">Hold steering wheel tightly. Keep vehicle straight. Ease off gas. Do not brake hard.</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                             <div className="font-bold text-indigo-600 mb-2">Skidding (ABS)</div>
                             <p className="text-sm text-slate-600">Stomp on the brake and steer. Do not pump ABS brakes.</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                             <div className="font-bold text-indigo-600 mb-2">Skidding (No ABS)</div>
                             <p className="text-sm text-slate-600">Turn steering wheel in the direction of the skid. Ease off accelerator.</p>
                         </div>
                     </div>
                 </div>
             );
        default:
            return (
                <div className="text-center py-20 bg-white rounded-xl border border-slate-200 border-dashed">
                    <h2 className="text-2xl font-bold text-slate-400 mb-2">{view}</h2>
                    <p className="text-slate-500">Module content loading or simplified for this demo.</p>
                    <div className="mt-8 flex justify-center">
                        <div className="flex items-center text-sm text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
                            <ArrowRight size={16} className="mr-2" />
                            Reading Progress Tracked
                        </div>
                    </div>
                </div>
            );
    }
  };

  return getContent();
};

export default GenericContent;