import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        const sectionTop = (s as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = s.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#achievements', label: 'Achievements' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[var(--border)] transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex-shrink-0">
          <a href="#hero" className="text-xl font-bold text-gradient tracking-tight no-underline font-mono">
            &lt;MdDevCoder /&gt;
          </a>
        </div>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-center gap-1 list-none m-0 p-0 flex-1 mx-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[var(--surface)] ${activeSection === link.href.substring(1) ? 'text-[var(--text)]' : 'text-[var(--text2)] hover:text-[var(--text)]'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center flex-shrink-0 gap-2">
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent2 hover:-translate-y-[1px] transition-all duration-300">
            Let's Talk ↗
          </a>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden bg-transparent border-none text-[var(--text)] p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden flex flex-col gap-1 px-6 pb-6 pt-2 border-t border-[var(--border)] bg-[var(--bg)] ${isOpen ? 'block' : 'hidden'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 rounded-lg text-sm font-medium text-[var(--text2)] hover:bg-[var(--surface)] hover:text-[var(--text)] transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="px-4 py-3 rounded-lg text-sm font-medium text-[var(--text2)] hover:bg-[var(--surface)] hover:text-[var(--text)] transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
