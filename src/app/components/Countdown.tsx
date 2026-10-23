"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    const target = new Date("2027-06-30T19:00:00-04:00").getTime();
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        const update = () => setRemaining(Math.max(0, target - Date.now()));

        update();
        const interval = setInterval(update, 30);

        return () => clearInterval(interval);
    }, [target]);

    const days = Math.floor(remaining / 86_400_000);
    const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
    const minutes = Math.floor((remaining % 3_600_000) / 60_000);
    const seconds = ((remaining % 60_000) / 1000).toFixed(3);

    const units = [
        { value: days.toString(), label: "DAYS" },
        { value: hours.toString().padStart(2, "0"), label: "HOURS" },
        { value: minutes.toString().padStart(2, "0"), label: "MINUTES" },
        { value: seconds.padStart(6, "0"), label: "SECONDS" },
    ];

    return (
        <div className="flex justify-center">
            <div className="flex items-start gap-3 sm:gap-5">
                {units.map(({ value, label }, index) => (
                    <div key={label} className="flex flex-col items-center">
                        <div className="font-mono text-2xl font-semibold tabular-nums tracking-tight sm:text-4xl">
                            {value}
                        </div>
                        <span className="mt-2 text-[10px] font-medium tracking-widest text-zinc-500 sm:text-xs">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
