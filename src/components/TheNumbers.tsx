"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TheNumbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { num: "7.30", text: "CGPA / 10", color: "text-primary" },
    { num: "496", text: "Students Reached", color: "text-purple-500" },
    { num: "72", text: "Students Led", color: "text-yellow-500" },
    { num: "500+", text: "Sports Members", color: "text-green-500" },
    { num: "15", text: "Sports Games", color: "text-pink-500" }
  ];

  return (
    <section id="numbers" ref={containerRef} className="py-40 bg-transparent relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0f1c] to-background z-0" />
      <motion.div style={{ y }} className="absolute -right-64 top-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full z-0" />
      
      <div className="container relative z-10 px-6 mx-auto flex flex-col gap-12 md:gap-24">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`flex flex-col md:flex-row items-center gap-4 md:gap-12 ${i % 2 !== 0 ? 'md:self-end text-right md:flex-row-reverse' : 'self-start text-left'}`}
          >
            <div className={`text-8xl md:text-[12rem] font-display font-bold leading-none tracking-tighter ${stat.color} drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
              {stat.num}
            </div>
            <div className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight uppercase">
              {stat.text.split(' ').map((word, wIdx) => (
                <span key={wIdx} className="block">{word}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
