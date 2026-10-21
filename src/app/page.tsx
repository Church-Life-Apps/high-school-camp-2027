const details = [
  { label: "When", value: "Summer 2027 — dates coming soon" },
  { label: "Where", value: "Location to be announced" },
  { label: "Who", value: "All high school students" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-12 px-6 py-24">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Save the date
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
            High School Camp 2027
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A week of worship, friendship, and fun. More details and
            registration are on the way — check back soon.
          </p>
        </div>

        <dl className="grid gap-4 sm:grid-cols-3">
          {details.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-black/[.08] bg-white p-5 dark:border-white/[.145] dark:bg-zinc-950"
            >
              <dt className="text-sm text-zinc-500">{label}</dt>
              <dd className="mt-1 font-medium text-zinc-950 dark:text-zinc-50">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div>
          <span className="inline-flex h-12 items-center rounded-full bg-zinc-200 px-6 font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            Registration opens soon
          </span>
        </div>
      </main>

      <footer className="px-6 py-8 text-center text-sm text-zinc-500">
        © 2027 High School Camp
      </footer>
    </div>
  );
}
