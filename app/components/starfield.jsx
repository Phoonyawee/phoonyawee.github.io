"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // สร้างดาว 3 ชั้น (ไกล, กลาง, ใกล้)
    const layers = [
      { count: 180, radius: 0.6, speed: 0.02, opacity: 0.5 },
      { count: 100, speed: 0.04, radius: 1.0, opacity: 0.7 },
      { count: 50,  speed: 0.07, radius: 1.6, opacity: 1.0 },
    ];

    const stars = [];
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: layer.radius * (0.7 + Math.random() * 0.6),
          speed: layer.speed * (0.8 + Math.random() * 0.4),
          opacity: layer.opacity * (0.6 + Math.random() * 0.4),
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    });

    // shooting star
    let shooting = null;
    const spawnShoot = () => {
      shooting = {
        x: Math.random() * window.innerWidth * 0.7,
        y: Math.random() * window.innerHeight * 0.4,
        len: 120 + Math.random() * 80,
        speed: 8 + Math.random() * 6,
        angle: Math.PI / 5,
        alpha: 1,
        progress: 0,
      };
    };
    const shootInterval = setInterval(spawnShoot, 4000);
    spawnShoot();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // วาดดาว
      stars.forEach((s) => {
        s.twinkle += s.twinkleSpeed;
        const glow = 0.5 + 0.5 * Math.sin(s.twinkle);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * (0.6 + 0.4 * glow)})`;
        ctx.fill();

        // glow effect สำหรับดาวสว่าง
        if (s.r > 1.2) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 210, 255, ${0.06 * glow})`;
          ctx.fill();
        }
      });

      // วาด shooting star
      if (shooting) {
        shooting.progress += shooting.speed;
        const x2 = shooting.x + Math.cos(shooting.angle) * shooting.progress;
        const y2 = shooting.y + Math.sin(shooting.angle) * shooting.progress;
        shooting.alpha = Math.max(0, 1 - shooting.progress / shooting.len);

        const grad = ctx.createLinearGradient(
          shooting.x, shooting.y, x2, y2
        );
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.4, `rgba(200,230,255,${shooting.alpha * 0.6})`);
        grad.addColorStop(1, `rgba(255,255,255,${shooting.alpha})`);

        ctx.beginPath();
        ctx.moveTo(shooting.x, shooting.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (shooting.progress > shooting.len) shooting = null;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="star-canvas" ref={canvasRef} aria-hidden="true" />;
}
