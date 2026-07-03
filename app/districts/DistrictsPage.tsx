"use client";
import { CityCard } from "@/components/CityCard";
import CtaHand from "@/components/CtaHand";
import { exploreCities } from "@/components/home/Explore";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TextInput from "@/components/ui/inputs/TextInput";
import { statesData } from "@/lib/statesData";
import { SearchIcon } from "lucide-react";
import React from "react";

const DistrictsPage = () => {
  return (
    <div>
      <section className="bg-[linear-gradient(to_bottom,#F5F9FB_0%,#FBFDFE_28rem,#FFFFFF_48rem)] pt-20 lg:pt-36">
        <MaxWidthWrapper className="flex flex-col items-center justify-center gap-4 pb-14 text-center">
          <h5 className="text-3xl md:text-[2.5rem] md:leading-[3.5rem] font-semibold text-[#005A8D] inter">
            Discover Amazing sights with <br />
            MyCityApp Africa{" "}
          </h5>
          <p className="text-[#0B0B0B] font-medium">
            Explore Botswana&apos;s districts with MyCityApp Africa
          </p>

          <div className="w-full max-w-[320px]">
            <TextInput
              startAdornment={
                <span className="">
                  <SearchIcon size={20} />
                </span>
              }
              name="search-faq"
              placeholder="Search"
              value=""
              onChange={(val) => console.log(val)}
            />
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className="grid gap-5 pt-2 md:grid-cols-3">
          {exploreCities.map((item) => (
            <CityCard
              key={item.href}
              mainImage={item.mainImage}
              hoverImage={item.hoverImage}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}

          {Object.values(statesData).map((state) => (
            <CityCard
              key={state.stateSlug}
              mainImage={state.hero.imageUrl}
              hoverImage={state.hero.imageUrl}
              title={state.shortName}
              description={`Explore ${state.shortName}`}
              href={`/districts/${state.stateSlug}`}
            />
          ))}
        </MaxWidthWrapper>
      </section>

      <CtaHand />
    </div>
  );
};

export default DistrictsPage;
