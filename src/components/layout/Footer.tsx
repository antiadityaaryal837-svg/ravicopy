export default function Footer() {
  return (
    <footer className="bg-primary py-8 border-t border-[#222]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">

        {/* Left: Avatar */}
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent overflow-hidden border border-accent/20 flex-shrink-0">
          <img src="/myicon.png" alt="Aditya" className="w-full h-full object-cover" />
        </div>

        {/* Center: Text */}
        <div className="text-[#888888] text-[13px] md:text-[14px]">
          Made with <span className="text-red-500">♥</span> by <span className="text-[#a16207]">Aditya</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4 text-white/40">
          <a href="https://www.facebook.com/aditya.aryala.837610" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
          </a>
          <a href="https://www.instagram.com/aditya.motions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.youtube.com/@AdityaAryal-gw4qy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/aditya-aryal-862140314/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold text-sm" style={{ fontFamily: 'sans-serif' }}>
            in
          </a>
        </div>
      </div>
    </footer>
  );
}
