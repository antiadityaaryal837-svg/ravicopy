import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      ),
      price: "$75",
      period: "/per thumbnail",
      desc: "Perfect for new creators who want a clean, high-quality start without the extras.",
      btn: "Go with this plan ↗",
      features: [
        "1 static thumbnail",
        "High-quality design (no effects, filters, retouching, or AI enhancements)",
        "JPG file only",
        "Ideal for building your channel's visual identity",
        "Ask for example"
      ]
    },
    {
      name: "Professional",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      ),
      price: "$145",
      period: "/per thumbnail",
      desc: "A professional-grade thumbnail for creators aiming to stand out.",
      btn: "Go with this plan ↗",
      features: [
        "1 ultra-quality thumbnail",
        "Includes advanced effects, filters, and AI enhancements",
        "Retouching for maximum visual appeal",
        "JPG + layered PSD file",
        "Ask for example"
      ]
    },
    {
      name: "Enterprises",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      price: "Custom",
      period: "",
      desc: "The ultimate thumbnail strategy for top-tier creators with big audiences.",
      btn: "Schedule a call ↗",
      features: [
        "1 premium-quality thumbnail",
        "Everything in the Standard plan",
        "Designed collaboratively with my team for high CTR performance",
        "Audience-targeted creative strategy",
        "Ask for example"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-white font-outfit">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-6">
            <div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6" />
              </svg>
            </div>
            <span className="text-accent text-[15px] font-medium">Pricing</span>
          </div>
          
          <h2 className="text-[26px] sm:text-[36px] md:text-[56px] font-medium text-[#e4e4e7] mx-auto leading-tight mb-3 md:mb-4">
            Flexible plans for growth
          </h2>
          <p className="text-[#888888] text-[15px] md:text-[17px]">
            Transparent pricing designed to fit your requirements.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="pricing-card bg-[#141414] border border-[#222] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3" />
              
              <div className="flex items-center gap-2 text-white mb-5 md:mb-6">
                <div className="bg-[#222] p-1.5 rounded-md text-[#888]">
                  {plan.icon}
                </div>
                <span className="font-medium">{plan.name}</span>
              </div>
              
              <div className="mb-3 md:mb-4 flex items-end gap-1">
                <span className="text-[34px] md:text-[40px] font-semibold leading-none">{plan.price}</span>
                {plan.period && <span className="text-[#888] mb-1 text-[13px] md:text-[15px]">{plan.period}</span>}
              </div>

              <p className="text-[#888] text-[14px] md:text-[15px] leading-relaxed mb-6 md:mb-8 min-h-[48px]">
                {plan.desc}
              </p>

              <a
                href={`https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 md:py-3.5 bg-[#444] hover:bg-[#555] transition-colors rounded-xl text-white font-medium mb-6 md:mb-8 flex items-center justify-center text-[14px] md:text-[15px]"
              >
                {plan.btn}
              </a>

              <div className="space-y-3 md:space-y-4 mt-auto">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#222] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white text-[13px] md:text-[14px] leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

