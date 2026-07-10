import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

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
  return (
    <section id="experience" className="section bg-section-alt">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>Experience</h2>
          <p>Professional roles and hands-on learning.</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="card">
              <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                <div>
                  <h3 className="font-semibold text-slate-100">{exp.role}</h3>
                  <div className="text-blue-400 text-sm mt-1">{exp.company}</div>
                </div>
                <div className="text-slate-500 text-xs sm:text-right space-y-1">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Calendar size={12} /> {exp.period}
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin size={12} /> {exp.location}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-slate-600 mt-1 shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;