"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 10% fade out by 15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: 25% to 45% fade in/out
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

  // Section 3: 55% to 80% fade in/out
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-x-0 bottom-10 md:bottom-12 flex flex-col items-center justify-end text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl filter">
          Kalpesh Waghmare
        </h1>
        <div className="h-[3px] w-30 bg-white/40 mb-6 "></div>
        <p className="text-sm md:text-base uppercase tracking-[0.4em] font-medium text-cyan-100 drop-shadow">
          Full Stack Developer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 md:px-12 w-full max-w-[400px] md:max-w-[30vw]"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent drop-shadow-lg">
          I build digital experiences.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-0 flex flex-col items-end justify-center px-6 md:px-12 w-full max-w-[400px] md:max-w-[30vw] text-right"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Bridging design and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
