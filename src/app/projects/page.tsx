"use client";
import ProjectCard from "@/components/ProjectCard";
import { useTranslate } from "@/context/LanguageContext";
import { projects } from "@/data/projectsData";

export default function Projects() {
  const { t } = useTranslate();

  return (
    <section className="w-full">
      <h1 className="font-titulo text-2xl mb-6 md:pl-6 underline text-contrast_cyan font-bold">
        {t("navProjects")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
