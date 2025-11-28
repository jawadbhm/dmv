import React, { useEffect } from 'react';
import { View } from '../types';
import { moduleContent } from '../content';
import { ChecklistBoard, ContentHeader, FlashcardGrid, GuideCardGrid, KeyNumberStrip, Microcopy } from '../components/LearningCards';

interface Props {
  view: View;
  onComplete: () => void;
}

const GenericContent: React.FC<Props> = ({ view, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const content = moduleContent[view];

  if (!content) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
        <p className="text-sm text-slate-500">Module content loading.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <ContentHeader title={content.title} subtitle={content.subtitle} />

      {content.keyNumbers && content.keyNumbers.length > 0 && (
        <section className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">Key numbers</p>
          <KeyNumberStrip items={content.keyNumbers} />
        </section>
      )}

      {content.guideCards && content.guideCards.length > 0 && (
        <section className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">Quick tips</p>
          <GuideCardGrid items={content.guideCards} />
        </section>
      )}

      {content.flashcards && content.flashcards.length > 0 && (
        <section className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">Flashcards</p>
          <FlashcardGrid items={content.flashcards} />
        </section>
      )}

      {content.checklists && content.checklists.length > 0 && (
        <section className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">Checklists</p>
          <ChecklistBoard items={content.checklists} />
        </section>
      )}

      {content.quickNotes && content.quickNotes.length > 0 && (
        <section className="grid sm:grid-cols-2 gap-3">
          {content.quickNotes.map((note) => (
            <Microcopy key={note.label} label={note.label} body={note.body} />
          ))}
        </section>
      )}
    </div>
  );
};

export default GenericContent;
