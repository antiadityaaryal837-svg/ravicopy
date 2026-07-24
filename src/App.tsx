import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import useLenis from './hooks/useLenis';
import useSEO from './hooks/useSEO';
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

// Import Blog Pages
import BlogList from './pages/BlogList';
import BlogPostDetail from './pages/BlogPostDetail';

// A small helper component to handle Lenis scroll update and intersection observer on route transitions
function ScrollAndObserverHandler({ loading }: { loading: boolean }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      }

      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [loading, pathname]);

  return null;
}

function Home() {
  useSEO({
    title: 'Aditya Aryal | Professional YouTube Thumbnail Designer & CTR Strategist',
    description: 'Boost your video CTR with customized YouTube thumbnail designs. Explore the portfolio of Aditya Aryal, trusted by top creators worldwide with 14,200+ reviews.',
    canonicalUrl: 'https://adityaaryal.com.np',
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Aditya Aryal",
        "jobTitle": "YouTube Thumbnail Designer",
        "description": "Portfolio of Aditya Aryal, professional YouTube thumbnail designer with 13+ years of graphic experience. Boost your CTR with high-conversion thumbnails.",
        "url": "https://adityaaryal.com.np",
        "image": "https://adityaaryal.com.np/myicon.webp",
        "sameAs": [
          "https://www.facebook.com/aditya.aryala.837610",
          "https://www.instagram.com/aditya.motions/",
          "https://www.youtube.com/@AdityaAryal-gw4qy",
          "https://www.linkedin.com/in/aditya-aryal-862140314/"
        ],
        "knowsAbout": [
          "YouTube Thumbnail Design",
          "CTR Optimization",
          "Graphic Design",
          "Visual Branding",
          "Color Psychology"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Aditya Aryal — YouTube Thumbnail Design Studio",
        "image": "https://adityaaryal.com.np/myicon.webp",
        "priceRange": "$75–$145+",
        "telephone": "+9779823664687",
        "url": "https://adityaaryal.com.np",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "NP"
        },
        "serviceArea": {
          "@type": "Place",
          "name": "Worldwide (Remote)"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What information do you need from me to create a thumbnail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To create a high-CTR YouTube thumbnail, I need a summary of your video's core concept, the working title, and the intro (if available). Additionally, providing style references or target visual examples, asset files like high-res raw images of your face or graphics, and logo assets helps align the design with your channel branding."
            }
          },
          {
            "@type": "Question",
            "name": "What is the turnaround time for thumbnail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "My standard turnaround time for a single professional-grade YouTube thumbnail is 24 to 48 hours. This timeframe ensures careful strategic design, visual hierarchy planning, image retouching, and detail rendering. If you are on an enterprise package or need bulk delivery, we can align on custom schedules."
            }
          },
          {
            "@type": "Question",
            "name": "What's your step-by-step process when we work together?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our workflow begins with a creative brief where you share video ideas. Then, I design a custom draft/concept focusing on layout composition and color psychology. After you review the initial draft, I incorporate your feedback for revisions and deliver the final high-resolution click-ready file."
            }
          },
          {
            "@type": "Question",
            "name": "How is A/B Testing handled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide visual variations (such as alternate text styles, color contrasts, or image placement adjustments) that you can upload to YouTube's thumbnail test-and-compare tool. This lets you empirically test which visual variant achieves a higher click-through rate (CTR) with your specific target audience."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer revisions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, I offer up to two rounds of revisions on standard pricing plans. Revisions cover adjusting text layout, tweaking color options, modifying filters, and changing lighting/contrasts. This ensures the final thumbnail aligns perfectly with your expectations and creative vision."
            }
          },
          {
            "@type": "Question",
            "name": "Do you use AI in your process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I selectively utilize artificial intelligence models for asset enhancements, complex background generation, and creative inspiration. However, all core thumbnail components, visual storytelling, text layouts, character retouching, and final composition are hand-crafted manually using professional design software."
            }
          },
          {
            "@type": "Question",
            "name": "What if I don't like the thumbnail design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the initial concept does not meet your expectations, we will review the creative brief to pinpoint what needs adjustment. We will adjust the composition, color grading, or typography in subsequent revisions to ensure we achieve a high-performing thumbnail that you love."
            }
          }
        ]
      }
    ]
  });

  return (
    <>
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
    </>
  );
}

function MainLayout({ loading }: { loading: boolean }) {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollAndObserverHandler loading={loading} />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize smooth scrolling
  useLenis();

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <AnimatedLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <MainLayout loading={loading} />}
    </Router>
  );
}

export default App;
