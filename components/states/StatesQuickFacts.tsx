'use client'
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import 'swiper/css'
import 'swiper/css/pagination'

interface Props {
  shortName: string;
  facts: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[]
}

const StatesQuickFacts = ({ shortName, facts }: Props) => {
  return (

    <section className='bg-[#01221D] py-20'>
<MaxWidthWrapper className="text-[#F5F5F5] min-h-[300px] flex flex-col justify-center">
             <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">Quick Facts About <span className='whitespace-nowrap'>{shortName}</span></h2>


      <div className="relative grid md:grid-cols-3 gap-5">
        {/* <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-8 "
        >
          {facts.map((fact, index) => (
            <SwiperSlide key={index} className='!h-auto'>
              <div className="bg-[#014339] text-[#EAEFEC] text-center rounded-2xl p-6 py-8 transition-shadow h-full flex flex-col items-center justify-center">
                <span className="bg-[#01221D80] p-3 rounded-full">{fact.icon}</span>
                <h3 className="text-xl font-semibold mt-3">{fact.title}</h3>
                <p className=" text-sm leading-relaxed text-[#A6BAAF]">
                  {fact.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}


{facts.map((fact, index) => (
              <div key={index} className="bg-[#014339] text-[#EAEFEC] text-center rounded-2xl p-6 py-8 transition-shadow h-full flex flex-col items-center justify-center">
                <span className="bg-[#01221D80] p-3 rounded-full">{fact.icon}</span>
                <h3 className="text-xl font-semibold mt-3">{fact.title}</h3>
                <p className=" text-sm leading-relaxed text-[#A6BAAF]">
                  {fact.description}
                </p>
              </div>
          ))}
        
      </div>
    </MaxWidthWrapper>

    </section>
    
  )
}

export default StatesQuickFacts