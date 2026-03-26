import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Setup Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Move the background image slightly slower than the scroll to create parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div 
      ref={ref}
      className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/hero-buffet.jpg')]"
        />
        {/* Dark Overlay (60% black per design specs) */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content wrapper with fade out and slight parallax on scroll */}
      <motion.div 
        className="relative z-10 text-center px-4 flex flex-col items-center max-w-4xl"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="text-secondary tracking-[2px] uppercase text-sm font-semibold mb-2 block">
            Willkommen im
          </span>
          <h1 className="text-white font-serif text-5xl md:text-7xl font-bold tracking-widest leading-tight">
            NABATIAN
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-white/90 text-lg md:text-xl font-sans max-w-2xl mx-auto leading-[1.8]"
        >
          Genießen Sie authentische, traditionell persische Speisen in stilvollem Ambiente mitten in Heilbronn. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-10"
        >
          <a href="#menu" className="inline-block bg-primary hover:bg-secondary text-white font-medium py-4 px-10 tracking-[1.5px] uppercase transition-all duration-300 text-sm">
            Speisekarte ansehen
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
