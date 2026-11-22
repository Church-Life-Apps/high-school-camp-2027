import { BANNER_SEGMENTS } from "../site";

type Segment = (typeof BANNER_SEGMENTS)[number];

function BannerSegment({ tag, text, current, hidden }: Segment & { hidden: boolean }) {
  const textColor = current ? "text-white" : "text-hsc-ice";

  return (
    <li aria-hidden={hidden} className="flex h-[25px] shrink-0 items-center gap-4 whitespace-nowrap">
      <span
        className={`rounded p-1 font-logo text-sm leading-[1.2] text-white ${current ? "bg-hsc-pink" : "bg-hsc-electric-tag"}`}
      >
        {tag}
      </span>
      <span aria-hidden className={`font-mono text-sm ${textColor}`}>
        •
      </span>
      <span className={`font-mono text-sm tracking-[0.12em] ${textColor}`}>{text}</span>
      <span aria-hidden className={`font-mono text-sm ${textColor}`}>
        {current ? "//" : "➤"}
      </span>
    </li>
  );
}

// Each strip renders its content twice and slides by 50% for a seamless loop.
// Movement is turned off for visitors who prefer reduced motion.
export default function Banner() {
  // Segments are repeated so one copy is wider than very wide screens.
  const segments = [...BANNER_SEGMENTS, ...BANNER_SEGMENTS];

  return (
    <section aria-label="High School Camp themes" className="flex flex-col gap-1 overflow-hidden bg-hsc-electric py-2">
      <div aria-hidden className="flex w-max motion-safe:animate-marquee-reverse">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-2 pr-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="font-display text-[2rem] leading-none whitespace-pre text-hsc-electric-ink">
                HIGH SCHOOL CAMP{" "}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="flex w-max motion-safe:animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-4 pr-4">
            {segments.map((segment, i) => (
              <BannerSegment
                key={i}
                {...segment}
                hidden={copy === 1 || i >= BANNER_SEGMENTS.length}
              />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
