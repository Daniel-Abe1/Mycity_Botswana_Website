import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";

const EmberCampaign = () => {
  return (
    <section className="pb-20 pt-4">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#6DA9D2]/35 bg-gradient-to-br from-[#043F5E] via-[#075F87] to-[#6DA9D2] text-white shadow-[0_28px_75px_rgba(0,63,99,0.22)]">
          <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full border-[50px] border-white/5" />
          <div className="absolute -bottom-32 right-[28%] h-72 w-72 rounded-full bg-[#E8C84A]/20 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="px-6 py-12 md:px-12 md:py-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur">
                <Sparkles size={16} />
                EMBER TO REMEMBER 2026
              </span>

              <h2 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.08] md:text-6xl">
                Botswana’s season of
                <span className="block text-[#F5C39A]">unforgettable moments.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                From city pop-ups to cultural celebrations, we’re bringing the
                country’s most exciting experiences together in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2.5">
                  <CalendarDays size={17} />
                  100 days of experiences
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2.5">
                  <MapPin size={17} />
                  Across Botswana
                </span>
              </div>
            </div>

            <div className="relative flex items-center p-6 pt-0 lg:p-8">
              <div className="relative w-full overflow-hidden rounded-[1.7rem] bg-[#FFF9F4] p-7 text-[#111111] shadow-[0_22px_55px_rgba(0,0,0,0.18)] md:p-8">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#E8C84A]/18" />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8C84A] text-[#111111]">
                  <PartyPopper size={23} />
                </span>

                <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#005A8D]">
                  Calling all event hosts
                </p>
                <h3 className="relative mt-2 text-2xl font-semibold leading-tight">
                  Put your event on Botswana’s must-do list.
                </h3>
                <p className="relative mt-4 leading-7 text-[#667085]">
                  Concerts, festivals, food, art, culture and community
                  experiences are all welcome.
                </p>

                <Link
                  href="/events#ember-to-remember"
                  className="relative mt-7 inline-flex w-full items-center justify-between rounded-full bg-[#E8C84A] px-6 py-4 font-semibold text-[#111111] shadow-[0_12px_26px_rgba(232,200,74,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#D4B338]"
                >
                  List Your Event
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default EmberCampaign;
