import React from 'react';
import type { Project } from '../data/projects';
import { ExternalLink, Code, Terminal } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-indigo-600 mb-2">
          <Terminal size={18} />
          <span className="text-sm font-mono font-bold tracking-widest uppercase">
            Project {project.id}
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
          {project.title}
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {project.description}
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
          Resources
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            <Code size={20} />
            View Source Code
            <ExternalLink size={16} className="opacity-50" />
          </a>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-slate-100">
        <p className="text-sm text-slate-400 italic">
          Tip: Explore the source code on GitHub to understand the implementation details of models, views, and templates used in this project.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
