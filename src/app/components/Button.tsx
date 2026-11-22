import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "pink" | "blue";
  className?: string;
  children: React.ReactNode;
};

// Figma "Button" component. Pink is the default; blue is the footer bar override.
const VARIANTS = {
  pink: "bg-hsc-pink text-base hover:bg-hsc-pink-dark",
  blue: "bg-hsc-royal text-sm hover:bg-hsc-bright",
};

export default function Button({ href, variant = "pink", className = "", children }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-9 py-2 font-mono font-semibold tracking-[0.04em] text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
