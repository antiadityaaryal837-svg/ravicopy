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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.86 9.86 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.551 0 11.888-5.336 11.891-11.893a11.826 11.826 0 00-3.48-8.413Z" />
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
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.86 9.86 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.551 0 11.888-5.336 11.891-11.893a11.826 11.826 0 00-3.48-8.413Z" /></svg>
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