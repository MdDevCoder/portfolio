import { motion } from 'framer-motion';
import { educationData } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="bg-[var(--bg2)] section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-desc mx-auto">
            Strong academic performance across computer science education, with consistent top-tier scores.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-1 group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(124,106,247,0.15),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-[11px] font-bold text-[var(--accent2)] uppercase tracking-widest mb-2">{edu.degree}</div>
              <div className="text-base font-bold mb-1 text-[var(--text)]">{edu.school}</div>
              <div className="text-sm text-[var(--text2)] mb-4">{edu.sub}</div>
              
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${edu.scoreClass}`}>
                {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
