import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio with modern UI/UX design.",
      tech: ["Frontend: Javascript + React 18 + Vite", "Styling: Modern CSS with animations","Deployment: Vercel ready"],
      github: "https://github.com/EswarChittala/portfolio/tree/main",
      demo: "https://eswararao13portfolio.netlify.app/"
    },
    {
      title: "Contact-Book",
      desc: "A modern, full-stack Contact Book application with a beautiful dark theme UI and robust backend API.",
      tech: ["Frontend: React 18 + Vite", "Backend: Node.js + Express", "Styling: Modern CSS with animations","Deployment: Vercel ready"],
      github: "https://github.com/EswarChittala/Contact_book",
      demo: "https://contact-book-3vor.vercel.app/"
    },
    {
      title: "Foreign University Admission Prediction",
      desc: "ML system to predict admission probabilities with 85% accuracy.",
      tech: ["Python", "Django", "MySQL", "ML"],
      github: "https://github.com/EswarChittala/University_Admission_Prediction_System_Database",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.github}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Github size={16} className="mr-1" />
                  Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.demo}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;