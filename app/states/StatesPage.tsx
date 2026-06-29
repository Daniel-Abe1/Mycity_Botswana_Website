"use client";
import { CityCard } from "@/components/CityCard";
import CtaHand from "@/components/CtaHand";
import { exploreCities } from "@/components/home/Explore";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TextInput from "@/components/ui/inputs/TextInput";
import { statesData } from "@/lib/statesData";
import { SearchIcon } from "lucide-react";
import React from "react";

const CitiesPage = () => {
  return (
    <div>
      <MaxWidthWrapper className="mt-16 lg:mt-32 mb-12 flex flex-col items-center justify-center text-center gap-4">
        <h5 className="text-3xl md:text-[2.5rem] md:leading-[3.5rem] font-semibold text-[#014239] inter">
          Discover Amazing sights with <br />
          MyCityApp{" "}
        </h5>
        <p className="text-[#01221D] font-medium">
          Explore Cities with top level experience on MyCityApp
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

      <MaxWidthWrapper className="grid md:grid-cols-3 gap-5">
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
            href={`/states/${state.stateSlug}`}
          />
        ))}
      </MaxWidthWrapper>

      <CtaHand />
    </div>
  );
};

export default CitiesPage;
