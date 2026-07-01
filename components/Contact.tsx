"use client";
import { motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";
import SectionHeader from "./ui/SectionHeader";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kalpeshwaghmare400@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-transparent py-32 px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Let's talk." 
          subtitle="I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          {/* Primary Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
            <div className="relative h-full bg-gradient-to-br from-neutral-900 to-black backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center transition-colors duration-500 overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight break-all">kalpeshwaghmare.dev@gmail.com</h3>
              <p className="text-neutral-400 mb-8 max-w-md">Whether it&apos;s a new project, a collaboration, or an exciting opportunity—I&apos;d love to connect and create something meaningful together.</p>
              
              <div className="flex gap-4">
                <Magnetic>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kalpeshwaghmare.dev@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold transition-colors duration-300 md:cursor-none flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    Send Email
                  </a>
                </Magnetic>
                <Magnetic>
                  <button 
                    onClick={handleCopy}
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all duration-300 md:cursor-none flex items-center gap-2 w-32 justify-center"
                  >
                    {copied ? (
                      <span className="text-green-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Copied
                      </span>
                    ) : (
                      "Copy"
                    )}
                  </button>
                </Magnetic>
              </div>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <a href="https://linkedin.com/in/kalpesh-waghmare" target="_blank" rel="noopener noreferrer" className="block relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500 md:cursor-none overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">LinkedIn</h4>
              <p className="text-neutral-400 text-sm">Connect with me professionally and check out my experience.</p>
            </a>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <a href="https://github.com/kalpeshwaghmare1" target="_blank" rel="noopener noreferrer" className="block relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-neutral-400/30 transition-all duration-500 md:cursor-none overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                <svg className="w-6 h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">GitHub</h4>
              <p className="text-neutral-400 text-sm">Explore my open-source projects and code repositories.</p>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-32 text-center text-neutral-600 text-sm"
        >
        </motion.div>
      </div>
    </section>
  );
}
