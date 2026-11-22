export default function Verse() {
  return (
    <section className="bg-hsc-cream px-6 pt-[clamp(4rem,8.33vw,9rem)] pb-[clamp(5rem,12.96vw,14rem)]">
      <div className="mx-auto flex max-w-[1088px] flex-col items-center gap-6">
        {/* Progress Block: the two boxes overlap by 4px so their borders merge */}
        <div className="flex w-full max-w-[355px] flex-col">
          <div className="rounded-t-xl border-4 border-hsc-bright px-5 pt-5 pb-4">
            <p className="font-display-expanded text-xl leading-[1.2] text-hsc-electric-ink">ARE YOU READY?</p>
          </div>
          <div className="-mt-1 rounded-b-xl border-4 border-hsc-bright px-5 pt-4 pb-5">
            <p className="font-mono text-sm font-semibold tracking-[0.08em] text-hsc-bright">“YEAH! I’M READY!”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
