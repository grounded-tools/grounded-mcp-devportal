import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glowSize: number;
  opacity: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = 70;
    const connectionDistance = 200;

    const initParticles = (width: number, height: number) => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 2 + 1,
          glowSize: Math.random() * 30 + 10,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const resizeCanvas = () => {
      const newWidth = canvas.offsetWidth;
      const newHeight = canvas.offsetHeight;

      // Only reinitialize if dimensions actually changed significantly
      if (
        Math.abs(newWidth - dimensionsRef.current.width) > 50 ||
        Math.abs(newHeight - dimensionsRef.current.height) > 50
      ) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        dimensionsRef.current = { width: newWidth, height: newHeight };
        initParticles(newWidth, newHeight);
      }
    };

    const drawParticle = (p: Particle) => {
      // Glow effect with orange color
      const gradient = ctx.createRadialGradient(
        p.x,
        p.y,
        0,
        p.x,
        p.y,
        p.glowSize
      );
      gradient.addColorStop(0, `rgba(255, 170, 0, ${p.opacity})`);
      gradient.addColorStop(0.3, `rgba(255, 170, 0, ${p.opacity * 0.4})`);
      gradient.addColorStop(1, "rgba(255, 170, 0, 0)");

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.glowSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core dot (bright golden yellow center)
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 220, 100, ${p.opacity + 0.2})`;
      ctx.fill();
    };

    const drawLine = (p1: Particle, p2: Particle, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(255, 170, 0, ${opacity * 0.5})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const updateParticle = (p: Particle) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (const p of particles) {
        updateParticle(p);
        drawParticle(p);
      }

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            drawLine(particles[i], particles[j], opacity);
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initial setup
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    dimensionsRef.current = { width: canvas.width, height: canvas.height };
    initParticles(canvas.width, canvas.height);
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};
