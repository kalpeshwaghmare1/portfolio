"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ExpandableCardProps {
  isExpanded?: boolean;
  onToggle?: () => void;
  collapsedContent: ReactNode;
  expandedContent?: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export default function ExpandableCard({
  isExpanded = false,
  onToggle,
  collapsedContent,
  expandedContent,
  className = "",
  delay = 0,
  glowColor = "from-white/10",
}: ExpandableCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6 }}
      className={`relative group bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden transition-colors duration-500 hover:bg-white/[0.04] shadow-xl ${
        isExpanded ? "border-white/30 bg-white/[0.05]" : "hover:border-white/20"
      } ${expandedContent ? "cursor-pointer" : ""} ${className}`}
      onClick={expandedContent ? onToggle : undefined}
    >
      {/* Dynamic Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
      
      <div className="p-6 md:p-8 relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 w-full">
            {collapsedContent}
          </div>
          {expandedContent && (
            <motion.div 
              animate={{ rotate: isExpanded ? 180 : 0 }} 
              transition={{ duration: 0.4, ease: "backOut" }}
              className={`flex-shrink-0 mt-1 transition-colors duration-300 p-2 rounded-full ${
                isExpanded ? "bg-white/10 text-white" : "bg-transparent text-neutral-500 group-hover:text-white group-hover:bg-white/5"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          )}
        </div>

        <AnimatePresence initial={false}>
          {expandedContent && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div 
                className="pt-8 mt-6 border-t border-white/10 text-neutral-300 cursor-default" 
                onClick={(e) => {
                  if ((e.target as HTMLElement).tagName !== 'BUTTON' && (e.target as HTMLElement).tagName !== 'A') {
                    e.stopPropagation();
                  }
                }}
              >
                {expandedContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
