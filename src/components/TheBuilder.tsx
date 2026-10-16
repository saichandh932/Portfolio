"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Database, BrainCircuit, Server } from "lucide-react";

export default function TheBuilder() {
  const stack = ["React.js", "HTML", "CSS", "JavaScript", "Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "MySQL"];

  return (
    <section id="projects" className="py-32 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h3 className="text-5xl md:text-7xl font-display font-bold">Turning Ideas <br /> Into Products</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[2.5rem] bg-card/50 border border-foreground/10 overflow-hidden backdrop-blur-sm"
          >
            {/* Top decorative bar */}
            <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-blue-500" />
            
            <div className="p-8 md:p-16">
              <div className="flex items-center gap-4 mb-8 text-primary">
                <BrainCircuit className="w-10 h-10" />
                <span className="font-mono uppercase tracking-widest text-sm">Featured Product</span>
              </div>

              <h4 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                Student Performance Prediction and Early Warning System
              </h4>

              <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                A real-time machine learning system that predicts student performance and identifies at-risk students for early intervention. Its dashboard provides actionable insights to help improve academic outcomes.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                {stack.map((tech, i) => (
                  <div key={i} className="px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 font-mono text-sm flex items-center gap-2 text-foreground/80">
                    {["React.js", "HTML", "CSS", "JavaScript"].includes(tech) && <Code2 className="w-4 h-4 text-accent" />}
                    {["Python", "Scikit-learn", "Pandas", "NumPy"].includes(tech) && <BrainCircuit className="w-4 h-4 text-primary" />}
                    {tech === "MySQL" && <Database className="w-4 h-4 text-blue-400" />}
                    {tech === "Flask" && <Server className="w-4 h-4 text-green-400" />}
                    {tech}
                  </div>
                ))}
              </div>

              {/* Build Image Gallery */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-foreground/10 hover:scale-105 transition-transform duration-500">
                  <Image src="/images/build 1.JPG" alt="Build 1" fill className="object-cover" />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-foreground/10 hover:scale-105 transition-transform duration-500">
                  <Image src="/images/build 2.jpg" alt="Build 2" fill className="object-cover" />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-foreground/10 hover:scale-105 transition-transform duration-500">
                  <Image src="/images/build 3.jpg" alt="Build 3" fill className="object-cover" />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-foreground/10 hover:scale-105 transition-transform duration-500">
                  <Image src="/images/build.jpg" alt="Build Main" fill className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
