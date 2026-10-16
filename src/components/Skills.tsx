"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python", "C", "Machine Learning", "Scikit-learn", "Pandas", "NumPy",
    "Java", "AWS", "SQL", "MongoDB", "VS Code", "Google Colab"
  ];

  return (
    <section className="py-32 bg-transparent relative flex items-center justify-center overflow-hidden min-h-[50vh]">
      <div className="container px-6 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-3xl font-display font-medium text-muted-foreground mb-16"
        >
          My Arsenal
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1, 
                type: "spring", 
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 107, 26, 0.2)",
                borderColor: "rgba(255, 107, 26, 0.5)"
              }}
              className="px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 text-foreground font-mono text-sm md:text-base cursor-default transition-colors duration-300 shadow-lg backdrop-blur-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
