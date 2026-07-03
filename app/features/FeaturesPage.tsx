"use client";

import CtaHand from "@/components/CtaHand";
import DownloadAppModal from "@/components/DownloadAppModal";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useDownloadModal } from "@/lib/stores/download-modal-store";
import Image from "next/image";
import React, { ReactNode } from "react";

const Card = ({
  type,
  title,
  desc,
  src,
  active,
  heading,
}: {
  type?: "video" | "image";
  title: string;
  desc: string;
  src?: string;
  heading?: ReactNode;
  active?: boolean;
}) => {
  const stroke = active ? "white" : "black";

  return (
    <article
      className={`${
        active ? "bg-[#005A8D] text-white" : "text-[#666867]"
      } border border-[#CCCFCE] space-y-3 p-5 rounded-3xl pb-16`}
    >
      <div
        className={`h-[237px] w-full relative ${
          active ? "bg-[#145F86]" : "bg-[#f5f5f5]"
        } rounded-2xl`}
      >
        {!!heading ? (
          heading
        ) : type === "video" ? (
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            src={src}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image src={src || ""} alt={""} fill className="object-cover" />
        )}
      </div>

      <span
        className={`h-9 w-9 grid place-items-center rounded-full 
            ${active ? "bg-[#145F86]" : "bg-[#F7F7F7]"} `}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H21"
            stroke={stroke}
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 1H19V11.27C19 12.61 19 13.279 18.732 13.87C18.464 14.46 17.959 14.9 16.951 15.782L14.951 17.531C13.068 19.177 12.127 20 11 20C9.873 20 8.932 19.177 7.049 17.53L5.049 15.782C4.04 14.9 3.536 14.46 3.269 13.87C3 13.28 3 12.61 3 11.27V1Z"
            stroke={stroke}
            stroke-width="1.5"
          />
          <path
            d="M7.5 12H14.5M7.5 7H14.5"
            stroke={stroke}
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </span>

      <h4
        className={`inter font-semibold ${
          active ? "text-white" : "text-[#292929]"
        }  text-2xl`}
      >
        {title}
      </h4>
      <p className=" font-medium">{desc}</p>
    </article>
  );
};

