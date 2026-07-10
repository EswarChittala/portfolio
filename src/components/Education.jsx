import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'VSM College of Engineering (JNTUK)',
    period: '2020 – 2024',
    score: '7.69 CGPA',
  },
  {
    degree: 'Intermediate (MPC)',
    field: 'Mathematics, Physics & Chemistry',
    institution: 'GRC Junior College',
    period: '2018 – 2020',
    score: '7.86 CGPA',
  },
  {
    degree: 'SSC',
    field: '10th Grade',
    institution: 'Z.P.P High School',
    period: '2017 – 2018',
    score: '9.7 CGPA',
  },
];

const Education = () => {
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
    <section id="education" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Education</h2>
          <p>Academic milestones that built my technical foundation.</p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="card-premium flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center"
            >
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-text mb-2">{edu.degree}</h3>
                <p className="text-text-secondary text-sm mb-2">{edu.field}</p>
                <p className="text-text-muted text-xs uppercase tracking-wider">{edu.institution}</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-text-secondary text-sm font-mono mb-2">{edu.period}</div>
                <motion.span
                  className="inline-block px-3 py-1.5 rounded-lg glass-base border border-white/10 text-accent-emerald text-xs font-semibold"
                  whileHover={{ borderColor: 'rgba(16, 185, 129, 0.3)', backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                >
                  {edu.score}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
