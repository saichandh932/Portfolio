"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const links = [
    { name: "Story", href: "#story" },
    { name: "Journey", href: "#journey" },
    { name: "Leadership", href: "#leadership" },
    { name: "Research", href: "#research" },
    { name: "Athlete", href: "#athletics" },
    { name: "Connect", href: "#contact" }
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-foreground/5 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <a 
          href="#" 
          className="font-display text-lg md:text-xl font-bold tracking-widest text-foreground hover:opacity-80 transition-opacity"
        >
          SAI CHANDH PATHURI
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-widest uppercase font-mono text-muted-foreground hover:text-foreground transition-all duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-background/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-foreground hover:opacity-80 transition-opacity"
            >
              <X size={28} />
            </button>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
