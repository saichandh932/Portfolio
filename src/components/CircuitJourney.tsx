"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, GraduationCap } from "lucide-react";

interface YearData {
  id: number;
  year: string;
  period: string;
  title: string;
  academic: {
    heading: string;
    institution?: string;
    details: string;
    highlights: string[];
  };
  extracurricular: {
    heading: string;
    details: string;
    highlights: string[];
  };
}

const journeyData: YearData[] = [
  {
    id: 1,
    year: "Education",
    period: "2021–2027",
    title: "Academic History",
    academic: {
      heading: "Undergraduate Degree",
      institution: "Vignan University (VFSTR)",
      details: "B.Tech in Computer Science & Engineering, 2023–2027. Current CGPA: 7.30/10.0.",
      highlights: ["Vignan Foundation for Science, Technology and Research"]
    },
    extracurricular: {
      heading: "Earlier Education",
      details: "Class XII: 93.2% in 2023; Class X: 72.2% in 2021.",
      highlights: ["Bashyam Junior College · BIEAP", "Sri Chaitanya School · CBSE"]
    }
  },
  {
    id: 2,
    year: "Project",
    period: "Machine Learning",
    title: "Student Performance Prediction",
    academic: {
      heading: "Early Warning System",
      details: "A real-time machine learning system that predicts student performance and identifies at-risk students for early intervention.",
      highlights: ["Dashboard with actionable insights", "Designed to help improve academic outcomes"]
    },
    extracurricular: {
      heading: "Technology Stack",
      details: "Frontend, machine learning, and database technologies used in the project.",
      highlights: ["React.js, HTML, CSS, JavaScript", "Python, Flask, Scikit-learn, Pandas, NumPy", "MySQL"]
    }
  },
  {
    id: 3,
    year: "Research",
    period: "IEEE",
    title: "Cloud & Edge Computing",
    academic: {
      heading: "Published Paper",
      institution: "IEEE · Paper ID: ICOIICS-112",
      details: "“Network Function Virtualization for Cloud and Edge Computing: A Comprehensive Survey and Future Research Directions.”",
      highlights: ["Co-authored with G. Siva Sai Ruthvik and M. Siva Subrahmanyam"]
    },
    extracurricular: {
      heading: "Research Guidance",
      details: "Research conducted under the guidance of Dr. J. Vijitha Ananthi.",
      highlights: ["Equal contributor"]
    }
  },
  {
    id: 4,
    year: "Leadership",
    period: "Activities & Awards",
    title: "Leadership & Recognition",
    academic: {
      heading: "Student Leadership",
      institution: "Vignan University",
      details: "Student Orientation Program intern and Vice President of Team Vignan Sports Contingent; core committee member for Mahotsav 2026.",
      highlights: ["Led a group of 72 and mentored juniors", "Conducted Coding Geeks Club for 496 students", "Managed 5 sports verticals and 15 games for 500+ members"]
    },
    extracurricular: {
      heading: "Awards",
      details: "Table tennis gold medals at three listed events.",
      highlights: ["NRIIT SARITAM Sports Fest", "VIGNAN Intra-Uni Tournament", "VCODE Department-Level Fest", "Advanced Idea Presentation · Vardaan Ideathon 2025"]
    }
  }
];

