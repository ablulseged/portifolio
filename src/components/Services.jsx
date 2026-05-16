import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Database, Lock, Globe, Gauge } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Frontend Architecture',
      description: 'Building modular, scalable interfaces with React & Next.js.'
    },
    {
      icon: Database,
      title: 'Backend Engineering',
      description: 'Robust server-side logic and high-performance APIs.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Progressive web apps and pixel-perfect mobile experiences.'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Scalable cloud infrastructure and CDN optimization.'
    },
    {
      icon: Lock,
      title: 'Security Auditing',
      description: 'Ensuring your application data remains private and secure.'
    },
    {
      icon: Gauge,
      title: 'Performance Tuning',
      description: 'Optimizing for Core Web Vitals and lightning-fast loads.'
    }
  ];

  return (
    <section id="services" className="py-32 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-primary-600 dark:text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="section-heading">PREMIUM SERVICES.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-300 dark:bg-white/5 border border-gray-300 dark:border-white/5 rounded-[40px] overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.05)' }}
              className="p-12 transition-all group bg-slate-50 dark:bg-transparent"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-500" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-500 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
