import React from 'react';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="github" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>GitHub Stats</h2>
          <p>My open-source contributions and coding activity.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* GitHub Stats Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            className="card-premium flex justify-center items-center p-6 md:p-8 overflow-hidden"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=EswarChittala&show_icons=true&theme=transparent&hide_border=true&title_color=10b981&text_color=a1a1a6&icon_color=10b981"
              alt="Eswar's GitHub Stats"
              className="w-full h-auto filter hover:brightness-110 transition-all duration-300"
            />
          </motion.div>

          {/* GitHub Streak Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            className="card-premium flex justify-center items-center p-6 md:p-8 overflow-hidden"
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=EswarChittala&theme=transparent&hide_border=true&title_color=10b981&text_color=a1a1a6"
              alt="Eswar's GitHub Streak"
              className="w-full h-auto filter hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
