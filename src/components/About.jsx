import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-900/[0.03] whitespace-nowrap pointer-events-none select-none uppercase">
        PASSIONATE
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
            <h2 className="section-heading">DRIVEN BY <br /> TECHNOLOGY.</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              I am a Computer Science student with skills in MERN Stack development, mobile development (Flutter), system administration, and network support.
            </p>
            <p className="text-gray-500 leading-relaxed mb-12">
              Experienced in web and mobile application development, operating systems, hardware maintenance, and IT technical support. Proficient in data management and cybersecurity, I bring a strong problem-solving mindset to every project.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-black text-gray-900 mb-2">3.37</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">CGPA @ Wachemo</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-gray-900 mb-2">2+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden glass p-8 flex flex-col justify-end group">
                <h3 className="text-sm font-black mb-2 text-gray-900 group-hover:text-primary-600 transition-colors uppercase tracking-widest">Full Stack</h3>
                <p className="text-xs text-gray-500">MERN Specialist.</p>
              </div>
              <div className="h-48 rounded-3xl overflow-hidden bg-primary-600/10 p-8 flex flex-col justify-end group">
                <h3 className="text-sm font-black mb-2 text-gray-900 group-hover:text-primary-600 transition-colors uppercase tracking-widest">Mobile</h3>
                <p className="text-xs text-gray-500">Flutter & Dart apps.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 rounded-3xl overflow-hidden bg-indigo-600/10 p-8 flex flex-col justify-end group">
                <h3 className="text-sm font-black mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-widest">IT Support</h3>
                <p className="text-xs text-gray-500">System & Network setup.</p>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden glass p-8 flex flex-col justify-end group">
                <h3 className="text-sm font-black mb-2 text-gray-900 group-hover:text-primary-600 transition-colors uppercase tracking-widest">CS BSc</h3>
                <p className="text-xs text-gray-500">Wachemo University.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
