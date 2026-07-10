import React from 'react';
import { Code2, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    desc: 'Writing maintainable, scalable, and modular backend code.'
  },
  {
    icon: Target,
    title: 'Data-Driven',
    desc: 'Focusing on metrics, optimization, and efficient algorithms.'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Growth',
    desc: 'Constantly learning and adapting to new AI/ML trends.'
  }
];

const About = () => {
  return (
    <section id="about" className="section bg-section">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>About Me</h2>
          <p>My journey from full stack development to AI/ML engineering.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I am a Python Backend Developer with a strong foundation in designing scalable backend systems, REST APIs, and database-driven applications. My professional experience at Sandspace Technologies involved building reliable software solutions using FastAPI and MySQL.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Through hands-on engineering, I discovered a profound interest in solving complex problems with intelligent systems. I am currently dedicating my time to preparing for GATE Data Science & Artificial Intelligence (DA) 2027 to deepen my expertise in mathematics, statistics, and machine learning at a premier IIT.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <div key={i} className="card flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-md text-slate-300 shrink-0">
                  <v.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 text-sm">{v.title}</h3>
                  <p className="text-slate-400 text-xs mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;