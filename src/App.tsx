import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import { FlyingSpell } from './components/flying-spell/FlyingSpell';
import { Footer } from './components/footer/Footer';
import { MagicalNavbar } from './components/magical-navbar/MagicalNavbar';
import { SparkleTrail } from './components/sparkle-trail/SparkleTrail';
import { AboutSection } from './sections/about/AboutSection';
import { HeroSection } from './sections/hero/HeroSection';
import { ProjectsSection } from './sections/projects/ProjectsSection';
import { SkillsSection } from './sections/skills/SkillsSection';

function App() {
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const slideTimeout = setTimeout(() => setSlideUp(true), 2000);
    const hideTimeout = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen slideUp={slideUp} />}

      <MagicalNavbar />
      <SparkleTrail />
      <FlyingSpell />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
