import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Work', href: '#thumbnails' },
  { name: 'Services', href: '#features' },
  { name: 'Bio', href: '#about' },
  { name: 'Blogs', href: '/blog' },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      if (location.pathname !== '/') {
        navigate('/');
        // Wait a tiny bit for navigation to finalize, then scroll
        setTimeout(() => {
          smoothScrollTo(id);
        }, 150);
      } else {
        smoothScrollTo(id);
      }
    } else {
      navigate(href);
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none bg-transparent',
          isScrolled ? 'py-3 px-4 md:py-4 md:px-12' : 'py-4 px-4 md:py-6 md:px-12'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Left: Avatar Logo Pill */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="pointer-events-auto flex-shrink-0 z-50 p-1.5 bg-[#111111]/80 backdrop-blur-md border border-[#222222] rounded-full shadow-lg shadow-black/20 hover:border-[#333] transition-all"
          >
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-accent overflow-hidden">
              <img
                src="/myicon.webp"
                alt="Logo"
                className="w-full h-full object-cover"
                width={48}
                height={48}
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>

          {/* Center: Nav Links Pill — Desktop Only */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-[#111111]/80 backdrop-blur-md border border-[#222222] rounded-full px-8 py-3 gap-10 pointer-events-auto shadow-lg shadow-black/20">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-[17px] font-medium transition-colors cursor-pointer ${
                  (location.pathname === link.href || (link.href === '/blog' && location.pathname.startsWith('/blog')))
                    ? 'text-accent'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right: Social & Live Chat — Desktop Only */}
          <div className="hidden md:flex items-center gap-5 pointer-events-auto">
            <div className="flex items-center gap-5 text-[#888888] bg-[#111111]/80 backdrop-blur-md border border-[#222222] rounded-full px-6 py-3 shadow-lg shadow-black/20">
              {/* Facebook */}
              <a href="https://www.facebook.com/aditya.aryala.837610" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20am%20interested%20in%20working%20with%20you!" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.3-.776.979-.951 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.466-2.41-1.488-.892-.796-1.494-1.78-1.67-2.08-.175-.3-.018-.462.13-.61.135-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.23-.244-.585-.494-.505-.676-.514-.175-.008-.376-.008-.576-.008-.2 0-.525.075-.8.375-.276.3-1.052 1.03-1.052 2.513 0 1.483 1.078 2.914 1.228 3.114.15.2 2.122 3.24 5.14 4.544.718.31 1.278.495 1.716.634.721.23 1.377.197 1.896.12.579-.086 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.125-.275-.2-.576-.35zm-5.416 7.412h-.008a9.85 9.85 0 01-5.02-1.378l-.36-.214-3.737.98.997-3.644-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.875 9.878-9.875 2.639 0 5.12 1.028 6.985 2.894a9.81 9.81 0 012.89 6.983c-.002 5.447-4.432 9.878-9.883 9.878zm0-18.067C6.467 3.727 2.016 8.178 2.018 13.63a11.77 11.77 0 001.626 6.002L2 23.5l3.963-1.04a11.75 11.75 0 005.69 1.47h.005c6.19 0 11.227-5.037 11.23-11.23.003-2.998-1.162-5.817-3.284-7.94a11.16 11.16 0 00-7.94-3.287z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@AdityaAryal-gw4qy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/aditya.motions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/aditya-aryal-862140314/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold text-base tracking-tighter" style={{ fontFamily: 'sans-serif' }} aria-label="LinkedIn">
                in
              </a>
            </div>

            <a
              href="https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20want%20to%20chat%20live%20about%20thumbnail%20design!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111]/80 backdrop-blur-md border border-[#222222] text-white/90 hover:text-white hover:border-[#333] text-[16px] font-medium px-7 py-3 rounded-full transition-all shadow-lg shadow-black/20"
            >
              Live Chat
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden pointer-events-auto bg-[#111111]/80 backdrop-blur-md border border-[#222222] rounded-full p-2.5 shadow-lg text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 pb-10 px-6 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
          >
            {/* Nav Links */}
            <div className="flex flex-col gap-2 mb-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[28px] font-semibold text-white/80 hover:text-white transition-colors py-3 border-b border-white/5"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-[#888] mb-8">
              <a href="https://www.facebook.com/aditya.aryala.837610" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
              </a>
              <a href="https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20am%20interested%20in%20working%20with%20you!" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.3-.776.979-.951 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.466-2.41-1.488-.892-.796-1.494-1.78-1.67-2.08-.175-.3-.018-.462.13-.61.135-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.23-.244-.585-.494-.505-.676-.514-.175-.008-.376-.008-.576-.008-.2 0-.525.075-.8.375-.276.3-1.052 1.03-1.052 2.513 0 1.483 1.078 2.914 1.228 3.114.15.2 2.122 3.24 5.14 4.544.718.31 1.278.495 1.716.634.721.23 1.377.197 1.896.12.579-.086 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.125-.275-.2-.576-.35zm-5.416 7.412h-.008a9.85 9.85 0 01-5.02-1.378l-.36-.214-3.737.98.997-3.644-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.875 9.878-9.875 2.639 0 5.12 1.028 6.985 2.894a9.81 9.81 0 012.89 6.983c-.002 5.447-4.432 9.878-9.883 9.878zm0-18.067C6.467 3.727 2.016 8.178 2.018 13.63a11.77 11.77 0 001.626 6.002L2 23.5l3.963-1.04a11.75 11.75 0 005.69 1.47h.005c6.19 0 11.227-5.037 11.23-11.23.003-2.998-1.162-5.817-3.284-7.94a11.16 11.16 0 00-7.94-3.287z" /></svg>
              </a>
              <a href="https://www.youtube.com/@AdityaAryal-gw4qy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.instagram.com/aditya.motions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20want%20to%20chat%20live%20about%20thumbnail%20design!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-accent text-black font-semibold text-[17px] rounded-full text-center mt-auto"
            >
              Live Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}