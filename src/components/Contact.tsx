"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const links = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/pathurisaichandh" },
    { label: "Email", url: "mailto:231fa04672pathuri@gmail.com" },
    { label: "Phone", url: "tel:+916281511563" },
    { label: "Resume", url: "/Sai-Chandh-Pathuri-Resume.pdf" }
  ];

  return (
    <footer id="contact" className="w-full relative py-40 overflow-hidden bg-transparent border-t border-foreground/5">
      
      {/* Background Podium Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30 grayscale mix-blend-overlay" 
        style={{ 
          backgroundImage: 'url(/images/mahotsav-speaking.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center 30%' 
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-[7rem] leading-none font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-white/40 mb-16"
        >
          Let&apos;s Build <br /> Something Meaningful.
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target={link.label === "Resume" ? "_blank" : undefined}
              rel={link.label === "Resume" ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-8 py-4 rounded-full bg-foreground/5 hover:bg-primary/20 border border-foreground/10 hover:border-primary/50 text-foreground font-mono text-sm tracking-widest uppercase transition-all shadow-lg backdrop-blur-md"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
