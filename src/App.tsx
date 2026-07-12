import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ThemeToggle from './components/ui/ThemeToggle';
import SectionLoader from './components/ui/SectionLoader';

const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Education = lazy(() => import('./components/sections/Education'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const Contact = lazy(() => import('./components/sections/Contact'));

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
        <Suspense fallback={<SectionLoader />}>
          <Experience />
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
          <Projects />
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
          <Education />
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
          <Achievements />
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent m-0"></div>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}

export default App;
