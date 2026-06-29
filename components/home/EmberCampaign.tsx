import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";

const EmberCampaign = () => {
  return (
    <section className="pb-16">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden rounded-3xl bg-[#014339] px-6 py-12 text-white md:px-12 md:py-16">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#F9C600]/20" />
          <div className="absolute -bottom-20 right-24 h-48 w-48 rounded-full border-2 border-[#F9C600]/20" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFEFAA] px-4 py-2 text-sm font-semibold text-[#014339]">
                <Sparkles size={16} />
                EMBER TO REMEMBER 2026
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Put your event at the heart of 100 unforgettable days
              </h2>

              <p className="mt-4 max-w-xl text-lg text-[#E6E7E7]">
                Hosting a concert, festival, pop-up, cultural experience, or
                community event? Apply to be featured on MyCityApp.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#FFEFAA]">
                <CalendarDays size={18} />
                Fun, culture and memorable experiences across Nigeria
              </div>
            </div>

            <Link
              href="/events#ember-to-remember"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#F9C600] px-7 py-4 font-semibold text-[#01221D] transition-transform hover:scale-[1.02]"
            >
              List Your Event
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default EmberCampaign;
