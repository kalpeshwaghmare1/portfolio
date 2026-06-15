"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center mx-auto justify-center" : align === "right" ? "text-right ml-auto justify-end" : "text-left justify-start";
  const words = title.split(" ");
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%", rotateZ: 4, opacity: 0 },
    visible: { 
      y: 0, 
      rotateZ: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    },
  };

  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${align === "center" ? "items-center" : align === "right" ? "items-end" : "items-start"}`}>
      <motion.h2 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-4 drop-shadow-sm flex flex-wrap ${alignmentClass}`}
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block mr-[0.3em] pb-4 -mb-4">
            <motion.span
              className="inline-block origin-bottom-left"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: words.length * 0.05 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`text-lg md:text-xl text-neutral-400 font-light max-w-2xl ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
