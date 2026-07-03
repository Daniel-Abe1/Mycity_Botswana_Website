'use client'
import CityEventSection from '@/components/CityEventSection'
import CtaPhone from '@/components/CtaPhone'
import DownloadAppButton from '@/components/DownloadAppButton'
import DistrictsDiscovery from '@/components/districts/DistrictsDiscovery'
import DistrictsQuickFacts from '@/components/districts/DistrictsQuickFacts'
import Image from 'next/image'
import React from 'react'
import { getStateData } from '@/lib/statesData'
import { notFound } from 'next/navigation'

interface DistrictTemplatePageProps {
  slug: string;
}

const DistrictTemplatePage = ({ slug }: DistrictTemplatePageProps) => {
  const stateData = getStateData(slug);

  if (!stateData) {
    notFound();
  }

  return (
    <div>
      <section className="h-[70dvh] md:h-[95dvh] relative overflow-hidden mb-3">
        <article className="bg-linear-to-b from-black/32 via-black/45 to-black/80 relative z-20 h-full w-full flex gap-2 flex-col justify-center items-center text-center">
          <p className="text-[#E8C84A] tracking-widest text-lg uppercase md:capitalize">{stateData.fullName}</p>
          <h5 className="text-4xl md:text-[4rem] text-[#F5F5F5] tracking-normal max-w-3xl font-inter mb-6 font-bold">
            {stateData.hero.title}
          </h5>
          <DownloadAppButton />
        </article>

        <Image
          src={stateData.hero.imageUrl}
          className="object-cover"
          alt={stateData.hero.title}
          fill
        />
      </section>

      <DistrictsDiscovery 
        description={stateData.discover.description} 
        destinations={stateData.discover.slides}
      />

      <CityEventSection state={stateData.eventSlug} />

      <DistrictsQuickFacts 
        shortName={stateData.shortName} 
        facts={stateData.quickFacts} 
      />

      <CtaPhone />
    </div>
  )
}

export default DistrictTemplatePage
