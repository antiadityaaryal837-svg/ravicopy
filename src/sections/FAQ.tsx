import { useState } from 'react';

const faqs = [
  {
    q: "What information do you need from me to create a thumbnail?",
    a: "I usually need a rough idea of the video and, if possible, the intro. Typically, I'll ask for details like the working title, a basic concept, your preferred style or a reference image, and any specific assets you'd like included in the design."
  },
  { q: "What is the turnaround time for thumbnail?", a: "Turnaround time is typically 24-48 hours depending on complexity." },
  { q: "What's your step-by-step process when we work together?", a: "We start with a brief, move to a sketch/concept, and then finalize the design." },
  { q: "How is A/B Testing handled?", a: "We provide multiple variations that you can test on YouTube to see which performs best." },
  { q: "Do you offer revisions?", a: "Yes, we offer up to 2 revisions on all plans." },
  { q: "Do you use AI in your process?", a: "We use AI for enhancements and inspiration, but all core designs are hand-crafted." },
  { q: "What if I don't like the thumbnail design?", a: "We will work with you to understand what went wrong and revise it until you're satisfied." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-6">
            <div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6" />
              </svg>
            </div>
            <span className="text-accent text-[15px] font-medium">FAQs</span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] md:text-[44px] font-medium text-[#e4e4e7] mx-auto leading-tight mb-4">
            We've got the answers
          </h2>
        </div>

        {/* Accordion */}
        <div className="mb-14 md:mb-24">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`border-b border-[#222] transition-colors ${isOpen ? 'bg-[#141414] rounded-2xl border-transparent' : ''}`}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full py-5 md:py-6 px-4 md:px-6 flex items-center justify-between text-left"
                >
                  <span className={`text-[14px] md:text-[16px] font-medium ${isOpen ? 'text-white' : 'text-[#888888] hover:text-white transition-colors'}`}>
                    {faq.q}
                  </span>
                  <span className="text-[#888888] ml-3 flex-shrink-0">
                    {isOpen ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 md:px-6 pb-5 md:pb-6 text-[#888888] text-[13px] md:text-[15px] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="bg-[#141414] border border-[#222] rounded-[24px] md:rounded-[32px] p-8 sm:p-10 md:p-16 text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[44px] font-medium text-white mb-4 md:mb-6">
            Get your First Thumbnail
          </h2>
          <p className="text-[#888888] text-[14px] md:text-[16px] max-w-[460px] mx-auto mb-7 md:mb-10 leading-relaxed">
            We specialize in YouTube thumbnail strategy, design, titles, and offer consulting — all in-house, no agencies, no outsourcing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={() => document.getElementById('thumbnails')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-7 md:px-8 py-3.5 md:py-4 rounded-full border border-[#333] bg-gradient-to-b from-[#222] to-[#111] hover:to-[#222] text-white font-medium transition-all text-[14px] md:text-[22px]"
            >
              Portfolio
            </button>
            <a
              href="https://wa.me/9823664687?text=Hi%20Aditya%2C%20I%20want%20to%20work%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 md:px-8 py-3.5 md:py-4 rounded-full bg-accent hover:bg-[#bce600] text-black font-medium transition-colors text-[14px] md:text-[21px]"
            >
              Let's work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
