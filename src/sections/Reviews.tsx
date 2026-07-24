const reviewsList = [
  {
    name: "Jeremy Hutchins",
    handle: "@jeremyhutchins",
    text: "Aditya Trevor is wonderful thumbnail designer who excels in attention to detail and professionalism, ensuring perfect brand alignment 🤌. Collaborating with him is a breeze due to his quick responses and cooperative nature, always delivering on time. I'm thrilled with the results and plan to work with Aditya again!",
    img: "/creators/Jeremy Hutchins.jpg"
  },
  {
    name: "Jonathan Joly",
    handle: "@jonathanjoly",
    text: "Great guy to do business with have done plenty of thumbnails with him and he always went out when we do comparisons",
    img: "/creators/Jonathan Joly.jpg"
  },
  {
    name: "Preston Playz",
    handle: "@preston",
    text: "Absolutely crushed it, he perfectly recreated the vibe we were looking for! Super fast turnaround as well.",
    img: "/creators/Preston Playz.jpg"
  },
  {
    name: "ANATOLY",
    handle: "@anatoly",
    text: "Aditya Trevor truly outshined in social media design with his CREATIVE touch and perfect brand alignment that exceeded all expectations. Working with him was a breeze—he delivered everything on time, responded swiftly, and consistently went above and beyond. Highly recommend Aditya for his exemplary professionalism and creativity! 👏",
    img: "/creators/Anatoly.jpg"
  },
  {
    name: "Jancy Family",
    handle: "@jancyfamily",
    text: "Aditya was fantastic to work with. His thumbnail designs were on point—detailed, stylish, and exactly what I needed. He was fast, efficient, and stayed focused throughout the process.",
    img: "/creators/Jancy Family.jpg"
  },
  {
    name: "Richie Le",
    handle: "@richiele",
    text: "Beyond perfect, did everything I asked for and couldn't have been better 20/10. I will always be coming back",
    img: "/creators/Richie Le.jpg"
  },
  {
    name: "Corey Tonge",
    handle: "@coreytonge",
    text: "As always, Trevor does a fantastic job! The thumbnails look great, my CTR is solid. Not sure what else to say! I buy this gig every week and I'm always really happy with the results.",
    img: "/creators/Corey Tonge.png"
  },
  {
    name: "Trevor Noah",
    handle: "@trevornoah",
    text: "Does excellent work and went above and beyond for us.\nThank you for work Aditya Trevor",
    img: "/creators/Trevor Noah.jpg"
  }
];

const col1 = [reviewsList[0], reviewsList[1], reviewsList[2], reviewsList[3], reviewsList[0], reviewsList[1], reviewsList[2], reviewsList[3]];
const col2 = [reviewsList[4], reviewsList[5], reviewsList[6], reviewsList[7], reviewsList[4], reviewsList[5], reviewsList[6], reviewsList[7]];
const col3 = [reviewsList[2], reviewsList[5], reviewsList[0], reviewsList[3], reviewsList[1], reviewsList[6], reviewsList[4], reviewsList[7]];

const ReviewColumn = ({ reviews, reverse = false, className = "" }: { reviews: typeof reviewsList, reverse?: boolean, className?: string }) => {
  return (
    <div className={`flex flex-col h-[650px] overflow-hidden relative group ${className}`}>
      {/* First Set */}
      <div className={`flex flex-col shrink-0 ${reverse ? 'animate-marquee-vertical-reverse' : 'animate-marquee-vertical'} group-hover:[animation-play-state:paused]`}>
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-[#141414] border border-[#222] rounded-3xl p-8 mb-6 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#222] overflow-hidden flex-shrink-0">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h4 className="font-medium text-white text-[17px]">{review.name}</h4>
                <p className="text-[#888888] text-[14px]">{review.handle}</p>
              </div>
            </div>
            <p className="text-[#888888] text-[15px] leading-relaxed whitespace-pre-wrap">
              {review.text}
            </p>
          </div>
        ))}
      </div>
      {/* Duplicate Set */}
      <div className={`flex flex-col shrink-0 ${reverse ? 'animate-marquee-vertical-reverse' : 'animate-marquee-vertical'} group-hover:[animation-play-state:paused]`}>
        {reviews.map((review, idx) => (
          <div key={`dup-${idx}`} className="bg-[#141414] border border-[#222] rounded-3xl p-8 mb-6 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#222] overflow-hidden flex-shrink-0">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-white text-[17px]">{review.name}</h4>
                <p className="text-[#888888] text-[14px]">{review.handle}</p>
              </div>
            </div>
            <p className="text-[#888888] text-[15px] leading-relaxed whitespace-pre-wrap">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Reviews() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6" />
              </svg>
            </div>
            <span className="text-accent text-[15px] font-medium">Client Reviews</span>
          </div>

          <div className="flex justify-center gap-2 mb-6 text-white">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          <h2 className="text-[32px] md:text-[44px] font-medium text-[#e4e4e7] max-w-2xl mx-auto leading-tight">
            What other creators say..
          </h2>
        </div>

        {/* Vertical Sliding Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative max-h-[650px] overflow-hidden">
          {/* Column 1: Slides Up */}
          <ReviewColumn reviews={col1} />

          {/* Column 2: Slides Down */}
          <ReviewColumn reviews={col2} reverse={true} className="hidden md:flex" />

          {/* Column 3: Slides Up */}
          <ReviewColumn reviews={col3} className="hidden lg:flex" />

          {/* Dark fading masks on top and bottom */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}
