import { motion } from 'framer-motion';
import { achievementsData } from '../../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[var(--bg)] section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Highlights</span>
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementsData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 text-center transition-all duration-300 hover:border-amber-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)]"
            >
              <span className="block text-[40px] mb-3">{item.icon}</span>
              <span className="block text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-amber-500 to-green-500 mb-1">
                {item.stat}
              </span>
              <div className="text-[15px] font-bold mb-1.5 text-[var(--text)]">{item.title}</div>
              <div className="text-[13px] text-[var(--text2)] leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
