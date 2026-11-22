// Shared site content. Link destinations aren't in the design yet,
// so they all point to "#" until real pages exist.

export const REGISTER_HREF = "#";

// June 30, 2027, 7 PM Eastern
export const CAMP_START = new Date("2027-06-30T19:00:00-04:00");

export type SiteLink = { label: string; href: string };

const schedule = { label: "’27 Schedule", href: "#" };
const musicLists = { label: "Music Lists", href: "#" };
const pastYears = { label: "Past Years", href: "#" };
const funThings = { label: "Fun Things", href: "#" };
const contactUs = { label: "Contact Us", href: "#" };

export const NAV_LINKS: SiteLink[] = [schedule, musicLists, pastYears, funThings, contactUs];

// The footer uses a different order than the nav, as designed.
export const FOOTER_LINKS_LEFT: SiteLink[] = [schedule, pastYears, musicLists, funThings];
export const FOOTER_LINKS_RIGHT: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  contactUs,
];

export const BANNER_SEGMENTS = [
  { tag: "HSC/24", text: "ALL THINGS NEW" },
  { tag: "HSC/25", text: "MORE PRECIOUS THAN GOLD" },
  { tag: "HSC/26", text: "EYEWITNESSES OF HIS MAJESTY" },
  { tag: "HSC/27", text: "TO BE ANNOUNCED", current: true },
];
