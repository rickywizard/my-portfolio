import tarotBg from '../../assets/images/card.jpg';
import introBg from '../../assets/images/first.jpg';
import { githubIcon } from '../../assets/icons';
import { useRef, useState } from 'react';
import { MagicReveal } from '../../components/MagicalReveal';
import { projects, type Project } from '../../constants/project-constant';
import './projects.css';

export const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => setIndex((prev) => (prev + 1) % (projects.length + 1));
  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + (projects.length + 1)) % (projects.length + 1)
    );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) {
      next();
    } else if (distance < -threshold) {
      prev();
    }
  };

  return (
    <section
      id="projects"
      className="relative h-screen bg-gradient-to-b from-black to-yellow-950 py-16 px-4 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <MagicReveal delay={0.2}>
        <div
          className="swiper-container scale-50 sm:scale-65 md:scale-75"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="nav-button left" onClick={prev}></button>
          <div className="swiper-track">
            {[null, ...projects].map((project: Project | null, i) => {
              const offset = i - index;
              const isActive = i === index;
              const isIntro = i === 0;

              return (
                <div
                  key={i}
                  className={`card ${isActive ? 'active' : ''}`}
                  style={{
                    backgroundImage: `url(${isIntro ? introBg : tarotBg})`,
                    transform: `translateX(${offset * 110}%) scale(${
                      isActive ? 0.95 : 0.75
                    })`,
                    zIndex: projects.length + 1 - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                  }}
                >
                  {isIntro ? (
                    <div className="flex flex-col items-center justify-center h-full w-full text-white px-10 text-center">
                      <h2 className="text-4xl font-bold mb-2">My Projects</h2>
                      <p className="text-lg">
                        Explore magical creations and enchanted software crafted
                        with code and creativity. Click next card or swipe in
                        mobile.
                      </p>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project?.image}
                        alt={project?.name}
                        className="screenshot"
                      />
                      <div className="flex items-center justify-between w-full px-8">
                        <h3 className="my-1 text-lg">{project?.name}</h3>
                        <a
                          href={project?.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-6 bg-white rounded-full p-0.5"
                        >
                          <img src={githubIcon} alt="github" />
                        </a>
                      </div>
                      <p className="h-full w-full py-6 px-14 text-base text-black">
                        {project?.description}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <button className="nav-button right" onClick={next}></button>
        </div>
      </MagicReveal>
    </section>
  );
};
