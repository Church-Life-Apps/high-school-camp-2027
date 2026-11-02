"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    const target = new Date("2027-06-30T19:00:00-04:00").getTime();
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        const update = () => setRemaining(Math.max(0, target - Date.now()));

        update();
        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, [target]);

    const days = Math.floor(remaining / 86_400_000);
    const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
    const minutes = Math.floor((remaining % 3_600_000) / 60_000);
    const seconds = Math.floor((remaining % 60_000) / 1000);

    const units = [
        { value: days.toString(), label: "DAYS" },
        { value: hours.toString().padStart(2, "0"), label: "HOURS" },
        { value: minutes.toString().padStart(2, "0"), label: "MINUTES" },
        { value: seconds.toString().padStart(2, "0"), label: "SECONDS" },
    ];

    return (
        <div className="flex justify-start">
            <div className="flex items-start gap-6 sm:gap-10">
                {units.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center">
                        <div className="font-mono text-3xl font-bold tabular-nums tracking-tight text-white sm:text-3xl md:text-4xl">
                            {value}
                        </div>

                        <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 sm:text-xs">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
