import React from 'react';
import { Code2, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="about" className="section relative">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>About</h2>
          <p>My journey from full stack development to AI/ML engineering.</p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Main Text */}
          <motion.div variants={item} className="md:col-span-7">
            <div className="card-premium h-full flex flex-col justify-center space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#a1a1a6' }}>
                I am a Python Backend Developer with a strong foundation in designing scalable backend systems, REST APIs, and database-driven applications. My professional experience at Sandspace Technologies involved building reliable software solutions using FastAPI and MySQL.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#a1a1a6' }}>
                Through hands-on engineering, I discovered a profound interest in solving complex problems with intelligent systems. I am currently dedicating my time to preparing for GATE Data Science & Artificial Intelligence (DA) 2027 to deepen my expertise in mathematics, statistics, and machine learning at a premier IIT.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="card-premium p-6 flex items-start gap-4 group cursor-pointer"
              >
                <motion.div
                  className="p-3 rounded-lg bg-white/5 border border-white/10 shrink-0"
                  whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <v.icon size={20} strokeWidth={1.5} style={{ color: '#10b981' }} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text text-sm mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#767680' }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;