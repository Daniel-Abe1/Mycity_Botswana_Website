"use client";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
// import { PiToolbox } from "react-icons/pi";
import { SearchIcon } from "lucide-react";
import TextInput from "@/components/ui/inputs/TextInput";
import CtaPhone from "@/components/CtaPhone";
import ContactUsForm from "@/components/ContactUsForm";
import FaqSection from "@/components/FaqSection";

const FaqsPage = () => {
  return (
    <div>
      <section className="py-10 relative h-full md:h-[70dvh] bg-[#01221D] flex flex-col gap-5 justify-center text-center items-center">
        <h4 className="text-3xl max-w-[250px] md:max-w-none md:text-4xl text-white font-semibold inter">
          Frequently Asked Questions
        </h4>

        <p className="text-[#EAECF0]">Have questions? We’re here to help.</p>

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

        <div className="hidden md:block absolute h-[50%] lg:h-[80%] aspect-square bottom-0 left-0">
          <article className="relative h-full w-full">
            <Image
              src="/img/bg-spiral2.png"
              alt="image"
              fill
              className="object-contain "
            />
          </article>
        </div>

        <div className="hidden md:block absolute h-[50%] lg:h-[80%] aspect-square bottom-0 right-0">
          <article className="relative h-full w-full">
            <Image
              src="/img/bg-spiral.png"
              alt="image"
              fill
              className="object-contain "
            />
          </article>
        </div>
      </section>

      <div className="md:my-28 mb-12">
        <FaqSection />
      </div>

      <ContactUsForm />

      <CtaPhone />
    </div>
  );
};

export default FaqsPage;
