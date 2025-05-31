import { MagicReveal } from '../../components/MagicalReveal';
import { AnimatedText } from '../../components/animated-text/AnimatedText';
import { AvatarShatter } from '../../components/avatar-shatter/AvatarShatter';
import letter from '../../assets/images/letter.png';
import stamp from '../../assets/images/stamp.png';
import about from '../../constants/about-constant';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-screen bg-gradient-to-b from-black to-pink-950 py-16 px-4 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full scale-75 lg:scale-85 xl:scale-100 2xl:scale-110 flex items-center justify-center">
        <MagicReveal delay={0}>
          <div
            className="relative w-[600px] md:w-full min-h-[600px] bg-center bg-no-repeat p-6 md:p-10 flex md:flex-row gap-36 md:gap-6 rotate-90 md:rotate-0"
            style={{
              backgroundImage: `url(${letter})`,
              backgroundSize: 'contain',
            }}
          >
            <div className="flex items-center justify-center md:flex-2 rotate-270 md:rotate-0">
              <MagicReveal delay={0.4}>
                <AvatarShatter />
              </MagicReveal>
            </div>

            <div className="flex flex-col md:mt-24 lg:mt-12 items-center md:items-start font-magic text-black medievalsharp-regular flex-3 text-center md:text-start rotate-270 md:rotate-0">
              <MagicReveal delay={0.8}>
                <h2 className="text-lg lg:text-xl my-4 lg:my-8 drop-shadow">
                  📜 About Me
                </h2>
              </MagicReveal>
              <MagicReveal delay={1.2}>
                <AnimatedText
                  delay={0.2}
                  speed={30}
                  text={about}
                  className="leading-relaxed md:w-md max-w-md text-black drop-shadow font-magic text-xs md:text-sm lg:text-base animate-shimmer"
                />
              </MagicReveal>
            </div>
            <MagicReveal
              className="absolute bottom-36 md:bottom-32 lg:bottom-24 right-16"
              delay={1.4}
            >
              <img
                src={stamp}
                alt="Magic Seal"
                className="w-20 h-20 lg:w-24 lg:h-24 opacity-80 pointer-events-none z-4 rotate-270 md:rotate-0"
              />
            </MagicReveal>
          </div>
        </MagicReveal>
      </div>
    </section>
  );
};
