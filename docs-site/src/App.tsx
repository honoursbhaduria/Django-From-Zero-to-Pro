import { useState } from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import ProjectDetail from './components/ProjectDetail';
import { projects } from './data/projects';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const selectedProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  return (
    <Layout>
      <Sidebar 
        projects={projects} 
        selectedId={selectedProjectId} 
        onSelect={setSelectedProjectId} 
      />
      <main className="flex-1 overflow-y-auto">
        <ProjectDetail project={selectedProject} />
      </main>
    </Layout>
  );
}

export default App;
