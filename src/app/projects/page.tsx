import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectsData";

export default function Projects() {
  return (
    <section className="w-full">
      <h1 className="font-titulo text-2xl mb-6 md:pl-6 underline text-contrast_cyan font-bold">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
