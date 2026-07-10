import React from 'react';
import { Award, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'VSM College of Engineering (JNTUK)',
    period: '2020 – 2024',
    score: '7.69 CGPA',
  },
  {
    degree: 'Intermediate (MPC)',
    field: 'Mathematics, Physics & Chemistry',
    institution: 'GRC Junior College',
    period: '2018 – 2020',
    score: '7.86 CGPA',
  },
  {
    degree: 'SSC',
    field: '10th Grade',
    institution: 'Z.P.P High School',
    period: '2017 – 2018',
    score: '9.7 CGPA',
  },
];

const Education = () => {
  return (
    <section id="education" className="section bg-section">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>Education</h2>
          <p>Academic milestones that built my technical foundation.</p>
        </div>

        <div className="space-y-4">
          {educationData.map((edu, i) => (
            <div key={i} className="card flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-100">{edu.degree}</h3>
                <p className="text-blue-400 text-sm mt-0.5">{edu.field}</p>
                <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
              </div>
              <div className="text-slate-500 text-xs sm:text-right space-y-1 shrink-0">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Calendar size={12} />
                  {edu.period}
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 font-medium text-slate-300">
                  <Award size={12} className="text-emerald-400" />
                  {edu.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
