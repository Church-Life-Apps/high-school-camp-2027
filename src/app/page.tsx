import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Header at the top */}
      <header className="absolute inset-x-0 top-0 flex justify-center px-6 pt-10 sm:pt-14">
        <span className="text-center text-4xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
          HIGH SCHOOL CAMP 2027
        </span>
      </header>

      {/* Countdown centered in the viewport */}
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <Countdown />

        {/* Message below countdown */}
        <span className="mt-12 inline-flex h-12 items-center px-6 font-medium text-zinc-500 ">
          More details to come...
        </span>
      </main>

    </div>
  );
}
