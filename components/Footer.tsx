"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-8 border-t border-white/10 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white/70 text-sm font-medium">
            © {currentYear} Kalpesh Waghmare. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-1">
          Designed & Built with logic
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 text-sm font-medium"
        >
          Back to top
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
