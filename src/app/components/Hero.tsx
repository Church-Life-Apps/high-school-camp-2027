import Image from "next/image";
import heroImage from "../../../public/images/hsc2024field.png";

export default function Hero() {
  return (
    // 721px tall at the 1728px design width, never shorter than 512px
    <section className="relative flex h-[clamp(32rem,41.73vw,45.0625rem)] flex-col justify-end overflow-hidden pb-[clamp(2.5rem,3.7vw,4rem)]">
      <Image src={heroImage} alt="" fill preload sizes="100vw" placeholder="blur" className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-hero-fade" />

      <div className="relative px-page">
        <h1 className="mx-auto max-w-[1408px] font-display text-[clamp(2.5rem,5.56vw,6rem)] leading-none text-white">
          HIGH SCHOOL CAMP <span className="text-hsc-pink">2027</span>
        </h1>
      </div>
    </section>
  );
}
