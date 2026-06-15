import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="bg-[var(--bg2)] section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="section-label">Professional Journey</span>
          <h2 className="section-title">Where I've Built</h2>
          <p className="section-desc">
            Real-world experience building production systems for critical industries and innovative startups.
          </p>
        </motion.div>

        <div className="relative timeline-line">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="pl-[60px] md:pl-[60px] pb-12 last:pb-0 relative"
            >
              <div 
                className="absolute left-[11px] top-1 w-5 h-5 rounded-full border-[3px] border-[var(--bg2)] z-10"
                style={{ background: exp.color, boxShadow: `0 0 20px ${exp.shadowColor}` }}
              ></div>
              
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 transition-all duration-300 hover:border-accent hover:shadow-[0_8px_32px_rgba(124,106,247,0.1)]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-4">
                  <div>
                    <div className="text-lg font-bold mb-1">{exp.role}</div>
                    <div className="text-[var(--accent2)] text-sm font-semibold">{exp.company}</div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1.5 shrink-0">
                    <span 
                      className="border px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: exp.bgColor, borderColor: exp.borderColor, color: exp.textColor }}
                    >
                      {exp.date}
                    </span>
                    <span className="text-[var(--text3)] text-xs">{exp.location}</span>
                  </div>
                </div>
                
                <p className="text-[var(--text2)] text-sm mb-5 leading-relaxed">
                  {exp.summary}
                </p>
                
                <div className="flex flex-col gap-3">
                  {exp.projects.map((proj, projIndex) => (
                    <div key={projIndex} className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4 flex items-start gap-4">
                      <div 
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                        style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}` }}
                      ></div>
                      <div>
                        <div className="text-sm font-semibold mb-1">{proj.title}</div>
                        <div className="text-xs text-[var(--text2)] leading-relaxed">{proj.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
