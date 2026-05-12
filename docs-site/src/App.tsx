import { useState } from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import ProjectDetail from './components/ProjectDetail';
import { projects } from './data/projects';
import { Menu, X } from 'lucide-react';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const handleSelectProject = (id: number) => {
    setSelectedProjectId(id);
    setIsSidebarOpen(false);
  };

  return (
    <Layout>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">DZ</span>
          </div>
          <span className="font-bold text-slate-900">Django Zero to Pro</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex w-full">
        {/* Sidebar with overlay on mobile */}
        <div className={`
          fixed inset-0 z-50 lg:relative lg:z-0 lg:block
          ${isSidebarOpen ? 'block' : 'hidden'}
        `}>
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <Sidebar 
            projects={projects} 
            selectedId={selectedProjectId} 
            onSelect={handleSelectProject} 
          />
        </div>

        <main className="flex-1 min-w-0 pt-16 lg:pt-0">
          <ProjectDetail project={selectedProject} />
        </main>
      </div>
    </Layout>
  );
}

export default App;
