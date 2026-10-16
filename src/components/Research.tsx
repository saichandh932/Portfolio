"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Research() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="research" ref={containerRef} className="relative w-full py-32 bg-transparent overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h3 className="text-5xl md:text-7xl font-display font-bold">Research &amp; <br /> Publication</h3>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            style={{ y }}
            className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-blue-500/30 to-transparent perspective-1000"
          >
            <div className="bg-card rounded-[2.4rem] p-8 md:p-16 border border-primary/20 backdrop-blur-xl">
              
              {/* Timeline Animation Line */}
              <div className="absolute left-8 md:left-16 top-16 bottom-16 w-px bg-foreground/10 hidden md:block">
                <motion.div 
                  className="w-full bg-primary origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center pl-0 md:pl-12">
                <div className="space-y-8 relative">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -left-[3.5rem] top-2 w-4 h-4 rounded-full bg-card border-2 border-primary hidden md:block z-10"
                  />

                  <div>
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-blue-400 font-mono text-xs uppercase tracking-widest">
                      IEEE Publication
                    </div>
                    <h4 className="text-3xl md:text-5xl font-display font-semibold leading-tight text-foreground mb-6">
                      Network Function Virtualization for Cloud and Edge Computing
                    </h4>
                    <p className="text-xl text-muted-foreground font-light mb-2">
                      A Comprehensive Survey and Future Research Directions
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Authors: P. Sai Chandh, G. Siva Sai Ruthvik, and M. Siva Subrahmanyam. Guided by Dr. J. Vijitha Ananthi.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-foreground/10">
                    <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-widest font-mono">
                      IEEE · Paper ID: ICOIICS-112
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, type: "spring" }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/10 group shadow-2xl"
                >
                  <Image
                    src="/images/certificate.jpg"
                    alt="IEEE Certificate"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent mix-blend-overlay" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
