import React from 'react'
import DistrictTemplatePage from './DistrictTemplatePage'

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  
  return (
    <DistrictTemplatePage slug={slug} />
  )
}

export default page
