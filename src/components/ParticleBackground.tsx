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

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let particles: Particle[] = [];
		const mouse = { x: -1000, y: -1000 };

		const particleCount = 50;
		const connectionDistance = 150;
		const mouseConnectionDistance = 200;

		const resizeCanvas = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			initParticles();
		};

		const initParticles = () => {
			particles = [];
			for (let i = 0; i < particleCount; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * 0.15,
					vy: (Math.random() - 0.5) * 0.15,
					radius: Math.random() * 2 + 1,
					glowSize: Math.random() * 30 + 10,
					opacity: Math.random() * 0.5 + 0.3,
				});
			}
		};

		const drawParticle = (p: Particle) => {
			if (!ctx) return;

			// Glow effect with orange color
			const gradient = ctx.createRadialGradient(
				p.x,
				p.y,
				0,
				p.x,
				p.y,
				p.glowSize,
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

		const drawLine = (
			p1: Particle,
			p2: { x: number; y: number },
			opacity: number,
		) => {
			if (!ctx) return;
			ctx.beginPath();
			ctx.moveTo(p1.x, p1.y);
			ctx.lineTo(p2.x, p2.y);
			ctx.strokeStyle = `rgba(255, 170, 0, ${opacity * 0.2})`;
			ctx.lineWidth = 1;
			ctx.stroke();
		};

		const updateParticle = (p: Particle) => {
			p.x += p.vx;
			p.y += p.vy;

			if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
			if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
		};

		const animate = () => {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((p) => {
				updateParticle(p);
				drawParticle(p);
			});

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

				// Draw connection to mouse
				const dxMouse = particles[i].x - mouse.x;
				const dyMouse = particles[i].y - mouse.y;
				const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

				if (distMouse < mouseConnectionDistance) {
					const opacity = 1 - distMouse / mouseConnectionDistance;
					drawLine(particles[i], mouse, opacity);
				}
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		const handleMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		};

		const handleMouseLeave = () => {
			mouse.x = -1000;
			mouse.y = -1000;
		};

		resizeCanvas();
		animate();

		window.addEventListener("resize", resizeCanvas);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			canvas.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("mouseleave", handleMouseLeave);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full z-0"
			style={{ background: "transparent" }}
		/>
	);
};
