import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectListCard({ projects }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full min-h-screen p-4 mb-4">
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 sm:px-10 md:px-32">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => openModal(project)}
          >
            <img
              src={project.mainImage}
              alt={project.title}
              className="object-cover w-full transition-transform duration-300 aspect-square group-hover:scale-105"
            />

            <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90">
              <h2 className="mb-1 text-lg font-bold text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-400 bg-clip-text">
                {project.title}
              </h2>
              <p className="text-sm text-gray-700 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
