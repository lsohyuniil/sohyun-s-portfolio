import { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectListCard from "./ProjectListCard";

export default function Projects() {
  const [viewMode, setViewMode] = useState("cards"); // list or cards

  return (
    <section id="projects" className="max-w-[1440px] mx-auto">
      <div className="flex flex-row items-center justify-center gap-2 py-4 sm:gap-0 sm:justify-start">
        <h2 className="px-0 text-2xl font-bold text-center sm:px-8 sm:py-10 md:w-auto md:text-left sm:text-3xl md:text-4xl text-primary">
          projects
        </h2>

        {/* 토글 스위치 */}
        <div className="flex items-center justify-center cursor-pointer">
          <div
            className="relative flex items-center w-20 h-8 px-1 bg-gray-300 rounded-full cursor-pointer sm:w-24 sm:h-10"
            onClick={() => setViewMode(viewMode === "list" ? "cards" : "list")}
          >
            {/* 토글 원 */}
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full duration-300 shadow-md transform transition-transform ${
                viewMode === "list"
                  ? "translate-x-0"
                  : "translate-x-12 sm:translate-x-14"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {viewMode === "list" ? (
        <ProjectListCard projects={projectsData} />
      ) : (
        <div className="flex flex-col items-center justify-center gap-20 px-4 mt-5 sm:px-10 md:px-32 md:flex-col">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
