import React, { useState } from 'react';
import { View, ProgressState } from './types';
import {
  LayoutDashboard,
  BookOpen,
  Car,
  Signpost,
  AlertTriangle,
  Users,
  ShieldCheck,
  Images,
  FlaskConical,
  Mountain,
  CloudRain,
  Siren,
  ClipboardCheck,
  GraduationCap,
  Menu,
  X,
  FileText,
  Split
} from 'lucide-react';

// Views
import Dashboard from './views/Dashboard';
import SignsGallery from './views/SignsGallery';
import InteractiveLabs from './views/InteractiveLabs';
import FinalExam from './views/FinalExam';
import GenericContent from './views/GenericContent';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const completableModules: View[] = [
    View.LICENSE,
    View.VEHICLE,
    View.BASIC,
    View.CONTROLS,
    View.RULES,
    View.HIGHWAYS,
    View.SHARING,
    View.SAFETY,
    View.SIGNS,
    View.LABS,
    View.MOUNTAIN,
    View.WEATHER,
    View.EMERGENCIES,
    View.ROAD_TEST,
    View.FINAL_EXAM
  ];

  const [progress, setProgress] = useState<ProgressState>({
    completedModules: [],
    examHighScore: 0
  });

  const markComplete = (module: string) => {
    if (!progress.completedModules.includes(module)) {
      setProgress(prev => ({
        ...prev,
        completedModules: [...prev.completedModules, module]
      }));
    }
  };

  const updateScore = (score: number) => {
    if (score > progress.examHighScore) {
      setProgress(prev => ({ ...prev, examHighScore: score }));
    }
  };

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard progress={progress} setView={setCurrentView} />;
      case View.LICENSE:
        return <GenericContent view={View.LICENSE} onComplete={() => markComplete(View.LICENSE)} />;
      case View.VEHICLE:
        return <GenericContent view={View.VEHICLE} onComplete={() => markComplete(View.VEHICLE)} />;
      case View.BASIC:
        return <GenericContent view={View.BASIC} onComplete={() => markComplete(View.BASIC)} />;
      case View.CONTROLS:
        return <GenericContent view={View.CONTROLS} onComplete={() => markComplete(View.CONTROLS)} />;
      case View.RULES:
        return <GenericContent view={View.RULES} onComplete={() => markComplete(View.RULES)} />;
      case View.HIGHWAYS:
        return <GenericContent view={View.HIGHWAYS} onComplete={() => markComplete(View.HIGHWAYS)} />;
      case View.SHARING:
        return <GenericContent view={View.SHARING} onComplete={() => markComplete(View.SHARING)} />;
      case View.SAFETY:
        return <GenericContent view={View.SAFETY} onComplete={() => markComplete(View.SAFETY)} />;
      case View.SIGNS:
        return <SignsGallery onComplete={() => markComplete(View.SIGNS)} />;
      case View.LABS:
        return <InteractiveLabs onComplete={() => markComplete(View.LABS)} />;
      case View.MOUNTAIN:
        return <GenericContent view={View.MOUNTAIN} onComplete={() => markComplete(View.MOUNTAIN)} />;
      case View.WEATHER:
        return <GenericContent view={View.WEATHER} onComplete={() => markComplete(View.WEATHER)} />;
      case View.EMERGENCIES:
        return <GenericContent view={View.EMERGENCIES} onComplete={() => markComplete(View.EMERGENCIES)} />;
      case View.ROAD_TEST:
        return <GenericContent view={View.ROAD_TEST} onComplete={() => markComplete(View.ROAD_TEST)} />;
      case View.FINAL_EXAM:
        return <FinalExam updateScore={updateScore} onComplete={() => markComplete(View.FINAL_EXAM)} />;
      default:
        return <GenericContent view={currentView} onComplete={() => markComplete(currentView)} />;
    }
  };

  const NavItem = ({ view, icon: Icon }: { view: View; icon: React.ElementType }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setMobileMenuOpen(false);
      }}
      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors border-l-4 ${
        currentView === view
          ? 'bg-slate-800 border-indigo-500 text-white'
          : 'text-slate-400 border-transparent hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={18} />
      <span>{view}</span>
      {progress.completedModules.includes(view) && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
      )}
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-800 shrink-0">
          <h1 className="text-xl font-bold text-white tracking-tight">
            CO <span className="text-indigo-500">DRIVER</span> PRO
          </h1>
          <p className="text-xs text-slate-500 mt-1">2023 Exhaustive Ed.</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 hover:scrollbar-thumb-slate-600">
          <NavItem view={View.DASHBOARD} icon={LayoutDashboard} />
          
          <div className="px-4 py-2 mt-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Core Knowledge</div>
          <NavItem view={View.LICENSE} icon={BookOpen} />
          <NavItem view={View.VEHICLE} icon={FileText} />
          <NavItem view={View.BASIC} icon={Car} />
          <NavItem view={View.CONTROLS} icon={Split} />
          <NavItem view={View.RULES} icon={ClipboardCheck} />
          <NavItem view={View.HIGHWAYS} icon={Signpost} />
          <NavItem view={View.SHARING} icon={Users} />
          <NavItem view={View.SAFETY} icon={ShieldCheck} />

          <div className="px-4 py-2 mt-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Visual Labs</div>
          <NavItem view={View.SIGNS} icon={Images} />
          <NavItem view={View.LABS} icon={FlaskConical} />

          <div className="px-4 py-2 mt-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Special Conditions</div>
          <NavItem view={View.MOUNTAIN} icon={Mountain} />
          <NavItem view={View.WEATHER} icon={CloudRain} />
          <NavItem view={View.EMERGENCIES} icon={Siren} />

          <div className="px-4 py-2 mt-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Testing</div>
          <NavItem view={View.ROAD_TEST} icon={AlertTriangle} />
          <NavItem view={View.FINAL_EXAM} icon={GraduationCap} />
        </nav>

        <div className="p-4 border-t border-slate-800 shrink-0">
          <div className="flex items-center justify-between text-xs mb-2">
            <span>Course Progress</span>
            <span>{Math.round((progress.completedModules.length / completableModules.length) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div
              className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(progress.completedModules.length / completableModules.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Top Header (Mobile) */}
        <header className="lg:hidden h-16 bg-slate-900 text-white flex items-center justify-between px-4 shrink-0">
          <div className="font-bold">CO DRIVER PRO</div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto h-full">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
