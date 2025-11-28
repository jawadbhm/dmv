import React from 'react';
import { View, ProgressState } from '../types';
import { PlayCircle, Award, FlaskConical, Map } from 'lucide-react';
import { GuideCardGrid } from '../components/LearningCards';

const DASHBOARD_GUIDES = [
  {
    title: 'Study with Cards',
    bullets: ['Flashcards for every rule plus do/don’t lists', 'Key numbers are bolded on dark strips for quick recall', 'Checklists cap each module for real-world readiness'],
    tone: 'info' as const
  },
  {
    title: 'Practice, Then Verify',
    bullets: ['Interactive Labs simulate right-of-way, spacing, and traction', 'Signs gallery includes filters and modal details', 'Final exam tracks your best score so far'],
    tone: 'success' as const
  },
  {
    title: 'Progress that Sticks',
    bullets: ['Sections auto-complete as you explore', 'Course progress bar includes every module + exam', 'Exam review shows explanations for misses'],
    tone: 'warning' as const
  }
];

interface Props {
  progress: ProgressState;
  setView: (view: View) => void;
}

const Dashboard: React.FC<Props> = ({ progress, setView }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome to Your Master Course</h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          This interactive application is designed to be an <span className="font-semibold text-slate-900">exhaustive</span> study companion for the <span className="font-semibold text-slate-900">Colorado Driver Handbook</span>. 
          It includes calculators for penalty points, simulations for winter driving, visual labs for right-of-way, and a dynamic exam engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div 
          onClick={() => setView(View.LICENSE)}
          className="group cursor-pointer bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl p-6 text-white shadow-lg shadow-indigo-200 transition-transform hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-bold text-lg">Minor License Rules</h3>
              <p className="text-indigo-100 text-sm mt-1">Curfews, passengers & points</p>
            </div>
            <Award className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold bg-white/20 w-fit px-3 py-1 rounded-full">
            <PlayCircle size={14} />
            <span>No driving 12am-5am</span>
          </div>
        </div>

        {/* Card 2 */}
        <div 
           onClick={() => setView(View.MOUNTAIN)}
           className="group cursor-pointer bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl p-6 text-white shadow-lg shadow-purple-200 transition-transform hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-bold text-lg">Traction Law (Code 15)</h3>
              <p className="text-purple-100 text-sm mt-1">Mandatory for I-70 Travel</p>
            </div>
            <Map className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold bg-white/20 w-fit px-3 py-1 rounded-full">
            <AlertIcon />
            <span>3/16" Tread Depth</span>
          </div>
        </div>

        {/* Card 3 */}
        <div 
           onClick={() => setView(View.LABS)}
           className="group cursor-pointer bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white shadow-lg shadow-emerald-200 transition-transform hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-bold text-lg">Visual Labs</h3>
              <p className="text-emerald-100 text-sm mt-1">Interactive 4-Way Stops</p>
            </div>
            <FlaskConical className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold bg-white/20 w-fit px-3 py-1 rounded-full">
            <PlayCircle size={14} />
            <span>Start Simulation</span>
          </div>
        </div>
      </div>

      <GuideCardGrid items={DASHBOARD_GUIDES} />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
           <h3 className="font-bold text-slate-800 mb-4">Exam Performance</h3>
           <div className="flex items-center space-x-4">
             <div className="text-4xl font-bold text-indigo-600">{progress.examHighScore}%</div>
             <div className="text-sm text-slate-500">
               Your highest score on the Final Exam. <br/>
               <span className="text-emerald-600 font-medium">{progress.examHighScore >= 80 ? 'Passing Grade' : 'Needs Practice'}</span>
             </div>
           </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200">
           <h3 className="font-bold text-slate-800 mb-4">Quick Links</h3>
           <div className="flex flex-wrap gap-2">
             <button onClick={() => setView(View.FINAL_EXAM)} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-lg transition-colors">Take Exam</button>
             <button onClick={() => setView(View.SIGNS)} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-lg transition-colors">Study Signs</button>
             <button onClick={() => setView(View.EMERGENCIES)} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-lg transition-colors">Emergency Procedures</button>
           </div>
        </div>
      </div>
    </div>
  );
};

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
)

export default Dashboard;