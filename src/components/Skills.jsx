import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'MERN Stack', level: '95%', color: 'bg-primary-500' },
    { name: 'Flutter & Dart', level: '90%', color: 'bg-blue-400' },
    { name: 'System Admin', level: '85%', color: 'bg-green-500' },
    { name: 'Network Setup', level: '80%', color: 'bg-emerald-500' },
    { name: 'Hardware Maint.', level: '95%', color: 'bg-cyan-500' },
    { name: 'Cybersecurity', level: '85%', color: 'bg-gray-500' },
    { name: 'Git & GitHub', level: '90%', color: 'bg-orange-500' },
    { name: 'MS Office', level: '95%', color: 'bg-blue-600' },
    { name: 'Linux/OS', level: '85%', color: 'bg-gray-800' },
  ];

  return (
    <section id="skills" className="py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">Abilities</span>
          <h2 className="section-heading">TECH STACK.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-8 rounded-[32px] group hover:border-primary-500/50 transition-all"
            >
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-primary-600 transition-colors">{skill.name}</h3>
                <span className="text-sm font-bold text-gray-400">{skill.level}</span>
              </div>
              <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Effect */}
        <div className="mt-32 overflow-hidden flex whitespace-nowrap mask-radial opacity-20 grayscale hover:grayscale-0 transition-all">
          <div className="flex animate-scroll gap-20 text-6xl font-black text-gray-900/10">
            <span>MONGODB</span>
            <span>EXPRESS</span>
            <span>REACT</span>
            <span>NODE.JS</span>
            <span>FLUTTER</span>
            <span>DART</span>
            <span>CYBERSECURITY</span>
            <span>NETWORKING</span>
          </div>
          <div className="flex animate-scroll gap-20 text-6xl font-black text-gray-900/10 ml-20">
            <span>MONGODB</span>
            <span>EXPRESS</span>
            <span>REACT</span>
            <span>NODE.JS</span>
            <span>FLUTTER</span>
            <span>DART</span>
            <span>CYBERSECURITY</span>
            <span>NETWORKING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
