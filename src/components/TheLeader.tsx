"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Trophy, GraduationCap } from "lucide-react";

export default function TheLeader() {
  const cards = [
    {
      title: "Mahotsav 2026 Core Committee",
      icon: <Users className="w-8 h-8 text-primary" />,
      desc: "Core committee member for Vignan University’s national-level youth festival."
    },
    {
      title: "Vice President",
      subtitle: "Sports Contingent",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      desc: "Managed 5 verticals and 15 games, overseeing more than 500 members in Team Vignan Sports Contingent."
    },
    {
      title: "Student Orientation Intern",
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      desc: "Led a group of 72 as a Student Orientation Program intern and mentored juniors on how their subjects connect to industry, research, and daily life. Also conducted Coding Geeks Club for 496 students."
    }
  ];

  return (
    <section id="leadership" className="py-32 bg-transparent relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Photos Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="/images/mahotsav-group.jpg" alt="Group" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="/images/mic1.JPG" alt="Speaking" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="/images/Public Speaking.jpg" alt="Public Speaking" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="/images/Event.jpg" alt="Event" fill className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards Side */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-16"
            >
              Leading Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">The Classroom.</span>
            </motion.h2>

            <div className="space-y-6">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-8 rounded-3xl bg-card/50 border border-foreground/5 backdrop-blur-sm hover:bg-foreground/5 transition-colors group flex items-start gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-1">{card.title}</h3>
                    {card.subtitle && <h4 className="text-lg text-primary font-mono uppercase tracking-widest mb-2">{card.subtitle}</h4>}
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
