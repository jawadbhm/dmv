import React, { useEffect, useState } from 'react';
import { Car, Move, KeyRound, CornerDownLeft } from 'lucide-react';

const BasicDriving: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const [handPos, setHandPos] = useState<'8-4' | '9-3'>('9-3');

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <Car className="mr-3 text-indigo-600" /> Basic Driving
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Steering & Hands */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center">
                <Car size={18} className="mr-2 text-indigo-500"/> Steering & Hand Position
            </h3>
            
            <div className="bg-slate-100 rounded-lg p-6 mb-4 flex flex-col items-center justify-center relative">
                <div className="w-48 h-48 rounded-full border-[8px] border-slate-700 bg-slate-800 relative shadow-inner">
                    {/* Spokes */}
                    <div className="absolute top-1/2 left-0 w-full h-4 bg-slate-600 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-24 bg-slate-600 -translate-x-1/2 translate-y-0"></div>
                    
                    {/* Hands */}
                    <div className={`absolute w-8 h-8 bg-indigo-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-500 ${handPos === '9-3' ? 'top-1/2 -left-4 -translate-y-1/2' : 'top-[65%] left-[15%] '}`}>L</div>
                    <div className={`absolute w-8 h-8 bg-indigo-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transition-all duration-500 ${handPos === '9-3' ? 'top-1/2 -right-4 -translate-y-1/2' : 'top-[65%] right-[15%]'}`}>R</div>
                </div>

                <div className="flex space-x-4 mt-6">
                    <button 
                        onClick={() => setHandPos('9-3')}
                        className={`px-3 py-1 rounded text-xs font-bold transition-colors ${handPos === '9-3' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border'}`}
                    >
                        9 and 3 o'clock
                    </button>
                    <button 
                        onClick={() => setHandPos('8-4')}
                        className={`px-3 py-1 rounded text-xs font-bold transition-colors ${handPos === '8-4' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border'}`}
                    >
                        8 and 4 o'clock
                    </button>
                </div>
            </div>

            <p className="text-xs text-slate-600">
                <span className="font-bold">Technique:</span> Use "Hand-to-Hand" (Push-Pull) or "Hand-Over-Hand" for sharp turns. 
                Keep thumbs along the face of the wheel, not wrapped inside.
            </p>
        </div>

        {/* Backing Up */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center">
                <CornerDownLeft size={18} className="mr-2 text-indigo-500"/> Backing Up
            </h3>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4">
                <div className="font-bold text-orange-800 text-sm mb-2">Check Behind Vehicle First!</div>
                <p className="text-xs text-orange-700">Children and small objects cannot be seen from the driver's seat.</p>
            </div>
            
            <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start">
                    <div className="bg-slate-100 p-1 rounded mr-3 font-bold text-xs text-slate-500">1</div>
                    <span>Place left hand at 12 o'clock on steering wheel.</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-slate-100 p-1 rounded mr-3 font-bold text-xs text-slate-500">2</div>
                    <span>Place right arm on back of passenger seat.</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-slate-100 p-1 rounded mr-3 font-bold text-xs text-slate-500">3</div>
                    <span>Look directly through rear window. Do not rely solely on mirrors/cameras.</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-slate-100 p-1 rounded mr-3 font-bold text-xs text-slate-500">4</div>
                    <span>Back up slowly.</span>
                </li>
            </ul>
        </div>

        {/* Starting & Stopping */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="font-bold text-slate-700 mb-4 flex items-center">
                <KeyRound size={18} className="mr-2 text-indigo-500"/> Starting & Stopping
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-bold text-sm text-slate-800 mb-2">Moving the Vehicle</h4>
                    <ul className="text-xs space-y-2 text-slate-600">
                        <li>• Check for safe path and traffic.</li>
                        <li>• Signal your intent.</li>
                        <li>• Press accelerator gently with ball of foot.</li>
                        <li>• Heel should remain on floor.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm text-slate-800 mb-2">Stopping</h4>
                    <ul className="text-xs space-y-2 text-slate-600">
                        <li>• Check mirrors for rear traffic.</li>
                        <li>• Move foot from gas to brake.</li>
                        <li>• Apply steady pressure.</li>
                        <li>• Stop completely behind limit lines.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDriving;