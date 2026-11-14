export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl sm:px-6">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3">

                {/* Logo / Website Name */}
                <a href="/" className="group flex shrink-0">
                    <span className="text-base font-black tracking-[0.12em] text-white transition-colors group-hover:text-amber-300 sm:text-xl sm:tracking-widest">
                        HSC
                    </span>
                    <span className="text-base pl-1 font-semibold text-hsc-hot-pink sm:text-xl sm:tracking-widest ">
                        /27
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="flex shrink-0 items-center gap-1 sm:gap-3">
                    <a
                        href="/"
                        className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-all hover:bg-white/10 hover:text-hsc-hot-pink-300 sm:px-4 sm:text-sm"
                    >
                        Home
                    </a>


                    {/* Registration Button */}
                    <span
                        className="inline-flex cursor-default select-none items-center rounded-full border border-hsc-hot-pink-400/40 bg-hsc-hot-pink-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-hsc-hot-pink-400 transition-all duration-300 hover:border-hsc-hot-pink-400/70 hover:bg-hsc-hot-pink-500/20 hover:text-hsc-hot-pink-300 sm:ml-2 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        <span className="sm:hidden">Coming Soon</span>
                        <span className="hidden sm:inline">Registration Coming Soon</span>
                    </span>

                </div>

            </nav>
        </header>
    );
}
