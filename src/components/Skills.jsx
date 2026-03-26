import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { SiCplusplus, SiC, SiSolidity, SiMongodb, SiMysql, SiJavascript, SiKubernetes, SiJenkins } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava size={60} />, color: 'hover:text-[#f89820] hover:drop-shadow-[0_0_15px_rgba(248,152,32,0.8)]' },
    { name: 'C', icon: <SiC size={60} />, color: 'hover:text-[#A8B9CC] hover:drop-shadow-[0_0_15px_rgba(168,185,204,0.8)]' },
    { name: 'C++', icon: <SiCplusplus size={60} />, color: 'hover:text-[#00599C] hover:drop-shadow-[0_0_15px_rgba(0,89,156,0.8)]' },
    { name: 'Python', icon: <FaPython size={60} />, color: 'hover:text-[#3776AB] hover:drop-shadow-[0_0_15px_rgba(55,118,171,0.8)]' },
    { name: 'JavaScript', icon: <SiJavascript size={60} />, color: 'hover:text-[#F7DF1E] hover:drop-shadow-[0_0_15px_rgba(247,223,30,0.8)]' },
    { name: 'Solidity', icon: <SiSolidity size={60} />, color: 'hover:text-[#363636] hover:drop-shadow-[0_0_15px_rgba(54,54,54,0.8)]' },
    { name: 'React', icon: <FaReact size={60} />, color: 'hover:text-[#61DAFB] hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.8)]' },
    { name: 'Node.js', icon: <FaNodeJs size={60} />, color: 'hover:text-[#339933] hover:drop-shadow-[0_0_15px_rgba(51,153,51,0.8)]' },
    { name: 'MongoDB', icon: <SiMongodb size={60} />, color: 'hover:text-[#47A248] hover:drop-shadow-[0_0_15px_rgba(71,162,72,0.8)]' },
    { name: 'MySQL', icon: <SiMysql size={60} />, color: 'hover:text-[#4479A1] hover:drop-shadow-[0_0_15px_rgba(68,121,161,0.8)]' },
    { name: 'AWS', icon: <FaAws size={60} />, color: 'hover:text-[#FF9900] hover:drop-shadow-[0_0_15px_rgba(255,153,0,0.8)]' },
    { name: 'Azure', icon: <VscAzure size={60} />, color: 'hover:text-[#0089D6] hover:drop-shadow-[0_0_15px_rgba(0,137,214,0.8)]' },
    { name: 'Docker', icon: <FaDocker size={60} />, color: 'hover:text-[#2496ED] hover:drop-shadow-[0_0_15px_rgba(36,150,237,0.8)]' },
    { name: 'Kubernetes', icon: <SiKubernetes size={60} />, color: 'hover:text-[#326CE5] hover:drop-shadow-[0_0_15px_rgba(50,108,229,0.8)]' },
    { name: 'Jenkins', icon: <SiJenkins size={60} />, color: 'hover:text-[#D24939] hover:drop-shadow-[0_0_15px_rgba(210,73,57,0.8)]' },
    { name: 'Microservices', icon: <FaNetworkWired size={60} />, color: 'hover:text-[#00ADD8] hover:drop-shadow-[0_0_15px_rgba(0,173,216,0.8)]' },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 px-6 lg:px-16 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-brand-primary font-medium tracking-widest uppercase mb-2">Tech Stack</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Tools & Technologies</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className={`glass-card flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-300 ${skill.color} text-gray-400 group border border-dark-border hover:border-white/10`}
          >
            <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="font-bold tracking-wider uppercase text-xs">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
