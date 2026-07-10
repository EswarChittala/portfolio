import React from 'react';

const phases = [
  {
    phase: 'Phase 1',
    period: '2025 Q3 – Q4',
    title: 'Mathematical Foundations',
    tasks: ['Linear Algebra, Calculus, Probability Theory, Statistics'],
  },
  {
    phase: 'Phase 2',
    period: '2025 Q4 – 2026 Q1',
    title: 'Machine Learning Core',
    tasks: ['Supervised & Unsupervised Learning, Model Evaluation, Feature Engineering'],
  },
  {
    phase: 'Phase 3',
    period: '2026 Q1 – Q3',
    title: 'Deep Learning & AI',
    tasks: ['Neural Networks, CNNs, RNNs, Transformers, LLMs, Generative AI, MLOps'],
  },
  {
    phase: 'Phase 4',
    period: '2026 Q3 – 2027 Q1',
    title: 'GATE DA Mock & Revision',
    tasks: ['PYQs, Full-Length Mocks, Revision, Speed & Accuracy'],
  },
];

const GateJourney = () => {
  return (
    <section id="gate" className="section relative border-b border-white/5">
      <div className="container-inner">
        <div className="section-heading animate-fade-up">
          <h2>GATE DA 2027 Journey</h2>
          <p>My structured roadmap from software engineer to AI/ML researcher at IIT.</p>
        </div>

        <div className="mb-16 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-sm text-zinc-400 leading-relaxed animate-fade-up delay-100">
          <span className="text-emerald-400 font-medium block mb-2">Vision</span>
          To leverage my software engineering background and advanced AI/ML knowledge to design
          intelligent, scalable, and impactful solutions that address real-world challenges.
          My journey began in Python Full Stack Development — now I'm combining that engineering
          foundation with expertise in Machine Learning, Data Science, and Artificial Intelligence.
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up delay-200">
          {phases.map((ph, i) => (
            <div key={i} className="premium-card !p-5">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">{ph.phase}</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">{ph.period}</span>
              </div>
              <h3 className="font-medium text-white text-sm mb-3">{ph.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
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
