import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[];'.split('');
    let columns: number;
    let drops: number[];
    let animId: number;
    const FONT_SIZE = 13;

    const isLightMode = () => document.documentElement.getAttribute('data-theme') === 'light';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / FONT_SIZE);
      if (!drops || drops.length !== columns) {
        drops = Array.from({ length: columns }, () => Math.random() * -100);
      }
    };

    const draw = () => {
      const light = isLightMode();

      ctx.fillStyle = light ? 'rgba(244, 246, 249, 0.18)' : 'rgba(7, 9, 13, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px "Space Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        const isLead = Math.random() > 0.95;
        if (light) {
          ctx.fillStyle = isLead ? 'rgba(0, 120, 60, 0.22)' : 'rgba(0, 168, 84, 0.08)';
        } else {
          ctx.fillStyle = isLead ? 'rgba(0, 230, 118, 0.35)' : 'rgba(0, 230, 118, 0.10)';
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }
      animId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (animId) cancelAnimationFrame(animId);
      resize();
      draw();
    };

    window.addEventListener('resize', resize, { passive: true });
    
    // Observer for theme changes to reset matrix quickly
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTimeout(start, 50);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    start();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }} 
    />
  );
};

export default MatrixRain;
