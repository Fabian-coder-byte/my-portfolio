import SkillsSection from "./_components/home/SkillSection";
import Projects from "./_components/home/Projects";
import Contact from "./_components/home/Contact";
import About from "./_components/home/About";
import Hero from "./_components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
    </main>
  );
}
