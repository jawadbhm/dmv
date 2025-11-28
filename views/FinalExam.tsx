import React, { useState, useEffect } from 'react';
import { EXAM_GUIDE, QUESTIONS } from '../data';
import { Question } from '../types';
import { CheckCircle, XCircle, RefreshCw, Sparkles } from 'lucide-react';
import { GuideCardGrid } from '../components/LearningCards';

interface Props {
  updateScore: (score: number) => void;
  onComplete: () => void;
}

const FinalExam: React.FC<Props> = ({ updateScore, onComplete }) => {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [markedComplete, setMarkedComplete] = useState(false);

  useEffect(() => {
    startNewExam();
  }, []);

  const startNewExam = () => {
    // Shuffle and pick 5 questions for demo purposes (real app would use more)
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled.slice(0, 5));
    setCurrentQIndex(0);
    setUserAnswers(new Array(5).fill(null));
    setIsFinished(false);
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQIndex < examQuestions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setIsFinished(true);
    const correctCount = userAnswers.reduce((acc, ans, idx) => {
      return acc! + (ans === examQuestions[idx].correctIndex ? 1 : 0);
    }, 0) || 0;

    const score = Math.round((correctCount / examQuestions.length) * 100);
    updateScore(score);

    if (!markedComplete) {
      onComplete();
      setMarkedComplete(true);
    }
  };

  if (examQuestions.length === 0) return <div>Loading Exam...</div>;

  if (isFinished) {
    const correctCount = userAnswers.reduce((acc, ans, idx) => {
      return acc! + (ans === examQuestions[idx].correctIndex ? 1 : 0);
    }, 0);
    const score = Math.round((correctCount! / examQuestions.length) * 100);

    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-xl shadow p-8 text-center animate-fade-in">
        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl font-bold text-indigo-600">{score}%</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Exam Complete</h2>
        <p className="text-slate-500 mb-8">You answered {correctCount} out of {examQuestions.length} correctly.</p>

        <button
          onClick={startNewExam}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <RefreshCw size={18} />
          <span>Retake Exam</span>
        </button>

        <div className="mt-10 w-full text-left space-y-4">
          <h3 className="font-bold border-b pb-2">Review</h3>
          {examQuestions.map((q, idx) => (
            <div key={q.id} className="p-4 rounded bg-slate-50 text-sm">
              <div className="font-semibold mb-2">{idx + 1}. {q.question}</div>
              <div className="flex items-center space-x-2 mb-1">
                {userAnswers[idx] === q.correctIndex ? <CheckCircle size={16} className="text-emerald-500"/> : <XCircle size={16} className="text-red-500"/>}
                <span className={userAnswers[idx] === q.correctIndex ? 'text-emerald-700' : 'text-red-700'}>
                  Your answer: {q.options[userAnswers[idx] || 0]}
                </span>
              </div>
              {userAnswers[idx] !== q.correctIndex && (
                <div className="text-slate-500 ml-6">Correct answer: {q.options[q.correctIndex]}</div>
              )}
              <div className="mt-2 text-xs text-slate-500 bg-white p-2 rounded border border-slate-200">
                💡 {q.explanation}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentQ = examQuestions[currentQIndex];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.14em] text-indigo-200 font-semibold">Final Certification Exam</p>
          <h2 className="text-2xl font-bold leading-tight">Sprint through scenarios, then review the why</h2>
          <p className="text-sm text-indigo-100 max-w-2xl">Five-question bursts keep cognitive load low. Explanations and micro-strategies sit under every answer.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-white/10 border border-white/15 px-4 py-3 rounded-2xl">
          <Sparkles className="text-amber-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-indigo-100 font-semibold">Progress</p>
            <p className="text-lg font-bold">Question {currentQIndex + 1} of {examQuestions.length}</p>
          </div>
        </div>
      </div>

      <GuideCardGrid items={EXAM_GUIDE} />

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1">
          <div className="bg-indigo-600 h-1 transition-all duration-300" style={{ width: `${((currentQIndex + 1) / examQuestions.length) * 100}%` }}></div>
        </div>

        <div className="p-8">
          <p className="text-lg font-medium text-slate-800 mb-8 leading-relaxed">
            {currentQ.question}
          </p>

          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center ${
                  userAnswers[currentQIndex] === idx
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                    : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${userAnswers[currentQIndex] === idx ? 'border-indigo-600' : 'border-slate-300'}`}>
                  {userAnswers[currentQIndex] === idx && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>}
                </div>
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button
                disabled={userAnswers[currentQIndex] === null}
                onClick={nextQuestion}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                {currentQIndex === examQuestions.length - 1 ? 'Finish Exam' : 'Next Question'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default FinalExam;