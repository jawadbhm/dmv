import React, { useEffect } from 'react';
import { ShieldCheck, FileText, Heart } from 'lucide-react';

const VehicleOwner: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <FileText className="mr-3 text-indigo-600" /> Vehicle Ownership & Admin
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Insurance */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center mb-4 text-emerald-600">
            <ShieldCheck className="mr-2" />
            <h3 className="font-bold">Insurance Requirements</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Colorado requires all drivers to carry liability insurance. Evidence of insurance must be in the vehicle.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span>Bodily Injury (Per Person)</span>
              <span className="font-bold">$25,000</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span>Bodily Injury (Per Accident)</span>
              <span className="font-bold">$50,000</span>
            </div>
            <div className="flex justify-between">
              <span>Property Damage</span>
              <span className="font-bold">$15,000</span>
            </div>
          </div>
        </div>

        {/* Registration */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center mb-4 text-indigo-600">
            <FileText className="mr-2" />
            <h3 className="font-bold">Registration & Emissions</h3>
          </div>
          <ul className="text-sm text-slate-600 space-y-3">
            <li className="flex items-start">
              <span className="text-indigo-500 font-bold mr-2 text-xs uppercase mt-0.5">New Residents:</span>
              <span>Must register vehicle within 90 days of establishing residency.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 font-bold mr-2 text-xs uppercase mt-0.5">Emissions:</span>
              <span>Required in the metro Denver/North Front Range area for vehicles older than 7 years.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 font-bold mr-2 text-xs uppercase mt-0.5">Plates:</span>
              <span>Must be securely fastened, horizontal, and clearly visible.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Organ Donation */}
      <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 shadow-sm">
        <div className="flex items-center mb-4 text-pink-600">
          <Heart className="mr-2 fill-pink-600" />
          <h3 className="font-bold">Organ & Tissue Donation</h3>
        </div>
        <p className="text-sm text-pink-900 mb-2">
          You can elect to become a donor when applying for your license. The <span className="font-bold">Heart</span> symbol on your license indicates your consent.
          One donor can save up to 8 lives and heal 75 others.
        </p>
      </div>

      {/* Vehicle Check */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
        <h3 className="font-bold mb-4">Pre-Drive Safety Check</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white/10 rounded hover:bg-white/20 transition-colors">
                <div className="font-bold text-sm">Brakes</div>
                <div className="text-xs text-slate-400 mt-1">Check firmness</div>
            </div>
            <div className="p-3 bg-white/10 rounded hover:bg-white/20 transition-colors">
                <div className="font-bold text-sm">Lights</div>
                <div className="text-xs text-slate-400 mt-1">Signals & Brake</div>
            </div>
            <div className="p-3 bg-white/10 rounded hover:bg-white/20 transition-colors">
                <div className="font-bold text-sm">Tires</div>
                <div className="text-xs text-slate-400 mt-1">Tread & Pressure</div>
            </div>
            <div className="p-3 bg-white/10 rounded hover:bg-white/20 transition-colors">
                <div className="font-bold text-sm">Wipers</div>
                <div className="text-xs text-slate-400 mt-1">Fluid & Blades</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleOwner;