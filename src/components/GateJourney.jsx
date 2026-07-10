import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: 'Phase 1',
    period: '2025 Q3 – Q4',
    title: 'Mathematical Foundations',
    tasks: ['Linear Algebra, Calculus, Probability Theory, Statistics'],
  },
  {
    phase: 'Phase 2',
    period: '2025 Q4 – 2026 Q1',
    title: 'Machine Learning Core',
    tasks: ['Supervised & Unsupervised Learning, Model Evaluation, Feature Engineering'],
  },
  {
    phase: 'Phase 3',
    period: '2026 Q1 – Q3',
    title: 'Deep Learning & AI',
    tasks: ['Neural Networks, CNNs, RNNs, Transformers, LLMs, Generative AI, MLOps'],
  },
  {
    phase: 'Phase 4',
    period: '2026 Q3 – 2027 Q1',
    title: 'GATE DA Mock & Revision',
    tasks: ['PYQs, Full-Length Mocks, Revision, Speed & Accuracy'],
  },
];

const GateJourney = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="gate" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>GATE DA 2027 Journey</h2>
          <p>My structured roadmap from software engineer to AI/ML researcher at IIT.</p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 p-6 md:p-8 rounded-xl glass-base border border-white/10 text-sm text-text-secondary leading-relaxed"
        >
          <span className="text-accent-emerald font-semibold block mb-3">Vision</span>
          To leverage my software engineering background and advanced AI/ML knowledge to design
          intelligent, scalable, and impactful solutions that address real-world challenges.
          My journey began in Python Full Stack Development — now I'm combining that engineering
          foundation with expertise in Machine Learning, Data Science, and Artificial Intelligence.
        </motion.div>

        {/* Phases Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {phases.map((ph, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="card-premium p-6"
            >
              {/* Phase Badge & Period */}
              <div className="flex justify-between items-start gap-2 mb-4">
                <motion.span
                  className="px-2.5 py-1 rounded-lg bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs font-bold uppercase tracking-widest"
                  whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
                >
                  {ph.phase}
                </motion.span>
                <span className="text-text-muted text-xs font-mono uppercase tracking-widest">{ph.period}</span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-text text-sm md:text-base mb-3 leading-tight">{ph.title}</h3>

              {/* Tasks */}
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                {ph.tasks[0]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GateJourney;
