
const announcements = [
    { year: "HSC/24", text: "ALL THINGS NEW" },
    { year: "HSC/25", text: "MORE PRECIOUS THAN GOLD" },
    { year: "HSC/26", text: "EYEWITNESSES OF HIS MAJESTY" },
    { year: "HSC/27", text: "TO BE ANNOUNCED", final: true },
];

export default function ScrollingBanner() {
    return (
        <div className="w-full overflow-hidden bg-[#080d12] py-2">
            <div className="flex w-max animate-marquee whitespace-nowrap">
                {[0, 1].map((group) => (
                    <div
                        key={group}
                        className="flex shrink-0 items-center gap-4 pr-4"
                        aria-hidden={group === 1}
                    >
                        {announcements.map((item) => (
                            <div
                                key={item.year}
                                className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider"
                            >
                                <span className="bg-[#06466b] px-2 py-0.5 text-cyan-200">
                                    {item.year}
                                </span>

                                <span className="text-cyan-100">
                                    ·
                                </span>


                                <span className={`${!item.final ? "text-cyan-200" : "text-white-200"}`}>
                                    {item.text}
                                </span>

                                {item.final ? (
                                    <span className="text-cyan-200">//</span>
                                ) : (
                                    <span className="text-cyan-300 text-lg">
                                        ➤
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
