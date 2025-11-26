import React, { useEffect } from 'react';
import { ClipboardCheck, XCircle, CheckSquare } from 'lucide-react';

const RoadTestPrep: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <ClipboardCheck className="mr-3 text-indigo-600" /> Road Test Prep
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-4">Pre-Drive Checklist</h3>
          <p className="text-xs text-slate-500 mb-4">You will fail before starting if these don't work.</p>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Headlights (High/Low)</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Brake Lights</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Turn Signals (F/R)</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Tires (Good Tread)</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Horn</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Wipers</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Mirrors</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Seatbelts</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Emergency Brake</div>
             <div className="flex items-center"><CheckSquare size={14} className="mr-2 text-emerald-500"/> Windshield (No cracks)</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-4">Immediate Failures</h3>
          <ul className="space-y-2 text-xs text-red-700">
             <li className="flex items-start"><XCircle size={14} className="mr-2 mt-0.5"/> Examiner intervention (grab wheel/brake)</li>
             <li className="flex items-start"><XCircle size={14} className="mr-2 mt-0.5"/> Causing an accident</li>
             <li className="flex items-start"><XCircle size={14} className="mr-2 mt-0.5"/> Speeding</li>
             <li className="flex items-start"><XCircle size={14} className="mr-2 mt-0.5"/> Running a red light or stop sign</li>
             <li className="flex items-start"><XCircle size={14} className="mr-2 mt-0.5"/> Hitting a curb/object</li>
             <li className="flex items-start"><XCircle size={14} className="mr-2 mt-0.5"/> Not yielding right of way</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
         <h3 className="font-bold text-blue-900 mb-4">Tested Maneuvers</h3>
         <div className="grid md:grid-cols-3 gap-6 text-sm">
             <div>
                 <h4 className="font-bold text-blue-800 mb-2">Lane Changes</h4>
                 <ul className="text-xs text-blue-700 space-y-1 list-disc pl-4">
                     <li>Signal early</li>
                     <li>Check mirrors</li>
                     <li>Check blind spot (Head check)</li>
                     <li>Cancel signal after</li>
                 </ul>
             </div>
             <div>
                 <h4 className="font-bold text-blue-800 mb-2">Intersections</h4>
                 <ul className="text-xs text-blue-700 space-y-1 list-disc pl-4">
                     <li>Scan Left-Right-Left</li>
                     <li>Obey signals exactly</li>
                     <li>Stop behind white line</li>
                     <li>Yield correctly</li>
                 </ul>
             </div>
             <div>
                 <h4 className="font-bold text-blue-800 mb-2">Parking & Backing</h4>
                 <ul className="text-xs text-blue-700 space-y-1 list-disc pl-4">
                     <li>Look back while backing</li>
                     <li>Don't rely on camera only</li>
                     <li>Parallel park without hitting curb</li>
                     <li>Signal when leaving curb</li>
                 </ul>
             </div>
         </div>
      </div>
    </div>
  );
};

export default RoadTestPrep;