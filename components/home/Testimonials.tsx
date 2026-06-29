"use client";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "I booked an Airbnb through MyLagosApp for my cousins visiting from the US, and the process was incredibly smooth. The apartment was exactly what we needed, clean, stylish, and in a great location. I'm so relieved everything worked out perfectly. Thank you, MyLagosApp!",
    name: "Nonye",
    role: "App User",
    rating: 5,
  },
  {
    id: 2,
    text: "As someone that appreciates moving at my own pace in this busy city, this was a good download, it has helped me move around Lagos and access to everything I am looking for.",
    name: "Favvykamas",
    role: "App User",
    rating: 5,
  },
  {
    id: 3,
    text: "Got My First Business Order from MyLagosApp",
    name: "Unknown",
    role: "Business Owner",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <MaxWidthWrapper>
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#014339] mb-12 md:mb-16">
          Real Experiences from Real Users
        </h2>

        <div className="bg-[#F5F5F5] rounded-3xl px-6 md:px-16 py-12 md:py-20 min-h-[400px] flex flex-col items-center justify-center testimonials-swiper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet testimonial-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active testimonial-bullet-active",
            }}
            loop={true}
            className="w-full max-w-4xl"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="text-center pb-16">
                  <p className="text-xl md:text-3xl text-[#1A1A1A] leading-relaxed mb-8 md:mb-12">
                    {testimonial.text}
                  </p>

                  <div className="flex flex-col items-center gap-3">
                    <h4 className="text-lg md:text-xl font-semibold text-[#1A1A1A]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#999999]">
                      {testimonial.role}
                    </p>

                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#F9C600] text-[#F9C600]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthWrapper>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0;
        }
        
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background: #CCCCCC;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .testimonial-bullet-active {
          width: 32px;
          background: #1A1A1A;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
