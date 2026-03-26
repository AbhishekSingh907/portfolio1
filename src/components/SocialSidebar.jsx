import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialSidebar = () => {
  const socials = [
    { icon: <FaGithub size={32} />, url: 'https://github.com/AbhishekSingh907', label: 'GitHub' },
    { icon: <FaLinkedin size={32} />, url: 'https://linkedin.com/in/abhishek-singh907', label: 'LinkedIn' },
    { icon: <FaTwitter size={32} />, url: 'https://x.com/ABHISHE71635291', label: 'Twitter' },
    { icon: <FaInstagram size={32} />, url: 'https://instagram.com/', label: 'Instagram' },
  ];

  return (
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 p-6"
    >
      <div className="w-px h-24 bg-gradient-to-b from-transparent to-brand-primary/30 mx-auto mb-2"></div>
      {socials.map((social, index) => (
        <a 
          key={index} 
          href={social.url} 
          target="_blank" 
          rel="noreferrer"
          className="text-gray-500 hover:text-brand-primary hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
      <div className="w-px h-24 bg-gradient-to-t from-transparent to-brand-primary/30 mx-auto mt-2"></div>
    </motion.div>
  );
};

export default SocialSidebar;
