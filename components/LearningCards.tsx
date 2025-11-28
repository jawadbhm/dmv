import React from 'react';
import { CheckCircle, XCircle, Sparkles } from 'lucide-react';

export interface FlashcardItem {
  title: string;
  summary: string;
  dos: string[];
  donts: string[];
  quickTip?: string;
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
      <article
        key={card.title}
        className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col space-y-3"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold text-indigo-500">Flashcard</p>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">{card.title}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-indigo-500">
            <Sparkles size={18} />
          </div>
        </div>
        <p className="text-sm text-slate-600 flex-1 leading-relaxed">{card.summary}</p>
        <div className="space-y-2 text-sm">
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
        {card.quickTip && (
          <div className="bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-xl px-3 py-2 text-xs font-semibold flex items-center space-x-2">
            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span>{card.quickTip}</span>
          </div>
        )}
      </article>
    ))}
  </div>
);

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
