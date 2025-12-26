import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className=" max-w-[1440px] mx-auto">
      <h2 className="px-0 py-4 text-2xl font-bold text-center sm:px-8 sm:py-10 md:text-left sm:text-3xl md:text-4xl text-primary">
        projects
      </h2>

      <div className="flex flex-col items-center justify-center gap-20 px-4 mt-5 sm:px-10 md:px-32 md:flex-col">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
