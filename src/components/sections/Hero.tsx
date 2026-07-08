import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const words = [
    "Full Stack Web Applications",
    "Android Mobile Apps",
    "IoT Hardware Systems",
    "Web3 & Blockchain Products",
    "Cloud-Deployed Software",
    "AI-Powered Solutions"
  ];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const current = words[wordIndex];
      if (!isDeleting) {
        setCurrentWord(current.substring(0, currentWord.length + 1));
        if (currentWord.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1600);
          return;
        }
      } else {
        setCurrentWord(current.substring(0, currentWord.length - 1));
        if (currentWord.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(type, isDeleting ? 50 : 90);
    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex, words]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32 px-6 pb-16">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,106,247,0.25), transparent),
                     radial-gradient(ellipse 50% 40% at 80% 50%, rgba(34,211,200,0.1), transparent),
                     radial-gradient(ellipse 60% 50% at 20% 70%, rgba(244,114,182,0.08), transparent)`
      }}></div>
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{
        backgroundImage: `linear-gradient(rgba(124,106,247,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(124,106,247,0.04) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'
      }}></div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full blur-[80px] animate-float w-[400px] h-[400px] bg-[rgba(124,106,247,0.12)] -top-[10%] -left-[5%] delay-0"></div>
        <div className="absolute rounded-full blur-[80px] animate-float w-[300px] h-[300px] bg-[rgba(34,211,200,0.1)] bottom-[10%] -right-[5%] delay-[-3s]"></div>
        <div className="absolute rounded-full blur-[80px] animate-float w-[250px] h-[250px] bg-[rgba(244,114,182,0.08)] top-[40%] left-[60%] delay-[-5s]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[rgba(124,106,247,0.12)] border border-[rgba(124,106,247,0.3)] rounded-full px-4 py-1.5 text-sm text-[var(--accent3)] font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_var(--green)] animate-pulse-fast"></span>
          Open to full-time opportunities & freelance projects
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6"
        >
          Building Software<br />
          That <span className="text-gradient">Solves Real Problems</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-[var(--text2)] mb-3 min-h-[2em]"
        >
          <span className="text-[var(--text3)] mr-2">I build</span>
          <span className="text-[var(--teal)] font-semibold font-mono text-sm md:text-lg">{currentWord}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--text2)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Software Engineer & Product Builder from Gujarat, India — turning complex real-world challenges into 
          scalable digital solutions across web, mobile, cloud, IoT, and Web3.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a href="#projects" className="btn-primary">↗ View My Work</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-8 justify-center items-center"
        >
          <div className="text-center">
            <span className="block text-3xl font-extrabold tracking-tight text-[var(--text)]">8+</span>
            <span className="text-xs text-[var(--text3)] uppercase tracking-widest">Projects Built</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[var(--border)]"></div>
          <div className="text-center">
            <span className="block text-3xl font-extrabold tracking-tight text-[var(--text)]">10.0</span>
            <span className="text-xs text-[var(--text3)] uppercase tracking-widest">SGPA — MCA</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[var(--border)]"></div>
          <div className="text-center">
            <span className="block text-3xl font-extrabold tracking-tight text-[var(--text)]">5+</span>
            <span className="text-xs text-[var(--text3)] uppercase tracking-widest">Technologies</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[var(--border)]"></div>
          <div className="text-center">
            <span className="block text-3xl font-extrabold tracking-tight text-[var(--text)]">2</span>
            <span className="text-xs text-[var(--text3)] uppercase tracking-widest">Live Products</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-[var(--text3)] uppercase tracking-widest"
      >
        Scroll
        <div className="w-px h-[50px] bg-gradient-to-b from-accent to-transparent animate-scroll-down"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
