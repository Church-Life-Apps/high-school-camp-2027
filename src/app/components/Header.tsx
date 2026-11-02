export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl sm:px-6">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3">

                {/* Logo / Website Name */}
                <a href="/" className="group flex shrink-0 flex-col">
                    <span className="text-base font-black tracking-[0.12em] text-white transition-colors group-hover:text-amber-300 sm:text-xl sm:tracking-widest">
                        HIGH SCHOOL CAMP
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.35em] text-amber-400 sm:text-xs sm:tracking-[0.4em]">
                        2027
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="flex shrink-0 items-center gap-1 sm:gap-3">
                    <a
                        href="/"
                        className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-all hover:bg-white/10 hover:text-amber-300 sm:px-4 sm:text-sm"
                    >
                        Home
                    </a>

                    {/* Registration Button */}
                    <span
                        className="cursor-default select-none rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-amber-200 sm:ml-2 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        <span className="sm:hidden">Coming Soon</span>
                        <span className="hidden sm:inline">Registration Coming Soon</span>
                    </span>
                </div>

            </nav>
        </header>
    );
}
