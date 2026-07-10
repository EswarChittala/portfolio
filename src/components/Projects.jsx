import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Responsive developer portfolio built with React 18 + Vite, featuring a flat minimalist design and component-based architecture.',
    tech: ['React 18', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/EswarChittala/portfolio/tree/main',
    demo: 'https://eswararao13portfolio.netlify.app/',
  },
  {
    title: 'Contact Book',
    desc: 'Full-stack contact management app with a clean UI, Node.js + Express backend, and full CRUD operations.',
    tech: ['React 18', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/EswarChittala/Contact_book',
    demo: 'https://contact-book-3vor.vercel.app/',
  },
  {
    title: 'Foreign University Admission Prediction',
    desc: 'Machine Learning web app predicting admission chances based on GRE, TOEFL, and CGPA scores.',
    tech: ['Python', 'Django', 'MySQL', 'Scikit-learn', 'Bootstrap'],
    github: 'https://github.com/EswarChittala/Foreign_University_Admission_Prediction',
    demo: '#',
  },
];

const Projects = () => {
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
    <section id="projects" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Featured Projects</h2>
          <p>Real-world applications showcasing my backend and full-stack capabilities.</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8 }}
              className="card-premium flex flex-col h-full overflow-hidden"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6 gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-accent-emerald shrink-0"
                  whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
                >
                  <Github size={20} strokeWidth={1.5} />
                </motion.div>
                <div className="flex gap-2 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  {proj.github && (
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors text-text-secondary hover:text-accent-emerald"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} strokeWidth={1.5} />
                    </motion.a>
                  )}
                  {proj.demo !== '#' && (
                    <motion.a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors text-text-secondary hover:text-accent-emerald"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} strokeWidth={1.5} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-text mb-3">{proj.title}</h3>
              <p className="text-text-secondary text-sm mb-8 flex-1 leading-relaxed">{proj.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t) => (
                  <motion.span
                    key={t}
                    className="badge-premium text-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* View Project Link */}
              {proj.demo !== '#' && (
                <motion.a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-emerald text-sm font-semibold flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  View Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;