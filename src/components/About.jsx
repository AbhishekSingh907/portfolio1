import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-brand-primary font-medium tracking-widest uppercase mb-2">Get To Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">
              Cloud DevOps Engineer & Full Stack Developer
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed font-medium">
              I specialize in deploying, managing, and optimizing applications in cloud environments with DevOps best practices. I am currently pursuing my B.Tech in CSE at Lovely Professional University. My long-term goal is to build scalable, efficient, and impactful full stack applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 font-medium">
              My expertise spans across <strong className="text-gray-200">Cloud Platforms</strong> (AWS, Azure), <strong className="text-gray-200">DevOps Tools</strong> (Docker, Kubernetes, CI/CD, Jenkins, GitHub Actions), and <strong className="text-gray-200">Full Stack Development</strong> (React.js, Node.js, Express.js). Beyond technical skills, I actively participate in hackathons like the Smart India Hackathon.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] transition-all duration-300 border border-transparent hover:border-brand-primary/20 cursor-default">
                <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Degree</h4>
                  <p className="text-sm text-gray-400 font-medium">B.Tech CSE (CGPA: 7.0)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] transition-all duration-300 border border-transparent hover:border-brand-primary/20 cursor-default">
                <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Location</h4>
                  <p className="text-sm text-gray-400 font-medium">Phagwara, Punjab, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] transition-all duration-300 border border-transparent hover:border-brand-primary/20 cursor-default">
                <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Strengths</h4>
                  <p className="text-sm text-gray-400 font-medium">Adaptable, Quick Learner</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] transition-all duration-300 border border-transparent hover:border-brand-primary/20 cursor-default">
                <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Interests</h4>
                  <p className="text-sm text-gray-400 font-medium">DSA, Cloud, Web Dev</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-8 relative overflow-hidden group min-h-[400px] flex flex-col justify-center border border-dark-border hover:border-brand-primary/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-400 cursor-default"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-8 text-white relative z-10 uppercase tracking-tight">Soft Skills & Activities</h3>
            <ul className="space-y-6 relative z-10 text-gray-400 font-medium">
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shadow-[0_0_10px_#A855F7]"></div>
                <span>Excellent Problem-solving and Adaptability</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shadow-[0_0_10px_#A855F7]"></div>
                <span>Improving English communication for professional environments</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shadow-[0_0_10px_#A855F7]"></div>
                <span>Participant in Smart India Hackathon (2025)</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shadow-[0_0_10px_#A855F7]"></div>
                <span>24-hour Code-A-Haunt Hackathon Participant (2024)</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 shadow-[0_0_10px_#A855F7]"></div>
                <span>Content Writer at BrainMaster Club</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
