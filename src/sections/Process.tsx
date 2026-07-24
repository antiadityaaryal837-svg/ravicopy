import { motion } from 'framer-motion';

const steps = [
  {
    title: "1. Send message",
    desc: "Send over the project info, and we'll talk more from there.",
    icon: (
      // Animated paper plane / message send icon
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-accent">
        <path d="M6 24L42 8L30 40L22 28L6 24Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 28L30 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    // Fly off and return animation
    iconAnimation: {
      animate: { x: [0, 14, 0], y: [0, -14, 0], rotate: [0, 15, 0] },
      transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const }
    }
  },
  {
    title: "2. Onboarding",
    desc: "You'll get your private design board and Slack channel.",
    icon: (
      // Animated grid / dashboard icon
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-accent">
        <rect x="6" y="6" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="3" />
        <rect x="27" y="6" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="3" />
        <rect x="6" y="27" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="3" />
        <rect x="27" y="27" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    // Gentle pulse + scale
    iconAnimation: {
      animate: { scale: [1, 1.1, 0.95, 1.08, 1], rotate: [0, 5, -5, 3, 0] },
      transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' as const }
    }
  },
  {
    title: "3. Design Delivered",
    desc: "Share your video info today, we'll handle thumbnails.",
    icon: (
      // Animated download / deliver arrow
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-accent">
        <path d="M24 8v24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M14 24l10 12 10-12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 40h32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>
    ),
    // Arrow bounces down
    iconAnimation: {
      animate: { y: [0, 7, 0] },
      transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' as const }
    }
  },
  {
    title: "4. Optimization",
    desc: "Revisions, fine-tuning, and a thumbnail built to perform.",
    icon: (
      // Animated checkmark / tune icon
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-accent">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="3"/>
        <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    // Breathe + rotate
    iconAnimation: {
      animate: { scale: [1, 1.12, 1], rotate: [0, -8, 8, 0] },
      transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' as const }
    }
  }
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-6">
            <div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6" />
              </svg>
            </div>
            <span className="text-accent text-[15px] font-medium">We keep it smooth, simple, and effective.</span>
          </div>
          
          <h2 className="text-[26px] sm:text-[32px] md:text-[44px] font-medium text-[#e4e4e7] max-w-2xl mx-auto leading-tight">
            How to Get Started
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#141414] border border-[#222] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col h-full min-h-[280px] md:min-h-[320px]">
              {/* Animated Icon Container */}
              <div className="h-24 md:h-32 flex items-center justify-center mb-6 md:mb-8">
                <motion.div
                  animate={step.iconAnimation.animate}
                  transition={step.iconAnimation.transition}
                  className="p-3 md:p-4 rounded-2xl bg-accent/10 border border-accent/20 shadow-lg shadow-accent/5"
                >
                  {step.icon}
                </motion.div>
              </div>

              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4">{step.title}</h3>
                <p className="text-[#888888] text-[13px] md:text-[15px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
