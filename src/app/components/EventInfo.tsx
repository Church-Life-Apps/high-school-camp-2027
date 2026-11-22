import Button from "./Button";
import Countdown from "./Countdown";
import { REGISTER_HREF } from "../site";

const EYEBROW = "font-mono text-xs font-medium tracking-[0.16em] text-white";
const VALUE = "font-sans text-xl font-semibold text-white";

export default function EventInfo() {
  return (
    <section className="bg-info-gradient px-6 py-[clamp(4rem,8.33vw,9rem)]">
      <div className="mx-auto flex max-w-[1088px] flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-14">
          <dl className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:gap-[72px]">
            <div className="flex flex-col gap-2">
              <dt className={EYEBROW}>WHEN</dt>
              <dd className={VALUE}>June 30th – July 4th, 2027</dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className={EYEBROW}>WHERE</dt>
              <dd className={VALUE}>TO BE ANNOUNCED</dd>
            </div>
          </dl>

          <div className="flex flex-col items-center gap-6">
            <p className={EYEBROW}>COUNTDOWN TO HSC/27</p>
            <Countdown size="lg" />
          </div>
        </div>

        <Button href={REGISTER_HREF} className="w-full max-w-[266px]">
          REGISTER FOR HSC/27
        </Button>
      </div>
    </section>
  );
}
