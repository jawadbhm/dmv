import React, { useState } from 'react';
import { CheckCircle, XCircle, Sparkles } from 'lucide-react';

export interface FlashcardItem {
  title: string;
  summary: string;
  dos: string[];
  donts: string[];
  quickTip?: string;
  visual?: React.ReactNode;
  visualLabel?: string;
  visualStat?: string;
  visualDescriptor?: string;
  visualTone?: 'indigo' | 'emerald' | 'amber' | 'rose';
}

export interface KeyNumberItem {
  label: string;
  value: string;
  detail: string;
}

export interface ChecklistItem {
  label: string;
  items: string[];
}

type GuideTone = 'info' | 'success' | 'warning';

export interface GuideCardItem {
  title: string;
  bullets: string[];
  tone?: GuideTone;
}

export const ContentHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="space-y-2">
    <p className="uppercase tracking-[0.12em] text-[11px] font-semibold text-slate-500">Colorado DMV Prep</p>
    <h2 className="text-3xl font-bold text-slate-900 leading-tight">{title}</h2>
    {subtitle && <p className="text-slate-600 max-w-2xl text-sm">{subtitle}</p>}
  </div>
);

export const FlashcardGrid: React.FC<{ items: FlashcardItem[] }> = ({ items }) => (
  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
    {items.map((card) => (
      <InteractiveFlashcard key={card.title} card={card} />
    ))}
  </div>
);

const InteractiveFlashcard: React.FC<{ card: FlashcardItem }> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tone = card.visualTone ?? 'indigo';

  const toneBg: Record<NonNullable<FlashcardItem['visualTone']>, string> = {
    indigo: 'bg-gradient-to-br from-indigo-50 via-white to-slate-50 border-indigo-100 text-indigo-700',
    emerald: 'bg-gradient-to-br from-emerald-50 via-white to-slate-50 border-emerald-100 text-emerald-700',
    amber: 'bg-gradient-to-br from-amber-50 via-white to-slate-50 border-amber-100 text-amber-700',
    rose: 'bg-gradient-to-br from-rose-50 via-white to-slate-50 border-rose-100 text-rose-700'
  };

  const toneDot: Record<NonNullable<FlashcardItem['visualTone']>, string> = {
    indigo: 'bg-indigo-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500'
  };

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-4 flex flex-col space-y-4">
      <div className="flex items-start justify-between space-x-3">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold text-indigo-500 uppercase tracking-[0.12em]">Flashcard</p>
          <h3 className="text-lg font-bold text-slate-900 leading-snug">{card.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{card.summary}</p>
        </div>
        <div className={`w-32 shrink-0 rounded-2xl border p-3 text-left shadow-inner ${toneBg[tone]}`}>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="uppercase tracking-[0.1em] text-[10px] opacity-80">{card.visualLabel ?? 'Visual cue'}</span>
            <span aria-hidden="true" className="text-base">
              {card.visual ?? <Sparkles size={16} />}
            </span>
          </div>
          {typeof card.visual === 'string' && <span className="sr-only">{card.title} visual</span>}
          <p className="text-2xl font-black mt-2 leading-none">{card.visualStat ?? 'Ready'}</p>
          {card.visualDescriptor && (
            <p className="text-[12px] mt-1 leading-snug opacity-90">{card.visualDescriptor}</p>
          )}
          <div className="mt-2 flex items-center space-x-2 text-[11px] font-semibold">
            <span className={`inline-block w-2 h-2 rounded-full ${toneDot[tone]}`} />
            <span className="tracking-tight">Tap to reveal actions</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm font-semibold px-3 py-2 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
      >
        {isOpen ? 'Hide actions' : 'Show actions'}
      </button>

      {isOpen && (
        <div className="space-y-2 text-sm animate-fade-in">
          <div className="flex items-start space-x-2">
            <CheckCircle className="text-emerald-500 mt-0.5" size={16} />
            <ul className="space-y-1 text-slate-700">
              {card.dos.map((item) => (
                <li key={item} className="leading-snug">{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-start space-x-2">
            <XCircle className="text-rose-400 mt-0.5" size={16} />
            <ul className="space-y-1 text-slate-700">
              {card.donts.map((item) => (
                <li key={item} className="leading-snug">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {card.quickTip && (
        <div className="bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-xl px-3 py-2 text-xs font-semibold flex items-center space-x-2">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
          <span>{card.quickTip}</span>
        </div>
      )}
    </article>
  );
};

export const KeyNumberStrip: React.FC<{ items: KeyNumberItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
    {items.map((item) => (
      <div
        key={item.label}
        className="bg-slate-900 text-white rounded-2xl p-4 shadow-inner border border-slate-800"
      >
        <p className="text-[11px] uppercase tracking-wide text-indigo-200 font-semibold">{item.label}</p>
        <p className="text-3xl font-black mt-1 mb-1">{item.value}</p>
        <p className="text-[13px] text-slate-200 leading-snug">{item.detail}</p>
      </div>
    ))}
  </div>
);

export const ChecklistBoard: React.FC<{ items: ChecklistItem[] }> = ({ items }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {items.map((section) => (
      <div key={section.label} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <p className="text-[11px] font-semibold text-indigo-500 uppercase tracking-wide">{section.label}</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {section.items.map((item) => (
            <li key={item} className="flex items-start space-x-2">
              <span className="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const Microcopy: React.FC<{ label: string; body: string }> = ({ label, body }) => (
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-5 border border-slate-700">
    <p className="text-[11px] uppercase tracking-[0.15em] text-indigo-200 font-semibold">{label}</p>
    <p className="mt-2 text-sm text-slate-100 leading-relaxed">{body}</p>
  </div>
);

const toneStyles: Record<GuideTone, string> = {
  info: 'bg-white border-slate-200 text-slate-700',
  success: 'bg-emerald-50 border-emerald-100 text-emerald-900',
  warning: 'bg-amber-50 border-amber-100 text-amber-900'
};

const toneAccents: Record<GuideTone, string> = {
  info: 'bg-indigo-500 text-white',
  success: 'bg-emerald-500 text-white',
  warning: 'bg-amber-500 text-white'
};

const toneDots: Record<GuideTone, string> = {
  info: 'bg-indigo-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500'
};

const toneLabels: Record<GuideTone, string> = {
  info: 'Quick Tips',
  success: 'Best Practice',
  warning: 'Watch Out'
};

export const GuideCardGrid: React.FC<{ items: GuideCardItem[] }> = ({ items }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
    {items.map((guide) => (
      <div
        key={guide.title}
        className={`rounded-2xl border p-4 space-y-2 shadow-sm ${toneStyles[guide.tone ?? 'info']}`}
      >
        <p
          className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-semibold ${toneAccents[guide.tone ?? 'info']}`}
        >
          {toneLabels[guide.tone ?? 'info']}
        </p>
        <h3 className="font-bold text-slate-900 leading-snug">{guide.title}</h3>
        <ul className="text-sm space-y-1">
          {guide.bullets.map((item) => (
            <li key={item} className="flex items-start space-x-2">
              <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1 ${toneDots[guide.tone ?? 'info']}`} />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default FlashcardGrid;
