"use client";

import { useSyncExternalStore } from "react";
import { CAMP_START } from "../site";

// Ticks once per second. On the server (and during hydration) the snapshot is
// null, so placeholders render instead of a wrong time.
function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}
const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => null;

const SIZES = {
  lg: {
    wrapper:
      "gap-[clamp(0.5rem,2.1vw,2.25rem)] rounded-xl border-4 border-white px-[clamp(0.75rem,2.55vw,2.75rem)] pt-[clamp(1rem,1.4vw,1.5rem)] pb-[clamp(0.75rem,0.93vw,1rem)]",
    number: "text-[clamp(1.25rem,3.5vw,2.25rem)]",
    label: "text-xs sm:text-base",
  },
  sm: {
    wrapper: "gap-3 sm:gap-6",
    number: "text-xl",
    label: "text-xs",
  },
};

export default function Countdown({ size = "lg" }: { size?: keyof typeof SIZES }) {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const styles = SIZES[size];

  const remaining = now === null ? null : Math.max(0, Math.floor(CAMP_START.getTime() / 1000) - now);

  const pad = (n: number) => String(n).padStart(2, "0");
  const units =
    remaining === null
      ? [
          { label: "DAYS", value: "--" },
          { label: "HRS", value: "--" },
          { label: "MINS", value: "--" },
          { label: "SECS", value: "--" },
        ]
      : [
          { label: "DAYS", value: String(Math.floor(remaining / 86400)) },
          { label: "HRS", value: pad(Math.floor((remaining % 86400) / 3600)) },
          { label: "MINS", value: pad(Math.floor((remaining % 3600) / 60)) },
          { label: "SECS", value: pad(remaining % 60) },
        ];

  return (
    <div role="timer" className={`inline-flex items-start justify-center text-white ${styles.wrapper}`}>
      {units.map(({ label, value }, i) => (
        <div key={label} className="contents">
          {i > 0 && (
            <span aria-hidden className={`font-display leading-tight ${styles.number}`}>
              :
            </span>
          )}
          <div className="flex flex-col items-center gap-1">
            <span className={`font-display leading-tight tabular-nums ${styles.number}`}>{value}</span>
            <span className={`font-mono font-medium tracking-[0.08em] ${styles.label}`}>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
