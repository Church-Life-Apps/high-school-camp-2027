import type { Metadata } from "next";
import { Syncopate, Ubuntu_Sans, Ubuntu_Sans_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
});

// Stand-in for Bacalar (Ultra Expanded / Expanded)
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

// Stand-in for Comba (Bold Ultra Wide)
const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "High School Camp 2027",
  description: "A week of worship, friendship, and fun. Details coming soon.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ubuntuSans.variable} ${ubuntuMono.variable} ${unbounded.variable} ${syncopate.variable} antialiased`}
    >
      <body className="overflow-x-clip font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
