import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Junior Software Engineer',
    company: 'Sandspace Technologies Pvt. Ltd.',
    period: 'July 2025 – July 2026',
    location: 'Vijayawada, Andhra Pradesh',
    bullets: [
      'Developed and maintained RESTful APIs using FastAPI, serving production workloads with high reliability.',
      'Designed and optimized MySQL database schemas, queries, and stored procedures for performance.',
      'Collaborated with frontend developers to integrate APIs and ensure seamless user experiences.',
      'Delivered backend features and enhancements for production applications.',
    ],
  },
  {
    role: 'Software Development Fellowship',
    company: 'Crio.Do',
    period: 'February 2025 – April 2025',
    location: 'Remote',
    bullets: [
      'Built responsive web applications using modern frontend technologies.',
      'Strengthened problem-solving skills through real-world development assignments.',
      'Learned collaborative development workflows, debugging techniques, and clean coding practices.',
    ],
  },
  {
    role: 'Python Full Stack Development Intern',
    company: 'Pentagon Space',
    period: 'May 2024 – October 2024',
    location: 'Bengaluru, Karnataka',
    bullets: [
      'Learned and implemented backend development using Python and Django framework.',
      'Developed responsive web interfaces and integrated them with backend services.',
      'Worked with relational databases and CRUD operations.',
    ],
  },
];

const Experience = () => {
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
    <section id="experience" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Experience</h2>
          <p>Professional roles and hands-on learning.</p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="card-premium group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-text tracking-tight mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="font-semibold text-accent-emerald">{exp.company}</span>
                    <span className="hidden sm:inline text-text-muted">•</span>
                    <span className="text-text-muted">{exp.location}</span>
                  </div>
                </div>
                <motion.div
                  className="text-sm md:text-base font-mono text-text-secondary whitespace-nowrap md:text-right"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {exp.period}
                </motion.div>
              </div>

              {/* Divider */}
              <div className="divider-premium mb-6"></div>

              {/* Bullets */}
              <ul className="space-y-4">
                {exp.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    className="flex items-start gap-4 text-base leading-relaxed"
                    style={{ color: '#a1a1a6' }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * (j + 1) }}
                    viewport={{ once: true }}
                  >
                    <span className="text-accent-emerald font-bold mt-1 shrink-0">›</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;