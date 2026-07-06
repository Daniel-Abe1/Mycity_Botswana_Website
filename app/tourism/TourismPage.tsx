"use client";
import DownloadAppButton from "@/components/DownloadAppButton";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { MapPin } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CtaPhone from "@/components/CtaPhone";

const heroSlides = [
  {
    image: "/img/tourism-hero/hero-1.png",
    location: "Okavango Delta, North-West District",
  },
  {
    image: "/img/tourism-hero/hero-2.png",
    location: "Chobe Riverfront, Chobe District",
  },
  {
    image: "/img/tourism-hero/hero-3.png",
    location: "Makgadikgadi Pans, Central Botswana",
  },
  {
    image: "/img/tourism-hero/hero-4.png",
    location: "Tsodilo Hills, North-West District",
  },
];

const adventure = [
  {
    title: "Kuru Dance & Music Festival",
    description:
      "Celebrate San music, dance, storytelling and contemporary art in the creative village of D’Kar.",
    state: "Ghanzi District",
    imageUrl: "/img/tourism/cultural-experience-1.png",
  },
  {
    title: "Dithubaruba Cultural Festival",
    description:
      "Experience Bakwena history, traditional performance, poetry and community heritage in Molepolole.",
    state: "Kweneng District",
    imageUrl: "/img/tourism/cultural-experience-2.png",
  },
  {
    title: "Domboshaba Cultural Festival",
    description:
      "Discover Kalanga music, dance, food and living tradition beside one of Botswana’s great stone heritage sites.",
    state: "North East District",
    imageUrl: "/img/tourism/heritage-experience.png",
  },
];

const holidayDestinations = [
  {
    title: "Okavango Delta",
    location: "North-West District",
    imageUrl: "/img/tourism/holiday-destination-1.png",
    featured: true,
    tag: "Featured"
  },
  {
    title: "Chobe National Park",
    location: "Chobe District",
    imageUrl: "/img/tourism/holiday-destination-2.png",
    featured: false
  },
  {
    title: "Kgalagadi Transfrontier Park",
    location: "Kgalagadi District",
    imageUrl: "/img/tourism/holiday-destination-3.png",
    featured: false
  },
];

const historicalMonuments = [
  {
    title: "Three Dikgosi Monument",
    location: "Gaborone",
    description: "A tribute to the three dikgosi whose 1895 journey helped shape Botswana's future.",
    imageUrl: "/img/tourism/historical-landmark-1.png"
  },
  {
    title: "Tsodilo Hills",
    location: "North-West District",
    description: "A UNESCO World Heritage landscape preserving thousands of rock paintings.",
    imageUrl: "/img/tourism/historical-landmark-2.png"
  },
  {
    title: "Domboshaba Ruins",
    location: "North East District",
    description: "Fifteenth-century dry-stone walls reveal a sophisticated early settlement.",
    imageUrl: "/img/tourism/historical-landmark-3.png"
  },
  {
    title: "Old Palapye",
    location: "Central District",
    description: "Ruins of Khama III's nineteenth-century capital at the Tswapong Hills.",
    imageUrl: "/img/tourism/historical-landmark-4.png"
  },
];

