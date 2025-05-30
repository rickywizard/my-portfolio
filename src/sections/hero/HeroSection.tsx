import { githubIcon, instagramIcon, linkedinIcon } from '../../assets/icons';
import character from '../../assets/images/witch-hero.png';
import { MagicReveal } from '../../components/MagicalReveal';
import { TwinklingStar } from '../../components/twinkling-star/TwinklingStart';
import './hero.css';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-gradient-to-b from-purple-900 to-black text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <TwinklingStar />

      {/* Content */}
      <div className="max-w-5xl flex items-center flex-col sm:flex-row gap-16 animate-float z-10 scale-75 lg:scale-80 2xl:scale-100">
        <div className="flex flex-col justify-center sm:items-start items-center sm:text-start text-center">
          <MagicReveal>
            <h1 className="text-3xl md:text-5xl font-magic mb-8 glow-text relative z-10">
              Welcome to My Magic Realm
            </h1>
          </MagicReveal>

          <MagicReveal delay={0.4}>
            <p className="text-xl md:text-2xl text-purple-200 glow-text mb-8 z-10 relative">
              I’m a software sorcerer crafting enchanting web.
            </p>
          </MagicReveal>

          {/* Custom Social Icons */}
          <MagicReveal delay={0.6}>
            <div className="flex items-center gap-6 mb-12 z-10">
              <a
                href="https://instagram.com/rickywjay"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-4 h-4 md:w-8 md:h-8 white-glow-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rickywijay/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 white-glow-icon"
                />
              </a>
              <a
                href="https://github.com/rickywizard"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-8 h-8 white-glow-icon"
                />
              </a>
            </div>
          </MagicReveal>

          {/* Download CV Button */}
          <MagicReveal delay={0.8}>
            <a
              href="https://drive.google.com/file/d/1khvfKrrkXCcKgD3W0DbXUewz-niIlazt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 z-10 white-glow-icon"
            >
              Download CV
            </a>
          </MagicReveal>
        </div>

        <MagicReveal delay={0.6}>
          <img
            src={character}
            alt="Cartoon Wizard"
            className="w-60 md:w-120 mt-8 animate-float z-10"
          />
        </MagicReveal>
      </div>
    </section>
  );
};
