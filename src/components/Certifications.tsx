"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "HR Analytics",
    issuer: "NPTEL",
    distinction: "Silver + Elite Medal",
  },
  {
    title: "E-Business",
    issuer: "NPTEL",
  },
  {
    title: "Advanced Idea Presentation",
    issuer: "Vardaan Ideathon",
    distinction: "2025",
  },
  {
    title: "Public Speaking",
    issuer: "VFSTR",
  },
  {
    title: "B2-level English Certification",
    issuer: "Cambridge",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-7xl font-display font-bold tracking-tight mb-16 text-foreground"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="min-h-48 p-7 rounded-2xl border border-foreground/10 bg-card/60 backdrop-blur-sm"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                {certification.issuer}
              </p>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                {certification.title}
              </h3>
              {certification.distinction && (
                <p className="mt-3 text-muted-foreground">
                  {certification.distinction}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
