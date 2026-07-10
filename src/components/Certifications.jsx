import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certs = [
  {
    name: 'Python Full Stack Development',
    issuer: 'Pentagon Space',
    period: 'May 2024 – October 2024',
    link: 'https://share.google/x5Tl7kNmq57RfaXGN',
    skills: ['Python', 'Django', 'MySQL', 'REST APIs', 'HTML', 'CSS'],
    description: 'Comprehensive full-stack development program covering Python backend development, Django framework, REST API design, and database-driven application development.',
  },
  {
    name: 'Software Development Fellowship',
    issuer: 'Crio.Do',
    period: 'February 2025 – April 2025',
    link: 'https://www.crio.do/learn/portfolio/eswarchittala13/',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Frontend Engineering'],
    description: 'Intensive software development fellowship focused on modern frontend engineering, real-world application building, and industry best practices.',
  },
];

const Certifications = () => {
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
    <section id="certifications" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Certifications</h2>
          <p>Credentials that validate my technical skills and continuous learning.</p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              className="card-premium flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg md:text-xl text-text mb-1">{cert.name}</h3>
                  <p className="text-text-secondary text-sm">{cert.issuer}</p>
                </div>
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-accent-emerald hover:border-white/20 transition-colors shrink-0"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </motion.a>
                )}
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">{cert.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((s) => (
                  <motion.span
                    key={s}
                    className="badge-premium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>

              {/* Period */}
              <div className="pt-4 border-t border-white/10 text-text-muted text-xs font-mono uppercase tracking-wider">
                {cert.period}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
