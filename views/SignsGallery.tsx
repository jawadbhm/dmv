import React, { useState } from 'react';
import { SIGN_GUIDES, SIGNS } from '../data';
import { GuideCardGrid } from '../components/LearningCards';
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
    <div className="space-y-8">
      <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-lg">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.14em] text-indigo-200 font-semibold">Signs Gallery</p>
          <h2 className="text-2xl font-bold leading-tight">Read shapes and colors without guessing</h2>
          <p className="text-sm text-indigo-100 max-w-2xl">Filters, quick rules, and modal details keep every sign bite-sized and scannable.</p>
        </div>
        <div className="flex space-x-2 mt-3 sm:mt-0">
          {['All', 'Regulatory', 'Warning', 'Service'].map(cat => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${filter === cat ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-indigo-100 border-indigo-400/40 hover:bg-indigo-400/20'}`}
             >
               {cat}
             </button>
          ))}
        </div>
      </div>

      <GuideCardGrid items={SIGN_GUIDES} />

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