export default function CircuitJourney() {
  const [activeId, setActiveId] = useState<number>(1);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef<boolean>(true);

  // Auto cycle: transitions the resume snapshot every 6 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoPlayRef.current) return;
      
      setProgress((prev) => {
        if (prev >= 100) {
        setActiveId((curr) => (curr === journeyData.length ? 1 : curr + 1));
          return 0;
        }
        return prev + (100 / 60); // Increment progress bar
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleNodeClick = (id: number) => {
    setActiveId(id);
    setProgress(0);
    // Pause auto play temporarily on user interaction, restart after a delay
    autoPlayRef.current = false;
    setTimeout(() => {
      autoPlayRef.current = true;
    }, 8000);
  };

  const activeData = journeyData.find((item) => item.id === activeId) || journeyData[0];

  return (
    <section id="journey" className="py-32 w-full min-h-screen relative overflow-hidden bg-transparent border-t border-foreground/5">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-primary"
          >
            Resume Snapshot
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight mt-2 text-foreground"
          >
            Education, Projects &amp; Leadership
          </motion.h2>
          <p className="text-muted-foreground text-sm max-w-xl mt-3 font-mono">
            A snapshot of the education, project, publication, and experience listed on my resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: PCB Board Grid with LEDs */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center relative min-h-[400px]">
            
            {/* SVG Circuit Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full max-h-[450px]" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Copper base tracks */}
                <path d="M 50,60 L 150,140 L 150,260 L 250,340" stroke="rgba(255,107,26,0.1)" strokeWidth="4" strokeLinecap="round" />
                <path d="M 250,60 L 150,140" stroke="rgba(255,107,26,0.06)" strokeWidth="3" strokeLinecap="round" />
                <path d="M 50,340 L 150,260" stroke="rgba(255,107,26,0.06)" strokeWidth="3" strokeLinecap="round" />

                {/* Animated glowing signal pulses */}
                <motion.path
                  d="M 50,60 L 150,140 L 150,260 L 250,340"
                  stroke="url(#gradient-pulse-stack)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="20, 80"
                  animate={{ strokeDashoffset: [-100, 100] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                <defs>
                  <linearGradient id="gradient-pulse-stack" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b1a" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ff6b1a" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff6b1a" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Absolute-positioned LED terminal pins */}
            <div className="relative w-full h-[400px] flex flex-col justify-between items-center z-10 py-4">
              
              {/* LED Node 1 */}
              <div className="absolute top-[30px] left-[25px] md:left-[50px]">
                <LEDButton id={1} activeId={activeId} label="Education" year="2021–2027" onClick={handleNodeClick} />
              </div>

              {/* LED Node 2 */}
              <div className="absolute top-[110px] right-[100px] md:right-[125px]">
                <LEDButton id={2} activeId={activeId} label="Project" year="ML" onClick={handleNodeClick} />
              </div>

              {/* LED Node 3 */}
              <div className="absolute bottom-[110px] left-[100px] md:left-[125px]">
                <LEDButton id={3} activeId={activeId} label="Research" year="IEEE" onClick={handleNodeClick} />
              </div>

              {/* LED Node 4 */}
              <div className="absolute bottom-[30px] right-[25px] md:right-[50px]">
                <LEDButton id={4} activeId={activeId} label="Leadership" year="Awards" onClick={handleNodeClick} />
              </div>
            </div>
          </div>

          {/* Right: The Phone Widget Stack Container */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-4">
            
            {/* Smart Stack Container */}
            <div style={{ perspective: 1200 }} className="w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 40, rotateX: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, rotateX: 10, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/60 dark:bg-black/50 backdrop-blur-xl border border-foreground/5 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
                >
                  {/* Micro-Accents simulating phone widget borders */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-foreground/5">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear", duration: 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>

                  {/* Silicon chip border accents */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-foreground/5 px-2.5 py-1 rounded-full border border-foreground/5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">AUTO STACK</span>
                  </div>

                  {/* Header Title */}
                  <div className="border-b border-foreground/5 pb-5 mb-6 pt-2">
                    <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">{activeData.period}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                      {activeData.year}: {activeData.title}
                    </h3>
                  </div>

                  {/* Main Grid Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Academic Core Submodule */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                          <Cpu size={18} />
                        </div>
                        <h4 className="font-display font-bold text-base text-foreground tracking-tight">{activeData.academic.heading}</h4>
                      </div>
                      <div className="space-y-3 pl-1">
                        <div className="flex items-start gap-2">
                          <GraduationCap size={16} className="text-primary mt-1 shrink-0" />
                          <span className="font-mono text-xs font-semibold text-foreground/80">{activeData.academic.institution}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {activeData.academic.details}
                        </p>
                        <ul className="space-y-2 pt-2">
                          {activeData.academic.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-foreground/80 font-mono">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Extracurricular/Leadership Submodule */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                          <Zap size={18} />
                        </div>
                        <h4 className="font-display font-bold text-base text-foreground tracking-tight">{activeData.extracurricular.heading}</h4>
                      </div>
                      <div className="space-y-3 pl-1">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {activeData.extracurricular.details}
                        </p>
                        <ul className="space-y-2 pt-2">
                          {activeData.extracurricular.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-foreground/80 font-mono">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Widget Indicators at bottom */}
            <div className="flex justify-center items-center gap-3 mt-2">
              {journeyData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNodeClick(item.id)}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    item.id === activeId 
                      ? "bg-primary w-8" 
                      : "bg-foreground/10 hover:bg-foreground/30 w-2.5"
                  }`}
                  aria-label={`Go to ${item.year}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

interface LEDProps {
  id: number;
  activeId: number;
  label: string;
  year: string;
  onClick: (id: number) => void;
}

function LEDButton({ id, activeId, label, year, onClick }: LEDProps) {
  const isActive = id === activeId;

  return (
    <button
      onClick={() => onClick(id)}
      className="flex flex-col items-center group relative cursor-pointer"
    >
      {/* Dynamic LED halo glow ring */}
      {isActive && (
        <motion.div 
          layoutId="led-halo"
          className="absolute -inset-3 rounded-full bg-primary/20 border border-primary/40 z-0 animate-ping"
          style={{ animationDuration: "2s" }}
        />
      )}

      {/* Terminal Contact Cap */}
      <div 
        className={`w-11 h-11 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-500 shadow-md ${
          isActive 
            ? "bg-primary border-primary text-white shadow-primary/30 scale-105" 
            : "bg-white/80 dark:bg-black/60 border-foreground/10 text-foreground"
        }`}
      >
        <span className="font-display font-extrabold text-xs">
          0{id}
        </span>
      </div>

      {/* Text Info */}
      <div className={`mt-2 flex flex-col items-center z-10 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}>
        <span className="font-display font-bold text-[10px] text-foreground tracking-wide">{label}</span>
        <span className="font-mono text-[8px] text-muted-foreground uppercase">{year}</span>
      </div>
    </button>
  );
}
