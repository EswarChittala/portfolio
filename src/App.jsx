import React from 'react';
import { ReactLenis } from 'lenis/react';

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
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      <div className="min-h-screen bg-bg-primary text-text font-sans antialiased overflow-x-hidden relative">
        {/* Premium Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay"></div>
          
          {/* Animated Gradient Mesh - Emerald Focus */}
          <div className="absolute top-[-30%] left-[-10%] w-96 h-96 bg-gradient-to-br from-accent-emerald/10 to-transparent blur-3xl rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
          
          {/* Animated Gradient Mesh - Purple Accent */}
          <div className="absolute bottom-[-20%] right-[-5%] w-96 h-96 bg-gradient-to-tl from-accent-purple/8 to-transparent blur-3xl rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          
          {/* Subtle Radial Gradient */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial opacity-30"></div>
        </div>

        <div className="relative z-10">
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
      </div>
    </ReactLenis>
  );
}

export default App;