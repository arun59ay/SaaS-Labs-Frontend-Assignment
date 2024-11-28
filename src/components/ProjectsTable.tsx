import React, { useState } from 'react';
import { FormattedProject } from '../types/ApiResponse';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { Pagination } from './Pagination';
import '../styles/ProjectsTable.css';

interface ProjectsTableProps {
  projects: FormattedProject[];
}

export const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  if (!projects.length) {
    return <div className="message">No projects available.</div>;
  }

  return (
    <div className="projects-container">
      <table className="projects-table">
        <TableHeader />
        <tbody>
          {currentProjects.map((project) => (
            <TableRow key={project.id} project={project} />
          ))}
        </tbody>
      </table>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};