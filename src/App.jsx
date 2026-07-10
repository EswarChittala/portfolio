import React from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Experience     from './components/Experience';
import Skills         from './components/Skills';
import Education      from './components/Education';
import Certifications from './components/Certifications';
import Projects       from './components/Projects';
import CurrentLearning from './components/CurrentLearning';
import GateJourney    from './components/GateJourney';
import GitHubStats    from './components/GitHubStats';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <CurrentLearning />
      <GateJourney />
      <GitHubStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;