"use client";
import React from "react";
import DownloadAppButton from "../DownloadAppButton";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="h-[100dvh] md:h-[90dvh] relative overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
        src="https://cdn-mycityapp.mtn.ng/mycityapp.micro.discovery/Discoveries/website/website/20260121120929-100363cb.mp4"
        // src="/video/hero-video.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay and content */}
      <section className="relative h-full bg-[#0B0B0B99] flex flex-col gap-3 justify-center items-center text-white text-center px-4">
        <p className="text-base p-2 mb-1 font-semibold rounded-full bg-[#005A8D] -mt-4">
          One app, every Botswana city, zero stress.
        </p>

        <h2 className="text-5xl md:text-[4.4rem] tracking-normal font-inter font-bold">
          The app that knows Botswana
        </h2>

        <p className="max-w-2xl mx-auto mt-2 mb-4 text-xl">
          From events and news to traffic, emergencies, jobs, and bills,
          MyCityApp Africa connects you to everything that matters in your city.
        </p>

        <article className="flex flex-col md:flex-row gap-4 items-center mt-4 w-full justify-center">
          <DownloadAppButton />
          <Button
            variant="outline"
            className="bg-transparent tracking-wide font-semibold max-w-[200px] h-16 px-4 w-full text-lg"
            onClick={() => router.push("/features")}
          >
            Explore Features
          </Button>
        </article>
      </section>
    </div>
  );
};

export default Hero;