const FeaturesPage = () => {
  const { openDownloadModal } = useDownloadModal();
  return (
    <div className="bg-[#F5F9FC] md:pt-28">
      <MaxWidthWrapper className="-my-5 md:my-2">
        <section className="py-20 text-center space-y-4">
          <h4 className="inter mb-10 text-3xl md:text-5xl font-bold md:leading-14 text-[#1B5878]">
            Everything you need to explore <br />
            Botswana’s cities in one app.
          </h4>

          <p className="max-w-[800px] mx-auto md:text-xl">
            From Lagos to Abuja and other top cities in Botswana, MyCityApp Africa makes
            your city <br />
            experience easier and smarter.
          </p>
        </section>

        <section className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Card
              title={"Navigation & Discovery"}
              desc={
                "Route feature that gives you access to a smart map and directions across Botswana. Find Hotels/AirBnbs, Restaurants, Top spots in your city, Family fun places and historical landmarks and places to visit."
              }
              heading={
                <div className="h-full w-full relative">
                  <Image
                    src={"/img/mycity-map.svg"}
                    fill
                    alt={""}
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-[10%] md:right-[30%] h-[88%] aspect-[1/1]">
                    <div className="relative h-full w-full">
                      <Image
                        src="/img/features-nav.svg"
                        alt="features nav"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              }
            />

            <Card
              title={"Utility & Government Services"}
              desc={
                "Access essential services in your city, from public utilities to government portals, all in one convenient app."
              }
              type="image"
              src="/img/real-users/richard.jpg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Card
              title={"Businesses Near You"}
              desc={
                "Find stores, vendors, artisans, handymen and salons and verified businesses near you in seconds."
              }
              heading={
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[88%] aspect-[1/1]">
                  <div className="relative h-full w-full">
                    <Image
                      src="/img/features-nav.svg"
                      alt="features nav"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              }
            />

            <Card
              title={"Shopping"}
              desc={
                "Shop from the top brands and stores in Botswana, explore malls, boutiques, markets, and online stores for fashion, lifestyle, and everyday essentials."
              }
              heading={
                <div className="p-3 relative h-full w-full overflow-hidden">
                  <video
                    className="absolute inset-0 w-full h-full object-cover scale-[1]"
                    src={"/video/Shopping.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              }
            />

            <Card
              title={"City Updates"}
              desc={
                "Stay ahead with real-time news, traffic alerts, and trending city updates that keep you connected to what’s happening now."
              }
              heading={
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[88%] aspect-[1/1]">
                  <div className="relative h-full w-full">
                    <Image
                      src="/img/features-nav.svg"
                      alt="features nav"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              }
              active
            />
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-5">
            <Card
              title={"Embassy"}
              desc={
                "MyCityApp Africa’s Embassy hub is your complete guide to all embassies and consulates across Botswana. Whether you need contact information, office addresses, or essential details about visa processing and consular services, it’s all in one place. From major capitals to smaller cities, this feature ensures you have easy access to accurate, up-to-date embassy details anytime you need them."
              }
              heading={
                <div className="h-full w-full relative bg-[#F5F5F5] rounded-2xl">
                  <Image
                    src={"/img/features/embassy.png"}
                    fill
                    alt={""}
                    className="object-cover"
                  />
                </div>
              }
              active
            />

            <Card
              title={"Bill Payments"}
              desc={
                "Pay electricity bills, renew cable TV subscriptions, and even recharge airtime or data directly from MyCityApp Africa. Fast, secure, and stress-free."
              }
              heading={
                <div className="h-full w-full relative bg-[#F5F5F5] rounded-2xl">
                  <Image
                    src={"/img/bill-payment.svg"}
                    fill
                    alt={""}
                    className="object-contain"
                  />
                </div>
              }
            />
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <Card
              title={"Jobs"}
              desc={
                "Find the best jobs in your city or hire top local talent fast. Browse verified job listings, from entry-level to professional roles, and get instant notifications for new opportunities. MyCityApp Africa connects job seekers with recruiters, making it easier than ever to apply, hire, and grow careers locally."
              }
              heading={
                <div className="h-full w-full relative bg-[#F5F5F5] rounded-2xl">
                  <Image
                    src={"/img/features/jobs.png"}
                    fill
                    alt={""}
                    className="object-contain"
                  />
                </div>
              }
            />
            <Card
              title={"Immigration"}
              desc={
                "Plan your travels with ease. Access up-to-date immigration information and visa requirements. Whether you’re applying for a passport, visa, or other travel documents, MyCityApp Africa helps you get details for the process quickly "
              }
              heading={
                <div className="h-full w-full relative bg-[#F5F5F5] rounded-2xl">
                  <Image
                    src={"/img/features/immigration.png"}
                    fill
                    alt={""}
                    className="object-cover"
                  />
                </div>
              }
            />
            <Card
              title={"Events & Tourism"}
              desc={
                "Never miss out again. Discover networking events, concerts, festivals, parties, exhibitions, and explore Botswana’s top tourist attractions and hidden gems."
              }
              type="video"
              src="/video/events-tourism.mp4"
              active
            />
          </div>

          <div className="grid gap-5 md:grid-cols-[2fr_1fr]">
            <Card
              title={"Emergency Services"}
              desc={
                "Stay safe in your city, get instant access to police hotlines, hospitals near you, ambulance services, and fire rescue stations contacts."
              }
              heading={
                <div className="h-full w-full relative p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={"/img/features/emergency-services.jpg"}
                      fill
                      alt={""}
                      className="object-cover object-[50%_20%]"
                    />
                  </div>
                </div>
              }
            />

            <div className="border border-[#CCCFCE] flex flex-col text-center justify-center items-center gap-2 p-5 rounded-3xl">
              <div className="w-[150px] md:w-[200px] relative aspect-square mb-4">
                <Image
                  src={"/img/logo-large.svg"}
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h6 className="inter font-semibold text-xl text-[#292929]">
                Download MyCityApp Africa Now
              </h6>

              <p className="text-[#666867] px-3 mb-3">
                Get the app on iOS and Android today and start navigating Botswana
                like an expert
              </p>

              <Button
                className="w-full max-w-[120px] font-semibold cursor-pointer"
                onClick={openDownloadModal}
              >
                Get the app
              </Button>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      <DownloadAppModal />
      <CtaHand />
    </div>
  );
};

export default FeaturesPage;
