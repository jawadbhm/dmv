import React from 'react';
import { View } from '../types';
import GenericContent from './GenericContent';
import React, { useEffect } from 'react';
import { Mountain, Snowflake } from 'lucide-react';
import {
  ChecklistBoard,
  ContentHeader,
  FlashcardGrid,
  KeyNumberStrip,
  Microcopy,
} from '../components/LearningCards';
import { keyNumbers, mountainFlashcards, quickMicrocopy, winterChecklist } from '../content';

interface Props {
  onComplete: () => void;
}

const MountainWinter: React.FC<Props> = React.memo(({ onComplete }) => {
  return <GenericContent view={View.MOUNTAIN} onComplete={onComplete} />;
});

MountainWinter.displayName = 'MountainWinter';
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
          <Mountain className="text-emerald-400" size={22} />
        </span>
        <ContentHeader
          title="Mountain & Winter Driving"
          subtitle="High-impact micro-lessons for I-70 traction law, steep grades, and whiteout readiness."
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-200 font-semibold">I-70 Traction Law</p>
              <h3 className="text-2xl font-bold flex items-center"><Snowflake className="mr-2" /> Code 15 Quick Primer</h3>
            </div>
            <span className="text-[11px] bg-white/10 border border-white/10 px-3 py-1 rounded-full font-semibold">Sept – May</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed max-w-3xl mb-4">
            Use these checkpoints to stay legal and safe the moment overhead signs flash <strong>TRACTION LAW</strong>.
          </p>
          <KeyNumberStrip items={keyNumbers} />
        </div>

        <div className="space-y-3">
          <Microcopy label="Code 15 + 16" body={quickMicrocopy.traction} />
          <Microcopy label="Driving Rhythm" body={quickMicrocopy.conditions} />
        </div>
      </div>

      <FlashcardGrid items={mountainFlashcards} />

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">Winter Kit & Pre-Trip</h3>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">Do this before you roll</span>
        </div>
        <ChecklistBoard items={winterChecklist} />
      </div>
    </div>
  );
};

export default MountainWinter;
