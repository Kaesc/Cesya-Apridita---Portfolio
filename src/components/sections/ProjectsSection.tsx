'use client';

import { useState } from 'react';
import { softwareProjects, photographyProjects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">My Projects</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mx-auto mb-16"></div>

      {/* Software Development Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
          Software Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              technologies={project.technologies || []}
              imageUrl={project.image}
              liveUrl={project.liveUrl}
              onDetailsClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Photography Portfolio Section */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
          Photography Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photographyProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              technologies={[]}
              imageUrl={project.image}
              onDetailsClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
