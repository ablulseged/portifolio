import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

import elaRestaurant from '../assets/ela-restaurant.webp';

const Projects = () => {
  const projects = [
    {
      title: 'Ela Restaurant System',
      description: 'A full-scale restaurant management solution with real-time order tracking, QR-based menu, admin dashboard, and waiter call system.',
      image: elaRestaurant,
      size: 'md:col-span-1 md:row-span-1',
      tags: ['MERN', 'Socket.io', 'React'],
      live: 'https://ablulsegedd.netlify.app/menu',
      github: 'https://github.com/ablulseged/'
    },
    {
      title: 'QR Ordering',
      description: 'Contactless menu & orders.',
      image: project2,
      size: 'md:col-span-1 md:row-span-1',
      tags: ['React', 'Tailwind'],
      live: 'https://ablulsegedd.netlify.app/menu',
      github: 'https://github.com/ablulseged/'
    },
    {
      title: 'Admin Suite',
      description: 'Advanced data analytics.',
      image: project3,
      size: 'md:col-span-1 md:row-span-1',
      tags: ['Dashboard', 'Chart.js'],
      live: '#',
      github: 'https://github.com/ablulseged/'
    },
    {
      title: 'UI Design Kit',
      description: 'Premium component library.',
      image: project1,
      size: 'md:col-span-1 md:row-span-1',
      tags: ['Figma', 'React'],
      live: '#',
      github: 'https://github.com/ablulseged/'
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary-600 dark:text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
            <h2 className="section-heading mb-0">PROVEN PROJECTS.</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm">
            Each project is a blend of clean architecture and intuitive design, built to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${project.size} relative group cursor-pointer overflow-hidden rounded-[32px] glass border-none aspect-[16/10]`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 dark:opacity-60 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#020617] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-700 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-black mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors flex items-center gap-2">
                    {project.title} <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" />
                  </h3>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
              
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-primary-600 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
