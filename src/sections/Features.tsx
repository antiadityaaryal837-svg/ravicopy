import { motion } from 'framer-motion';

const pills = [
  "YouTube Channel branding", "Social Media Design", "Merch Design", "Logo Design",
  "Rollover hours", "Premium designs", "Multilingual support"
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-primary text-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6" />
              </svg>
            </div>
            <span className="text-accent text-[15px] font-medium">What you'll get</span>
          </div>
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#e4e4e7] max-w-2xl mx-auto leading-tight">
            We resolve problems associated with creative procedures.
          </h2>
        </div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          {/* Card 1: Cost effective solution */}
          <div className="bg-[#141414] border border-[#222] rounded-[32px] p-8 min-h-[380px] flex flex-col justify-between overflow-hidden group">
            {/* Growth Chart Graphic */}
            <div className="w-full flex-grow flex flex-col justify-between p-5 bg-[#0c0c0c] rounded-2xl border border-[#222] relative overflow-hidden">
              <div className="text-accent text-sm font-extrabold tracking-wide">Growth</div>

              {/* Animated Bars */}
              <div className="flex items-end justify-between gap-1.5 h-28 mt-4 mb-2 px-1">
                {[
                  { h: '35%', delay: 0 },
                  { h: '25%', delay: 0.1 },
                  { h: '55%', delay: 0.2 },
                  { h: '45%', delay: 0.3 },
                  { h: '75%', delay: 0.4 },
                  { h: '50%', delay: 0.5 },
                  { h: '60%', delay: 0.6 },
                  { h: '90%', delay: 0.7 },
                  { h: '70%', delay: 0.8 },
                  { h: '85%', delay: 0.9 },
                  { h: '65%', delay: 1.0 },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-accent rounded-full shadow-[0_0_12px_rgba(212,255,0,0.3)]"
                    initial={{ height: '15%' }}
                    animate={{ height: bar.h }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: bar.delay,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </div>

              {/* Date Markers */}
              <div className="flex justify-between items-center text-[#666] text-[11px] font-medium pt-2 border-t border-[#1e1e1e]">
                <span>Nov, 10</span>
                <span>Nov, 11</span>
                <span className="text-accent font-semibold">Today</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-[24px] md:text-[26px] text-[#e4e4e7] mb-2 font-semibold tracking-tight">Cost effective solution</h3>
              <p className="text-[#888888] text-[15px] leading-relaxed">Get high-quality design work at a fraction of the cost. We're not Agency.</p>
            </div>
          </div>

          {/* Card 2: Tailor-made design */}
          <div className="bg-[#141414] border border-[#222] rounded-[32px] p-8 min-h-[380px] flex flex-col justify-between overflow-hidden group">
            {/* Stacked Notification Graphic */}
            <div className="w-full flex-grow flex flex-col items-center justify-center p-6 bg-[#0c0c0c] rounded-2xl border border-[#222] relative">
              {/* Back Card */}
              <div className="w-[85%] bg-[#151515] border border-[#262626] rounded-2xl p-3 mb-[-24px] opacity-60 flex items-center justify-center gap-2 text-[#777] text-xs">
                <span className="w-2 h-2 rounded-full bg-[#555]" />
                <span>REVIEWED</span>
              </div>

              {/* Front Floating Notification Card */}
              <motion.div
                className="w-full max-w-[280px] bg-[#141414] border border-[#2a2a2a] rounded-2xl p-4 flex items-center gap-4 shadow-2xl z-10"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-accent/20 flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-accent text-[11px] font-bold mb-1 flex items-center gap-1.5 tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    NEW
                  </div>
                  <div className="text-white font-semibold text-[15px]">High CTR thumbnail</div>
                  <div className="text-[#666] text-[12px]">Today, 11:50</div>
                </div>
              </motion.div>

              {/* Dotted Accent Lines */}
              <div className="w-full max-w-[240px] mt-4 flex flex-col gap-1.5 opacity-30">
                <div className="h-0.5 w-full bg-dashed border-b border-dashed border-accent" />
                <div className="h-0.5 w-3/4 bg-dashed border-b border-dashed border-accent mx-auto" />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-[24px] md:text-[26px] text-[#e4e4e7] mb-2 font-semibold tracking-tight">Tailor-made design</h3>
              <p className="text-[#888888] text-[15px] leading-relaxed">We've got the expertise to make your vision a reality.</p>
            </div>
          </div>

          {/* Card 3: Scalable as you grow */}
          <div className="bg-[#141414] border border-[#222] rounded-[32px] p-8 min-h-[380px] flex flex-col justify-between relative overflow-hidden group hover:border-[#333] transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,255,0,0.06)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            {/* Trend Chart Graphic */}
            <div className="w-full flex-grow flex flex-col justify-between p-6 bg-[#0c0c0c] rounded-2xl border border-[#222] relative overflow-hidden">
              {/* Dashed blueprint grid background */}
              <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none opacity-[0.06] group-hover:opacity-10 transition-opacity duration-300">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-full border-t border-dashed border-accent" />
                ))}
              </div>
              <div className="absolute inset-0 flex justify-between px-6 pointer-events-none opacity-[0.06] group-hover:opacity-10 transition-opacity duration-300">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="h-full border-l border-dashed border-accent" />
                ))}
              </div>

              {/* Floating Performance Indicator */}
              <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5 z-20">
                <motion.div
                  className="bg-[#161616]/95 backdrop-blur-md border border-accent/20 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg shadow-accent/5"
                  animate={{
                    y: [0, -3, 0],
                    borderColor: ["rgba(212,255,0,0.2)", "rgba(212,255,0,0.5)", "rgba(212,255,0,0.2)"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] tracking-wider text-accent font-extrabold uppercase">Uncapped growth</span>
                </motion.div>

                <motion.div
                  className="bg-[#111] border border-[#222] rounded-md px-2 py-0.5 text-[9px] text-[#666] font-mono"
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
                >
                  Load: 0.02s response
                </motion.div>
              </div>

              <div className="relative w-full h-36 flex items-center justify-center">
                {/* Y-Axis Labels */}
                <div className="absolute left-1 bottom-4 flex flex-col justify-between h-[85%] text-[#444] text-[9px] font-mono pointer-events-none">
                  <span>100k</span>
                  <span>50k</span>
                  <span>10k</span>
                </div>

                {/* Animated Growth Curve SVG */}
                <svg viewBox="0 0 100 50" className="w-full h-full fill-none overflow-visible z-10 pl-6 pr-2">
                  <defs>
                    <linearGradient id="card3-area-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#d4ff00" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="card3-line-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.3" />
                      <stop offset="60%" stopColor="#d4ff00" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#d4ff00" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Gradient Area Chart */}
                  <motion.path
                    d="M 0 45 Q 25 35, 55 22 T 100 5 L 100 50 L 0 50 Z"
                    fill="url(#card3-area-gradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.85, 0.85, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, times: [0, 0.6, 0.8, 1] }}
                  />

                  {/* Main path */}
                  <motion.path
                    d="M 0 45 Q 25 35, 55 22 T 100 5"
                    stroke="url(#card3-line-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, times: [0, 0.6, 0.8, 1] }}
                  />

                  {/* Staggered sequential nodes along the path */}
                  {[
                    { cx: 0, cy: 45, delay: 0 },
                    { cx: 25, cy: 38, delay: 1.0 },
                    { cx: 55, cy: 22, delay: 2.0 },
                    { cx: 80, cy: 13, delay: 3.0 },
                    { cx: 100, cy: 5, delay: 3.8 }
                  ].map((node, i) => (
                    <g key={i}>
                      {/* Pulsing ring */}
                      <motion.circle
                        cx={node.cx}
                        cy={node.cy}
                        r="5"
                        stroke="#d4ff00"
                        strokeWidth="1"
                        fill="none"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0.5, 1.8, 0.8], opacity: [0, 0.7, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: node.delay, ease: "easeOut" as const }}
                      />
                      {/* Solid inner dot */}
                      <motion.circle
                        cx={node.cx}
                        cy={node.cy}
                        r="2.5"
                        fill="#d4ff00"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.1, 1.1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, times: [0, 0.15 + (i * 0.12), 0.85, 1], ease: "easeInOut" as const }}
                      />
                    </g>
                  ))}

                  {/* Animated dot that travels along the path */}
                  <motion.circle
                    r="4.5"
                    fill="#d4ff00"
                    animate={{
                      cx: [0, 25, 55, 80, 100],
                      cy: [45, 38, 22, 13, 5],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, times: [0, 0.25, 0.55, 0.8, 1] }}
                  />

                  {/* Pulsing glow behind traveling dot */}
                  <motion.circle
                    r="10"
                    fill="rgba(212,255,0,0.3)"
                    animate={{
                      cx: [0, 25, 55, 80, 100],
                      cy: [45, 38, 22, 13, 5],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const, times: [0, 0.25, 0.55, 0.8, 1] }}
                  />
                </svg>

                {/* Floating Metric bubble that follows the curve */}
                <motion.div
                  className="absolute bg-accent text-black font-extrabold text-[9px] px-1.5 py-0.5 rounded shadow-lg pointer-events-none z-20"
                  animate={{
                    left: ["8%", "30%", "58%", "80%", "92%"],
                    top: ["85%", "73%", "43%", "25%", "8%"],
                    scale: [0.8, 1.1, 1.1, 1.1, 0.8],
                    opacity: [0, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    times: [0, 0.25, 0.55, 0.8, 1]
                  }}
                >
                  📈 Expand
                </motion.div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <h3 className="text-[24px] md:text-[26px] text-[#e4e4e7] mb-2 font-semibold tracking-tight">Scalable as you grow</h3>
              <p className="text-[#888888] text-[15px] leading-relaxed">We're ready to meet your evolving needs.</p>
            </div>
          </div>

        </div>

        {/* 2 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Workflow integration card */}
          <div className="bg-[#141414] border border-[#222] rounded-[32px] p-8 min-h-[260px] flex items-center justify-between overflow-hidden">
            <div className="max-w-[210px]">
              <h3 className="text-[22px] text-[#e4e4e7] mb-3 font-medium leading-tight">Workflow integration</h3>
              <p className="text-[#888888] text-[15px] leading-relaxed">Seamlessly connect all your existing apps.</p>
            </div>

            {/* App Icons Grid with Micro-Animations */}
            <div className="flex flex-col gap-3 justify-center items-end">
              {/* Row 1 */}
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] p-2.5 flex items-center justify-center overflow-hidden shadow-lg transition-transform cursor-pointer">
                  <img src="/iconsin bleow/a4S6hafDTv5oxWgZaR4RzykZz0c5f81.png" alt="App Icon 1" className="w-full h-full object-contain" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.15, rotate: -5 }} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] p-2.5 flex items-center justify-center overflow-hidden shadow-lg transition-transform cursor-pointer">
                  <img src="/iconsin bleow/ck5HKQjtep5seir3Q6JyeVt5HoA7654.png" alt="Telegram Icon" className="w-full h-full object-contain" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] p-2.5 flex items-center justify-center overflow-hidden shadow-lg transition-transform cursor-pointer">
                  <img src="/iconsin bleow/claude-logo.svg" alt="Slack Icon" className="w-full h-full object-contain" />
                </motion.div>
              </div>

              {/* Row 2 - Staggered */}
              <div className="flex items-center gap-3 pr-4">
                <motion.div whileHover={{ scale: 1.15, rotate: -5 }} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] p-2.5 flex items-center justify-center overflow-hidden shadow-lg transition-transform cursor-pointer">
                  <img src="/iconsin bleow/X_icon.svg.webp" alt="X Icon" className="w-full h-full object-contain" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] p-2.5 flex items-center justify-center overflow-hidden shadow-lg transition-transform cursor-pointer">
                  <img src="/iconsin bleow/Adobe-Photoshop-Logo.png" alt="Photoshop Icon" className="w-full h-full object-contain" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.15, rotate: -5 }} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] p-2.5 flex items-center justify-center overflow-hidden shadow-lg transition-transform cursor-pointer">
                  <img src="/iconsin bleow/discord icon.webp" alt="Discord Icon" className="w-full h-full object-contain" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Collaborate real-time card */}
          <div className="bg-[#141414] border border-[#222] rounded-[32px] p-8 min-h-[260px] flex items-center justify-between overflow-hidden">
            <div className="max-w-[210px]">
              <h3 className="text-[22px] text-[#e4e4e7] mb-3 font-medium leading-tight">Collaborate real-time</h3>
              <p className="text-[#888888] text-[15px] leading-relaxed">Seamlessly connect all your existing apps.</p>
            </div>

            {/* Overlapping Avatar Set */}
            <div className="flex -space-x-4 items-center pr-2">
              {/* Avatar 1 - Purple Border */}
              <motion.div whileHover={{ y: -4 }} className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#a855f7] bg-[#141414] overflow-hidden z-10 shadow-xl flex-shrink-0 cursor-pointer">
                <img src="/ioncs for thisone/iconsfrocollaborate (1).png" alt="Collaborator 1" className="w-full h-full object-cover" />
              </motion.div>

              {/* Avatar 2 - Cyan Border */}
              <motion.div whileHover={{ y: -4 }} className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#06b6d4] bg-[#141414] overflow-hidden z-20 shadow-xl flex-shrink-0 cursor-pointer">
                <img src="/ioncs for thisone/iconsfrocollaborate (2).png" alt="Collaborator 2" className="w-full h-full object-cover" />
              </motion.div>

              {/* Avatar 3 - Accent Border with Name Tag */}
              <motion.div whileHover={{ y: -4 }} className="relative z-30 flex-shrink-0 cursor-pointer">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-accent bg-[#141414] overflow-hidden shadow-xl">
                  <img src="/myicon.webp" alt="Aditya" className="w-full h-full object-cover" width={64} height={64} loading="lazy" decoding="async" />
                </div>
                {/* Floating Name Tag */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-black font-extrabold text-[11px] px-3 py-0.5 rounded-full shadow-lg border border-black/20 whitespace-nowrap">
                  Aditya
                </div>
              </motion.div>

              {/* Background Faded Ring */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#333] bg-[#1c1c1c]/50 flex-shrink-0 z-0 opacity-40" />
            </div>
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {pills.map((pill, idx) => (
            <div key={idx} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#222] bg-[#0a0a0a]">
              <div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6" />
                </svg>
              </div>
              <span className="text-[#888888] text-[15px]">{pill}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}