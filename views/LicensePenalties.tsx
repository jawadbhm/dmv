import React, { useState, useEffect } from 'react';
import { LICENSE_POINTS } from '../data';
import { AlertTriangle, CheckCircle, Car, Clock, Users, FileText } from 'lucide-react';

const LicensePenalties: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  const [driverAge, setDriverAge] = useState('Adult (21+)');
  const [timePeriod, setTimePeriod] = useState('12 Months');
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState({ valid: true, limit: 12 });

  useEffect(() => {
    let limit = 12;
    if (driverAge === 'Adult (21+)') {
        limit = timePeriod === '12 Months' ? 12 : 18; // 18 in 24 months
    } else if (driverAge === 'Minor (18-21)') {
        limit = timePeriod === '12 Months' ? 9 : 12; 
        // Also 6 pts in any 12 months for 18-21
    } else {
        // Minor under 18
        limit = 6; // 6 in 12, or 7 cumulative
    }
    
    setStatus({
        valid: points < limit,
        limit
    });
    
    // Mark complete if interacted
    if (points > 0) onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [driverAge, timePeriod, points]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <Car className="mr-3 text-indigo-600" /> License, Permits & Penalties
      </h2>

      {/* Minor Laws Section */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg border border-slate-800">
        <h3 className="text-lg font-bold mb-4 flex items-center">
            <span className="bg-indigo-500 text-xs px-2 py-1 rounded mr-3">TEEN DRIVING</span>
            Minor License Restrictions (Under 18)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2 text-indigo-300 font-bold text-sm">
                    <Users size={16} className="mr-2" /> Passenger Restrictions
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                    <li>
                        <span className="font-bold text-white block">First 6 Months:</span>
                        No passengers under 21 unless a parent/instructor is in the vehicle.
                    </li>
                    <li>
                        <span className="font-bold text-white block">6 Months - 1 Year:</span>
                        Only one passenger under 21 allowed.
                    </li>
                    <li className="text-[10px] italic opacity-70">Exceptions: Siblings and medical emergencies.</li>
                </ul>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2 text-indigo-300 font-bold text-sm">
                    <Clock size={16} className="mr-2" /> Curfew (First Year)
                </div>
                <p className="text-xs text-slate-300 mb-2">
                    No driving between <span className="font-bold text-white">Midnight and 5:00 AM</span>.
                </p>
                <p className="text-[10px] text-slate-400">
                    Unless accompanied by an instructor/parent/guardian. Exceptions for school/work with signed statement.
                </p>
            </div>
        </div>
      </div>

      {/* Permit Process */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center"><FileText size={18} className="mr-2 text-indigo-500" /> Getting Your License</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="font-bold text-slate-800 mb-1">1. Instruction Permit</div>
                  <p className="text-xs text-slate-600">Must hold for 12 months if under 18. Pass written test to obtain.</p>
              </div>
              <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="font-bold text-slate-800 mb-1">2. Logging Hours</div>
                  <p className="text-xs text-slate-600">Submit log of 50 hours driving (10 at night) signed by parent/guardian.</p>
              </div>
              <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="font-bold text-slate-800 mb-1">3. Drive Test</div>
                  <p className="text-xs text-slate-600">Practical skills test. Appointment required. Vehicle must be safe/insured.</p>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calculator */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-700">Suspension Calculator</h3>
            <AlertTriangle className="text-amber-500" size={20} />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Driver Age</label>
              <select 
                value={driverAge} 
                onChange={(e) => setDriverAge(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              >
                <option>Adult (21+)</option>
                <option>Minor (18-21)</option>
                <option>Minor (Under 18)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Time Period</label>
              <select 
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              >
                <option>12 Months</option>
                <option>24 Months</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Points Accumulated</span>
                <span className="text-sm font-bold text-indigo-600">{points}</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="24" 
                value={points} 
                onChange={(e) => setPoints(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          <div className={`p-4 rounded-lg border flex items-center ${status.valid ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
            {status.valid ? <CheckCircle className="text-emerald-500 mr-3" /> : <AlertTriangle className="text-red-500 mr-3" />}
            <div>
                <div className={`font-bold ${status.valid ? 'text-emerald-700' : 'text-red-700'}`}>
                    {status.valid ? 'License Valid' : 'Suspension Risk'}
                </div>
                <div className="text-xs text-slate-500">
                    Limit: {status.limit} points in period.
                </div>
            </div>
          </div>
        </div>

        {/* Common Points Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-700 mb-4">Common Point Values</h3>
            <div className="space-y-3">
                {LICENSE_POINTS.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded">
                        <span className="text-slate-600">{item.infraction}</span>
                        <span className="font-bold text-red-500">{item.points}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Alcohol & Drugs */}
        <div className="lg:col-span-2 bg-red-50 rounded-xl shadow-sm border border-red-100 p-6">
            <h3 className="font-bold text-lg mb-1 text-red-900 flex items-center">
                <AlertTriangle className="text-red-600 mr-2" size={20}/>
                Alcohol & Drugs
            </h3>
            <p className="text-red-800 text-sm mb-6">Colorado has Zero Tolerance for Minors.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                    <div className="text-slate-500 text-xs uppercase mb-1">DUI (Per Se)</div>
                    <div className="text-2xl font-bold text-slate-800">0.08% BAC</div>
                    <div className="text-xs text-slate-500 mt-1">Driving Under Influence</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                    <div className="text-slate-500 text-xs uppercase mb-1">DWAI</div>
                    <div className="text-2xl font-bold text-slate-800">0.05% BAC</div>
                    <div className="text-xs text-slate-500 mt-1">Driving While Ability Impaired</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                    <div className="text-slate-500 text-xs uppercase mb-1">Under 21 Limit</div>
                    <div className="text-2xl font-bold text-slate-800">0.02% BAC</div>
                    <div className="text-xs text-slate-500 mt-1">Subject to revocation</div>
                </div>
            </div>
            
            <div className="mt-4 p-3 bg-white rounded border border-red-200 text-xs text-slate-600">
                <span className="font-bold text-red-700">Express Consent Law:</span> By driving in Colorado, you agree to chemical testing. Refusal = Mandatory 1-year revocation.
            </div>
        </div>
      </div>
    </div>
  );
};

export default LicensePenalties;