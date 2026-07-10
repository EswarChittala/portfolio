import React from 'react';

const focusAreas = [
  { label: 'Data Structures & Algorithms', progress: 55 },
  { label: 'Mathematics for Data Science', progress: 60 },
  { label: 'Probability & Statistics', progress: 65 },
  { label: 'Linear Algebra', progress: 60 },
  { label: 'Machine Learning', progress: 50 },
  { label: 'Deep Learning', progress: 35 },
  { label: 'Data Science & Python', progress: 70 },
  { label: 'SQL & Databases', progress: 80 },
  { label: 'Large Language Models (LLMs)', progress: 25 },
  { label: 'Generative AI', progress: 20 },
  { label: 'MLOps', progress: 15 },
  { label: 'GATE DA 2027 Preparation', progress: 45 },
];

const CurrentLearning = () => {
  return (
    <section id="learning" className="section bg-[#09090b] border-b border-white/5">
      <div className="container-inner">
        <div className="section-heading animate-fade-up">
          <h2>Current Learning</h2>
          <p>Topics I'm actively mastering on the path to GATE DA 2027 and an AI/ML career.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8 animate-fade-up delay-100">
          {focusAreas.map((item, i) => (
            <div key={i} className="flex flex-col gap-3 group">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-300 group-hover:text-white transition-colors">{item.label}</span>
                <span className="text-emerald-500 font-mono text-xs">{item.progress}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-emerald-500/80 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentLearning;
