export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white border-b border-[#222]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#222]">

          <div className="flex flex-col items-center flex-1 w-full py-4 sm:py-0">
            <h3 className="text-[44px] sm:text-[56px] md:text-[64px] font-medium leading-none mb-2 text-[#e4e4e7]">850M+</h3>
            <p className="text-[#888888] text-[15px] md:text-[17px]">Thumbnail Clicks</p>
          </div>

          <div className="flex flex-col items-center flex-1 w-full py-4 sm:py-0">
            <h3 className="text-[44px] sm:text-[56px] md:text-[64px] font-medium leading-none mb-2 text-[#e4e4e7]">3k+</h3>
            <p className="text-[#888888] text-[15px] md:text-[17px]">Reviews on Fiverr</p>
          </div>

          <div className="flex flex-col items-center flex-1 w-full py-4 sm:py-0">
            <h3 className="text-[44px] sm:text-[56px] md:text-[64px] font-medium leading-none mb-2 text-[#e4e4e7]">1280+</h3>
            <p className="text-[#888888] text-[15px] md:text-[17px]">Happy Creators</p>
          </div>

        </div>
      </div>
    </section>
  );
}
