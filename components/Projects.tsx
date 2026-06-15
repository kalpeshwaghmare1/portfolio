"use client";
import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import ExpandableCard from "./ui/ExpandableCard";
import Magnetic from "./ui/Magnetic";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "Chef Cloud AI", 
    desc: "An AI-powered recipe generator built with React. Users input available ingredients and get a complete, easy-to-follow recipe using the HuggingFace Inference API.", 
   
    image: "/ChefCloud.png",
    overview: "Chef Cloud AI simplifies home cooking by leveraging state-of-the-art NLP models to generate recipes based on user-provided ingredients. The project was designed with a focus on ease of use and rapid result delivery.",
    features: ["Ingredient-based recipe generation", "Step-by-step cooking instructions", "Nutritional estimation", "Responsive mobile-first design"],
    technologies: ["React 18", "Tailwind CSS", "HuggingFace API"],
    architecture: "A purely frontend application making serverless API calls directly to HuggingFace Inference endpoints, optimized with local caching to reduce API latency.",
    challenges: "Handling rate limits from the free HuggingFace API and ensuring consistent parsing of the AI's plain text output into structured recipe steps.",
    impact: "Received positive feedback for its minimalist UI and accurate recipe suggestions.",
    links: {
      demo: "https://chefcloud-ai.netlify.app/",
      github: "https://github.com/kalpeshwaghmare1/ChefCloud-AI"
    }
  },
  { 
    title: "Weather Dashboard", 
    desc: "A modern weather dashboard built with React and OpenWeatherMap API, featuring a sophisticated glassmorphism design, smooth Framer Motion animations, and a professional UI/UX.", 

    image: "/weatherdashboard.png",
    overview: "A sleek, highly interactive weather application providing real-time forecasting, interactive maps, and detailed meteorological data presented through a premium glassmorphism interface.",
    features: ["Real-time geolocation weather tracking", "7-day forecasting", "Interactive dynamic backgrounds based on weather conditions", "Saved locations"],
    technologies: ["React", "OpenWeatherMap API", "Framer Motion", "Tailwind CSS"],
    architecture: "Uses Context API for state management of user preferences and saved locations, interacting with a custom caching layer for OpenWeather API requests.",
    challenges: "Implementing performant fluid animations that sync perfectly with async data fetching without causing layout shifts.",
    impact: "Showcased as a premium example of glassmorphism UI design, receiving honorable mentions in several web design communities.",
    links: {
      demo: "https://weather-dashboard-2.netlify.app/",
      github: "https://github.com/kalpeshwaghmare1/weather-dashboard"
    }
  },
  { 
    title: "AirBnB Clone", 
    desc: "Full-stack Airbnb clone featuring host dashboards, secure auth, and responsive UI. Built with Node.js, Express, MongoDB, & Tailwind CSS.", 
    image: "/airBnB-clone.png",
    overview: "A comprehensive property rental platform mimicking the core functionalities of Airbnb, designed to demonstrate full-stack proficiency with complex state management and database relationships.",
    features: ["User authentication (JWT)", "Property listing and management", "Interactive map search", "Booking and calendar system", "Payment gateway integration"],
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    architecture: "A decoupled MERN stack architecture with Next.js serving as the frontend, communicating with a RESTful Node.js backend. MongoDB Atlas used for flexible schema storage.",
    challenges: "Managing complex booking dates and resolving conflicting reservations, as well as optimizing geospatial queries for the map search.",
    impact: "Demonstrated the ability to architect and deliver a complex, data-heavy platform end-to-end.",
    links: {
      github: "https://github.com/kalpeshwaghmare1/airbnb-clone"
    }
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="min-h-screen bg-transparent py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Selected Work" 
          subtitle="A showcase of my technical capabilities and design philosophy."
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <ExpandableCard
              key={idx}
              isExpanded={expandedIndex === idx}
              onToggle={() => handleToggle(idx)}
              delay={idx * 0.15}
              glowColor="from-black/40"
              className={expandedIndex === idx ? "lg:col-span-2" : ""}
              collapsedContent={
                <div className="flex flex-col gap-6">
                  {/* Image Preview */}
                  <div className={`relative w-full overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${expandedIndex === idx ? 'h-48 md:h-80' : 'h-64'}`}>
                    <Image 
                      src={proj.image} 
                      alt={proj.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{proj.title}</h3>
                    <p className="text-neutral-300 leading-relaxed line-clamp-3 md:line-clamp-none">{proj.desc}</p>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-400">
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-500">
                          +{proj.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              }
              expandedContent={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 border-t border-white/10 pt-8">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Overview
                      </h4>
                      <p className="text-neutral-300 leading-relaxed text-sm">{proj.overview}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                        Features
                      </h4>
                      <ul className="space-y-3">
                        {proj.features.map((feature, fIdx) => (
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * fIdx }}
                            key={fIdx} 
                            className="flex items-start gap-3 text-neutral-400 text-sm"
                          >
                            <span className="text-purple-500 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        Architecture & Challenges
                      </h4>
                      <p className="text-neutral-300 leading-relaxed text-sm mb-4">
                        <strong className="text-neutral-200">Architecture:</strong> {proj.architecture}
                      </p>
                      <p className="text-neutral-300 leading-relaxed text-sm">
                        <strong className="text-neutral-200">Challenges:</strong> {proj.challenges}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-purple-300 shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 flex gap-4">
                      {proj.links.demo && (
                        <Magnetic>
                          <a href={proj.links.demo} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-center text-sm font-semibold transition-colors shadow-lg hover:shadow-purple-500/25 md:cursor-none">
                            Live Demo
                          </a>
                        </Magnetic>
                      )}
                      {proj.links.github && (
                        <Magnetic>
                          <a href={proj.links.github} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl text-center text-sm font-semibold transition-colors flex justify-center items-center gap-2 md:cursor-none">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            GitHub
                          </a>
                        </Magnetic>
                      )}
                    </div>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
