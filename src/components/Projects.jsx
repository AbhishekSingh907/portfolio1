import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Electric Bill Tracer",
      date: "January 2025",
      description: "A web application that tracks and analyzes electricity bills. Features automated tariff-based calculations and consumption tracking. Dockerized application for scalable deployment.",
      tech: ["Java", "MySQL", "Docker"],
      links: { github: "#", live: "https://electric-bill-tracker.vercel.app/" },
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Budget Planner Web App",
      date: "February 2025",
      description: "A responsive web application helping users manage income, expenses, and savings with real-time calculations. Deployed on AWS with CI/CD pipeline.",
      tech: ["React", "AWS", "CI/CD"],
      links: { github: "#", live: "https://aiproject-pearl.vercel.app/" },
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "QR Code Generator",
      date: "February 2025",
      description: "A Python-based GUI application for generating and customizing QR codes for URLs and text.",
      tech: ["Python", "tkinter", "Pillow"],
      links: { github: "#", live: "https://qr-code-generator-nine-rouge.vercel.app/" },
      image: "https://images.unsplash.com/photo-1595054135540-3b4dc4dcd87e?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "College Map App",
      date: "Current",
      description: "An app to help navigate a 600 acre college campus by locating shops and services in real-time.",
      tech: ["Web", "Mobile", "Maps API"],
      links: { github: "https://github.com/AbhishekSingh907/College-Map-App", live: null },
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 px-6 lg:px-16 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="text-brand-primary font-medium tracking-widest uppercase mb-2">My Work</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Featured Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            onClick={() => project.links.live && project.links.live !== "#" ? window.open(project.links.live, '_blank') : null}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-card group flex flex-col md:flex-row overflow-hidden relative min-h-[350px] ${project.links.live && project.links.live !== "#" ? 'cursor-pointer' : ''}`}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

            {/* Large Number Background */}
            <div className="absolute right-4 bottom-0 text-[180px] font-black text-brand-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none select-none z-0 tracking-tighter leading-none">
              0{index + 1}
            </div>

            <div className="relative z-10 w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-dark-bg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 md:bg-gradient-to-r md:from-transparent md:to-dark-card/90 bg-gradient-to-t from-dark-card/90 to-transparent pointer-events-none"></div>
            </div>

            <div className="p-8 md:w-3/5 flex flex-col relative z-20">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase">
                  {project.date}
                </span>
                <div className="flex space-x-4">
                  {project.links.github && (
                    <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors z-30">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} className="text-gray-400 hover:text-brand-primary transition-colors z-30">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-brand-primary transition-colors tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-medium">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
