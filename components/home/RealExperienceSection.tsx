import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const users = [
  {
    name: "Nonye",
    image: "/img/real-users/nonye.png",
    desc: "Find stores, vendors, artisans, handymen, salons, and verified businesses near you in seconds.",
  },
  {
    name: "Richard",
    image: "/img/real-users/richard.jpg",
    desc: "Stay ahead of the traffic. Check updates around Elegushi Beach, Lekki Phase 1, and nearby roads.",
  },
  {
    name: "Shakira",
    image: "/img/real-users/shakira.png",
    desc: "Heavy gridlock due to a broken-down truck blocking two lanes. No movement for over 30 minutes.",
  },
];

const RealExperienceSection = () => {
  return (
    <div className="py-20">
      <MaxWidthWrapper>
        <h4 className="text-center inter text-4xl mb-12 font-semibold text-[#014239]">
          Real Experience from Real Users
        </h4>

        <section className="flex flex-col md:flex-row gap-6">
          {users.map((item) => (
            <div
              key={item.name}
              className="
                w-full h-[300px] md:h-[500px] rounded-2xl group relative md:flex-1 
                md:hover:flex-[2] overflow-hidden
                transition-all duration-500 ease-in-out
              "
            >
              {/* Background image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="
                  object-cover object-top 
                  scale-[1.1] 
                  group-hover:scale-[1.05]
                  transition-transform duration-700 ease-in-out
                "
              />

              {/* Overlay for readability */}
              <div
                className="inset-0  bg-gradient-to-b from-white/0 to-black/70
                  group-hover:bg-black/20 flex flex-col p-8 justify-end
                  transition-all duration-500 ease-in-out text-white z-30 relative h-full
                "
              >
                <h3 className="text-[2rem] font-medium mb-2 md:mb-0 group-hover:mb-2 inter">
                  {item.name}
                </h3>

                {/* Description below name — slides in on hover */}
                <p
                  className="min-w-[15rem] max-w-[30rem] overflow-clip md:hidden group-hover:block
                    text-base md:opacity-0 md:translate-y-3
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-700 ease-out
                  "
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default RealExperienceSection;
