"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2027-06-30T19:00:00-04:00").getTime();

export default function Countdown() {
    const [remaining, setRemaining] = useState<number>(0);

    useEffect(() => {
        const update = () => {
            setRemaining(TARGET_DATE - new Date().getTime());
        };

        update();

        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, []);

    if (remaining === null) {
        return <div className="h-12" />;
    }

    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    const units = [
        { value: days, label: "DAYS" },
        { value: hours, label: "HOURS" },
        { value: minutes, label: "MINUTES" },
        { value: seconds, label: "SECONDS" },
    ];

    return (
        <div className="w-full">
            <div className="grid grid-cols-4 gap-2 sm:gap-5 md:gap-8">
                {units.map(({ value, label }) => (
                    <div key={label} className="flex min-w-0 flex-col items-center">
                        <div className="whitespace-nowrap font-mono text-2xl font-bold tabular-nums tracking-tight text-white sm:text-3xl md:text-4xl">
                            {label === "DAYS"
                                ? value
                                : String(value).padStart(2, "0")}
                        </div>

                        <span className="mt-2 whitespace-nowrap text-[8px] font-bold uppercase tracking-wider text-amber-400 sm:text-[10px] sm:tracking-[0.2em] md:text-xs">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
