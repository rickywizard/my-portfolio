import logo from '../../assets/images/logo.png';
import { githubIcon, instagramIcon, linkedinIcon } from '../../assets/icons';

export const Footer = () => {
  return (
    <footer className="w-full h-screen md:h-max py-6 bg-gradient-to-b from-yellow-950 to-black flex flex-col items-center justify-center md:justify-start">
      {/* Logo dan Nama */}
      <div className="flex items-center justify-center scale-75 md:scale-100">
        <img
          src={logo}
          alt="Magic Logo"
          className="w-16 h-16 object-contain drop-shadow-glow hover:scale-120 transition-all duration-300 cursor-pointer"
        />
        <span className="text-xl">Ricky Wijaya</span>
      </div>

      {/* Kontak */}
      <div className="flex items-center justify-center gap-4 my-4">
        <span className="text-sm md:text-xl">Contact me</span>
        <a href="mailto:youremail@example.com" className="text-sm md:text-xl">
          rickwijayatatando@gmail.com
        </a>
      </div>

      {/* Sosial Media */}
      <div className="flex items-center gap-6 my-4">
        <a
          href="https://instagram.com/rickywjay"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className="w-8 h-8 white-glow-icon"
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
    </footer>
  );
};