const TourismPage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div>
      <section className="h-[75dvh] md:h-[95dvh] relative mb-3">
        <article className="bg-gradient-to-b px-3 from-black/40 via-black/55 to-black/80 relative z-20 h-full w-full flex gap-7 flex-col justify-center items-center text-center">
          <p className="font-semibold text-2xl text-[#6DA9D2] md:mt-4 -mt-10">
            Tourism
          </p>
          <h5 className="text-4xl md:text-[4.5rem] md:leading-[4.8rem] text-[#F5F5F5] tracking-normal font-inter font-bold md:-mt-5 -mt-3">
            Discover Botswana, <br /> Live Botswana.
          </h5>
          <p className="text-white max-w-4xl md:text-xl text-base -mt-1">
            Botswana isn&apos;t just a place you visit, it&apos;s an experience
            you live. Dive into Botswana&apos;s culture, heritage, and hidden
            gems. Explore ancient heritage sites, vibrant festivals, wildlife
            rich wetlands, immense salt pans, desert landscapes, and historical
            landmarks that tell Botswana&apos;s story.
          </p>

          <DownloadAppButton
            text="Start Exploring Botswana"
            maxWidth="max-w-[340px]"
          />
        </article>

        <div className="absolute h-full w-full top-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    className="object-cover"
                    alt={slide.location}
                    fill
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute transition-all ease-in-out bottom-6 md:left-15 left-4 z-20 flex items-center gap-2 bg-[#433F38] backdrop-blur-sm px-6 py-3 mb-2 rounded-lg">
          <MapPin className="md:w-10 md:h-10 text-white" />
          <span className="text-white font-medium md:text-2xl">
            {heroSlides[activeIndex].location}
          </span>
        </div>
      </section>

      <MaxWidthWrapper className="py-12 px-4 md:px-8">
        <header className="text-center mb-8">
            <span className="text-sm text-[#6DA9D2] uppercase tracking-wider font-semibold">Cultural Experiences</span>
          <h4 className="text-4xl md:text-6xl font-semibold mb-6 mt-4 text-[#005A8D]">
            Diverse Cultures, <br /> <span className="text-[#7891A1]">
              Timeless Traditions
            </span>
          </h4>
          <p className="text-[#7891A1] max-w-2xl mx-auto">
            From San dance and storytelling in Ghanzi to Bakwena celebrations
            in Molepolole and Kalanga heritage in the North East, Botswana&apos;s
            traditions remain proudly alive.
          </p>
        </header>

      

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {adventure.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[1.5/1] md:aspect-[1/1.3] w-full rounded-xl overflow-hidden"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
              <article className="bg-gradient-to-b text-lg from-[#111111]/0 via-[#111111]/50 to-[#111111]/80 h-full
              w-full relative z-10 text-white flex flex-col justify-end p-6">
               <span className="text-sm uppercase tracking-wider">{item.state}</span>
                <h4 className="font-medium text-2xl">{item.title}</h4>
                <p>{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Holiday Destinations Section */}
      <MaxWidthWrapper className="py-16 px-4 md:px-8">
        <header className="text-center mb-12">
          <span className="text-sm text-[#6DA9D2] uppercase tracking-wider font-semibold">Top Destinations</span>
          <h4 className="text-4xl md:text-5xl font-semibold mt-4 text-[#005A8D]">
            Holiday Destinations
          </h4>
        </header>

        <div className="grid md:grid-cols-2 md:h-[90vh] gap-6">
          {/* Large Featured Card */}
          <div className="relative rounded-3xl aspect-[1.5/1] md:aspect-auto overflow-hidden group cursor-pointer">
            <Image
              src={holidayDestinations[0].imageUrl}
              alt={holidayDestinations[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              {holidayDestinations[0].tag && (
                <span className="mb-3 inline-block w-fit rounded-xl border border-[#E8C84A]/60 bg-[#F7EDBE] p-1 px-3 text-sm font-semibold text-[#5B4A0A] shadow-sm">
                  {holidayDestinations[0].tag}
                </span>
              )}
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">{holidayDestinations[0].title}</h3>
              <p className="text-sm md:text-base opacity-90">{holidayDestinations[0].location}</p>
            </div>
          </div>

          {/* Smaller Cards */}
          <div className="grid grid-rows-2 h-full gap-6">
            {holidayDestinations.slice(1).map((destination, idx) => (
              <div
                key={idx}
                className="relative h-full aspect-[1.5/1] md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={destination.imageUrl}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-3xl font-semibold mb-1">{destination.title}</h3>
                  <p className="text-sm opacity-90">{destination.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Historical Monuments Section */}
      <section className="bg-[#F5F5F5] py-16">
        <MaxWidthWrapper className="px-4 md:px-8">
          <header className="text-center mb-12">
            <span className="text-sm text-[#6DA9D2] uppercase tracking-wider font-semibold">Historical Landmarks</span>
            <h4 className="text-4xl md:text-5xl font-semibold mt-4 text-[#005A8D]">
              Explore Historical monuments
            </h4>
          </header>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {historicalMonuments.map((monument, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative aspect-square md:aspect-[1.3/1] rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={monument.imageUrl}
                    alt={monument.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="text-xs uppercase tracking-wider opacity-80 block mb-1">
                      {monument.location}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{monument.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {monument.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </MaxWidthWrapper>
      </section>

   

      <CtaPhone />
    </div>
  );
};

export default TourismPage;
