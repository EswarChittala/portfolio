import React from 'react';

const phases = [
  {
    phase: 'Phase 1',
    period: '2025 Q3 – Q4',
    title: 'Mathematical Foundations',
    tasks: [
      'Linear Algebra, Calculus, Probability Theory, Statistics',
    ],
  },
  {
    phase: 'Phase 2',
    period: '2025 Q4 – 2026 Q1',
    title: 'Machine Learning Core',
    tasks: [
      'Supervised & Unsupervised Learning, Model Evaluation, Feature Engineering',
    ],
  },
  {
    phase: 'Phase 3',
    period: '2026 Q1 – Q3',
    title: 'Deep Learning & AI',
    tasks: [
      'Neural Networks, CNNs, RNNs, Transformers, LLMs, Generative AI, MLOps',
    ],
  },
  {
    phase: 'Phase 4',
    period: '2026 Q3 – 2027 Q1',
    title: 'GATE DA Mock & Revision',
    tasks: [
      'PYQs, Full-Length Mocks, Revision, Speed & Accuracy',
    ],
  },
];

const GateJourney = () => {
  return (
    <section id="gate" className="section bg-section-alt border-y border-slate-800">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>GATE DA 2027 Journey</h2>
          <p>My structured roadmap from software engineer to AI/ML researcher at IIT.</p>
        </div>

        <div className="mb-10 text-sm text-slate-400 leading-relaxed border-l-2 border-blue-500 pl-4">
          To leverage my software engineering background and advanced AI/ML knowledge to design
          intelligent, scalable, and impactful solutions that address real-world challenges.
          My journey began in Python Full Stack Development — now I'm combining that engineering
          foundation with expertise in Machine Learning, Data Science, and Artificial Intelligence.
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {phases.map((ph, i) => (
            <div key={i} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-blue-400 font-mono tracking-wide">{ph.phase}</span>
                <span className="text-xs text-slate-500">{ph.period}</span>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">{ph.title}</h3>
              <p className="text-sm text-slate-400">
                {ph.tasks[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GateJourney;
