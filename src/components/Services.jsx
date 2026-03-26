import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Software Developer',
    description: 'Building robust, scalable applications with clean and efficient code. Focused on solving complex problems with modern practices.',
    icon: <Code2 size={48} className="text-brand-primary mb-6" />,
  },
  {
    title: 'Full Stack Developer',
    description: 'Combining frontend aesthetics with backend power. Creating seamless user experiences from database to client interface.',
    icon: <Globe size={48} className="text-brand-primary mb-6" />,
  },
  {
    title: 'Backend Engineer',
    description: 'Designing APIs, creating efficient database schemas, and ensuring absolute security and performance on the server side.',
    icon: <Server size={48} className="text-brand-primary mb-6" />,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying robust cloud infrastructure on AWS/Azure, and automating CI/CD pipelines with Docker, Kubernetes, and Jenkins.',
    icon: <Cloud size={48} className="text-brand-primary mb-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative z-10 px-6 lg:px-16 container mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="mb-16 text-center"
      >
        <p className="text-brand-primary font-medium tracking-widest uppercase mb-2">What I Do</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">My Expertise</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -15, scale: 1.05 }}
            className="glass-card p-10 group relative overflow-hidden flex flex-col items-start border border-dark-border hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 z-10 hover:z-20 cursor-default"
          >
            {/* Glow on hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              {service.icon}
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
