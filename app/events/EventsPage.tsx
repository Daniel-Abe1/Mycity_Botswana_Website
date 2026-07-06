"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  SearchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/inputs/TextInput";
import CustomDropdown from "@/components/ui/inputs/Dropdown";
import EventCard from "@/components/EventCard";
import { fetchAllDiscoveries } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { statesData } from "@/lib/statesData";
import { format } from "date-fns";
import EventListingFormModal from "@/components/EventListingFormModal";

const ITEMS_PER_PAGE = 9;

interface SliderBannerProps {
  image?: string;
  tag?: string;
  date?: string;
  title?: string;
  description?: string;
  buttonLink?: string;
  buttonText?: string;
}

const SliderBanner = ({
  image,
  tag,
  date,
  title,
  description,
  buttonLink,
  buttonText,
}: SliderBannerProps) => {
  return (
    <div className="w-full lg:aspect-[2.3/1] md:rounded-3xl relative overflow-hidden">
      {!!image && (
        <Image src={image} alt="slider" fill className="object-cover" />
      )}

      <div className="absolute inset-0 bg-linear-to-l from-[#0F202200] to-[#0F2022] " />

      {/* Gradient overlay */}
      <div className="relative z-20 flex h-full flex-col justify-center p-8 py-12 md:py-10">
        {tag && (
          <span className="w-fit rounded-xl border border-[#E8C84A]/60 bg-[#F7EDBE] p-1 px-3 text-sm font-semibold text-[#5B4A0A] shadow-sm">
            {tag}
          </span>
        )}

        <article className="mt-7 flex w-full max-w-[612px] flex-col gap-5 text-white">
          {date && (
            <p className="text-sm flex gap-1.5 items-center">
              <Calendar size={16} /> {!!date ? format(date, "do MMM, yyyy") : 'N/A'}
            </p>
          )}

          {title && <h2 className="text-4xl inter font-semibold">{title}</h2>}

          {description && (
            <div className="line-clamp-5 max-w-[512px] md:line-clamp-6">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <span className="mb-2 block last:mb-0">{children}</span>
                  ),
                  a: ({ children, ...props }) => (
                    <a {...props} className="underline">
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-inside list-disc">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-inside list-decimal">{children}</ol>
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            </div>
          )}

          {buttonLink && (
            <Link
              href={buttonLink || "/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full max-w-[172px] bg-[#E8C84A] hover:bg-[#D4B338] font-medium self-start px-5 p-3 mt-3 md:mt-1 rounded-full text-black shadow-[0_10px_25px_rgba(232,200,74,0.24)] transition-all hover:-translate-y-0.5"
            >
              {buttonText}
            </Link>
          )}
        </article>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("ALL");
  const [showEventForm, setShowEventForm] = useState(false);

  const { data: eventData, isLoading: isLoadingDiscoveries } = useQuery<{
    discoveries: Discover[];
    count: number;
  }>({
    queryKey: ["events", selectedState],
    queryFn: () =>
      fetchAllDiscoveries({
        location: selectedState,
        categoryName: "EVENTS"
      }),
  });

  const { data: featuredEventData, isLoading: isLoadingFeatured } = useQuery<{
    discoveries: Discover[];
    count: number;
  }>({
    queryKey: ["featured-events"],
    queryFn: () => fetchAllDiscoveries({ filterBy: "isFeatured", categoryName: "EVENTS" }),
  });

  const stateOptions = useMemo(() => {
    const states = Object.values(statesData).map((state) => ({
      label: state.shortName,
      value: state.eventSlug,
    }));

    // Add Gaborone to the beginning
    return [{ label: "All Districts", value: "ALL" }, { label: "Gaborone", value: "Gaborone" }, ...states];
  }, []);

  const paginatedData = useMemo(() => {
    if (!eventData?.discoveries) return { items: [], hasMore: false, total: 0 };

    const items = eventData.discoveries.slice(0, itemsToShow);
    const hasMore = itemsToShow < eventData.discoveries.length;

    return { items, hasMore, total: eventData.discoveries.length };
  }, [eventData, itemsToShow]);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="lg:pt-24">
      <MaxWidthWrapper className="mt-16 mb-13.5 flex flex-col items-center justify-center text-center lg:mt-22">
        <h5 className="mb-4 text-3xl font-semibold text-[#005A8D] inter md:text-[2.7rem] md:leading-10">
          Buy Tickets on MyCityApp Africa
        </h5>

        <p className="max-w-[820px] leading-7.5 text-lg font-normal text-[#444545]">
          <span className="mb-0.5 inline-block font-semibold inter text-[#005A8D]">
            Your Pass to the Best of Botswana.
          </span>
          <br />
          From concerts, networking events, parties, popups, art festivals,
          parties, cultural tours and lots more! MyCityApp Africa is your one-stop hub
          for discovering and booking tickets to Botswana’s hottest events.
        </p>

        <div className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="[&>div>div]:rounded-xl [&>div>div]:border-[#AAADAC] [&>div>div]:shadow-none [&_input]:rounded-xl [&_input]:text-center">
            <TextInput
              startAdornment={
                <span className="">
                  <SearchIcon size={17} />
                </span>
              }
              name="search-events"
              placeholder="Search Events"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative">
            <MapPin
              size={17}
              className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[#667085]"
            />
            <CustomDropdown
              value={selectedState}
              onChange={(val) => setSelectedState(val)}
              options={stateOptions}
              placeholder="Select District"
              className="relative h-10 rounded-xl border-[#AAADAC] pl-10 shadow-none [&>span]:absolute [&>span]:inset-x-0 [&>span]:text-center"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      {!isLoadingFeatured &&
        featuredEventData &&
        featuredEventData.count > 0 && (
          <MaxWidthWrapper className="p-0 md:px-3">
            <section className="w-full my-4 text-left">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay
                pagination={{ clickable: true }}
                className="events-slider"
                loop={true}
              >
                {featuredEventData.discoveries.map((event) => (
                  <SwiperSlide key={event.id}>
                    <SliderBanner
                      tag="Featured Event"
                      date={event.startDate}
                      title={event.name}
                      buttonText="Get Tickets Now"
                      buttonLink={event.eventPlatforms?.[0]?.purchaseLink}
                      description={event.about || ""}
                      image={event.coverImageUrl || "/img/creeper.png"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </MaxWidthWrapper>
        )}

      {/* Ember to Remember CTA */}
      {/* <MaxWidthWrapper
        id="ember-to-remember"
        className="relative my-16 grid scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#6DA9D2]/35 bg-[#F8FCFF] p-0 shadow-[0_24px_70px_rgba(0,90,141,0.14)] lg:grid-cols-[0.7fr_1.3fr]"
      >
        <div className="relative flex min-h-64 items-center overflow-hidden bg-gradient-to-br from-[#043F5E] via-[#075F87] to-[#6DA9D2] px-8 py-12 text-white md:px-12">
          <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full border-[38px] border-white/7" />
          <div className="absolute -bottom-20 -right-12 h-44 w-44 rounded-full bg-[#E8C84A]/25 blur-2xl" />

          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <PartyPopper size={24} />
            </span>
            <div className="mt-5 flex items-end gap-3">
              <strong className="text-7xl font-semibold leading-none md:text-8xl">
                100
              </strong>
              <span className="pb-2 text-lg font-medium leading-tight text-white/80">
                days of
                <br />
                experiences
              </span>
            </div>
            <p className="mt-4 font-medium text-white/75">
              Celebrating moments across Botswana
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center px-7 py-12 md:px-12 lg:py-14">
          <div className="absolute right-8 top-8 hidden text-[#6DA9D2]/20 md:block">
            <PartyPopper size={84} strokeWidth={1.2} />
          </div>

          <span className="w-fit rounded-full bg-[#D6E9F5] px-4 py-2 text-xs font-bold tracking-[0.14em] text-[#005A8D]">
            EMBER TO REMEMBER 2026
          </span>
          <h3 className="relative mt-5 max-w-xl text-3xl font-semibold leading-tight text-[#063B56] inter md:text-4xl">
            Your event belongs on Botswana’s must-do list.
          </h3>
          <p className="relative mt-4 max-w-xl text-lg leading-7 text-[#667085]">
            Hosting a concert, festival, food experience, cultural gathering
            or community event? Apply to be featured on MyCityApp Africa.
          </p>

          <button
            onClick={() => setShowEventForm(true)}
            className="mt-7 flex w-fit cursor-pointer items-center gap-3 rounded-full bg-[#E8C84A] px-7 py-3.5 font-semibold text-[#111111] shadow-[0_10px_25px_rgba(232,200,74,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#D4B338]"
          >
            List Your Event
            <ArrowUpRight size={19} />
          </button>
        </div>
      </MaxWidthWrapper> */}

      <MaxWidthWrapper className="my-16 flex flex-col gap-3">
        <h3 className="md:text-2xl text-[#005A8D] font-semibold inter mb-4">
          Upcoming Events
        </h3>

        {isLoadingDiscoveries && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#005A8D] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!isLoadingDiscoveries && eventData && eventData.count > 0 && (
          <>
            <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-6">
              {paginatedData.items.map((item) => (
                <EventCard
                  key={item.id}
                  title={item.name}
                  address={item.location}
                  startTime={item.startTime}
                  date={item.startDate}
                  endDate={item.endDate}
                  endTime={item.endTime}
                  image={item.coverImageUrl || "/img/event-card.png"}
                />
              ))}
            </section>

            {paginatedData.hasMore && (
              <Button
                variant={"outline"}
                onClick={handleLoadMore}
                className="text-[#005A8D] font-semibold cursor-pointer my-12 h-12 self-center w-full border border-[#005A8D] max-w-[245px]"
              >
                Load More Events
              </Button>
            )}
          </>
        )}

        {!isLoadingDiscoveries && (!eventData || eventData.count === 0) && (
          <div className="text-center py-10 text-gray-500">
            No events found.
          </div>
        )}
      </MaxWidthWrapper>

   
      {/* Event Listing Form Modal */}
      {showEventForm && (
        <EventListingFormModal onClose={() => setShowEventForm(false)} />
      )}

      <section className="relative">
        <Image
          src={"/img/event-cta-bg.jpg"}
          fill
          className="object-cover"
          alt="download app"
        />
        <div className="bg-[#1E1E1E9C] absolute h-full w-full" />
        <MaxWidthWrapper className="relative z-20 py-32 text-white flex flex-col justify-center items-center gap-4">
          <h5 className="text-5xl inter font-semibold">Ready to Book?</h5>
          <p className="text-3xl">Download MyCityApp Africa Now</p>

          <div className="flex justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/mycityapp-africa/id6761128523"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 aspect-2/1 relative"
            >
              <Image
                src={"/img/apple store.svg"}
                fill
                className="object-contain"
                alt="app store"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=ng.mtn.mycityapp.bw"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 aspect-2/1 relative"
            >
              <Image
                src={"/img/play store.svg"}
                fill
                className="object-contain"
                alt="play store"
              />
            </a>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default EventsPage;
