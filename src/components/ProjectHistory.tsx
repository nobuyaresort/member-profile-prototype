import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projectsData';

export const ProjectHistory: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">プロジェクト履歴</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};