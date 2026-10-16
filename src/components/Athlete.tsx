"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Athlete() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !ballRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Only track if section is somewhat in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        ballRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      id="athletics" 
      ref={containerRef} 
      className="relative w-full min-h-[120vh] bg-transparent flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Parallax */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/athlete.jpg"
          alt="Table Tennis Athlete"
          fill
          className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background" />
      </motion.div>

      {/* Floating TT Ball trailing mouse */}
      <div
        ref={ballRef}
        className="fixed top-0 left-0 w-10 h-10 bg-orange-400 rounded-full shadow-[0_0_30px_rgba(251,146,60,0.8)] pointer-events-none z-10 mix-blend-screen hidden lg:block transition-transform duration-[0.1s] ease-out"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      <div className="container relative z-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-mono text-primary uppercase tracking-[0.2em] mb-6"
          >
            Discipline Beyond Code
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground via-orange-300 to-orange-500 mb-12"
          >
            Gold Medalist
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-md border border-foreground/10 p-8 md:p-12 rounded-3xl"
          >
            <p className="text-xl md:text-4xl text-foreground font-display leading-relaxed italic">
              Table tennis gold medals at NRIIT SARITAM Sports Fest, VIGNAN Intra-Uni Tournament, and VCODE Department-Level Fest.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
