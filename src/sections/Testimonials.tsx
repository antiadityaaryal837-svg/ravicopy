const testimonials = [
  { logo: '/companies review/EH3pdw91i6cmCfHikRjPm6EqpmU3989.png', alt: 'YouTube Channel Brand Client Testimonial', quote: '"Creative, innovative, and strategic-our collaboration has led to great results, and I look forward to many more successful projects."' },
  { logo: '/companies review/QAvg9udbrG0kr48M0V3tvuasRc11f4.png', alt: 'Visa Direct Podcast Creator Testimonial', quote: '"Aditya did visually compelling designs that aligned seamlessly with the branding & objectives of the Visa Direct Podcast."' },
  { logo: '/companies review/TUfLfNJTAzQaqrvXKbRC4m3Z0U3b86.png', alt: 'Professional Creative Strategy Client Testimonial', quote: '"An exceptional designer and skilled professional, dedicated to crafting adaptable and creative concepts"' },
  { logo: '/companies review/lcjjVPCq813t2amhNsyeN2yK0ek0c8f.png', alt: 'Gaming Industry Creator Review', quote: '"This designer brings a groundbreaking approach to gameplay that distinctly sets them apart within the broader industry"' },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white border-b border-[#222]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-14 sm:h-16 md:h-20 flex items-center justify-center mb-6 md:mb-8 px-2">
                <img
                  src={t.logo}
                  alt={t.alt}
                  className="max-h-full max-w-[180px] sm:max-w-[220px] object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[#999999] text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed mb-6 md:mb-8 flex-grow">
                {t.quote}
              </p>
              <div className="flex gap-1 text-[#facc15]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
