import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import TechMarquee from "@/components/TechMarquee";
import Education from "@/components/Education";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />

      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}