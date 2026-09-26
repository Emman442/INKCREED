import React, { useEffect, useRef, useState } from 'react';

interface Bloom {
  id: number;
  x: number;
  y: number;
}

export const RegistrationCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isKissing, setIsKissing] = useState(false);
  const [blooms, setBlooms] = useState<Bloom[]>([]);

  // Refs for tracking physics & dwell
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const stopTimer = useRef<NodeJS.Timeout | null>(null);
  const animFrame = useRef<number | null>(null);
  const bloomCounter = useRef(0);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad)
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;
    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      // Clear existing bloom timer when moving
      if (stopTimer.current) {
        clearTimeout(stopTimer.current);
      }

      // If stationary for 180ms, spawn a 16px ink bloom
      stopTimer.current = setTimeout(() => {
        const id = ++bloomCounter.current;
        const newBloom = {
          id,
          x: targetPos.current.x,
          y: targetPos.current.y,
        };
        setBlooms((prev) => [...prev.slice(-3), newBloom]);

        // Bloom fades in 400ms
        setTimeout(() => {
          setBlooms((prev) => prev.filter((b) => b.id !== id));
        }, 400);
      }, 180);
    };

    const onMouseDown = () => {
      setIsKissing(true);
      setTimeout(() => {
        setIsKissing(false);
      }, 200);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);

    // 100ms lag with ease-out interpolation loop
    let lastTime = performance.now();
    const updateCursor = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Lerp with ~100ms lag factor
      const factor = 1 - Math.exp(-dt * 18);
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * factor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * factor;

      setPos({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      animFrame.current = requestAnimationFrame(updateCursor);
    };

    animFrame.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      if (stopTimer.current) clearTimeout(stopTimer.current);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  if (!enabled || pos.x < 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Ink Bloom discs on pause */}
      {blooms.map((b) => (
        <div
          key={b.id}
          className="absolute w-4 h-4 rounded-full bg-[#14181C] animate-ink-bloom"
          style={{
            left: `${b.x}px`,
            top: `${b.y}px`,
          }}
        />
      ))}

      {/* Main Cursor: 14px print registration mark (or 10px press-kiss square on click) */}
      <div
        className="absolute transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {isKissing ? (
          /* 10px square "press kiss" on click */
          <div className="w-[10px] h-[10px] bg-[#1F4E79] shadow-sm transform scale-100 transition-all duration-200" />
        ) : (
          /* 14px print registration mark: crosshair + crop ticks */
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#14181C]"
          >
            {/* Center target circle */}
            <circle cx="7" cy="7" r="3.2" stroke="currentColor" strokeWidth="0.8" fill="none" />
            {/* Center crosshairs */}
            <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="0.8" />
            <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="0.8" />
            {/* 4 short crop ticks */}
            <line x1="2" y1="2" x2="4" y2="2" stroke="currentColor" strokeWidth="0.8" />
            <line x1="2" y1="2" x2="2" y2="4" stroke="currentColor" strokeWidth="0.8" />
            
            <line x1="12" y1="2" x2="10" y2="2" stroke="currentColor" strokeWidth="0.8" />
            <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="0.8" />
            
            <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="0.8" />
            <line x1="2" y1="12" x2="2" y2="10" stroke="currentColor" strokeWidth="0.8" />
            
            <line x1="12" y1="12" x2="10" y2="12" stroke="currentColor" strokeWidth="0.8" />
            <line x1="12" y1="12" x2="12" y2="10" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        )}
      </div>
    </div>
  );
};
