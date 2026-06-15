const Footer = () => {
  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--border)] pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div>
            <div className="text-xl font-extrabold tracking-tight text-gradient mb-1">
              Shaikh Muhammad
            </div>
            <div className="text-sm text-[var(--text3)]">
              Software Engineer · Product Builder · Full Stack Developer
            </div>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/" className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text2)] text-base no-underline transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a>
            <a href="https://linkedin.com/" className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text2)] text-base no-underline transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer" title="LinkedIn">💼</a>
            <a href="https://cryptiqverse.xyz" className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text2)] text-base no-underline transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer" title="CryptiqVerse">🌐</a>
            <a href="mailto:muhammadshaikh4203@gmail.com" className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text2)] text-base no-underline transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5" title="Email">📧</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mb-8">
          <a href="#about" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">About</a>
          <a href="#skills" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">Skills</a>
          <a href="#experience" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">Experience</a>
          <a href="#projects" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">Projects</a>
          <a href="#education" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">Education</a>
          <a href="#achievements" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">Achievements</a>
          <a href="#certifications" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">Certifications</a>
          <a href="#contact" className="text-[var(--text3)] text-sm font-medium no-underline transition-colors hover:text-[var(--text)]">Contact</a>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[var(--border)]">
          <div className="text-sm text-[var(--text3)]">
            © {new Date().getFullYear()} Shaikh Muhammad. All rights reserved.
          </div>
          <div className="text-sm text-[var(--text3)]">
            Built with <span className="text-pink-400">♥</span> and a lot of ☕
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
