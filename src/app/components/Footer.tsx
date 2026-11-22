import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Countdown from "./Countdown";
import { FOOTER_LINKS_LEFT, FOOTER_LINKS_RIGHT, REGISTER_HREF, type SiteLink } from "../site";

function LinkList({ links }: { links: SiteLink[] }) {
  return (
    <ul className="flex flex-wrap gap-x-8">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="block p-2 font-mono text-sm font-medium whitespace-nowrap text-hsc-link transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Email reminder form. Visual only for now: there is no backend yet.
function ReminderForm() {
  return (
    <form className="flex items-center" aria-label="Reminder sign-up (coming soon)">
      <label htmlFor="reminder-email" className="sr-only">
        Email address
      </label>
      <input
        id="reminder-email"
        type="email"
        placeholder="your@email.com"
        disabled
        className="h-[57px] min-w-0 flex-1 rounded-xl border-4 border-hsc-royal bg-transparent px-4 font-sans sm:px-6 text-sm leading-[1.2] text-white placeholder:text-hsc-placeholder disabled:cursor-not-allowed"
      />
      <span aria-hidden className="h-[33px] w-2 shrink-0 bg-hsc-royal" />
      <button
        type="button"
        disabled
        title="Coming soon"
        className="h-[57px] shrink-0 rounded-xl bg-hsc-royal px-4 font-sans sm:px-7 text-sm leading-[1.2] font-semibold text-white disabled:cursor-not-allowed"
      >
        Get a Reminder
      </button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-hsc-navy px-page pt-[clamp(4rem,7.18vw,7.75rem)] pb-14">
        <div className="mx-auto flex max-w-[1408px] flex-col gap-9">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <Link href="/" className="self-start font-logo text-[28px] leading-none">
              <span className="text-white">HSC</span>
              <span className="text-hsc-bright">/27</span>
            </Link>

            <div className="flex w-full flex-col gap-5 md:w-[467px]">
              <p className="max-w-[272px] font-sans text-sm leading-normal font-medium text-white">
                Send yourself a future reminder to sign up for the next High School Camp.
              </p>
              <ReminderForm />
            </div>
          </div>

          <div className="flex flex-col">
            <p aria-hidden className="font-display text-[clamp(1.75rem,4.99vw,5.39rem)] leading-[1.2] text-hsc-royal">
              HIGH SCHOOL CAMP
            </p>

            <nav
              aria-label="Footer"
              className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
            >
              <LinkList links={FOOTER_LINKS_LEFT} />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-[124px]">
                <LinkList links={FOOTER_LINKS_RIGHT} />
                <p className="px-2 font-sans text-sm font-medium tracking-[0.16em] text-hsc-muted">© HSC 2027</p>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-hsc-navy-deep px-page py-5">
        <div className="mx-auto flex max-w-[1408px] flex-col items-center gap-6 xl:flex-row xl:justify-between xl:gap-9">
          <Image
            src="/images/hug.svg"
            alt=""
            aria-hidden
            width={613}
            height={22}
            unoptimized
            className="h-auto w-full max-w-[613px] min-w-0 xl:flex-1"
          />
          <div className="flex shrink-0 flex-col items-center gap-6 sm:flex-row sm:gap-9">
            <Countdown size="sm" />
            <Button href={REGISTER_HREF} variant="blue">
              REGISTER FOR HSC/27
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
