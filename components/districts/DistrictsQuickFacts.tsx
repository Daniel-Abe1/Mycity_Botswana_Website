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

const DistrictsQuickFacts = ({ shortName, facts }: Props) => {
  return (

    <section className='relative overflow-hidden bg-[#0B0B0B] py-20'>
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
              <div className="bg-[#005A8D] text-[#E8F2F8] text-center rounded-2xl p-6 py-8 transition-shadow h-full flex flex-col items-center justify-center">
                <span className="bg-[#0B0B0B80] p-3 rounded-full">{fact.icon}</span>
                <h3 className="text-xl font-semibold mt-3">{fact.title}</h3>
                <p className=" text-sm leading-relaxed text-[#B3C9D8]">
                  {fact.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}


{facts.map((fact, index) => (
              <div key={index} className="group bg-gradient-to-br from-[#006DA8] to-[#003F63] text-[#E8F2F8] text-center rounded-2xl border border-[#6DA9D2]/30 p-6 py-8 shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-1 hover:border-[#E8C84A]/70 h-full flex flex-col items-center justify-center">
                <span className="bg-[#0B0B0B80] p-3 rounded-full ring-1 ring-white/15 transition-colors group-hover:bg-[#E8C84A] group-hover:text-black">{fact.icon}</span>
                <h3 className="text-xl font-semibold mt-3">{fact.title}</h3>
                <p className=" text-sm leading-relaxed text-[#B3C9D8]">
                  {fact.description}
                </p>
              </div>
          ))}
        
      </div>
    </MaxWidthWrapper>

    </section>
    
  )
}

export default DistrictsQuickFacts
