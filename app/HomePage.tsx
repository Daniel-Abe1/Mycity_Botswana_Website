"use client";
import CtaHand from "@/components/CtaHand";
import FaqSection from "@/components/FaqSection";
import BlogPosts from "@/components/home/BlogPosts";
import Explore from "@/components/home/Explore";
import FeaturesSection from "@/components/home/FeaturesSection";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  return (
    <div>
      <Hero />
      <Explore />
      <FeaturesSection />
      {/* <RealExperienceSection /> */}
      <Testimonials />
      <BlogPosts />
      <section className="mb-24 lg:mt-26 mt-14">
        <header className="mb-1 text-center space-y-4">
          <h4 className="font-semibold text-3xl md:text-5xl text-[#005A8D]">
            Frequently Asked Questions
          </h4>
          <p className="text-[#888A89] text-lg">
            Everything you need to know about the product and billing.
          </p>
        </header>
        <FaqSection />

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/faqs")}
            className="p-3 rounded-full border min-w-[150px] font-semibold border-[#18242C] text-[#18242C]"
          >
            View All FAQs
          </button>
        </div>
      </section>

      <CtaHand />
    </div>
  );
};

export default HomePage;
