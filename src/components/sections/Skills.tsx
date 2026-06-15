import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../../data/skills';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'data', label: 'Data & Cloud' },
    { id: 'other', label: 'Other' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="bg-[var(--bg)] section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-desc mx-auto">
            A broad technology toolkit built across real-world enterprise systems, mobile applications, IoT deployments, and startup products.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start"
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredSkills.map((category) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(124,106,247,0.1)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: category.iconBg }}
                  >
                    {category.icon}
                  </div>
                  <div className="text-sm font-bold text-[var(--text)]">{category.title}</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text2)] px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-300 hover:border-accent2 hover:text-accent2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
