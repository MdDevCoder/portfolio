import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-[var(--bg2)] section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(124,106,247,0.08)] to-transparent pointer-events-none"></div>
              <div className="w-24 h-24 rounded-full border-2 border-accent mb-5 overflow-hidden shadow-[0_0_20px_rgba(124,106,247,0.3)] bg-[var(--surface2)]">
                <img src="/profile.png" alt="Shaikh Muhammad" className="w-full h-full object-cover" />
              </div>
              <div className="text-xl font-bold mb-1 text-[var(--text)]">Shaikh Muhammad Abdulkhalik</div>
              <div className="text-accent2 text-sm font-medium mb-5">Software Engineer · Product Builder</div>
              
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3 text-sm text-[var(--text2)]"><span className="text-teal text-base shrink-0">📍</span>Vyara, Gujarat, India</div>
                <div className="flex items-center gap-3 text-sm text-[var(--text2)]"><span className="text-teal text-base shrink-0">🎓</span>MCA - Uka Tarsadia University</div>
                <div className="flex items-center gap-3 text-sm text-[var(--text2)]"><span className="text-teal text-base shrink-0">💼</span>Previously @ Sirius Global Ltd.</div>
                <div className="flex items-center gap-3 text-sm text-[var(--text2)]"><span className="text-teal text-base shrink-0">🌐</span>Full Stack · Mobile · Cloud · Web3</div>
                <div className="flex items-center gap-3 text-sm text-[var(--text2)]"><span className="text-teal text-base shrink-0">📧</span>muhammadshaikh4203@gmail.com</div>
                <div className="flex items-center gap-3 text-sm text-[var(--text2)]"><span className="text-teal text-base shrink-0">📱</span>+91-7990521332</div>
              </div>
            </div>

            <div className="static md:absolute md:-bottom-5 md:-right-5 flex flex-row flex-wrap md:flex-col gap-3 mt-4 md:mt-0">
              <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-xl py-3 px-4 flex items-center gap-3 text-xs font-medium shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-w-[180px]">
                <span className="text-lg">⚛️</span>React · Next.js
              </div>
              <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-xl py-3 px-4 flex items-center gap-3 text-xs font-medium shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-w-[180px]">
                <span className="text-lg">📱</span>Android Native
              </div>
              <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-xl py-3 px-4 flex items-center gap-3 text-xs font-medium shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-w-[180px]">
                <span className="text-lg">☁️</span>Cloud & IoT
              </div>
              <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-xl py-3 px-4 flex items-center gap-3 text-xs font-medium shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-w-[180px]">
                <span className="text-lg">🔐</span>Cybersecurity
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">Engineer.<br/>Builder.<br/>Problem Solver.</h2>
            
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-teal to-pink-400"></div>
              <p className="text-[var(--text2)] leading-relaxed text-sm mb-4">
                I'm a <strong className="text-[var(--text)]">Software Engineer and MCA graduate</strong> who gets excited about turning ideas into working products. 
                I've built enterprise-grade web systems for a nuclear power station, launched a Web3 marketplace platform, 
                developed IoT-powered attendance systems, and engineered Android apps used in real operational environments.
              </p>
              <p className="text-[var(--text2)] leading-relaxed text-sm mb-4">
                My work spans the full stack — from React frontends to PHP/Java backends, from MongoDB to MySQL, 
                from RFID hardware integrations to cloud deployments. I think of myself not just as a code writer, 
                but as a <strong className="text-[var(--text)]">product thinker</strong> who cares about the user on the other side of every screen.
              </p>
              <p className="text-[var(--text2)] leading-relaxed text-sm">
                I'm actively deepening my knowledge in <strong className="text-[var(--text)]">AI/ML, cybersecurity, and cloud architecture</strong>, 
                because I believe the next decade of software will be defined by engineers who can build intelligently and securely.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.2)] text-[var(--accent3)] px-3.5 py-1.5 rounded-full text-xs font-medium">🚀 Product Thinking</span>
              <span className="bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.2)] text-[var(--accent3)] px-3.5 py-1.5 rounded-full text-xs font-medium">🧠 AI Enthusiast</span>
              <span className="bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.2)] text-[var(--accent3)] px-3.5 py-1.5 rounded-full text-xs font-medium">🔐 Security Curious</span>
              <span className="bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.2)] text-[var(--accent3)] px-3.5 py-1.5 rounded-full text-xs font-medium">🌍 Web3 Builder</span>
              <span className="bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.2)] text-[var(--accent3)] px-3.5 py-1.5 rounded-full text-xs font-medium">📱 Mobile Dev</span>
              <span className="bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.2)] text-[var(--accent3)] px-3.5 py-1.5 rounded-full text-xs font-medium">⚡ IoT Explorer</span>
              <span className="bg-[rgba(124,106,247,0.1)] border border-[rgba(124,106,247,0.2)] text-[var(--accent3)] px-3.5 py-1.5 rounded-full text-xs font-medium">☁️ Cloud Learner</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
