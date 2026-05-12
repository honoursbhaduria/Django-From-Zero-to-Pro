import React from 'react';
import type { Project } from '../data/projects';
import { BookOpen } from 'lucide-react';

interface SidebarProps {
  projects: Project[];
  selectedId: number;
  onSelect: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ projects, selectedId, onSelect }) => {
  return (
    <div className="w-80 h-screen sticky top-0 border-r border-slate-200 bg-slate-50 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="text-indigo-600" size={24} />
          <h1 className="text-xl font-bold text-slate-900">Django Zero to Pro</h1>
        </div>
        
        <nav>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Projects
          </p>
          <ul className="space-y-1">
            {projects.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => onSelect(project.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedId === project.id
                      ? 'bg-indigo-100 text-indigo-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span className="mr-2 text-slate-400 font-mono text-xs">
                    {project.id.toString().padStart(2, '0')}
                  </span>
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
