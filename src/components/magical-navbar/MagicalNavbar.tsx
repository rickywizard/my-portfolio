import { useState, useEffect } from 'react';
import './magical-navbar.css';
import logo from '../../assets/images/logo.png';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export const MagicalNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
        ${
          scrolled
            ? 'scale-60 2xl:scale-80 opacity-90'
            : 'scale-70 2xl:scale-90 opacity-100'
        }
      `}
    >
      <div className="relative backdrop-blur-md bg-white/10 border border-white/20 ring-1 ring-purple-500/40 shadow-lg rounded-full px-12 py-2 flex gap-12 items-center text-white drop-shadow animate-fade-in-glow w-max">
        {/* Mobile toggle button */}
        <button
          className="menu-toggle md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-icon" />
        </button>

        {/* Logo di tengah */}
        <img
          src={logo}
          alt="Magic Logo"
          className="w-14 h-14 object-contain drop-shadow-glow md:hidden"
        />

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 items-center text-white">
          {navItems.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <img
            src={logo}
            alt="Magic Logo"
            className="w-16 h-16 object-contain drop-shadow-glow"
          />
          {navItems.slice(2).map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
