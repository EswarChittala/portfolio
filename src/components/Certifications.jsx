import React from 'react';
import { ExternalLink, Calendar, Building2 } from 'lucide-react';

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
  return (
    <section id="certifications" className="section bg-section-alt">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>Certifications</h2>
          <p>Credentials that validate my technical skills and continuous learning.</p>
        </div>

        <div className="space-y-4">
          {certs.map((cert, i) => (
            <div key={i} className="card flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-slate-100 text-base">{cert.name}</h3>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 shrink-0">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-blue-400 text-sm font-medium mb-3">
                  <Building2 size={14} />
                  {cert.issuer}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((s) => (
                    <span key={s} className="skill-tag text-xs">{s}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-48 shrink-0 text-slate-500 text-xs flex items-center md:items-start md:justify-end gap-1.5 pt-1 border-t md:border-t-0 border-slate-800">
                <Calendar size={12} />
                {cert.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
