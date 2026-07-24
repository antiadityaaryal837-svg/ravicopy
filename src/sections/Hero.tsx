import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-4 md:pb-6 overflow-hidden bg-primary"
    >
      <motion.div
        className="text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center w-full"
      >
        {/* Top Profile Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 1.5, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-5 mb-8 md:mb-14 bg-[#111111]/90 border border-[#222222] p-3 sm:p-4 md:p-5 rounded-[20px] sm:rounded-[28px] shadow-2xl shadow-black/40 backdrop-blur-md w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto"
        >
          {/* Profile Image */}
          <div className="w-12 h-12 sm:w-18 sm:h-18 md:w-28 md:h-28 rounded-full bg-accent overflow-hidden flex-shrink-0 border-2 border-accent/40 shadow-lg">
            <img
              src="/myicon.webp"
              alt="Profile"
              className="w-full h-full object-cover"
              width={200}
              height={200}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="flex flex-col items-start text-left pr-1 sm:pr-3">
            {/* Top Rated Seller Tag */}
            <span className="bg-[#facc15] text-black text-[9px] sm:text-[11px] md:text-[15px] font-extrabold px-2 sm:px-3 py-0.5 rounded-md uppercase tracking-wider mb-1 sm:mb-2 shadow-sm">
              TOP RATED SELLER
            </span>

            {/* Name & Handle */}
            <div className="flex items-center gap-1.5 sm:gap-3 mb-0.5">
              <span className="text-white font-bold text-[15px] sm:text-[20px] md:text-[30px] tracking-tight">Aditya</span>
              <span className="text-white/60 text-[11px] sm:text-[15px] md:text-[20px] font-normal">@aditya.motions</span>
            </div>

            {/* Rating & Stars */}
            <div className="flex items-center gap-1.5 sm:gap-3 mt-0.5">
              <span className="text-white text-[12px] sm:text-[17px] md:text-[24px] font-extrabold">4.9 (14,264)</span>
              <div className="flex text-[#facc15] text-[10px] sm:text-[15px] md:text-[22px] gap-0.5">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-[30px] sm:text-[42px] md:text-[68px] lg:text-[84px] font-semibold tracking-[-0.03em] leading-[1.05] mb-5 md:mb-8 bg-gradient-to-b from-white via-[#e8e8e8] to-[#6b6b6b] bg-clip-text text-transparent"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, scale: 0.75, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Viewers judge the video<br />by its Thumbnail.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-[14px] sm:text-[17px] md:text-[22px] max-w-3xl mx-auto mb-8 md:mb-14 leading-relaxed font-normal tracking-wide bg-gradient-to-b from-[#d0d0d0] via-[#a0a0a0] to-[#666666] bg-clip-text text-transparent"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, scale: 1.3, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Billions of clicks. Experts in IRL Entertainment,<br className="hidden md:block" />
          Sports, Finance and many more...
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-sm sm:max-w-none"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => document.getElementById('thumbnails')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="flex-1 sm:flex-none px-6 sm:px-9 md:px-11 py-3 md:py-4 rounded-full bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-[#222] text-[#e2e8f0] font-medium text-[14px] sm:text-[22px] hover:border-white/20 transition-all shadow-lg cursor-pointer text-center relative overflow-hidden group"
          >
            Portfolio
          </button>
          <a
            href="https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20want%20to%20work%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className="flex-1 sm:flex-none px-6 sm:px-9 md:px-11 py-3 md:py-4 rounded-full bg-accent text-black font-semibold text-[14px] sm:text-[21px] hover:bg-[#bce600] transition-all shadow-lg shadow-accent/20 text-center"
          >
            Let's work
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[650px] h-[200px] sm:h-[350px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}