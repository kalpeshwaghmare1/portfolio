"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "./ui/Magnetic";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Hide/Reveal Navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu if scrolling down
    } else {
      setHidden(false);
    }
  });

  // Intersection Observer for Active Section Indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the link that matches the id
            const matchedLink = links.find((link) => link.href === `#${entry.target.id}`);
            if (matchedLink) {
              setActiveSection(matchedLink.name);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // Adjust trigger area to the middle of the viewport
    );

    links.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on click
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] md:w-auto"
      >
        <div className="flex items-center justify-between p-2 rounded-full bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-1 ring-white/5">
          
          {/* Logo / Brand (Mobile only, optional, or just space between for hamburger) */}
          <div className="md:hidden px-4 font-semibold text-white/90">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center gap-1 px-2">
            {links.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <li key={link.name} className="relative">
                  <Magnetic>
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`relative flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 group md:cursor-none ${
                        isActive ? "text-white" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10 tracking-wide">{link.name}</span>
                      
                      {/* Hover effect */}
                      <span className="absolute inset-0 bg-white/5 rounded-full scale-50 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"></span>
                      
                      {/* Active Indicator Background */}
                      {isActive && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute inset-0 bg-white/10 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </Magnetic>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 relative z-50 mr-1"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: -4 }}
              className="w-5 h-[2px] bg-white block absolute transition-all"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[2px] bg-white block absolute transition-all"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 4 }}
              className="w-5 h-[2px] bg-white block absolute transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-black/80 flex items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-6">
              {links.map((link, i) => {
                const isActive = activeSection === link.name;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`text-3xl font-bold tracking-tight ${
                        isActive ? "text-white" : "text-neutral-500 hover:text-white"
                      } transition-colors`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
