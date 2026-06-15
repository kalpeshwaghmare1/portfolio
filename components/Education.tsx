"use client";
import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import ExpandableCard from "./ui/ExpandableCard";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "A. G. Patil Institute of Technology, Solapur",
    period: "2023",
    score: "CGPA: 8.79 / 10",
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Software Engineering", "Computer Networks", "Operating Systems"],
    achievements: ["Lead developer for college technical symposium website", "First class with distinction"],
    projects: ["Smart Campus Guidance App", "E-Voting System using Blockchain"]
  },
  {
    degree: "Diploma",
    school: "S.E.S Polytechnic, Solapur",
    period: "2020",
    score: "Percentage: 58.12%",
    coursework: ["Programming in C/C++", "Java Programming", "Web Development Basics", "Computer Hardware & Maintenance"],
    achievements: ["Successfully completed hands-on hardware training"],
    projects: ["Library Management System Desktop App"]
  }
];

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="bg-transparent py-24 px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Education" 
          subtitle="My academic background and core foundations." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <ExpandableCard
              key={idx}
              isExpanded={expandedIndex === idx}
              onToggle={() => handleToggle(idx)}
              delay={idx * 0.15}
              glowColor="from-black/40"
              className={expandedIndex === idx ? "md:col-span-2" : ""}
              collapsedContent={
                <div>
                  <p className="text-indigo-400 font-mono text-sm mb-2">{edu.period}</p>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{edu.degree}</h3>
                </div>
              }
              expandedContent={
                <div className="pt-2">
                  <p className="text-neutral-300 text-lg mb-4">{edu.school}</p>
                  <span className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-semibold">
                    {edu.score}
                  </span>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
