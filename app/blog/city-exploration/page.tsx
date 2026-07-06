import CtaPhone from "@/components/CtaPhone";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { Send } from "lucide-react";
import Link from "next/link";

const DigitalCompanionPage = () => {
  return (
    <main>
      <MaxWidthWrapper className="lg:mt-38 mt-20 mb-12">
        <header className="flex flex-col gap-4 max-w-[768px]">
          <p className="px-3 py-1 text-xs bg-[#ECF4F9]/50 rounded-full font-medium text-[#005A8D] self-start">
            13 February, 2026 • 3 min read
          </p>
          <h1 className="font-semibold text-[#101828] text-4xl md:text-5xl leading-tight">
            How MyCityApp Africa Is Redefining City Exploration in Botswana
          </h1>
          <p className="text-lg text-[#667085] leading-relaxed">
            Exploring a Botswana city should feel exciting, not confusing. Yet
            for many people, discovering places, navigating movement, and
            staying informed often requires jumping between multiple platforms.
            MyCityApp Africa is redefining city exploration in Botswana by
            bringing discovery, navigation, and everyday city awareness into one
            digital companion. Built for places like Gaborone, Francistown,
            Maun, Kasane, Lobatse, Jwaneng, and Selibe Phikwe, MyCityApp Africa
            helps people explore their cities with confidence.
          </p>
        </header>

        {/* <section className="aspect-[2.36/1] relative my-12 rounded-2xl overflow-hidden">
          <Image 
            src={"/img/blog_image_1.png"} 
            alt="MyCityApp Africa Digital Companion" 
            fill 
            className="object-cover"
          />
        </section> */}

        <div className="grid md:grid-cols-[1fr_400px] gap-12 mt-5">
          <article className="max-w-[768px] space-y-8 text-[#344054]">
            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                City Exploration in Botswana Has Been Fragmented
              </h2>
              <p className="leading-relaxed mb-4">
                In most Botswana cities, discovering where to go depends on who
                you know or where you look. Restaurant recommendations come from
                Instagram. Traffic updates come from the radio. Events are
                shared on WhatsApp. Essential city information is buried in
                search results. This fragmented experience makes city
                exploration stressful, especially for people new to a city or
                constantly on the move. MyCityApp Africa changes this by acting
                as a single point of reference for exploring Botswana cities.
                Instead of guessing or relying on scattered updates, users get
                relevant, local information in one place.
              </p>
            </section>

            <blockquote className="border-l-4 border-[#6DA9D2] px-6 py-4  text-2xl text-[#101828]">
              &quot;MyCityApp Africa is designed to help users explore like
              locals. From restaurants and lounges to hotels, short lets,
              embassies, and important city locations, the app focuses on what
              matters within each city.&quot;
            </blockquote>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Exploration That Feels Local and Intentional
              </h2>
              <p>
                MyCityApp Africa is designed to help users explore like locals.
                From restaurants and lounges to hotels, short lets, embassies,
                and important city locations, the app focuses on what matters
                within each city. Whether someone is looking for places to eat
                in Gaborone, hotels in Maun, cultural experiences in
                Francistown, or new hangout locations in Kasane, MyCityApp
                Africa keeps discovery city specific and practical. This
                local-first approach makes exploration more intentional. Users
                are not overwhelmed with nationwide listings. They see what is
                relevant to where they are.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Navigating Cities With Awareness, Not Guesswork
              </h2>
              <p className="leading-relaxed ">
                Exploring a city is not just about knowing places. It is about
                timing and movement. MyCityApp Africa supports smarter
                navigation through real city updates such as traffic reports,
                community announcements, and local events. Knowing which areas
                are congested, what events are happening nearby, or when certain
                locations are busiest helps users move better through their
                city. In busy urban centres such as Gaborone and Francistown,
                this awareness saves time and reduces daily stress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Everyday Tools That Fit Botswana City Life
              </h2>
              <p className="leading-relaxed">
                Beyond exploration, MyCityApp Africa supports daily living.
                Users can pay for airtime, data, and TV subscriptions directly
                within the app, making it useful even on days when they are not
                actively exploring. Emergency contacts and essential service
                information are also easy to access, especially for people
                navigating a new city for the first time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Designed for Everyday City Living
              </h2>
              <p className="leading-relaxed">
                City exploration does not stop at weekends. MyCityApp Africa
                fits into everyday city life by supporting services like
                airtime, data, and TV subscriptions, alongside easy access to
                emergency contacts and essential information. This makes the app
                useful even when users are not actively exploring new places.
              </p>
            </section>

            <section className="relative aspect-[3/2] w-full">
              <Image
                src={"/img/blog/blog-cta.png"}
                alt="Blog CTA"
                fill
                className="object-contain"
              />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Built City by City Across Botswana
              </h2>
              <p className="leading-relaxed mb-4">
                What truly sets MyCityApp Africa apart is its city by city
                approach. Starting with priority locations such as Gaborone,
                Francistown, Maun, Kasane, Lobatse, Jwaneng, and Selibe Phikwe,
                the platform ensures accuracy, relevance, and trust in every
                location it serves.{" "}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Conclusion
              </h2>
              <p className="leading-relaxed mb-4">
                Exploring Botswana cities should feel simple and empowering. If
                you want to discover places easily, navigate your city smarter,
                and stay informed every day, MyCityApp Africa is redefining how
                city exploration works. Visit{" "}
                <Link
                  href="https://www.mycityapp.io"
                  target="_blank"
                  className="text-[#005681]/[85%]"
                >
                  www.mycityapp.io
                </Link>{" "}
                and experience your city differently.
              </p>
            </section>
          </article>

          <aside className="md:sticky md:top-28 h-fit">
            <div className="border-2 border-[#C0D1DC] rounded-2xl p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-[#ECF4F9]/50 rounded-full mb-6">
                <Send className="w-6 h-6 text-[#005A8D]" />
              </div>

              <h3 className="text-xl font-bold text-[#0B0B0B] mb-2">
                Weekly newsletter
              </h3>
              <p className="text-[#005A8D] mb-6">
                No spam. Just the latest releases and tips, interesting
                articles, and exclusive interviews in your inbox every week.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A8D] text-sm"
                />
                <p className="text-xs text-[#005A8D]">
                  Read about our{" "}
                  <a href="/botswana-privacy-policy" className="underline">
                    privacy policy
                  </a>
                </p>
                <button
                  type="submit"
                  className="w-full bg-[#005A8D] text-white py-3 rounded-full font-medium hover:bg-[#003F63] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </MaxWidthWrapper>

      <CtaPhone />
    </main>
  );
};

export default DigitalCompanionPage;
