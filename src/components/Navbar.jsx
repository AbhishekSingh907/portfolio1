import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-dark-bg/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm font-bold tracking-widest text-gray-400">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center md:justify-start">
          <a href="#" className="text-xl font-black tracking-widest text-white uppercase hover:text-brand-primary transition-colors">
            Abhishek.
          </a>
        </div>
        <div className="hidden md:flex w-full md:w-1/3 text-center justify-center items-center lowercase hover:text-white transition-colors">
          <a href="mailto:abhisheksingh639328@gmail.com">
            abhisheksingh639328@gmail.com
          </a>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6 sm:space-x-8 lg:space-x-12">
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#projects" className="hover:text-white transition-colors">WORK</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
