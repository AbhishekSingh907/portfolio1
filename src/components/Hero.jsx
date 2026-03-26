import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Avatar3D from './Avatar3D';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - (rect.left + rect.width / 2);
    const mouseY = event.clientY - (rect.top + rect.height / 2);
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-500, 500], [25, -25]);
  const rotateY = useTransform(smoothX, [-500, 500], [-25, 25]);
  const translateX = useTransform(smoothX, [-800, 800], [-300, 300]);
  const translateY = useTransform(smoothY, [-500, 500], [-150, 150]);

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen min-h-[800px] bg-dark-bg overflow-hidden flex items-center justify-center font-sans"
      style={{ perspective: 1200 }}
    >
      {/* Main Avatar & Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {/* Glow behind Avatar */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-primary rounded-full blur-[150px] opacity-30 mix-blend-screen"></div>
        
        {/* The 3D Avatar Image with Parallax Wrapper */}
        <motion.div
          style={{ 
            x: useTransform(smoothX, [-500, 500], [-30, 30]),
            y: useTransform(smoothY, [-500, 500], [-30, 30]),
            transformStyle: "preserve-3d"
          }}
          className="relative z-20 w-[350px] md:w-[450px] lg:w-[650px] aspect-square translate-y-24 lg:translate-y-32 scale-110"
        >
          <Avatar3D />
        </motion.div>
      </div>

      {/* Left Text */}
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-[8%] md:left-[10%] lg:left-[15%] top-[25%] md:top-[35%] lg:top-[40%] -translate-y-1/2 z-20"
      >
        <p className="text-brand-primary text-xl md:text-2xl mb-2 font-medium tracking-wide">Hello! I'm</p>
        <div className="relative inline-block">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-none tracking-tight text-[#2563EB] inline-block relative z-10"
            style={{
              textShadow: "1px 1px 0 #1D4ED8, 2px 2px 0 #1D4ED8, 3px 3px 0 #1D4ED8, 4px 4px 0 #1E40AF, 5px 5px 0 #1E40AF, 6px 6px 0 #1E40AF, 10px 10px 20px rgba(0,0,0,0.8), 0 0 30px rgba(37,99,235,0.4)"
            }}
            initial={{ scale: 1, filter: "brightness(1) blur(0px)" }}
            animate={{ scale: [1, 1, 1.1, 1], filter: ["brightness(1) blur(0px)", "brightness(1) blur(0px)", "brightness(2) blur(2px)", "brightness(1) blur(0px)"] }}
            transition={{ duration: 1.4, times: [0, 0.7, 0.85, 1], delay: 0 }}
          >
            <motion.span 
              className="inline-block" 
              initial={{ opacity: 0, z: -100, rotateX: -90 }} 
              animate={{ opacity: 1, z: 0, rotateX: 0 }} 
              transition={{ duration: 0.4, type: "spring", bounce: 0.6, delay: 0.6 }}
            >
              Abhishek
            </motion.span>
            <br />
            <motion.span 
              className="inline-block" 
              initial={{ opacity: 0, z: -100, rotateX: -90 }} 
              animate={{ opacity: 1, z: 0, rotateX: 0 }} 
              transition={{ duration: 0.4, type: "spring", bounce: 0.6, delay: 0.8 }}
            >
              Singh
            </motion.span>

            {/* Blast Overlay */}
            <motion.div
              className="absolute inset-0 bg-[#2563EB] mix-blend-screen pointer-events-none blur-[30px] rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 1.8] }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            />
          </motion.h1>
        </div>
        <h2 className="mt-4 md:mt-6 text-xl md:text-2xl lg:text-4xl font-bold text-[#55f76bff] tracking-wide">
          Cloud & DevOps<br className="md:hidden" /> Full Stack Developer
        </h2>
      </motion.div>

      {/* Right Text */}
      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden md:flex absolute right-[5%] lg:right-[10%] top-[65%] lg:top-[60%] -translate-y-1/2 z-20 flex-col items-end text-right"
      >
        <p className="w-[300px] lg:w-[400px] text-gray-400 font-medium leading-relaxed relative z-10 text-right text-lg bg-dark-bg/50 backdrop-blur-md p-4 rounded-xl border border-white/5 shadow-2xl">
          I build scalable cloud-based applications and automate deployment pipelines using modern DevOps tools. Passionate about creating efficient, secure, and high-performance full stack solutions.
        </p>
      </motion.div>

      {/* Resume Button */}
      <a href="/Resume.pdf" download="Abhishek_Singh_Resume.pdf" className="absolute right-6 md:right-12 bottom-8 flex items-center space-x-3 text-gray-500 font-bold tracking-widest uppercase hover:text-white transition-colors cursor-pointer z-30 group">
        <span className="text-xl">Resume</span>
        <FileText size={32} className="group-hover:text-brand-primary transition-colors" />
      </a>

    </section>
  );
};

export default Hero;
