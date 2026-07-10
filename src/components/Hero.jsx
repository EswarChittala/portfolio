import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-24 border-b border-slate-800/50 bg-section">
      <div className="container max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 badge badge-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Available for New Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-slate-100">
            Hi, I'm <span className="text-gradient">Eswar Rao</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
            Python Backend Developer & Aspiring AI/ML Engineer
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            I'm a backend engineer with professional experience building scalable REST APIs and database-driven applications. I am currently preparing for GATE DA 2027 to pursue an M.Tech from a premier IIT, transitioning into applied Artificial Intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="btn btn-primary w-full sm:w-auto group">
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1uzev4qSczuC2ybO1xzD_0auhgihJhXWk/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline w-full sm:w-auto"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-40 h-40 md:w-64 md:h-64 shrink-0 relative"
        >
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-2xl" />
          <img
            src="/Face.jpg"
            alt="Eswar Rao Chittala"
            className="w-full h-full object-cover rounded-full border-2 border-indigo-500/20 relative z-10"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;