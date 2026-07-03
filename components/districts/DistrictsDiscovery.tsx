'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import { Landmark } from 'lucide-react';

interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
}


interface Props {
  description: string;
  destinations: Destination[]
}



const DistrictsDiscovery: React.FC<Props> = ({description, destinations}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <MaxWidthWrapper className="px-6 py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <div className="w-12 h-1 bg-[#E8C84A] mx-auto mb-4" />
        <h1 className="text-4xl font-semibold mb-3">Discover What Awaits</h1>
        <p className="text-[#7196AD] max-w-xl mx-auto leading-relaxed">
         {description} 
         </p>
      </header>

      {/* Main Carousel Card */}
      <div className="relative group">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="rounded-2xl overflow-hidden"
        >
          {destinations.map((dest) => (
            <SwiperSlide key={dest.id}>
              <div className="relative aspect-square w-full md:aspect-2/1">
                <Image
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover"
                  fill
                />
                {/* Decorative Icon Overlay */}
                <div className="absolute top-6 left-6 bg-white p-2.5 rounded-lg shadow-md text-[#176F9C]">
                   <Landmark />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Section (Changes based on Swiper Index) */}
      <div className="mt-10 transition-all duration-500 ease-in-out lg:w-1/2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-[#B99B20]">{destinations[activeIndex].id}</span>
          <div className="w-12 h-[4px] bg-[#E8C84A]" />
        </div>
        
        <h2 className="text-3xl font-semibold mb-4">
          {destinations[activeIndex].title}
        </h2>
        
        <p className="text-[#5D8EAD] text-sm md:text-base leading-relaxed max-w-2xl min-h-12  line-clamp-3">
          {destinations[activeIndex].description}
        </p>

        {/* Custom Pagination Bars */}
        <div className="flex gap-2 mt-8">
          {destinations.map((_, index) => (
            <div 
              key={index}
              onClick={() => swiperInstance?.slideTo(index)}
              className={`h-1 transition-all duration-300 cursor-pointer hover:bg-[#E8C84A]/70 ${
                index === activeIndex ? 'w-16 bg-[#E8C84A]' : 'w-16 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default DistrictsDiscovery;
