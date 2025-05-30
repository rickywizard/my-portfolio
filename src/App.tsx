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
    const handleLoad = () => {
      setTimeout(() => setSlideUp(true), 100);
      setTimeout(() => setLoading(false), 1100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
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
