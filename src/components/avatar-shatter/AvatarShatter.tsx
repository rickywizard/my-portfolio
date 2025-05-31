import { useEffect, useRef, useState } from 'react';
import avatar from '../../assets/images/avatar.png';
import photo from '../../assets/images/photo.png';
import './avatar-shatter.css';

export const AvatarShatter = () => {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const createParticles = (type: 'shatter-out' | 'shatter-in') => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = `glass-particle ${type}`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.setProperty('--x', `${(Math.random() - 0.5) * 400}px`);
      particle.style.setProperty('--y', `${(Math.random() - 0.5) * 400}px`);
      container.appendChild(particle);
      particles.push(particle);
    }

    timeoutRef.current = setTimeout(() => {
      particles.forEach((p) => container.removeChild(p));
    }, 1000);
  };

  const handleEnter = () => {
    setHovered(true);
    createParticles('shatter-out');
  };

  const handleLeave = () => {
    setHovered(false);
    createParticles('shatter-in');
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 group overflow-hidden cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      ref={containerRef}
    >
      <img
        src={photo}
        alt="Real Photo"
        className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
      />

      <div className={`avatar-layer ${hovered ? 'fade-out' : 'fade-in'}`}>
        <img
          src={avatar}
          alt="Avatar"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
