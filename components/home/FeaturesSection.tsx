import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

const features = {
  "easy-map-navigation": {
    title: "Easy map navigation",
    desc: "Navigate streets like Alaka Way, Abiodun Opeifa St, Nasfat, Hotel Madiba, Admiral Gabriel Okoi St, and more.",
    link: "/features",
  },

  "business-listings": {
    title: "Business Listings",
    desc: "Find stores, vendors, artisans, handymen, salons, and verified businesses near you in seconds.",
    link: "/features",
  },
  "discover-your-city": {
    title: "Discover Your City",
    desc: "Find Hotels/AirBnbs, Restaurants, Top spots in your city, Family fun places and historical landmarks and places to visit.",
    link: "/features",
  },
  "traffic-update": {
    title: "Traffic Update",
    desc: "Stay ahead of the traffic. Check updates around Gaborone CBD, Tlokweng, and nearby roads.",
    link: "/features",
  },
  "community-reporting": {
    title: "Community Reporting",
    desc: "Report and track community concerns or social issues in your area.",
    link: "/features",
  },
  services: {
    title: "Services",
    desc: "Find Hotels/AirBnbs, Restaurants, Top spots in your city, Family fun places and historical landmarks and places to visit.",
    link: "/features",
  },
};

export const DetailsSection = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col gap-2 max-w-[455px]">
      <h4 className="font-medium text-3xl text-[#F5F5F5]">{title}</h4>
      <p className="text-[#E6E7E7] text-lg">{desc}</p>
      <Link href={link} className="mt-5 w-fit border-b-2 border-[#E8C84A] pb-1 text-[#F1DC83] font-semibold transition-colors hover:text-white">
        Explore All Features
      </Link>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-20">
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#005A8D]/25 blur-3xl" />
      <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-[#6DA9D2]/15 blur-3xl" />
      <MaxWidthWrapper className="relative z-10">
        <header className="text-center max-w-[598px] mx-auto space-y-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#6DA9D2]">
            Built for Botswana
          </p>
          <h4 className="text-[#F5F5F5] text-5xl inter font-semibold">
            Smarter Features for You
          </h4>
          <p className="text-[#CCCFCE] max-w-[30rem] text-lg mx-auto">
            Everything you need to navigate life in Botswana, organized in one
            intuitive interface
          </p>
        </header>

        <div className="grid md:grid-cols-[550px_1fr] gap-10 md:gap-16 my-24">
          <article className="relative aspect-[1.23/1] w-full">
            <Image
              src={"/img/features/map-nav.svg"}
              className="object-cover"
              fill
              alt="map"
            />
          </article>

          <article className="flex items-center text-white justify-center">
            <DetailsSection
              title={features["easy-map-navigation"].title}
              desc={features["easy-map-navigation"].desc}
              link={features["easy-map-navigation"].link}
            />
          </article>
        </div>

        <div className="flex flex-col-reverse md:grid grid-cols-[1fr_500px] lg:grid-cols-[1fr_622px] gap-10 md:gap-16 my-24">
          <article className="flex items-center text-white">
            <DetailsSection
              title={features["business-listings"].title}
              desc={features["business-listings"].desc}
              link={features["business-listings"].link}
            />
          </article>

          <article className="relative aspect-[1.21/1] group w-full rounded-3xl">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              src="/video/Business feature.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            <div
              className="absolute bottom-[-5%] md:bottom-[5%] md:left-[20%] left-[-5%] md:opacity-0 md:scale-[0.95]
  group-hover:opacity-100 group-hover:left-[-30%] md:group-hover:scale-[1]
  transition-all duration-500 ease-in-out"
            >
              <article className="relative h-32 md:h-40 aspect-[2/1]">
                <Image
                  src="/img/features/bus_listing_pop_up.svg"
                  fill
                  alt="pop-up"
                  className="object-contain"
                />
              </article>
            </div>
          </article>
        </div>

        <div className="grid md:grid-cols-[400px_1fr] lg:grid-cols-[700px_1fr] gap-10 md:gap-16 my-24">
          <article className="relative group aspect-[.94/1] w-full ">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              src="/video/discover.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="relative z-50 flex h-full items-end md:px-7 px-4">
              <article
                className="relative h-40 md:h-72 aspect-[1/1.2] md:opacity-0 md:translate-y-8 group-hover:opacity-100
              group-hover:translate-y-0 transition-all duration-700 ease-out"
              >
                <Image
                  src="/img/features/discover-1.png"
                  fill
                  alt="pop-up"
                  className="object-cover"
                />
              </article>

              <article
                className="relative h-40 md:h-72 aspect-[2/1.9] md:opacity-0 group-hover:opacity-100
               transition-opacity duration-700 ease-out delay-[300ms]"
              >
                <Image
                  src="/img/features/discover-2.png"
                  fill
                  alt="pop-up"
                  className="object-cover"
                />
              </article>
            </div>
          </article>

          <article className="flex items-center text-white justify-center">
            <DetailsSection
              title={features["discover-your-city"].title}
              desc={features["discover-your-city"].desc}
              link={features["discover-your-city"].link}
            />
          </article>
        </div>

        <div className="flex flex-col-reverse md:grid grid-cols-[1fr_600px] lg:grid-cols-[1fr_622px] gap-10 md:gap-16 my-24">
          <article className="flex items-center text-white">
            <DetailsSection
              title={features["community-reporting"].title}
              desc={features["community-reporting"].desc}
              link={features["community-reporting"].link}
            />
          </article>

          <article className="relative aspect-[1.21/1] w-full rounded-3xl overflow-hidden">
            <Image
              src={"/img/features/community.png"}
              className="object-cover"
              fill
              alt="map"
            />
          </article>
        </div>

        <div className="grid md:grid-cols-[400px_1fr] lg:grid-cols-[700px_1fr] gap-10 md:gap-16 my-24">
          <article className="relative aspect-[.94/1] w-full rounded-3xl overflow-hidden">
            <Image
              src={"/img/features/services.png"}
              className="object-contain"
              fill
              alt="map"
            />
          </article>

          <article className="flex items-center text-white justify-center">
            <DetailsSection
              title={features["services"].title}
              desc={features["services"].desc}
              link={features["services"].link}
            />
          </article>
        </div>

        <div className="flex flex-col-reverse md:grid grid-cols-[1fr_600px] lg:grid-cols-[1fr_622px] gap-10 md:gap-16 mt-32">
          <article className="flex items-center text-white">
            <DetailsSection
              title={features["traffic-update"].title}
              desc={features["traffic-update"].desc}
              link={features["traffic-update"].link}
            />
          </article>

          <article className="relative aspect-[1.21/1] w-full rounded-3xl overflow-hidden">
            <Image
              src={"/img/features/traffic.png"}
              className="object-cover"
              fill
              alt="map"
            />
          </article>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturesSection;
