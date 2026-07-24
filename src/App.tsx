import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import useLenis from './hooks/useLenis';
import AnimatedLoader from './components/layout/AnimatedLoader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Thumbnails from './sections/Thumbnails';
import Clients from './sections/Clients';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Stats from './sections/Stats';
import Features from './sections/Features';
import Reviews from './sections/Reviews';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';

function App() {
  const [loading, setLoading] = useState(true);
  
  // Initialize smooth scrolling
  useLenis();

  // Scroll reveal animation observer
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px', // trigger when element is close to viewport bottom
        threshold: 0.05,
      }
    );

    // Select text content elements under main, excluding first section (Hero)
    const selectors = [
      'main section:not(:first-of-type) h2',
      'main section:not(:first-of-type) h3',
      'main section:not(:first-of-type) p',
      'main section:not(:first-of-type) span.block',
      'main section:not(:first-of-type) li',
      'main section:not(:first-of-type) .grid > div:not(.pricing-card)',
      'main section:not(:first-of-type) form > div',
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach((el) => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');

        // Check if there are immediate siblings to apply a small stagger delay
        const siblings = Array.from(el.parentElement?.children || []);
        const siblingIndex = siblings.indexOf(el);
        if (siblingIndex > 0) {
          const delay = Math.min(siblingIndex * 0.08, 0.4); // max stagger delay of 0.4s
          (el as HTMLElement).style.transitionDelay = `${delay}s`;
        }

        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [loading]);


  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <AnimatedLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Thumbnails />
            <Clients />
            <About />
            <Testimonials />
            <Stats />
            <Features />
            <Reviews />
            <Process />
            <Pricing />
            <FAQ />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
