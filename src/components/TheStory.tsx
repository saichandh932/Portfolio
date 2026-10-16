"use client";

import { motion } from "framer-motion";

interface Bubble {
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  xRange: number[];
  yRange: number[];
}

const bubbles: Bubble[] = [
  { size: 130, left: "8%", top: "12%", duration: 15, delay: 0, xRange: [0, 25, -20, 0], yRange: [0, -35, 25, 0] },
  { size: 60, left: "24%", top: "48%", duration: 10, delay: 1.5, xRange: [0, -15, 12, 0], yRange: [0, 20, -20, 0] },
  { size: 95, left: "82%", top: "18%", duration: 13, delay: 0.5, xRange: [0, -20, 18, 0], yRange: [0, 30, -25, 0] },
  { size: 160, left: "74%", top: "58%", duration: 18, delay: 2, xRange: [0, 35, -25, 0], yRange: [0, -45, 35, 0] },
  { size: 45, left: "45%", top: "10%", duration: 9, delay: 3, xRange: [0, 12, -12, 0], yRange: [0, -18, 18, 0] },
  { size: 75, left: "4%", top: "72%", duration: 12, delay: 1, xRange: [0, 18, -15, 0], yRange: [0, 22, -22, 0] },
  { size: 115, left: "88%", top: "38%", duration: 16, delay: 2.5, xRange: [0, -22, 18, 0], yRange: [0, -32, 28, 0] },
  { size: 55, left: "52%", top: "82%", duration: 11, delay: 4, xRange: [0, -15, 15, 0], yRange: [0, 20, -20, 0] },
  { size: 140, left: "28%", top: "78%", duration: 17, delay: 0.2, xRange: [0, 28, -22, 0], yRange: [0, -38, 28, 0] },
  { size: 85, left: "16%", top: "52%", duration: 14, delay: 1.8, xRange: [0, 20, -20, 0], yRange: [0, -24, 24, 0] },
  { size: 38, left: "68%", top: "14%", duration: 8, delay: 3.5, xRange: [0, -10, 10, 0], yRange: [0, 14, -14, 0] },
  { size: 100, left: "38%", top: "22%", duration: 14, delay: 0.8, xRange: [0, 24, -20, 0], yRange: [0, -30, 30, 0] },
];

export default function TheStory() {
  return (
    <section id="story" className="h-screen w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-center border-t border-foreground/5">
      {/* Background Soft Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      {/* Soft Center Accent Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-orange-500/0 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      {/* LAYER 1: Beautiful Floating 3D Glassmorphic Bubbles */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/30 dark:border-primary/20 shadow-[inset_0_4px_12px_rgba(255,255,255,0.6),inset_0_-4px_12px_rgba(0,0,0,0.05),0_0_20px_rgba(255,107,26,0.12)] pointer-events-none backdrop-blur-[1.5px] z-10"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18) 0%, rgba(255,107,26,0.06) 50%, rgba(255,255,255,0.03) 100%)",
          }}
          animate={{
            x: bubble.xRange,
            y: bubble.yRange,
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        >
          {/* Glass Specular Highlight Reflection (Gives 3D depth) */}
          <div className="absolute top-[12%] left-[12%] w-[28%] h-[28%] rounded-full bg-white/60 blur-[0.5px]" />
          
          {/* Subtler bottom reflection */}
          <div className="absolute bottom-[14%] right-[14%] w-[18%] h-[18%] rounded-full bg-white/10 blur-[1px]" />
        </motion.div>
      ))}

      {/* LAYER 2: Main Centered High-Contrast Typographic Section (z-50) */}
      <div className="container px-6 mx-auto text-center relative z-50 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-display font-black text-foreground tracking-tighter leading-none select-none drop-shadow-[0_4px_20px_rgba(255,255,255,0.85)] dark:drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
        >        Computer Science<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500 drop-shadow-sm font-black">
          &amp; Engineering
        </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-base md:text-xl mt-8 font-mono max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          B.Tech student at Vignan University, graduating in 2027. I work across machine learning, web development, and cloud technologies, and have led student and university sports initiatives.
        </motion.p>
      </div>
    </section>
  );
}
