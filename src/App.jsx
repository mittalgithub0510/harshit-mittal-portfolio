import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Hero from './sections/Hero';
import Education from './sections/Education';
import Internship from './sections/Internship';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import ContactSection from './sections/ContactSection';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme-bw');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme-bw', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="site">
      <a className="sr-only" href="#top">
        Skip to content
      </a>
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Education />
        <Internship />
        <Projects />
        <Skills />
        <Achievements />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
