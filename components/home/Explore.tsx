"use client";
import React from "react";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { CityCard } from "../CityCard";
import { useRouter } from "next/navigation";
import { statesData } from "@/lib/statesData";

export const exploreCities = [
  {
    mainImage: "/img/explore/lagos-main.png",
    hoverImage: "/img/explore/lagos-main.png",
    title: "Lagos",
    description: "Explore Lagos",
    href: "/states/lagos",
    featured: true,
  },
];

const Explore = () => {
  const router = useRouter();

  return (
    <div className="relative py-16 min-h-[80dvh] ">
      <MaxWidthWrapper>
        <header className="text-[#014339] mb-10">
          <h4 className="uppercase font-semibold text-sm tracking-wider">
            Explore your city
          </h4>

          <div className="flex justify-between mt-2 gap-3">
            <h5 className="font-inter font-bold text-4xl md:text-5xl">
              Where to next?
            </h5>

            <Button
              variant="outline"
              onClick={() => router.push("/states")}
              className="cursor-pointer font-semibold"
            >
              View all cities
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-4">
         
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
         
         
          {Object.values(statesData).slice(0,5).map((state) => (
            <CityCard
              key={state.stateSlug}
              mainImage={state.hero.imageUrl}
              hoverImage={state.hero.imageUrl}
              title={state.shortName}
              description={`Explore ${state.shortName}`}
              href={`/states/${state.stateSlug}`}
            />
          ))}
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Explore;
