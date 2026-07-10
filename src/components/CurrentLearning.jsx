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
    <section id="learning" className="section bg-section">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>Current Learning</h2>
          <p>Topics I'm actively mastering on the path to GATE DA 2027 and an AI/ML career.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {focusAreas.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">{item.label}</span>
                <span className="text-blue-400 font-semibold">{item.progress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-blue-500 h-full rounded-full"
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
