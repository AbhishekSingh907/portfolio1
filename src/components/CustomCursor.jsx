import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const AiFace = ({ state }) => {
  const isHappy = state === 'happy';
  const isAngry = state === 'angry';
  const color = isAngry ? '#EF4444' : (isHappy ? '#A855F7' : '#818CF8'); // Red, Neon Purple, Indigo
  
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
      {/* Head */}
      <rect x="15" y="20" width="70" height="60" rx="20" fill="#0A0A0A" stroke={color} strokeWidth="4"/>
      
      {/* Eyes */}
      {isHappy ? (
        <>
          <path d="M 30 45 Q 35 35 40 45" stroke={color} strokeWidth="4" fill="transparent" strokeLinecap="round" />
          <path d="M 60 45 Q 65 35 70 45" stroke={color} strokeWidth="4" fill="transparent" strokeLinecap="round" />
        </>
      ) : isAngry ? (
        <>
          <line x1="25" y1="35" x2="45" y2="45" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <line x1="75" y1="35" x2="55" y2="45" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <circle cx="35" cy="50" r="5" fill={color}/>
          <circle cx="65" cy="50" r="5" fill={color}/>
        </>
      ) : (
        <>
          <circle cx="35" cy="45" r="5" fill={color}/>
          <circle cx="65" cy="45" r="5" fill={color}/>
        </>
      )}
      
      {/* Mouth */}
      {isHappy ? (
        <path d="M 35 60 Q 50 70 65 60" stroke={color} strokeWidth="4" fill="transparent" strokeLinecap="round"/>
      ) : isAngry ? (
        <path d="M 40 65 Q 50 60 60 65" stroke={color} strokeWidth="4" fill="transparent" strokeLinecap="round"/>
      ) : (
        <line x1="42" y1="60" x2="58" y2="60" stroke={color} strokeWidth="4" strokeLinecap="round" />
      )}
      
      {/* Antenna */}
      <line x1="50" y1="20" x2="50" y2="5" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="5" r="4" fill={color}/>
    </svg>
  );
};

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Motion values for exact pointer
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations
  const springConfigExact = { damping: 25, stiffness: 700, mass: 0.5 };
  const springConfigTrail = { damping: 20, stiffness: 300, mass: 0.8 };

  const exactX = useSpring(cursorX, springConfigExact);
  const exactY = useSpring(cursorY, springConfigExact);
  const trailX = useSpring(cursorX, springConfigTrail);
  const trailY = useSpring(cursorY, springConfigTrail);

  useEffect(() => {
    // Check if device supports hover (desktop vs touch)
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return; // Do nothing on touch devices
    }

    let hoveredRect = null;

    const moveCursor = (e) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      if (hoveredRect) {
        const centerX = hoveredRect.left + hoveredRect.width / 2;
        const centerY = hoveredRect.top + hoveredRect.height / 2;
        // Apply magnetic pull towards center
        targetX = e.clientX + (centerX - e.clientX) * 0.15;
        targetY = e.clientY + (centerY - e.clientY) * 0.15;
      }

      cursorX.set(targetX);
      cursorY.set(targetY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    
    // Add small delay to hiding click state to ensure animation plays fully
    const handleMouseUp = () => {
      setTimeout(() => setIsClicking(false), 300);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHover = (e) => {
      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input[type="submit"], select, .clickable, .hover-trigger');
      
      if (clickable) {
        setIsHovering(true);
        hoveredRect = clickable.getBoundingClientRect();
      } else {
        setIsHovering(false);
        hoveredRect = null;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', checkHover);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', checkHover);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const aiState = isClicking ? 'angry' : (isHovering ? 'happy' : 'calm');

  return (
    <>
      {/* Soft Glowing Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full blur-xl mix-blend-screen transition-colors duration-300"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? '70px' : '50px',
          height: isHovering ? '70px' : '50px',
          backgroundColor: isClicking ? 'rgba(239, 68, 68, 0.4)' : (isHovering ? 'rgba(168, 85, 247, 0.4)' : 'rgba(129, 140, 248, 0.3)'),
        }}
      />

      {/* Baby AI Avatar */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] flex flex-col items-center justify-center"
        style={{
          x: exactX,
          y: exactY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Speech Bubble */}
          <AnimatePresence>
            {isHovering && !isClicking && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap shadow-xl"
              >
                Click me!
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Face with shake/bounce logic */}
          <motion.div
            animate={
              isClicking
                ? { x: [-4, 4, -4, 4, 0], y: -8, scale: 1.2 }
                : { scale: isHovering ? 1.2 : 1 }
            }
            transition={{ duration: 0.2 }}
          >
            <AiFace state={aiState} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
