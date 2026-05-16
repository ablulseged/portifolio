import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary-600 dark:text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="section-heading mb-12 text-gray-900 dark:text-white">LET'S START <br /> A PROJECT.</h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors border-white/20">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-500 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email Me</h4>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">daniellulseged79@gmail.com</p>
                </div>
              </div>
              
              <div className="flex gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors border-white/20">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-500 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Call Me</h4>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">+251 938 676 967</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors border-white/20">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-500 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Location</h4>
                  <p className="text-2xl font-black text-gray-900 dark:text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] relative overflow-hidden border-white/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 dark:bg-primary-600/10 blur-3xl" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-black/5 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 py-4 outline-none focus:border-primary-500 transition-colors text-xl font-bold text-gray-900 dark:text-white" placeholder="Daniel Lulseged" />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-black/5 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 py-4 outline-none focus:border-primary-500 transition-colors text-xl font-bold text-gray-900 dark:text-white" placeholder="daniellulseged79@gmail.com" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Tell me about your project</label>
                <textarea rows="4" className="w-full bg-black/5 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 py-4 outline-none focus:border-primary-500 transition-colors text-xl font-bold resize-none text-gray-900 dark:text-white" placeholder="Let's build something..."></textarea>
              </div>
              <button className="btn-premium w-full flex items-center justify-center gap-4 group">
                Send Inquiry <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
