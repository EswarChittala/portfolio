import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    languages: ['HTML5', 'CSS', 'JavaScript', 'ReactJs', 'Bootstrap'],
    tools: ['Git', 'GitHub', 'VS Code'],
    databases: ['MySQL', 'RDBMS'],
    concepts: ['OOPs', 'Data Structures', 'REST APIs', 'SDLC', 'Linux']
  };

  const categories = [
    { title: 'Languages & Tools', items: skills.languages.concat(skills.tools) },
    { title: 'Databases', items: skills.databases },
    { title: 'Concepts', items: skills.concepts }
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;