import React, { useEffect } from 'react';
import { CloudRain, Moon, Wind, HardHat } from 'lucide-react';

const WeatherConditions: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  useEffect(() => {
    onComplete();
  }, [onComplete]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center">
        <CloudRain className="mr-3 text-indigo-600" /> Challenging Conditions
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center mb-4">
                <Moon className="text-indigo-500 mr-2" />
                <h3 className="font-bold text-slate-700">Night Driving</h3>
            </div>
            <ul className="text-xs text-slate-600 space-y-3">
                <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-indigo-400">◎</span>
                    <span><span className="font-bold text-slate-800">Vision:</span> Use high beams when legal. Don't overdrive headlights (stop within light range).</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-indigo-400">☀</span>
                    <span><span className="font-bold text-slate-800">Glare:</span> If oncoming car has high beams, look to the right edge of the road.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 mt-0.5 text-indigo-400">▣</span>
                    <span><span className="font-bold text-slate-800">Dimming:</span> Dim lights 500ft before meeting oncoming car, 200ft when following.</span>
                </li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center mb-4">
                <CloudRain className="text-blue-500 mr-2" />
                <h3 className="font-bold text-slate-700">Fog & Low Visibility</h3>
            </div>
            <ul className="text-xs text-slate-600 space-y-3">
                <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">×</span>
                    <span><span className="font-bold text-slate-800">High Beams:</span> NEVER use high beams in fog/snow; glare will blind you.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span><span className="font-bold text-slate-800">Low Beams:</span> Use low beams or fog lights.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-slate-400 font-bold mr-2">⊛</span>
                    <span><span className="font-bold text-slate-800">Stopping:</span> If visibility is zero, pull completely off the road and turn on hazards.</span>
                </li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center mb-4">
                <Wind className="text-slate-500 mr-2" />
                <h3 className="font-bold text-slate-700">High Winds</h3>
            </div>
            <ul className="text-xs text-slate-600 space-y-3">
                <li className="flex items-start">
                    <span className="mr-2 text-slate-400">♨</span>
                    <span><span className="font-bold text-slate-800">Grip:</span> Keep a firm two-handed grip on the steering wheel.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-slate-400">⚠</span>
                    <span><span className="font-bold text-slate-800">Trucks:</span> Give large vehicles space; they can be blown into your lane.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-slate-400">↗</span>
                    <span><span className="font-bold text-slate-800">Open Areas:</span> Be prepared for gusts on bridges and open roads.</span>
                </li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center mb-4">
                <HardHat className="text-orange-500 mr-2" />
                <h3 className="font-bold text-slate-700">Construction Zones</h3>
            </div>
            <ul className="text-xs text-slate-600 space-y-3">
                <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-2">⚒</span>
                    <span><span className="font-bold text-slate-800">Orange Signs:</span> Diamond shape warns of work ahead.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-2">⚖</span>
                    <span><span className="font-bold text-slate-800">Double Fines:</span> Fines are doubled in work zones.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-orange-500 font-bold mr-2">⚐</span>
                    <span><span className="font-bold text-slate-800">Flaggers:</span> Obey flaggers immediately; they override signs/signals.</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherConditions;