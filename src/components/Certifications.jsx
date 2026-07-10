import React from 'react';
import { ExternalLink } from 'lucide-react';

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
    <section id="certifications" className="section relative border-b border-white/5">
      <div className="container-inner">
        <div className="section-heading animate-fade-up">
          <h2>Certifications</h2>
          <p>Credentials that validate my technical skills and continuous learning.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 animate-fade-up delay-100">
          {certs.map((cert, i) => (
            <div key={i} className="premium-card flex flex-col group">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-medium text-white text-lg">{cert.name}</h3>
                  <div className="text-zinc-500 text-sm mt-1">{cert.issuer}</div>
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors shrink-0">
                    <ExternalLink size={16} strokeWidth={1.5} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((s) => (
                  <span key={s} className="badge-premium">{s}</span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/5 text-zinc-500 text-xs font-mono uppercase tracking-wider">
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
