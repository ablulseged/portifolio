import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer (Personal Projects)',
      company: 'Self-Employed',
      year: '2023 — PRES',
      desc: 'Developing high-end web and mobile applications (MERN & Flutter). Focused on restaurant management systems and real-time dashboards.'
    },
    {
      role: 'B.Sc. in Computer Science',
      company: 'Wachemo University',
      year: '2022 — 2026',
      desc: 'Specializing in software engineering, system administration, and network support. Maintaining a strong academic record with a focus on practical implementation.'
    },
    {
      role: 'IT Support Specialist',
      company: 'Academic & Personal Projects',
      year: '2022 — PRES',
      desc: 'Handling hardware maintenance, software testing, and IT support tasks through continuous practice and technical activities.'
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary-600 dark:text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Professional Path</span>
            <h2 className="section-heading">JOURNEY & <br /> EDUCATION.</h2>
          </div>
          
          <div className="space-y-1px bg-gray-300 dark:bg-white/5 border border-gray-300 dark:border-white/5 rounded-[40px] overflow-hidden shadow-sm dark:shadow-none">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.02)' }}
                className="p-12 transition-all flex flex-col md:flex-row justify-between items-start gap-8 bg-slate-50 dark:bg-transparent"
              >
                <div>
                  <h3 className="text-2xl font-black mb-2 text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary-600 dark:text-primary-500 font-bold mb-4">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-500 leading-relaxed max-w-sm">{exp.desc}</p>
                </div>
                <span className="text-sm font-black text-gray-400 dark:text-white/20 whitespace-nowrap pt-2">{exp.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
