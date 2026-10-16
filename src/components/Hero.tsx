"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import ParticleBackground from "./ParticleBackground";
import Image from "next/image";

export default function Hero() {
  const roles = "Computer Science & Engineering Undergraduate";
  const [showBubble, setShowBubble] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent">
      <motion.div style={{ opacity, y }} className="w-full h-full relative flex items-center justify-center">
        <ParticleBackground />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6 relative z-10"
          >
            <h2 className="text-xl md:text-3xl font-display font-medium text-foreground/80 tracking-widest uppercase mb-2">
              It&apos;s me
            </h2>
            <h1 className="text-5xl md:text-7xl leading-none font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60">
              SAI CHANDH <br /> PATHURI
            </h1>
            <div className="h-auto mt-4 relative">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-2xl md:text-4xl text-primary font-display font-semibold italic"
              >
                {roles}
              </motion.h2>
            </div>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-xl mt-4 leading-relaxed font-light">
              A Vignan University student focused on machine learning, web development, and cloud technologies, with a passion for research and leadership.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-xs md:text-sm font-mono text-foreground/80">Vignan University · Class of 2027</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
              <a href="#story" className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform text-lg flex items-center gap-2 group">
                View Resume
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="/Sai-Chandh-Pathuri-Resume.pdf" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-widest text-sm underline underline-offset-8">
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Spacer for desktop layout (image absolutely sits on right) */}
          <div className="hidden lg:block w-full h-full" />
        </div>

        {/* Large Cutout Image Sticking to the right middle */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 -translate-y-1/2 right-[-2%] w-[60%] h-[90vh] max-h-[900px] hidden lg:flex flex-col justify-center items-center z-10"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[130px] rounded-full translate-y-20 pointer-events-none" />
          
          <div className="relative w-full h-full flex items-center justify-center group">
            {/* Sketched Doodles - Positioned closer to the silhouette */}
            <motion.svg 
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[24%] top-[38%] w-14 h-14 text-foreground/50 stroke-current fill-none -rotate-12 pointer-events-none z-20" 
              viewBox="0 0 100 100"
            >
              <path d="M10,70 Q40,40 80,35" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M60,20 L80,35 L55,50" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>

            <motion.svg 
              animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[26%] top-[18%] w-11 h-11 text-foreground/50 stroke-current fill-none pointer-events-none z-20" 
              viewBox="0 0 50 50"
            >
              <path d="M25,5 Q25,25 5,25 Q25,25 25,45 Q25,25 45,25 Q25,25 25,5 Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>

            <motion.svg 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute left-[26%] bottom-[28%] w-9 h-9 text-foreground/45 stroke-current fill-none pointer-events-none z-20" 
              viewBox="0 0 50 50"
            >
              <path d="M25,5 L31,18 L45,20 L35,30 L38,44 L25,37 L12,44 L15,30 L5,20 L19,18 Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>

            <motion.svg 
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[24%] bottom-[32%] w-12 h-12 text-foreground/45 stroke-current fill-none pointer-events-none z-20" 
              viewBox="0 0 100 100"
            >
              <path d="M10,50 Q30,20 50,50 T90,50" strokeWidth="3" strokeLinecap="round" />
            </motion.svg>

            {/* Creative Speech Bubble */}
            <div className="absolute top-[35%] left-[-15%] z-20">
              {showBubble && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className="bg-white/80 backdrop-blur-xl border border-primary/20 p-5 rounded-2xl shadow-2xl max-w-[250px] text-left relative"
                >
                  <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                    Thank you for clicking! My secret is just my nickname: <span className="text-primary font-bold">Chandu 😆</span>
                  </p>
                  <div className="absolute right-[-8px] top-[24px] w-4 h-4 bg-white/80 border-r border-t border-primary/20 rotate-45" />
                </motion.div>
              )}
            </div>

            <span className="absolute top-[30%] right-[15%] text-xs font-mono uppercase tracking-widest text-white animate-pulse bg-primary/80 px-4 py-2 rounded-full cursor-pointer z-20 hover:bg-primary transition-colors" onClick={() => setShowBubble(!showBubble)}>
              {showBubble ? "Close Secret ✕" : "Tap to know my secret ✨"}
            </span>

            <div
              className="relative w-full h-[98%] cursor-pointer"
              onClick={() => setShowBubble(!showBubble)}
              style={{
                maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)"
              }}
            >
              <Image
                src="/images/hero-waist-v5.webp"
                alt="Sai Chandh Pathuri"
                fill
                style={{
                  filter: "drop-shadow(3px 0 0 white) drop-shadow(-3px 0 0 white) drop-shadow(0 3px 0 white) drop-shadow(0 -3px 0 white) drop-shadow(2px 2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(0 20px 40px rgba(255,107,26,0.15))"
                }}
                className="object-contain object-bottom hover:scale-[1.02] transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
