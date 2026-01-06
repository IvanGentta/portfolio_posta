export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  techs: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Weather App",
    description: "descWeather",
    image: "/imgProjects/imgWeatherProject.jpg",
    demoUrl: "https://weather-app-two-smoky.vercel.app/",
    codeUrl: "https://github.com/IvanGentta/weather-app",
    techs: ["React", "Next.js", "TailwindCSS", "Node.js", "Axios API Calls"],
  },
  {
    id: 2,
    title: "Google Search Clone",
    description: "descGoogle",
    image: "/imgProjects/imgGoogleProject.jpg",
    demoUrl: "https://google-clon-ten.vercel.app/",
    codeUrl: "https://github.com/IvanGentta/Google-Clon",
    techs: ["React", "Next.js", "TailwindCSS", "Node.js", "Firebase"],
  },
  {
    id: 3,
    title: "Chat App",
    description: "descChat",
    image: "/imgProjects/proyectoChat.jpg",
    demoUrl: "https://chat-challenge-one.vercel.app/",
    codeUrl: "https://github.com/IvanGentta/chat-challenge",
    techs: [
      "React",
      "Next.js ",
      "TypeScript",
      "Node.js",
      "TailwindCSS",
      "Firebase",
      "Firestore",
      "Redux",
    ],
  },
  {
    id: 4,
    title: "Notes App",
    description: "descNotes",
    image: "/imgProjects/notesAppProject.jpg",
    demoUrl:
      "https://github.com/IvanGentta/notesApp_challenge/blob/main/README.md#how-to-run-the-app",
    codeUrl: "https://github.com/IvanGentta/notesApp_challenge",
    techs: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Express",
      "Prisma",
      "Node.js",
      "SQLite",
    ],
  },
];
