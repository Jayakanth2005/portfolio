import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Accomplishments from './components/Accomplishments';
import Papers from './components/Papers';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Accomplishments />
        <Papers />
        <Volunteering />
        <Contact />
      </main>
    </div>
  );
}

export default App;