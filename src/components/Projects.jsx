import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
  return (
    <section id="projects" className="section bg-section-alt">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <p>Real-world applications showcasing my backend and full-stack capabilities.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="card flex flex-col h-full">
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="font-semibold text-slate-100 text-lg">{proj.title}</h3>
                <div className="flex gap-2 text-slate-400 shrink-0">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {proj.demo !== '#' && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-1">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t) => (
                  <span key={t} className="skill-tag text-xs">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;