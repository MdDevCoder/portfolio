import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web3', label: 'Web3' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'iot', label: 'IoT' },
    { id: 'bot', label: 'Bots & Automation' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="bg-[var(--bg)] section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="section-label">Case Studies & Products</span>
          <h2 className="section-title">Products I've Built</h2>
          <p className="section-desc">
            From Web3 infrastructure platforms and browser games to enterprise management systems — real software shipped to real users, solving real problems.
          </p>
        </motion.div>

        {/* CryptiqVerse Highlight - Keeping it hardcoded to showcase the exact structure but can also be extracted */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-[var(--surface)] border border-[rgba(124,106,247,0.4)] rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-[var(--surface)] to-[rgba(124,106,247,0.06)]"
        >
          <div className="p-8 bg-gradient-to-br from-[rgba(124,106,247,0.15)] to-[rgba(34,211,200,0.05)] border-b border-[var(--border)]">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(34,211,200,0.15)] text-teal-400 border border-[rgba(34,211,200,0.3)]">🌐 Web3 Platform</span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(124,106,247,0.2)] text-accent2 border border-[rgba(124,106,247,0.3)]">⭐ Flagship Startup</span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(124,106,247,0.12)] text-accent2 border border-[rgba(124,106,247,0.2)]">🔴 Live · cryptiqverse.xyz</span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(34,197,94,0.1)] text-green-500 border border-[rgba(34,197,94,0.2)]">2026</span>
            </div>
            <div className="text-2xl font-extrabold mb-1.5 text-[var(--text)]">CryptiqVerse — Web3 Infrastructure & Operations Platform</div>
            <div className="text-sm text-[var(--text2)]">A next-generation multi-service platform connecting Web3 projects with specialized technical talent across smart contract auditing, dApp engineering, Telegram automation, and blockchain game development.</div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4">
                <div className="text-xs text-[var(--text3)] uppercase tracking-widest mb-1.5">Platform Type</div>
                <div className="text-sm font-semibold text-[var(--text)]">Web3 Services Marketplace</div>
              </div>
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4">
                <div className="text-xs text-[var(--text3)] uppercase tracking-widest mb-1.5">Tech Stack</div>
                <div className="text-sm font-semibold text-[var(--text)]">React.js · Firebase · Vercel · Custom Domain</div>
              </div>
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4">
                <div className="text-xs text-[var(--text3)] uppercase tracking-widest mb-1.5">Role</div>
                <div className="text-sm font-semibold text-[var(--text)]">Founder · Architect · Engineer · Designer</div>
              </div>
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4">
                <div className="text-xs text-[var(--text3)] uppercase tracking-widest mb-1.5">Status</div>
                <div className="text-sm font-semibold text-green-500">✅ Live · cryptiqverse.xyz</div>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-xs text-[var(--text3)] uppercase tracking-widest mb-2.5">Vision & Problem → Solution</div>
              <p className="text-[var(--text2)] text-sm leading-relaxed mb-4">
                The Web3 ecosystem is full of projects that need specialized technical help — but finding vetted engineers who understand blockchain, smart contracts, Telegram bots, and crypto-native UX is notoriously difficult. Freelance platforms like Fiverr and Upwork don't surface Web3 specialists effectively, and the quality signal is near-zero.
              </p>
              <p className="text-[var(--text2)] text-sm leading-relaxed">
                CryptiqVerse addresses this by operating as a curated Web3 tech studio: a single platform where crypto projects can engage specialists across six core service areas — all under a consistent, professional brand. I built everything independently: platform architecture, service design, branding, SEO, and cloud deployment on a custom domain. This isn't just a portfolio project — it's a live business with a defined service ecosystem and real client-facing workflows.
              </p>
            </div>
            
            {/* Features simplified for brevity */}
            <div className="flex gap-3 mt-8">
              <a href="https://cryptiqverse.xyz" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-6">🌐 Visit Platform</a>
              <span className="btn-ghost py-2 px-6 cursor-default">🚀 50+ Projects Delivered</span>
            </div>
          </div>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-base font-bold text-[var(--text2)] uppercase tracking-widest mb-5 mt-4"
        >
          More Projects
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 border ${
                activeFilter === filter.id 
                  ? 'bg-accent border-accent text-white' 
                  : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text2)] hover:bg-accent hover:border-accent hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`bg-[var(--surface)] border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(124,106,247,0.15)] ${
                  project.featured ? 'border-[rgba(124,106,247,0.4)] bg-gradient-to-br from-[var(--surface)] to-[rgba(124,106,247,0.05)]' : 'border-[var(--border)] hover:border-accent'
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${project.bannerGradient}`}></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {project.badges.map((badge, i) => (
                        <span key={i} className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badge.color}`}>
                          {badge.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-lg font-bold mb-1 text-[var(--text)]">{project.title}</div>
                  <div className="text-xs text-teal-400 font-semibold font-mono mb-3">{project.subtitle}</div>
                  <p className="text-sm text-[var(--text2)] leading-relaxed mb-5 flex-1">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techTags.map(tag => (
                      <span key={tag} className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text3)] px-2 py-1 rounded md text-[11px] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links && (
                    <div className="flex gap-2 mt-auto">
                      {project.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={link.primary ? "bg-accent text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all hover:bg-accent2 hover:-translate-y-[1px]" : "border border-[var(--border)] text-[var(--text2)] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all hover:border-accent hover:text-accent"}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
