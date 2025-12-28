"use client";
import {
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiGitlab,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiGitlab, name: "GitLab" },
];

export default function Carrousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee h-30 items-center">
        {[...techs, ...techs].map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={i}
              className="group relative mx-8 flex flex-col items-center"
            >
              <Icon
                className="
                  text-cyan-400 text-5xl
                  transition-transform duration-300
                  group-hover:scale-125
                "
              />

              <span
                className="
                  absolute -bottom-8
                  text-sm text-cyan-300
                  opacity-0 translate-y-2
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                  whitespace-nowrap
                "
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
