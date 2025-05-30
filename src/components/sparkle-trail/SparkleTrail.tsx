import { useEffect } from 'react';
import './sparkle.css';

const COLORS = [
  'radial-gradient(circle, #fffacd, #ffd700)', // Gold
  'radial-gradient(circle, #add8e6, #1e90ff)', // Blue
  'radial-gradient(circle, #dda0ff, #ffffff)', // Default magic
];

export const SparkleTrail = () => {
  useEffect(() => {
    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      sparkle.style.background = color;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};
