import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-dark-border bg-dark-bg text-center relative z-10 overflow-hidden">
      {/* Decorative glowing orb in footer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 opacity-5">ABHISHEK.</h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-6 mb-8">
          <a href="https://github.com/AbhishekSingh907" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-brand-primary hover:scale-110 font-bold uppercase tracking-widest transition-all duration-300">
            <span className="text-sm">GitHub</span>
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/abhishek-singh907" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-brand-primary hover:scale-110 font-bold uppercase tracking-widest transition-all duration-300">
            <span className="text-sm">LinkedIn</span>
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/ABHISHE71635291" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-brand-primary hover:scale-110 font-bold uppercase tracking-widest transition-all duration-300">
            <span className="text-sm">Twitter</span>
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-brand-primary hover:scale-110 font-bold uppercase tracking-widest transition-all duration-300">
            <span className="text-sm">Instagram</span>
            <FaInstagram size={24} />
          </a>
        </div>

        <p className="text-gray-400 mt-6 text-sm font-medium uppercase tracking-widest text-center">
          Cloud DevOps Engineer | Full Stack Developer | Building Scalable Systems
        </p>
        <p className="text-gray-500 mt-4 flex items-center justify-center space-x-2 text-xs font-medium">
          <span>Built with</span>
          <Heart size={14} className="text-brand-primary animate-pulse" />
          <span>by Abhishek Singh &copy; {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
