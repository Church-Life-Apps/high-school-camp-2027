"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import { NAV_LINKS, REGISTER_HREF } from "../site";

const WRAPPER = "fixed inset-x-0 top-0 z-50 px-page pt-6 pb-3";
const ROW = "mx-auto flex h-[35px] max-w-[1408px] items-center";
const REGISTER_WIDTH = "w-[154px]";

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-logo text-[22px] leading-none sm:text-[28px] ${className}`}>
      <span className="text-white">HSC</span>
      <span className="text-hsc-pink">/27</span>
    </Link>
  );
}

/*
 * The design puts the logo and links in "difference" blend mode so they stay
 * readable over any background. A fixed element only blends with the page if
 * the blend mode is on the fixed element itself, and the pink Register button
 * must NOT be blended. So the nav is drawn as two aligned fixed layers:
 *   1. blended layer: logo, links, mobile menu toggle
 *   2. normal layer (desktop only): Register button
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const desktop = window.matchMedia("(min-width: 80rem)");

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>
      {/* Layer 1: blended */}
      <div className={`${WRAPPER} mix-blend-difference`}>
        <nav aria-label="Main" className={`${ROW} justify-between`}>
          <Logo />

          <div className="hidden items-center gap-8 xl:flex 2xl:gap-16">
            <ul className="flex items-center gap-8 2xl:gap-14">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block p-2 font-mono text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-hsc-cream/10"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Reserves the space where layer 2 draws the Register button */}
            <span aria-hidden className={REGISTER_WIDTH} />
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </nav>
      </div>

      {/* Layer 2: Register button, not blended */}
      <div className={`${WRAPPER} pointer-events-none hidden xl:block`}>
        <div className={`${ROW} justify-end`}>
          <Button href={REGISTER_HREF} className={`pointer-events-auto ${REGISTER_WIDTH}`}>
            REGISTER
          </Button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-[60] flex flex-col bg-hsc-navy px-page pt-6 pb-10 xl:hidden">
          <div className={`${ROW} w-full justify-between`}>
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="relative h-10 w-10"
              autoFocus
            >
              <span className="absolute top-1/2 left-2 h-0.5 w-6 rotate-45 bg-white" />
              <span className="absolute top-1/2 left-2 h-0.5 w-6 -rotate-45 bg-white" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mx-auto mt-12 w-full max-w-[1408px]">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-mono text-xl font-medium text-white hover:text-hsc-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={REGISTER_HREF} className="mt-10">
              REGISTER FOR HSC/27
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
