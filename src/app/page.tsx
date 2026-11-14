
import Countdown from "./components/Countdown";
import ScrollingBanner from "./components/ScrollingBanner";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100svh-70px)] w-full min-w-0 flex-col overflow-x-clip">

      {/* HERO */}
      <div
        className="relative flex min-h-[calc(100svh-250px)] w-full min-w-0 items-end overflow-x-clip bg-cover bg-center bg-no-repeat px-5 pb-12 pt-28 sm:px-8 lg:px-0"
        style={{
          backgroundImage: "url('/images/hsc2024field.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Main Content */}
        <div className="relative z-10 ml-0 w-full min-w-0 max-w-7xl text-left lg:ml-[5%]">

          {/* Title */}
          <span className="block origin-left scale-x-120 scale-y-85 text-[clamp(2.8rem,10vw,4rem)] font-black leading-[0.9] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
            HIGH
          </span>

          <span className="block origin-left scale-x-120 scale-y-85 text-[clamp(2.8rem,10vw,4rem)] font-black leading-[0.9] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
            SCHOOL
          </span>

          <span className="block origin-left scale-x-120 scale-y-85 text-[clamp(2.8rem,10vw,4rem)] font-black leading-[0.9] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
            CAMP{" "}
            <span className="text-hsc-hot-pink">2027</span>
          </span>

        </div>
      </div>

      {/* SCROLLING BANNER */}
      <div className="w-full min-w-0 overflow-x-clip">
        <ScrollingBanner />
      </div>

      {/* INFORMATION SECTION */}
      <div className="text-center flex min-w-0 flex-col items-center justify-center bg-hsc-navy-500 py-12 sm:px-10 lg:py-16">

        {/* Information Sections */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* WHEN */}
          <div className="border-t border-white/20 pt-5">
            <h2 className="text-xs font-bold tracking-[0.3em] text-hsc-hot-pink-400 sm:text-sm">
              WHEN
            </h2>
            <p className="mt-3 text-lg font-black tracking-wide text-white sm:text-xl">
              JUNE 30 — JULY 4, 2027
            </p>
          </div>

          {/* WHERE */}
          <div className="border-t border-white/20 pt-5">
            <h2 className="text-xs font-bold tracking-[0.3em] text-hsc-hot-pink-400 sm:text-sm">
              WHERE
            </h2>
            <p className="mt-3 text-lg font-bold italic text-white/80 sm:text-xl">
              TO BE ANNOUNCED
            </p>
          </div>

          {/* COUNTDOWN */}
          <div className="border-t border-white/20 pt-5 sm:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-bold tracking-[0.3em] text-hsc-hot-pink-400 sm:text-sm">
              COUNTDOWN
            </h2>
            <div className="mt-3 min-w-0 text-white">
              <Countdown />
            </div>
          </div>

        </div>

        {/* Registration Button */}
        <button
          type="button"
          className="mt-12 inline-flex cursor-default select-none items-center justify-center rounded-full border border-hsc-hot-pink-400/40 bg-hsc-hot-pink-500/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-hsc-hot-pink-400 transition-all duration-300 hover:border-hsc-hot-pink-400/70 hover:bg-hsc-hot-pink-500/20 hover:text-hsc-hot-pink-300 sm:mt-14 sm:px-12 sm:py-4 sm:text-sm"
        >
          Registration Coming Soon
        </button>

      </div>

    </div>
  );
}
