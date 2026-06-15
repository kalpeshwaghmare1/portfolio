"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import ExpandableCard from "./ui/ExpandableCard";

const experiences = [
  {
    role: "Frontend Software Engineer",
    company: "Mahanavika",
    url: "https://www.mahanavika.in/",
    period: "Nov 2025 – Apr 2026",
    location: "Remote",
    desc: "Architected a high-performance digital publishing SPA using React 18, TypeScript, and Vite.",
    responsibilities: [
      "Architected a high-performance digital publishing SPA using React 18, TypeScript, and Vite, delivering a seamless reading experience.",
      "Built a custom ContentRenderer component that securely parses backend JSON blocks into sanitized semantic HTML, mitigating XSS vulnerabilities.",
      "Integrated a decoupled JWT authentication system with a Django backend using custom Axios interceptors for token refreshing and protected routing.",
      "Designed a responsive UI with Tailwind CSS and fluid micro-interactions using Framer Motion; consumed complex REST APIs for content and AWS S3 media delivery.",
      "Automated CI/CD pipelines via GitHub Actions and provisioned cloud infrastructure (EC2, RDS, S3) using Terraform on AWS."
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "AWS"]
  },
  {
    role: "Frontend Developer – Freelancer",
    company: "Self-Employed",
    period: "June 2024 – Nov 2024",
    location: "Remote",
    desc: "Designed and developed responsive web applications using React. Implemented features for e-commerce platforms and optimized performance.",
    responsibilities: [
      "Designed and developed responsive web applications using React.",
      "Built reusable UI components for improved development efficiency.",
      "Implemented responsive designs for mobile, tablet, and desktop devices.",
      "Optimized application performance and user experience."

    ],
    tech: ["React", "Next.js", "Tailwind CSS"]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="bg-transparent py-24 px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Experience" 
          subtitle="My professional journey and the impact I've created." 
        />

        <div className="relative pl-8 md:pl-16 space-y-8">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent rounded-full opacity-30"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Dot */}
              <div className={`absolute -left-[29px] md:-left-[45px] top-8 h-4 w-4 rounded-full border-2 transition-colors duration-500 z-10 ${
                expandedIndex === idx 
                  ? "bg-cyan-400 border-white shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
                  : "bg-black border-cyan-500 shadow-none"
              }`}></div>

              <ExpandableCard
                isExpanded={expandedIndex === idx}
                onToggle={() => handleToggle(idx)}
                delay={idx * 0.15}
                glowColor="from-black/40"
                collapsedContent={
                  <div>
                    <p className="text-cyan-400 font-mono text-sm mb-2">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-neutral-400 font-medium">
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white hover:text-cyan-400 transition-colors border-b border-white/20 hover:border-cyan-400/50 pb-0.5 z-20 relative group">
                          {exp.company}
                          <svg className="w-3.5 h-3.5 text-neutral-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                      <span className="hidden sm:inline text-neutral-600">•</span>
                      <span className="text-sm font-light flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                }
                expandedContent={
                  <div className="space-y-6">
                    <p className="text-neutral-300 leading-relaxed text-lg">
                      {exp.desc}
                    </p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <motion.li 
                            key={rIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (rIdx * 0.1) }}
                            className="flex items-start gap-3 text-neutral-400"
                          >
                            <span className="text-cyan-500 mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-cyan-500"></span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
