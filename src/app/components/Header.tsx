export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 px-6 py-3 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between">

                {/* Logo / Website Name */}
                <a href="/" className="group flex flex-col">
                    <span className="text-xl font-black tracking-widest text-white transition-colors group-hover:text-amber-300">
                        HIGH SCHOOL CAMP
                    </span>
                    <span className="text-xs font-semibold tracking-[0.4em] text-amber-400">
                        2027
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="flex items-center gap-2 sm:gap-6">
                    <a href="/" className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-amber-300">
                        Home
                    </a>
                    {/* <a href="/about" className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-amber-300">
                        About
                    </a> */}
                    {/* <a href="/schedule" className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-amber-300">
                        Schedule
                    </a> */}

                    {/* Register Button href="/register" */}
                    <a href="/" className="ml-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-amber-400/20 transition-all hover:scale-105 hover:bg-amber-300">
                        Registration coming soon
                    </a>
                </div>

            </nav>
        </header>
    );
}
