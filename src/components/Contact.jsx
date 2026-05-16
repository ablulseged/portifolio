import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="section-heading mb-12 text-gray-900">LET'S START <br /> A PROJECT.</h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                  <Mail className="w-6 h-6 text-primary-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email Me</h4>
                  <a href="mailto:daniellulseged79@gmail.com" className="text-2xl font-black text-gray-900 hover:text-primary-600 transition-colors">
                    daniellulseged79@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                  <Phone className="w-6 h-6 text-primary-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Call Me</h4>
                  <a href="tel:+251938676967" className="text-2xl font-black text-gray-900 hover:text-primary-600 transition-colors">
                    +251 938 676 967
                  </a>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Location</h4>
                  <p className="text-2xl font-black text-gray-900">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 blur-3xl" />
            
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12 relative z-10"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-3xl font-black text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-500 mb-8">I'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus('idle')} className="btn-premium">Send Another</button>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12 relative z-10"
              >
                <AlertCircle className="w-20 h-20 text-red-500 mb-6" />
                <h3 className="text-3xl font-black text-gray-900 mb-4">Something Went Wrong</h3>
                <p className="text-gray-500 mb-8">Please email me directly at<br />daniellulseged79@gmail.com</p>
                <button onClick={() => setStatus('idle')} className="btn-premium">Try Again</button>
              </motion.div>
            )}

            {(status === 'idle' || status === 'loading') && (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full bg-black/5 border-b border-gray-200 py-4 outline-none focus:border-primary-500 transition-colors text-xl font-bold text-gray-900 placeholder:text-gray-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full bg-black/5 border-b border-gray-200 py-4 outline-none focus:border-primary-500 transition-colors text-xl font-bold text-gray-900 placeholder:text-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Tell me about your project</label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    className="w-full bg-black/5 border-b border-gray-200 py-4 outline-none focus:border-primary-500 transition-colors text-xl font-bold resize-none text-gray-900 placeholder:text-gray-300"
                    placeholder="Let's build something..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-premium w-full flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>Sending... <Loader className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Send Inquiry <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
