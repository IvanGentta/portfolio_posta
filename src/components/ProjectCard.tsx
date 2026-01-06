"use client";
import Image from "next/image";
import FancyButton from "./FancyButton";
import TechBadge from "./TechChip";
import { Project } from "@/data/projectsData";
import Link from "next/link";
import { useTranslate } from "@/context/LanguageContext";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { t } = useTranslate();
  return (
    <div className="max-w-lg w-full">
      <div
        className="group relative h-[300px] md:h-[320px] lg:h-[360px] rounded-xl 
      overflow-hidden border-2 border-primary shadow-[1px_1px_20px_rgba(140,3,153,0.85)]"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute  inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 h-full p-8 opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            {project.title}
          </h2>

          <p className="text-sm text-gray-200 mb-3">{t(project.description)}</p>

          <div className="mb-4">
            <h3 className="text-xs font-semibold text-gray-300 mb-2 underline underline-offset-3">
              TECHS
            </h3>

            <ul className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </ul>
          </div>

          <div className="flex justify-around">
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FancyButton className="w-24 md:w-40" glowColor="#ffd700">
                DEMO
              </FancyButton>
            </Link>

            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FancyButton className="w-24 md:w-40" glowColor="#e10221">
                CODE
              </FancyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
