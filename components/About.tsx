"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={containerRef} className="w-full bg-transparent pt-40 md:pt-56 lg:pt-64 pb-32 px-6 md:px-12 relative z-20 overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        style={{ willChange: "transform" }}
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-to-br from-neutral-800/20 to-neutral-700/20 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[380px] mx-auto lg:mx-0 mt-8 lg:mt-24 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 group"
        >
          <Image 
            src="/portfolio-img.png" 
            alt="Profile Image" 
            fill 
            quality={100}
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700"></div>
          {/* Subtle glow effect behind the image container */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] -z-10 blur-2xl"></div>
        </motion.div>
        
        {/* Right Side: Text */}
        <motion.div
          style={{ y: yParallax, willChange: "transform" }}
          className="relative group text-neutral-300 font-light leading-relaxed pt-8 lg:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="space-y-10"
          >
            <SectionHeader 
              title="About Me" 
              subtitle="My journey, my passion, and what drives me forward." 
            />
            
            <div className="space-y-6 text-[15px] md:text-[17px] text-neutral-400 font-normal leading-relaxed">
              <p>
                I am a passionate Frontend Developer with a strong foundation in modern web technologies, driven by curiosity and a desire to understand how things work at a deeper level. I enjoy building intuitive, scalable solutions that solve real-world problems through clean and thoughtful design.
              </p>
              <p>
                With expertise in the React ecosystem and a working knowledge of backend development, I specialize in transforming ideas into high-performance, user-centric web applications. I focus on writing clean, maintainable code while building reliable integrations between frontend and backend systems.
              </p>
              <p>
                Beyond coding, I actively explore emerging technologies, contribute to open-source projects, and continuously refine my understanding of system architecture. I am always open to meaningful collaborations and opportunities where I can create impact and grow further.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
