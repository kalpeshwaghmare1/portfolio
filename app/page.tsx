import dynamic from "next/dynamic";
import LoaderWrapper from "@/components/LoaderWrapper";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Education = dynamic(() => import("@/components/Education"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <LoaderWrapper>
      <main className="w-full bg-transparent relative">
        <Navbar />
        <ScrollyCanvas />
        <div className="flex flex-col gap-16 md:gap-32">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
      </main>
    </LoaderWrapper>
  );
}
