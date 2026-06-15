import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border2)] flex items-center justify-center cursor-pointer text-xl shadow-lg transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110"
      title="Toggle theme"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
