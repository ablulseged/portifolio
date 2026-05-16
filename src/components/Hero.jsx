import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import meImg from '../assets/me.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 md:px-12 overflow-hidden transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-600/10 dark:bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-primary-500"></span>
            <span className="text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase text-sm tracking-widest">Full-Stack Developer & IT Support</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-gray-900 dark:text-white">
            DANIEL <br /> 
            <span className="text-primary-600">LULSEGED</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-lg leading-relaxed">
            I build high-performance web and mobile applications with MERN Stack and Flutter. Passionate about solving complex problems through technology.
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium flex items-center gap-2"
            >
              Explore My Work <ArrowUpRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/Daniel_Lulseged_CV.pdf"
              download="Daniel_Lulseged_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-200 dark:border-white/10 hover:border-primary-500 glass rounded-2xl font-bold flex items-center gap-2 transition-all dark:text-white"
            >
              Download CV <Download className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="flex gap-8 items-center">
            <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Connect</span>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/ablulseged/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#7c3aed' }}
                className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:daniellulseged79@gmail.com"
                whileHover={{ y: -5, color: '#7c3aed' }}
                className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:flex flex-col items-center justify-center h-[560px]"
        >
          {/* Start Bootstrap Personal Inspired Profile Image Area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
             {/* Dotted pattern background */}
             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2.5px)', backgroundSize: '24px 24px', opacity: 0.15 }}></div>
          </div>

          {/* Glowing ring behind the circle */}
          <div className="absolute w-[440px] h-[440px] rounded-full bg-primary-600/20 dark:bg-primary-600/30 blur-[60px]" />

          {/* The main profile container */}
          <div className="relative z-10 w-[400px] h-[400px]">
             {/* 1. The Circle Layer (Clipped Bottom Half) */}
             <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-800/50 shadow-2xl">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-indigo-600 dark:from-primary-600 dark:to-indigo-700"></div>
                
                {/* Bottom half of the image (Clipped by the circle) */}
                <img 
                  src={meImg} 
                  alt="" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] max-w-none h-auto object-contain" 
                />
                
                {/* Darker Inner Shadows for depth */}
                <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]" style={{ background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.5) 100%)' }}></div>
             </div>
             
             {/* 2. The Pop-out Layer (Unclipped Top Half) */}
             <div className="absolute inset-0 overflow-visible pointer-events-none">
                <img 
                  src={meImg} 
                  alt="Daniel Lulseged" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] max-w-none h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
                  style={{ clipPath: 'inset(0 0 45% 0)' }} 
                />
             </div>
          </div>

          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 -right-12 glass p-5 rounded-3xl z-20"
          >
            <p className="text-3xl font-black text-gray-900 dark:text-white">2+</p>
            <p className="text-xs text-gray-500 uppercase font-bold text-center">Years Exp.</p>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 -left-12 glass p-5 rounded-3xl z-20"
          >
            <p className="text-3xl font-black text-gray-900 dark:text-white">10+</p>
            <p className="text-xs text-gray-500 uppercase font-bold text-center">Skills</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
