import React from 'react';

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'Authentication', 'Django'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Database Design', 'Query Optimization'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Design'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
  },
  {
    title: 'AI & ML',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Deep Learning', 'TensorFlow (Learning)', 'PyTorch (Learning)'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-section">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>Skills & Technologies</h2>
          <p>The tools and technologies I use to build systems.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold text-slate-100 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;