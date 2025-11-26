import React from 'react';

interface SimulationCanvasProps {
  title: string;
  description: string;
  children: React.ReactNode;
  active?: boolean;
}

export const SimulationCanvas: React.FC<SimulationCanvasProps> = ({ title, description, children, active = true }) => {
  return (
    <div className={`border rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 ${active ? 'opacity-100' : 'opacity-60 grayscale'}`}>
      <div className="bg-slate-800 text-white p-3 flex justify-between items-center">
        <h3 className="font-bold text-sm">{title}</h3>
        <span className="text-xs bg-indigo-500 px-2 py-0.5 rounded text-white">Interactive</span>
      </div>
      <div className="p-4 bg-slate-100 min-h-[200px] flex flex-col justify-center items-center relative">
        {children}
      </div>
      <div className="p-3 bg-white border-t text-sm text-slate-600">
        {description}
      </div>
    </div>
  );
};