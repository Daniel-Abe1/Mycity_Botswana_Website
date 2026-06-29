import React from 'react'
import StateTemplatePage from './StateTemplatePage'

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  
  return (
    <StateTemplatePage slug={slug} />
  )
}

export default page