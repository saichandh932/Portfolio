"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  xFactor: number;
  yFactor: number;
  speedFactor: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    // Track mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    // Track screen resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Initialize mouse at center
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 2;
    mouseRef.current.targetX = width / 2;
    mouseRef.current.targetY = height / 2;

    // Create 150 optimized particles (perfect density for ambient styling)
    const particles: Particle[] = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseRadius: Math.random() * 1.5 + 0.8,
        radius: 0,
        xFactor: 10 + Math.random() * 40,
        yFactor: 10 + Math.random() * 40,
        speedFactor: 0.005 + Math.random() * 0.015,
      });
    }

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse coordinates (lerp)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      time += 0.02;

      // Color setting (using primary portfolio color #FF6B1A)
      ctx.fillStyle = "rgba(255, 107, 26, 0.35)";

      particles.forEach((p) => {
        // Move particle slowly
        p.x += p.vx;
        p.y += p.vy;

        // Wave displacement logic
        const waveX = Math.sin(time * p.speedFactor * p.xFactor) * 0.2;
        const waveY = Math.cos(time * p.speedFactor * p.yFactor) * 0.2;

        p.x += waveX;
        p.y += waveY;

        // Bounce boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Mouse displacement effect
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let offsetX = 0;
        let offsetY = 0;
        
        if (dist < 220) {
          const force = (220 - dist) / 220;
          // Softly push away from mouse cursor
          offsetX = (dx / dist) * force * 15;
          offsetY = (dy / dist) * force * 15;
        }

        // Pulse scale animation over time
        p.radius = p.baseRadius * (1 + Math.sin(time + p.xFactor) * 0.25);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      style={{ willChange: "transform" }}
    />
  );
}
