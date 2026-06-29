import CtaPhone from "@/components/CtaPhone";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <section className="h-[70dvh] relative overflow-hidden">
        <article className="bg-[#1E1E1E80] relative z-20 h-full w-full flex gap-4 flex-col justify-center items-center text-center">
          <h5 className="font-semibold inter text-5xl text-white">About Us</h5>

          <Button className="gap-1 font-semibold inter bg-[#FFDF55] text-xl h-14 px-6 mt-4">
            Learn More
          </Button>
        </article>

        {/* <video
          className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
          src="/video/about-us.webm"
          autoPlay
          loop
          muted
          playsInline
        /> */}

        <Image
          src={"/img/about-us-bg.png"}
          alt="about us image"
          className="object-cover"
          fill
        />
      </section>

      <MaxWidthWrapper className="grid md:grid-cols-2 gap-10 md:gap-5 my-10 md:my-20">
        <article className="flex flex-col gap-4">
          <h5 className="inter text-3xl font-bold text-[#101828]">
            Why Choose MyCityApp?
          </h5>
          <p className="text-2xl text-[#014339] font-bold">
            We have helped 1M+ Resident Nigerians and Over 200+ Visiting Diaspora based Nigerians and Tourists explore Nigeria. 
          </p>
        </article>

        <article>
          <p>
            Nigerian cities are more than just they appear in maps. With
            MyCityApp, you don’t just find places, you feel them. From real-time
            navigation that gets you where you’re going, to curated guides that
            help you uncover, to events and experiences you’d otherwise miss,
            transportation services, shopping, access to government services and
            lot’s more,  we make exploring effortless and exciting.
            <br />
            <br />
            Whether you’re new in town or a local looking for something fresh,
            MyCityApp is the friend who knows exactly where to take you.
          </p>
        </article>
      </MaxWidthWrapper>

      <section className="aspect-square md:aspect-[1.5/1] relative overflow-hidden">
        <div className="absolute bg-[#1E1E1E80] h-full w-full z-20" />
        <Image
          src={"/img/about-1.jpg"}
          fill
          alt="about section image"
          className="object-cover"
        />
      </section>

      <section className="pt-20 relative overflow-hidden">
        <Image
          src={"/img/about-us-vector.svg"}
          fill
          alt="download app"
          className="object-cover"
        />

        <MaxWidthWrapper className="grid md:grid-cols-2 gap-10 md:gap-5">
          <article className="flex flex-col gap-2">
            <div className="flex gap-4">
              <span className="bg-[#014339] h-5 w-5 rounded-full"></span>
              <span className="bg-[#014339] h-5 w-5 rounded-full"></span>
              <span className="bg-[#FFEFAA] h-5 w-5 rounded-full"></span>
            </div>
            <p className="font-light inter text-black tracking-wider mt-8 text-sm">
              OUR MISSION
            </p>
            <h4 className="text-2xl md:text-4xl font-semibold inter text-[#1A1A1A]">
              Our mission is to bring every of the corner to your palms
            </h4>
            <p className="text-black">
              At MyCityApp, we are on a mission to make every city in Nigeria
              feel like home,  whether you have lived there for years or you are
              just a tourist visiting for a short stay. We bring every corner of
              the city to your palms, helping you navigate with ease, discover
              hidden gems, and explore the stories that make each city
              unforgettable.
            </p>
          </article>

          <article className="relative aspect-square md:aspect-[1.18/1] ">
            <Image
              src={"/img/hand_with_phone.png"}
              fill
              alt="download app"
              className="object-contain"
            />
          </article>
        </MaxWidthWrapper>

        <section className="bg-[#01221D] py-16 ">
          <MaxWidthWrapper className=" grid md:grid-cols-[1fr_500px] gap-10 relative z-20">
            <article className="flex flex-col text-white gap-5 max-w-[572px]">
              <p className="font-light inter tracking-wider text-sm">
                Our vision
              </p>
              <h4 className="text-2xl md:text-4xl font-semibold inter">
                Our vision is to be your partner for an enjoyable experience
              </h4>
              <p className="">
                To be Nigeria’s most trusted city companion, turning every
                journey into an experience, every street into a story, and every
                city into a place you truly know.{" "}
              </p>
            </article>

            <article className="relative aspect-square md:aspect-[1/1]">
              <Image
                src={"/img/about-grid.png"}
                fill
                alt="download app"
                className="object-contain"
              />
            </article>
          </MaxWidthWrapper>
        </section>
      </section>

      <CtaPhone />
    </div>
  );
};

export default AboutUsPage;
