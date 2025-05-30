import { MagicReveal } from '../../components/MagicalReveal';
import { useMemo } from 'react';
import icons from '../../constants/skill-constant';
import './skills.css';

const generateOrbit = (index: number) => {
  const radius = 120 + index * 10;
  const speed = 8 + index * 2;
  const startAngle = Math.random() * 360;
  return { radius, speed, startAngle };
};

export const SkillsSection = () => {
  const orbits = useMemo(() => icons.map((_, i) => generateOrbit(i)), []);

  return (
    <section
      id="skills"
      className="relative h-screen bg-gradient-to-b from-pink-950 to-black flex justify-center items-center text-white overflow-hidden"
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-16 animate-float scale-50 md:scale-70">
        <MagicReveal delay={0.2}>
          <h2 className="text-6xl font-magic z-10 glow-text animate-float">
            Skills
          </h2>
        </MagicReveal>
        <MagicReveal delay={0.8}>
          <div className="magic-globe">
            {icons.map((icon, i) => {
              const { radius, speed, startAngle } = orbits[i];
              return (
                <div
                  key={i}
                  className="orbit-wrapper"
                  style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                    animation: `orbit ${speed}s linear infinite`,
                    transform: `rotate(${startAngle}deg)`,
                  }}
                >
                  <img
                    src={icon}
                    alt={`tech-icon-${i}`}
                    className="tech-icon"
                    style={{
                      transform: `translateX(${radius}px)`,
                      animationDelay: `${i}s`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </MagicReveal>
      </div>
    </section>
  );
};
