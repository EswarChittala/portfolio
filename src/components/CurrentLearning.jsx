import React from 'react';
import { motion } from 'framer-motion';

const focusAreas = [
  { label: 'Data Structures & Algorithms', progress: 55 },
  { label: 'Mathematics for Data Science', progress: 60 },
  { label: 'Probability & Statistics', progress: 65 },
  { label: 'Linear Algebra', progress: 60 },
  { label: 'Machine Learning', progress: 50 },
  { label: 'Deep Learning', progress: 35 },
  { label: 'Data Science & Python', progress: 70 },
  { label: 'SQL & Databases', progress: 80 },
  { label: 'Large Language Models (LLMs)', progress: 25 },
  { label: 'Generative AI', progress: 20 },
  { label: 'MLOps', progress: 15 },
  { label: 'GATE DA 2027 Preparation', progress: 45 },
];

const CurrentLearning = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="learning" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Current Learning</h2>
          <p>Topics I'm actively mastering on the path to GATE DA 2027 and an AI/ML career.</p>
        </motion.div>

        {/* Learning Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {focusAreas.map((item, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group"
            >
              {/* Label & Progress */}
              <div className="flex justify-between items-center mb-3 group-hover:text-text transition-colors">
                <span className="text-text-secondary group-hover:text-text text-sm md:text-base font-medium transition-colors">
                  {item.label}
                </span>
                <motion.span
                  className="text-accent-emerald font-mono text-xs font-bold"
                  key={`progress-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.progress}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden relative border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-emerald to-accent-purple rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 rounded-full opacity-50 blur-sm bg-gradient-to-r from-accent-emerald to-accent-purple" style={{ width: `${item.progress}%` }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentLearning;
