import React, { useState } from 'react';
import { SIGNS } from '../data';
import { X } from 'lucide-react';

const SignsGallery: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredSigns = filter === 'All' ? SIGNS : SIGNS.filter(s => s.category === filter.toLowerCase());

  const handleSignClick = (id: string) => {
    setSelectedSign(id);
    onComplete();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 md:mb-0">Traffic Signs Gallery</h2>
        <div className="flex space-x-2 text-xs overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {['All', 'Regulatory', 'Warning', 'Service'].map(cat => (
             <button 
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-3 py-1.5 rounded-full border transition-colors ${filter === cat ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
             >
               {cat}
             </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSigns.map((sign) => (
          <div 
            key={sign.id} 
            onClick={() => handleSignClick(sign.id)}
            className="aspect-square bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-md hover:border-indigo-100 transition-all group relative"
          >
            {/* Visual Representation of Sign using CSS shapes */}
            <div className={`
              w-16 h-16 flex items-center justify-center text-center font-bold text-[10px] leading-tight shadow-sm
              ${sign.shape === 'Octagon' ? 'clip-octagon' : ''}
              ${sign.shape === 'Diamond' ? 'rotate-45 scale-75' : ''}
              ${sign.shape === 'Pentagon' ? 'clip-pentagon' : ''}
              ${sign.color}
            `}>
              <span className={sign.shape === 'Diamond' ? '-rotate-45 block' : ''}>
                {sign.name.split(' ')[0]}
              </span>
            </div>
            
            <div className="mt-4 text-xs font-semibold text-slate-700 text-center">{sign.name}</div>
            <div className="absolute top-2 right-2 text-slate-300 group-hover:text-indigo-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail View */}
      {selectedSign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedSign(null)}>
           <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative shadow-2xl" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-800" onClick={() => setSelectedSign(null)}>
                  <X size={20} />
              </button>
              
              {(() => {
                  const s = SIGNS.find(si => si.id === selectedSign);
                  if (!s) return null;
                  return (
                      <div className="flex flex-col items-center text-center">
                          <div className={`w-32 h-32 mb-6 flex items-center justify-center font-bold text-sm shadow-md ${s.shape === 'Octagon' ? 'clip-octagon' : ''} ${s.shape === 'Diamond' ? 'rotate-45 scale-75' : ''} ${s.shape === 'Pentagon' ? 'clip-pentagon' : ''} ${s.color}`}>
                             <span className={s.shape === 'Diamond' ? '-rotate-45 block' : ''}>{s.name}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{s.name}</h3>
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-4">{s.category}</span>
                          <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                      </div>
                  )
              })()}
           </div>
        </div>
      )}

      <style>{`
        .clip-octagon { clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); }
        .clip-pentagon { clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); }
      `}</style>
    </div>
  );
};

export default SignsGallery;