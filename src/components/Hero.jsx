import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 25 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="section-inner relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 md:space-y-10"
        >
          {/* Status Badge */}
          <motion.div variants={item}>
            <motion.div 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-base border-premium backdrop-blur-md"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-emerald"></span>
              </span>
              <span className="text-xs md:text-sm font-medium text-text-secondary">
                Available for New Opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={item} className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-text leading-[1.1]">
              Eswara Rao.
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald to-accent-purple"
            >
              Software Engineer.
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={item}
            className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl leading-relaxed font-light"
          >
            Python Backend Developer with professional experience building scalable REST APIs and database-driven applications. Transitioning into applied Artificial Intelligence and Machine Learning via GATE DA 2027.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <motion.a 
              href="#projects" 
              className="btn-premium-base bg-white text-black font-semibold hover:shadow-premium-lg group overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <motion.span 
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-emerald/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            
            <motion.a
              href="https://drive.google.com/file/d/1uzev4qSczuC2ybO1xzD_0auhgihJhXWk/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn-premium-base border border-white/20 text-text hover:border-white/40 hover:bg-white/5 font-semibold"
              whileHover={{ scale: 1.02, borderColor: 'rgba(245, 245, 247, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-br from-accent-emerald to-transparent blur-3xl rounded-full pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Hero;