
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <div
      className="relative flex min-h-[calc(100svh-70px)] items-center bg-cover bg-center bg-no-repeat px-5 py-12 sm:px-8 lg:px-0"
      style={{
        backgroundImage: "url('/images/worshipbackground.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl text-center lg:ml-[5%] lg:mr-0 lg:text-left">

        {/* Title */}
        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          HIGH SCHOOL CAMP{" "}
          <span className="italic text-amber-400">2027</span>
        </h1>

        {/* Previous Themes */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-xs font-medium tracking-wide sm:text-sm lg:justify-start lg:text-base">

          <span>
            <span className="font-black text-amber-400">2024</span>
            <span className="ml-1.5 text-white/80">ALL THINGS NEW</span>
          </span>

          <span>
            <span className="font-black text-amber-400">2025</span>
            <span className="ml-1.5 text-white/80">MORE PRECIOUS THAN GOLD</span>
          </span>

          <span>
            <span className="font-black text-amber-400">2026</span>
            <span className="ml-1.5 text-white/80">EYEWITNESSES OF HIS MAJESTY</span>
          </span>

          <span>
            <span className="font-black text-amber-400">2027</span>
            <span className="ml-1.5 text-white/80 italic">TO BE ANNOUNCED</span>
          </span>
        </div>

        {/* Information Sections */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[auto_auto_1fr] lg:gap-16">

          {/* WHEN */}
          <div className="border-t border-white/30 pt-4 lg:pt-5">
            <h2 className="text-xs font-bold tracking-[0.3em] text-amber-400 sm:text-sm">
              WHEN
            </h2>
            <p className="mt-2 text-base font-semibold text-white sm:text-lg">
              JUNE 30 — JULY 4, 2027
            </p>
          </div>

          {/* WHERE */}
          <div className="border-t border-white/30 pt-4 lg:pt-5">
            <h2 className="text-xs font-bold tracking-[0.3em] text-amber-400 sm:text-sm">
              WHERE
            </h2>
            <p className="mt-2 text-base font-semibold italic text-white sm:text-lg">
              TO BE ANNOUNCED
            </p>
          </div>

          {/* COUNTDOWN */}
          <div className="border-t border-white/30 pt-4 lg:ml-auto lg:pt-5">
            <h2 className="text-xs font-bold tracking-[0.3em] text-amber-400 sm:text-sm">
              COUNTDOWN
            </h2>
            <Countdown />
          </div>

        </div>

        {/* Registration Button */}
        <button
          className="mt-12 rounded-full border border-amber-400/50 bg-amber-400/50 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-100 transition duration-300 hover:bg-amber-400/70 hover:text-white cursor-default select-none sm:mt-16 sm:px-12 sm:py-4 sm:text-sm"
        >
          Registration Coming Soon
        </button>

      </div>
    </div>
  );
}
