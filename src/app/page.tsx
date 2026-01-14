import NavBar from "@/components/NavBar";
import About from "./about/page";
import Contact from "./contact/page";
import Inicio from "./inicio/page";
import Projects from "./projects/page";
import News from "./news/page";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-6xl px-6 md:px-20 mx-auto overflow-hidden">
      <div className="fixed inset-0 bg-[#000000] z-[-2]" />
      <div
        className="fixed left-1/3 w-[130vmax] h-[130vmax] opacity-25 blur-[140px] pointer-events-none z-[-1] "
        style={{
          background: `radial-gradient(circle,
            #4f46e5 0%,
            #8b5cf6 25%,
            #ec4899 45%,
            #00ffff 60%,
            transparent 75%
          )`,
        }}
      />

      <nav
        id="#inicio"
        className="fixed top-4 left-0 w-full z-50 flex justify-center"
      >
        <div className="w-full max-w-6xl px-6 md:px-20">
          <div className="">
            <NavBar />
          </div>
        </div>
      </nav>

      <section id="inicio" className="min-h-screen flex items-center">
        <Inicio />
      </section>

      <section id="about" className="min-h-screen flex items-center">
        <About />
      </section>

      <section id="news" className="min-h-screen flex items-center">
        <News />
      </section>

      <section id="projects" className="min-h-screen flex items-center">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center">
        <Contact />
      </section>
    </div>
  );
}
