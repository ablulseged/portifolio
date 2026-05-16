import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

import elaRestaurant from '../assets/ela-restaurant.webp';
import aplusLounge from '../assets/aplus-lounge.png';
import mhmkChurch from '../assets/mhmk-church.png';

const Projects = () => {
  const projects = [
    {
      title: 'MHMK Church',
      description: 'A dedicated platform for Mehal Hossana MesreteKerestos Church, featuring service schedules, spiritual resources, and community announcements.',
      image: mhmkChurch,
      size: 'md:col-span-1',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      live: 'https://cheery-cuchufli-b00210.netlify.app/',
      github: 'https://github.com/ablulseged/'
    },
    {
      title: 'A-Plus Lounge',
      description: 'A premium food delivery and lounge management system with real-time order tracking and a seamless user experience.',
      image: aplusLounge,
      size: 'md:col-span-1',
      tags: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
      live: 'https://apluslounge.netlify.app/app',
      github: 'https://github.com/ablulseged/'
    },
    {
      title: 'Ela Restaurant System',
      description: 'A full-scale restaurant management solution with real-time order tracking, QR-based menu, admin dashboard, and waiter call system.',
      image: elaRestaurant,
      size: 'md:col-span-2',
      tags: ['MERN', 'Socket.io', 'React'],
      live: 'https://ablulsegedd.netlify.app/menu',
      github: 'https://github.com/ablulseged/'
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
            <h2 className="section-heading mb-0">PROVEN PROJECTS.</h2>
          </div>
          <p className="text-gray-600 max-w-sm">
            Each project is a blend of clean architecture and intuitive design, built to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${project.size} relative group cursor-pointer overflow-hidden rounded-[32px] glass border-none aspect-[16/7]`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-black mb-2 text-gray-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                    {project.title} <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" />
                  </h3>
                </a>
                <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
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
