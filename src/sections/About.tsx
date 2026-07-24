export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:pl-24 xl:pl-36 lg:pr-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="max-w-xl mx-auto md:mx-0">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent text-black flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6" />
                </svg>
              </div>
              <h2 className="text-accent text-[22px] sm:text-[26px] md:text-[32px] font-medium">About Aditya Aryal</h2>
            </div>

            <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.6] mb-8 md:mb-12 font-normal space-y-4">
              <span className="block bg-gradient-to-b from-white via-[#e4e4e7] to-[#71717a] bg-clip-text text-transparent">
                I'm a professional graphic designer with 13+ years of industry experience and a specialist in YouTube thumbnail design for the past 3+ years.
              </span>
              <span className="block bg-gradient-to-b from-white via-[#e4e4e7] to-[#71717a] bg-clip-text text-transparent">
                I've worked with creators across every niche, delivering high-quality, eye-catching thumbnails that boost clicks and elevate channels.
              </span>
              <span className="block bg-gradient-to-b from-white via-[#e4e4e7] to-[#71717a] bg-clip-text text-transparent">
                I'm known for fast turnaround, friendly communication, and designs that balance creativity with strategy.
              </span>
              <span className="block bg-gradient-to-b from-white via-[#e4e4e7] to-[#71717a] bg-clip-text text-transparent">
                Let's create something that stands out.
              </span>
            </div>

            <a
              href="https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#888888] hover:text-white transition-colors group"
            >
              <span className="text-[16px] md:text-[17px]">Let's talk</span>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#888888] group-hover:border-white flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative max-w-[280px] sm:max-w-[340px] md:max-w-[400px] mx-auto w-full order-first md:order-last">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl">
              <img
                src="/Personal_photos/492889639_122168053634334667_5335861109855230166_n.jpg"
                alt="Aditya Aryal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-600/20 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
