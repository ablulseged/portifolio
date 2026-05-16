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
    <section id="services" className="py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">My Expertise</span>
          <h2 className="section-heading">PREMIUM SERVICES.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-[40px] overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.05)' }}
              className="p-12 transition-all group bg-white"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
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
