import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Theme initialization
    const saved = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const initialTheme = saved || (systemPrefersDark.matches ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };
    
    systemPrefersDark.addEventListener('change', handleSystemThemeChange);

    // Scroll active section logic
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 130) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    return () => {
      systemPrefersDark.removeEventListener('change', handleSystemThemeChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <style>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          padding: 18px 64px;
          display: flex; justify-content: space-between; align-items: center;
          background: var(--nav-bg);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--bdr);
        }
        .nav-logo {
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem; letter-spacing: 0.12em; color: var(--green);
        }
        .nav-logo em { color: var(--amber); font-style: normal; }
        .nav-links { display: flex; gap: 28px; list-style: none; align-items: center; margin: 0; padding: 0; }
        .nav-links a {
          font-family: 'Space Mono', monospace; font-size: 0.68rem;
          color: var(--muted); text-decoration: none;
          letter-spacing: 0.14em; text-transform: uppercase; transition: color 0.2s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--green); }
        .nav-cta {
          border: 1px solid rgba(0,230,118,0.4);
          color: var(--green) !important;
          padding: 7px 18px; border-radius: var(--radius);
          transition: background 0.2s !important;
        }
        .nav-cta:hover { background: rgba(0,230,118,0.1) !important; }
        .nav-hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 4px; background: none; border: none; color: var(--white);
        }
        
        .theme-toggle {
          width: 38px; height: 38px;
          border: 1px solid var(--bdr);
          border-radius: var(--radius);
          background: var(--sur2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
          position: relative; overflow: hidden;
        }
        .theme-toggle:hover {
          border-color: var(--amber);
          box-shadow: 0 0 16px rgba(245,166,35,0.2);
        }
        .theme-toggle svg { width: 16px; height: 16px; color: var(--amber); }
        
        .mobile-menu {
          display: none; position: fixed; top: 61px; left: 0; right: 0;
          background: var(--mobile-menu-bg);
          border-bottom: 1px solid var(--bdr);
          padding: 24px 32px; z-index: 199;
          flex-direction: column; gap: 20px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family: 'Space Mono', monospace; font-size: 0.82rem;
          color: var(--muted); text-decoration: none;
          letter-spacing: 0.14em; text-transform: uppercase;
          transition: color 0.2s; padding: 10px 0;
          border-bottom: 1px solid var(--bdr);
        }
        .mobile-menu a:last-child { border-bottom: none; }
        .mobile-menu a:hover { color: var(--green); }

        @media (max-width: 1024px) {
          nav { padding: 16px 32px; }
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>
      <nav id="mainNav">
        <div className="nav-logo">MR.<em>WALE</em>()</div>
        <ul className="nav-links">
          <li><a className={activeSection === 'about' ? 'active' : ''} href="#about">About</a></li>
          <li><a className={activeSection === 'skills' ? 'active' : ''} href="#skills">Skills</a></li>
          <li><a className={activeSection === 'experience' ? 'active' : ''} href="#experience">Experience</a></li>
          <li><a className={activeSection === 'reviews' ? 'active' : ''} href="#reviews">Reviews</a></li>
          <li><a className={activeSection === 'projects' ? 'active' : ''} href="#projects">Projects</a></li>
          <li><a className={activeSection === 'contact' ? 'active nav-cta' : 'nav-cta'} href="#contact">Contact</a></li>
        </ul>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <button className="theme-toggle hover-toggle" onClick={toggleTheme} aria-label="Toggle light/dark mode">
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#skills" onClick={closeMobile}>Skills</a>
        <a href="#experience" onClick={closeMobile}>Experience</a>
        <a href="#reviews" onClick={closeMobile}>Reviews</a>
        <a href="#projects" onClick={closeMobile}>Projects</a>
        <a href="#contact" onClick={closeMobile}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
