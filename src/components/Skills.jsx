import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend Core',
    skills: ['FastAPI', 'REST APIs', 'Authentication', 'Django'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Database Design', 'Query Optimization'],
  },
  {
    title: 'Frontend & UI',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind'],
  },
  {
    title: 'Tooling',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
  },
  {
    title: 'AI & Data Science',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow (Learning)'],
  },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="skills" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Skills & Technologies</h2>
          <p>The tools and technologies I use to build systems.</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="card-premium"
            >
              <h3 className="font-bold text-text mb-6 text-xs uppercase tracking-widest opacity-90" style={{ color: '#10b981' }}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="badge-premium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;