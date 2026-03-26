import React, { useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const experiences = [
  {
    title: "Learning and Building Projects",
    company_name: "Self-Paced Learning",
    icon: <Rocket />,
    iconBg: "#121212",
    date: "Current",
    points: [
      "Continuously enhancing skills in the MERN stack and modern frameworks like Next.js.",
      "Developing diverse portfolio projects including complex web applications, API integrations, and intuitive UIs.",
      "Staying up to date with cloud deployment processes on AWS and Vercel.",
    ],
  },
  {
    title: "Freelance / Projects Development",
    company_name: "Independent",
    icon: <Briefcase />,
    iconBg: "#121212",
    date: "2023 - Present",
    points: [
      "Collaborated with peers to design, build, and maintain functional software platforms.",
      "Developed web solutions optimizing frontend design aesthetics with robust functional backends.",
      "Participated in code reviews and implemented responsive UI designs for better user engagement.",
    ],
  },
  {
    title: "Degree / Education Journey",
    company_name: "University",
    icon: <GraduationCap />,
    iconBg: "#121212",
    date: "2020 - 2024",
    points: [
      "Grasped core concepts of data structures, algorithms, and software engineering principles.",
      "Contributed to multiple academic tech projects and hackathons.",
      "Built a solid foundational understanding of object-oriented programming in Java and C++.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#121212', color: '#fff', border: '1px solid #2A2A2A', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
      contentArrowStyle={{ borderRight: '7px solid #2A2A2A' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: '#fff', border: '2px solid #A855F7', boxShadow: '0 0 15px rgba(168,85,247,0.5)' }}
      icon={experience.icon}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-brand-primary text-[16px] font-semibold tracking-wide" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-400 text-[14px] pl-1 tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const rocketY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-16 mb-16 text-center">
        <p className="text-brand-primary font-medium tracking-widest uppercase mb-2">My Journey</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">WHAT I DO</h2>
      </div>

      <div ref={containerRef} className="mt-10 flex flex-col container mx-auto relative pb-20">
        
        {/* Animated Rocket Scroll Tracker */}
        <motion.div
          className="absolute top-0 w-1 rounded-t-full bg-gradient-to-b from-brand-primary to-brand-accent z-[50] max-[1169px]:left-[18px] min-[1170px]:left-1/2 min-[1170px]:-ml-[2px]"
          style={{ height: rocketY }}
        >
          {/* Rocket at the tip */}
          <div className="absolute -bottom-6 -left-[14px] bg-dark-bg p-1 rounded-full border border-brand-primary shadow-[0_0_15px_rgba(168,85,247,1)] flex items-center justify-center">
            <Rocket size={20} className="text-white transform rotate-[135deg]" fill="#A855F7" />
          </div>
        </motion.div>

        <VerticalTimeline lineColor="transparent">
          {experiences.map((experience, index) => (
             <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
