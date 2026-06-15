"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleProgress = (e: Event) => {
      const customEvent = e as CustomEvent;
      setProgress(customEvent.detail?.progress || 0);
      if (customEvent.detail?.progress >= 100) {
        setTimeout(() => setLoading(false), 500); // Wait a bit at 100%
      }
    };

    window.addEventListener("scrolly-load", handleProgress);

    // Fallback in case ScrollyCanvas is not loading or fails
    const timer = setTimeout(() => {
        if (loading) {
            setLoading(false);
        }
    }, 8000); // 8 second fallback

    return () => {
      window.removeEventListener("scrolly-load", handleProgress);
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-[#030712] text-white overflow-hidden flex flex-col justify-between p-8 md:p-12"
          >
            {/* Top Area */}
            <div className="flex justify-between items-start">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="text-xs uppercase tracking-widest text-neutral-500"
                >
                  System Ready
                </motion.span>
            </div>

            {/* Centerpiece: KW */}
            <div className="flex-1 flex items-center justify-center relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[15vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                KW
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400"
              >
                Kalpesh Waghmare <br/>
                <span className="text-neutral-600 mt-1 block">Portfolio {new Date().getFullYear()}</span>
              </motion.div>

              <div className="text-right">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-light tracking-tighter font-mono"
                >
                    [ {Math.round(progress).toString().padStart(3, '0')} ]
                </motion.div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-600 mt-2">
                    Loading Assets
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={loading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
