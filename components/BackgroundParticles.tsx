import React, { useEffect, useRef } from "react";

const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = 60;
    let particles: ReturnType<typeof createParticle>[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let size = Math.random() * 2 + 0.5;
      let speedX = Math.random() * 0.4 - 0.2;
      let speedY = Math.random() * 0.4 - 0.2;
      let opacity = Math.random() * 0.3 + 0.1;

      const reset = () => {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        size = Math.random() * 2 + 0.5;
        speedX = Math.random() * 0.4 - 0.2;
        speedY = Math.random() * 0.4 - 0.2;
        opacity = Math.random() * 0.3 + 0.1;
      };

      const update = () => {
        x += speedX;
        y += speedY;

        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
          reset();
        }
      };

      const draw = () => {
        ctx.fillStyle = `rgba(255, 0, 60, ${opacity})`;
        ctx.beginPath();
        ctx.rect(x, y, size, size); // square particles
        ctx.fill();
      };

      return { update, draw };
    };

    const init = () => {
      particles = Array.from({ length: particleCount }, createParticle);
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-black"
    />
  );
};

export default BackgroundParticles;
