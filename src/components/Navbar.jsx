import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Zap, Layout, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Layout, href: '#projects' },
    { name: 'Services', icon: Zap, href: '#services' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Floating Sidebar */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ x: 10 }}
            className={`group relative p-4 rounded-2xl glass transition-all ${active === link.name.toLowerCase() ? 'bg-primary-600 text-white' : 'text-gray-400 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'}`}
            onClick={() => setActive(link.name.toLowerCase())}
          >
            <link.icon className="w-6 h-6" />
            <span className="absolute left-full ml-4 px-3 py-1 rounded-lg bg-primary-600 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {link.name}
            </span>
          </motion.a>
        ))}
        
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-4 rounded-2xl glass text-gray-400 hover:text-primary-600 transition-all mt-4"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile / Top Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-12 lg:hidden">
        <div className="glass px-6 py-4 rounded-2xl flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter dark:text-white">DANIEL.DEV</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] glass flex items-center justify-center lg:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 p-4 glass rounded-full dark:text-white">
              <X />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black tracking-tighter dark:text-white hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
