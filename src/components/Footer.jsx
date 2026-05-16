import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-32 pb-12 border-t border-gray-200 lg:ml-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <h2 className="text-4xl font-black tracking-tighter mb-8 text-gray-900">DANIEL.DEV</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Crafting high-end digital solutions for visionary brands. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ablulseged/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl text-gray-500 hover:text-primary-600 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:daniellulseged79@gmail.com"
                className="p-4 glass rounded-2xl text-gray-500 hover:text-primary-600 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Skills', 'Projects', 'Services', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-primary-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-8">Contact</h4>
              <ul className="space-y-4 text-gray-600">
                <li>Addis Ababa, Ethiopia</li>
                <li>+251 938 676 967</li>
                <li>daniellulseged79@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DANIEL.DEV. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-gray-400 hover:text-primary-600 transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
            <div className="p-3 glass rounded-full group-hover:bg-primary-600 group-hover:text-white transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
