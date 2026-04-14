import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }
    };

    const animateRing = () => {
      rx += (mx - rx - 17) * 0.12;
      ry += (my - ry - 17) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateRing);

    const interactiveSelectors = 'a, button, .skill-card, .exp-card, .int-item, .hover-toggle';
    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '52px';
        ringRef.current.style.height = '52px';
        ringRef.current.style.borderColor = 'rgba(245,166,35,0.65)';
      }
    };
    
    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '34px';
        ringRef.current.style.height = '34px';
        ringRef.current.style.borderColor = 'rgba(0,230,118,0.45)';
      }
    };

    const setupInteractivity = () => {
      const elements = document.querySelectorAll(interactiveSelectors);
      elements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Need a bit of delay to allow other components to mount
    setTimeout(setupInteractivity, 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      const elements = document.querySelectorAll(interactiveSelectors);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        @media (hover: hover) {
          body { cursor: none; }
          .cursor {
            width: 10px; height: 10px;
            background: var(--green); border-radius: 50%;
            position: fixed; top: 0; left: 0; pointer-events: none;
            z-index: 9999; mix-blend-mode: screen;
          }
          .cursor-ring {
            width: 34px; height: 34px;
            border: 1.5px solid rgba(0,230,118,0.45);
            border-radius: 50%;
            position: fixed; top: 0; left: 0; pointer-events: none;
            z-index: 9998;
            transition: width 0.2s, height 0.2s, border-color 0.2s;
          }
        }
        @media (hover: none) {
          .cursor, .cursor-ring { display: none; }
        }
      `}</style>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;
