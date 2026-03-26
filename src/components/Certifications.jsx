import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Developer",
      issuer: "Oracle",
      icon: <Award className="text-brand-primary" size={28} />,
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5B2C8D3640320763CF29D2B55F0D3534E6D3897D6A21FCAC51541300F5B23AEE"
    },
    {
      title: "Master Generative AI & AI Tools",
      issuer: "Udemy",
      icon: <Award className="text-brand-primary" size={28} />,
      link: "https://springboard.udemy.com/certificate/UC-0074c688-2e0d-4845-b10a-918238f4a85e/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "FreeCodeCamp",
      icon: <Award className="text-brand-primary" size={28} />,
      link: "https://www.freecodecamp.org/certification/fcc5cf8aa50-290b-4f32-ae24-276f5c4f7a34/responsive-web-design"
    },
    {
      title: "Code Smart: Foundations and DSA in C, C++ & Java",
      issuer: "Summer Training Program (Grade: A++)",
      icon: <CheckCircle className="text-brand-primary" size={28} />,
      link: "https://www.lpu.in/skilldevelopment/"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <p className="text-brand-primary font-medium tracking-widest uppercase mb-2">Qualifications</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Licenses & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              onClick={() => cert.link && cert.link !== "#" ? window.open(cert.link, '_blank') : null}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card bg-dark-card border border-dark-border rounded-2xl p-6 flex items-start space-x-6 hover:border-brand-primary/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all group ${cert.link && cert.link !== "#" ? 'cursor-pointer' : ''}`}
            >
              <div className="bg-brand-primary/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-primary transition-colors tracking-tight">{cert.title}</h3>
                <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
