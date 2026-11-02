import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <div
      className="relative flex min-h-[calc(100svh-70px)] items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/worshipbackground.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Center Title */}
      <div className="relative z-10 ml-[5%] text-left">
        <h1 className="whitespace-nowrap text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          HIGH SCHOOL CAMP{" "}
          <span className="italic text-amber-400">2027</span>
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium tracking-wider sm:text-base">

          <span className="whitespace-nowrap">
            <span className="font-black text-amber-400">2024</span>
            <span className="ml-2 text-white/80">ALL THINGS NEW</span>
          </span>


          <span className="whitespace-nowrap">
            <span className="font-black text-amber-400">2025</span>
            <span className="ml-2 text-white/80">MORE PRECIOUS THAN GOLD</span>
          </span>


          <span className="whitespace-nowrap">
            <span className="font-black text-amber-400">2026</span>
            <span className="ml-2 text-white/80">EYEWITNESSES OF HIS MAJESTY</span>
          </span>


          <span className="whitespace-nowrap">
            <span className="font-black text-amber-400">2027</span>
            <span className="ml-1 text-white/80 italic">TO BE ANNOUNCED</span>
          </span>

        </div>

        {/* Information Sections */}
        <div className="mt-14 grid w-full max-w-7xl grid-cols-[auto_auto_1fr] gap-16">

          {/* WHEN */}
          <div className="border-t border-white/30 pt-5">
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-400">
              WHEN
            </h2>
            <p className="mt-3 whitespace-nowrap text-lg font-semibold text-white">
              JUNE 30 — JULY 4, 2027
            </p>
          </div>

          {/* WHERE */}
          <div className="border-t border-white/30 pt-5">
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-400">
              WHERE
            </h2>
            <p className="mt-3 whitespace-nowrap text-lg font-semibold text-white italic">
              TO BE ANNOUNCED
            </p>
          </div>

          {/* COUNTDOWN */}
          <div className="ml-auto border-t border-white/30 pt-5">
            <h2 className="text-sm font-bold tracking-[0.3em] text-amber-400">
              COUNTDOWN
            </h2>
            <Countdown />
          </div>

        </div>



        <button
          className="mt-20 rounded-full bg-amber-400/50 px-12 py-4
             text-sm font-bold uppercase tracking-[0.2em]
             text-amber-100 border border-amber-400/50
             hover:bg-amber-400/70 hover:text-white
             cursor-default select-none transition duration-300"
        >
          Registration Coming Soon
        </button>
      </div>


    </div>
  );
  // return (
  //   <div
  //     className="relative min-h-screen bg-red-40 bg-center bg-no-repeat font-sans"
  //     style={{
  //       backgroundImage: "url('public/images/worshipbackground.jpg')",
  //     }}
  //   >
  //     {/* Dark overlay for readability */}
  //     <div className="absolute inset-0 bg-black/40" />

  //     {/* Header at the top */}
  //     <header className="absolute inset-x-0 top-0 z-10 flex justify-center px-6 pt-10 sm:pt-14">
  //       <span className="text-center text-4xl font-semibold tracking-tight text-white sm:text-3xl">
  //         HIGH SCHOOL CAMP 2027
  //       </span>
  //     </header>

  //     {/* Countdown centered in the viewport */}
  //     <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
  //       <Countdown />

  //       {/* Message below countdown */}
  //       <span className="mt-12 inline-flex h-12 items-center px-6 font-medium text-white">
  //         More details to come...
  //       </span>
  //     </main>
  //   </div>
  // );
}
