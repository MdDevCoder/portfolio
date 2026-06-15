
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import ThemeToggle from './components/ui/ThemeToggle';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
        <Skills />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
        <Experience />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
        <Projects />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
        <Education />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
        <Achievements />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}

export default App;
