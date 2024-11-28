import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ProjectsTable } from './ProjectsTable';
import { useProjects } from '../hooks/useProjects';
import '../styles/App.css';

export const App: React.FC = () => {
  const { projects, loading, error } = useProjects();

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {loading && <div className="message">Loading projects...</div>}
        {error && <div className="message error">{error}</div>}
        {!loading && !error && <ProjectsTable projects={projects} />}
      </main>
      <Footer />
    </div>
  );
};