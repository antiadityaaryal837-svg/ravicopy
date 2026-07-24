const row1 = [
  { name: 'Jeremy Hutchins', subs: '10M subscribers', img: '/creators/Jeremy Hutchins.webp' },
  { name: 'Corey Tonge', subs: '13.5M subscribers', img: '/creators/Corey Tonge.webp' },
  { name: 'ANATOLY', subs: '9.35M subscribers', img: '/creators/Anatoly.webp' },
  { name: 'Jancy Family', subs: '2.5M subscribers', img: '/creators/Jancy Family.webp' },
  { name: 'Larry Wheels', subs: '3.38M subscribers', img: '/creators/Larry Wheels.webp' },
  { name: 'Trevor Noah', subs: '4.1M subscribers', img: '/creators/Trevor Noah.webp' },
  { name: 'Jonathan Joly', subs: '2.2M subscribers', img: '/creators/Jonathan Joly.webp' },
];

const row2 = [
  { name: 'Richie Le', subs: '1.2M subscribers', img: '/creators/Richie Le.webp' },
  { name: 'Duke Dennis', subs: '4.6M subscribers', img: '/creators/Duke Dennis.webp' },
  { name: 'Preston Playz', subs: '15.2M subscribers', img: '/creators/Preston Playz.webp' },
  { name: 'THE DLA FAM', subs: '6.8M subscribers', img: '/creators/THE DLA FAM.webp' },
  { name: 'La Familia Latorre', subs: '4.5M subscribers', img: '/creators/La Familia Latorre.webp' },
  { name: 'Dani e Robi', subs: '2.1M subscribers', img: '/creators/Dani e Robi.webp' },
  { name: '4PLUSONE.', subs: '1.5M subscribers', img: '/creators/4PLUSONE..webp' },
];

const ClientCard = ({ client }: { client: typeof row1[0] }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-[160px] flex-shrink-0 text-center select-none">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-[#111] border border-white/5 relative">
        <img
          src={client.img}
          alt={client.name}
          className="w-full h-full object-cover"
          width={192}
          height={192}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div>
        <h3 className="text-white font-medium text-[15px] md:text-[17px] mb-0.5 whitespace-nowrap">{client.name}</h3>
        <p className="text-white/40 text-[12px] md:text-[13px]">{client.subs}</p>
      </div>
    </div>
  );
};

const ClientSliderRow = ({ clientsList, reverse = false }: { clientsList: typeof row1, reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden group w-full py-4">
      {/* First set */}
      <div className={`flex space-x-12 pr-12 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}>
        {clientsList.map((client, idx) => (
          <ClientCard key={idx} client={client} />
        ))}
      </div>
      {/* Duplicate set for infinite loop */}
      <div className={`flex space-x-12 pr-12 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}>
        {clientsList.map((client, idx) => (
          <ClientCard key={`dup-${idx}`} client={client} />
        ))}
      </div>
    </div>
  );
};

export default function Clients() {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <div className="mb-20">
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#e4e4e7] tracking-tight mb-2">
            We design for the Pros.
          </h2>
          <p className="text-accent text-[22px] md:text-[28px] font-medium">
            Our Clients
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-6xl mx-auto relative">
          {/* Left and Right Gradient Blur Edge Overlays */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-44 bg-gradient-to-r from-primary via-primary/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-44 bg-gradient-to-l from-primary via-primary/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Slides Left */}
          <ClientSliderRow clientsList={row1} />

          {/* Row 2: Slides Right */}
          <ClientSliderRow clientsList={row2} reverse={true} />
        </div>
      </div>
    </section>
  );
}
