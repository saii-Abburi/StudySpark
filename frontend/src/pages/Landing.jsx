import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Zap, Shield, ChevronRight, Check } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-8 w-8 text-primary-500" />
          <span className="text-2xl font-black tracking-tight text-white uppercase">
            Hello<span className="text-primary-500">!</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-primary-500 font-bold text-sm tracking-widest uppercase hover:text-primary-400 transition-colors">Home</a>
          <a href="#work" className="text-slate-400 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors">Work</a>
          <a href="#contacts" className="text-slate-400 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors">Contacts</a>
          <div className="flex space-x-4 items-center pl-8 ml-4 border-l border-dark-700">
            <Link to="/login" className="text-slate-300 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-dark-900 selection:bg-primary-500/30">
      
      {/* Background Image / Texture overlay (Simulated via gradients for now) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-dark-900"></div>
        {/* Subtle noise/texture overlay could go here */}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-none"
          >
            Stay connected<br />wherever you go
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 mb-12 font-medium tracking-wide"
          >
            Build your academic future from scratch using our supersimple visual framework.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 font-bold text-lg tracking-wider uppercase transition-all hover:scale-105 rounded-sm"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const AppsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div id="work" className="py-32 bg-dark-900 relative border-t border-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Decorative giant W */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          variants={{ visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-0 top-0 text-primary-500 font-black text-[30rem] leading-none select-none opacity-20 pointer-events-none -mr-20 -mt-40 z-0"
        >
          W
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Apps for people</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              We're a multidisciplinary team based in Boston, MA, passionate about interactive design. 
              We craft tools that put learning completely in your hands.
            </p>
            
            <ul className="space-y-4 mb-10">
               {[
                 "Interactive Flashcards",
                 "Real-time Analytics",
                 "Secure Encrypted Data"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-slate-300 font-medium">
                   <div className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center mr-4 border border-dark-700">
                     <Check className="w-4 h-4 text-primary-500" />
                   </div>
                   {item}
                 </li>
               ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-800 p-10 border border-dark-700 relative group overflow-hidden"
          >
             {/* Abstract UI composition */}
             <div className="absolute top-10 right-10 text-slate-600 font-mono text-xl">23°</div>
             
             <div className="flex gap-2 mb-16 mt-8">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className={`w-4 h-4 rounded-full ${i < 3 ? 'bg-slate-600' : 'bg-dark-700'}`}></div>
               ))}
             </div>

             <div className="space-y-4 mb-20 relative z-10">
               <div className="w-full h-2 bg-primary-500 transform -skew-x-12"></div>
               <div className="w-2/3 h-2 bg-primary-500 transform -skew-x-12 ml-auto"></div>
               <div className="w-1/3 h-2 bg-primary-500 transform -skew-x-12 ml-20 mt-8"></div>
             </div>
             
             <div className="absolute bottom-10 right-10 text-white font-serif italic text-4xl opacity-50 flex items-end">
               R
               <span className="text-2xl pb-1">M</span>
               <span className="text-xl pb-2">A</span>
             </div>
             
             <div className="absolute bottom-12 left-10 text-xs font-bold tracking-widest text-slate-500 uppercase">
               Amazing performance
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const AppealSection = () => (
  <div id="contacts" className="py-24 bg-dark-900 border-t border-dark-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-dark-800 border-l-4 border-primary-500 p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">Appeal</h2>
          <p className="text-slate-400 leading-relaxed">
            An app for the publishing houses CABINET. Takes reading to a whole new level, just sit back and enjoy the content. 
            Sign up today and experience it yourself.
          </p>
        </div>
        <Link 
          to="/register" 
          className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 font-bold tracking-widest uppercase transition-all"
        >
          Join Cabinet
        </Link>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-dark-900 py-12 border-t border-dark-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <BookOpen className="h-5 w-5 text-primary-500" />
        <span className="font-bold text-white tracking-widest uppercase">Hello!</span>
      </div>
      <p>
        © {new Date().getFullYear()} StudySpark Framework. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-900 text-slate-300 font-sans selection:bg-primary-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <AppsSection />
        <AppealSection />
      </div>
      <Footer />
    </div>
  );
}
