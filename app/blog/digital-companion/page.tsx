import CtaPhone from "@/components/CtaPhone";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { Send } from "lucide-react";

const DigitalCompanionPage = () => {
  return (
    <main>
      <MaxWidthWrapper className="lg:mt-38 mt-20 mb-12">
        <header className="flex flex-col gap-4 max-w-[768px]">
          <p className="px-3 py-1 text-xs bg-[#EDF1F0]/50 rounded-full font-medium text-[#014339] self-start">
            12 February, 2025 • 3 min read
          </p>
          <h1 className="font-semibold text-[#101828] text-4xl md:text-5xl leading-tight">
            MyCityApp: The Digital Companion for Everyday City Living in Nigeria
          </h1>
          <p className="text-lg text-[#667085] leading-relaxed">
            Every Nigerian city has its own rhythm. The pace of Lagos, the
            structure of Abuja, the energy of Port Harcourt, and the cultural
            depth of Kano all demand different ways of moving, exploring, and
            staying informed. MyCityApp is a Nigerian city lifestyle app built
            to be your digital companion, helping you navigate everyday city
            life with clarity and confidence across Nigeria.
          </p>
        </header>

        {/* <section className="aspect-[2.36/1] relative my-12 rounded-2xl overflow-hidden">
          <Image 
            src={"/img/blog_image_1.png"} 
            alt="MyCityApp Digital Companion" 
            fill 
            className="object-cover"
          />
        </section> */}

        <div className="grid md:grid-cols-[1fr_400px] gap-12 mt-5">
          <article className="max-w-[768px] space-y-8 text-[#344054]">
            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                City Living in Nigeria Comes With Daily Decisions
              </h2>
              <p className="leading-relaxed mb-4">
                Urban life in Nigeria means constantly making decisions: where
                to eat, Which road to take, What is happening nearby, Which
                places are worth your time. In cities like Benin City, Abeokuta,
                and towns across Jeda State, useful information is often
                scattered across social media, radio stations, WhatsApp groups,
                and word of mouth. MyCityApp brings all of this together into
                one smart city app for Nigeria, making everyday city living
                simpler and less stressful.
              </p>
            </section>

            <blockquote className="border-l-4 border-[#FFDF55] px-6 py-4  italic text-2xl text-[#101828]">
              &quot;The first thing MyCityApp helps you do is explore. From
              discovering restaurants and lounges to finding hotels, short lets,
              embassies, and important city locations, the app keeps exploration
              local and relevant.&quot;
            </blockquote>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Explore Your City Like You Belong There
              </h2>
              <p className="font-semibold mb-3">
                The first thing MyCityApp helps you do is explore.
              </p>
              <p className="leading-relaxed mb-4">
                From discovering restaurants and lounges to finding hotels,
                short lets, embassies, and important city locations, the app
                keeps exploration local and relevant. Whether you are looking
                for places to eat in Lagos, hotels in Abuja, new hangout spots
                in Port Harcourt, or places to visit in Abeokuta, MyCityApp
                removes the guesswork from city discovery.
              </p>
              <p className="leading-relaxed">
                This makes it a reliable local city guide for Nigeria,
                especially for people relocating, students, travellers, and
                professionals who move frequently between
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Move Smarter With Real City Awareness
              </h2>
              <p className="leading-relaxed mb-4">
                Navigating a city is not just about places. Timing matters.
              </p>
              <p className="leading-relaxed">
                MyCityApp keeps users informed through real city updates
                including traffic reports, local events, and community
                announcements. Knowing where congestion is building, what events
                are happening nearby, or which areas to avoid helps users plan
                their day better and move with confidence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Everyday Tools That Fit Nigerian City Life
              </h2>
              <p className="leading-relaxed">
                Beyond exploration, MyCityApp supports daily living. Users can
                pay for airtime, data, and TV subscriptions directly within the
                app, making it useful even on days when they are not actively
                exploring. Emergency contacts and essential service information
                are also easy to access, especially for people navigating a new
                city for the first time.
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
                Built for Nigerian Cities, City by City
              </h2>
              <p className="leading-relaxed mb-4">
                MyCityApp is designed for Nigerian cities and built city by
                city. Starting with priority locations like Lagos, Abuja, Port
                Harcourt, Benin City, Abeokuta, Kano, and cities across Abia
                State, the app focuses on relevance, accuracy, and trust.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#101828] mb-4">
                Conclusion
              </h2>
              <p className="leading-relaxed mb-4">
                Cities are easier when you understand how they move. If you want
                a digital companion that helps you explore confidently, move
                smarter, and stay informed every day, visit www.mycityapp.io and
                experience your city differently.
              </p>
            </section>
          </article>

          <aside className="md:sticky md:top-28 h-fit">
            <div className="border-2 border-[#B1BFB7] rounded-2xl p-8">
              <div className="flex items-center justify-center w-12 h-12 bg-[#EDF1F0]/50 rounded-full mb-6">
                <Send className="w-6 h-6 text-[#014339]" />
              </div>

              <h3 className="text-xl font-bold text-[#01221D] mb-2">
                Weekly newsletter
              </h3>
              <p className="text-[#014339] mb-6">
                No spam. Just the latest releases and tips, interesting
                articles, and exclusive interviews in your inbox every week.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#014339] text-sm"
                />
                <p className="text-xs text-[#014339]">
                  Read about our{" "}
                  <a href="#" className="underline">
                    privacy policy
                  </a>
                </p>
                <button
                  type="submit"
                  className="w-full bg-[#014339] text-white py-3 rounded-full font-medium hover:bg-[#013329] transition-colors"
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
