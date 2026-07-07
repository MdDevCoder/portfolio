import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch("https://formsubmit.co/ajax/muhammadshaikh4203@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
          _template: 'box'
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: '✓ Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg)] section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title text-4xl mb-6">Let's build something together.</h2>
            </div>
            
            <a className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 text-[var(--text)] transition-all duration-300 hover:border-accent hover:translate-x-1 no-underline" href="mailto:muhammadshaikh4203@gmail.com">
              <div className="w-11 h-11 rounded-xl bg-[rgba(124,106,247,0.12)] text-accent flex items-center justify-center text-xl shrink-0">📧</div>
              <div>
                <div className="text-[13px] font-bold mb-0.5">Email</div>
                <div className="text-xs text-[var(--text2)]">muhammadshaikh4203@gmail.com</div>
              </div>
            </a>
            
            <a className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 text-[var(--text)] transition-all duration-300 hover:border-accent hover:translate-x-1 no-underline" href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <div className="w-11 h-11 rounded-xl bg-[rgba(34,197,94,0.12)] text-green-500 flex items-center justify-center text-xl shrink-0">🐙</div>
              <div>
                <div className="text-[13px] font-bold mb-0.5">GitHub</div>
                <div className="text-xs text-[var(--text2)]">View my open source work</div>
              </div>
            </a>
            
            <a className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 text-[var(--text)] transition-all duration-300 hover:border-accent hover:translate-x-1 no-underline" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <div className="w-11 h-11 rounded-xl bg-[rgba(6,182,212,0.12)] text-teal-400 flex items-center justify-center text-xl shrink-0">💼</div>
              <div>
                <div className="text-[13px] font-bold mb-0.5">LinkedIn</div>
                <div className="text-xs text-[var(--text2)]">Connect with me professionally</div>
              </div>
            </a>
            
            <div className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 text-[var(--text)] cursor-default">
              <div className="w-11 h-11 rounded-xl bg-[rgba(245,158,11,0.12)] text-amber-500 flex items-center justify-center text-xl shrink-0">📍</div>
              <div>
                <div className="text-[13px] font-bold mb-0.5">Location</div>
                <div className="text-xs text-[var(--text2)]">Vyara, Gujarat, India · Open to remote</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8"
          >
            <div className="text-lg font-bold mb-6">Send a Message</div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[var(--text2)]">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Alex Johnson"
                    className="w-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] p-3 rounded-xl text-[13px] font-sans transition-all duration-300 outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,106,247,0.1)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[var(--text2)]">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="alex@company.com"
                    className="w-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] p-3 rounded-xl text-[13px] font-sans transition-all duration-300 outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,106,247,0.1)]"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-[var(--text2)]">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Job opportunity / Freelance project / Collaboration"
                  className="w-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] p-3 rounded-xl text-[13px] font-sans transition-all duration-300 outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,106,247,0.1)]"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[var(--text2)]">Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] p-3 rounded-xl text-[13px] font-sans transition-all duration-300 outline-none resize-none min-h-[120px] focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,106,247,0.1)]"
                ></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full btn-primary justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
              
              {status.type && (
                <div className={`mt-2 text-[13px] font-medium ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
