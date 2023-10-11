"use client";

import React, { useRef, useEffect, useState } from "react";
import { useMousePosition } from "@/util/mouse";

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

export default function Particles({
  className = "",
  quantity = 30,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);
  const mousePosition = useMousePosition();
  const [dpr, setDPR] = useState<number>(1); // Initialized to 1 as default

  useEffect(() => {
    setDPR(window.devicePixelRatio || 1);

    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      initializeCanvas();
      animate();
      window.addEventListener("resize", initializeCanvas);
      return () => {
        window.removeEventListener("resize", initializeCanvas);
      };
    }
  }, []);

  const initializeCanvas = () => {
    if (canvasRef.current && context.current) {
      canvasRef.current.width = window.innerWidth * dpr;
      canvasRef.current.height = window.innerHeight * dpr;
      canvasRef.current.style.width = `${window.innerWidth}px`;
      canvasRef.current.style.height = `${window.innerHeight}px`;
      context.current.scale(dpr, dpr);
      particles.current = generateParticles(quantity);
    }
  };

  const generateParticles = (num: number) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            // Sizes will now be between 0.5 to 2 units.
            size: Math.random() * 1.5 + 0.5,
            // Horizontal speeds will be between -0.5 to 0.5 units per frame.
            speedX: Math.random() * 1 - 0.5,
            // Vertical speeds will also be between -0.5 to 0.5 units per frame.
            speedY: Math.random() * 1 - 0.5,
            color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        });
    }
    return arr;
};


  const colorOptions = ["#F88937", "#FC6474", "#2E466C", "#6C8FA7", "#D2AA9C", "#323C59"];

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (Math.abs(mousePosition.x - particle.x) < 50 && Math.abs(mousePosition.y - particle.y) < 50) {
			particle.x += (mousePosition.x - particle.x) / 10;
			particle.y += (mousePosition.y - particle.y) / 10;
		}
		

        drawParticle(particle);

        if (particle.x < 0 || particle.x > window.innerWidth || particle.y < 0 || particle.y > window.innerHeight) {
          particle.x = Math.random() * window.innerWidth;
          particle.y = Math.random() * window.innerHeight;
        }
      });

      requestAnimationFrame(animate);
    }
  };

  const drawParticle = (particle: any) => {
    if (context.current) {
      context.current.fillStyle = particle.color;
      context.current.beginPath();
      context.current.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
      context.current.fill();
    }
  };

  return (
    <div className={className}>
      <canvas ref={canvasRef} />
    </div>
  );
}
