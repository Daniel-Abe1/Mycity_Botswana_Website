"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { HiMapPin } from "react-icons/hi2";

interface CardProps {
  mainImage: string;
  hoverImage: string;
  title: string;
  description: string;
  href?: string;
}

export const CityCard: React.FC<CardProps> = ({
  mainImage,
  hoverImage,
  title,
  description,
  href,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    //  return console.log(href)
    if (href) {
      router.push(href); // navigate
    } else {
      setIsModalOpen(true); // open modal
    }
  };

  const content = (
    <>
      <Image
        src={mainImage}
        alt={title}
        fill
        className="w-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
      />

      <Image
        src={hoverImage}
        alt="hover visual"
        fill
        className="w-full object-cover rounded-md mb-3 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      />

      <div className="absolute flex items-end z-20 p-8 bg-black/50 h-full w-full text-white">
        <h6 className="font-semibold text-4xl group-hover:hidden">{title}</h6>
        <h6 className="font-semibold text-2xl hidden group-hover:flex gap-2 items-center">
          {description}
          <ArrowRight size={17} />
        </h6>
      </div>
    </>
  );

  return (
    <>
      <div
        onClick={handleClick}
        className="relative w-full overflow-hidden aspect-[1.22/1] rounded-2xl cursor-pointer group block transition-transform duration-300 ease-out hover:-translate-y-2"
      >
        {content}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white flex flex-col items-center rounded-lg p-10 relative text-center w-[90vw] max-w-[512px]"
            onClick={(e) => e.stopPropagation()}
          >
            <HiMapPin className="text-[#FFDF55]" size={90} />
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#014239] mt-3">
              We&apos;re Coming Soon to Your City
            </h2>
            <p className="mb-4 text-[#848A8E]">
              We&apos;re working hard to bring our service to your area. In the
              meantime, explore cities where we&apos;re already live!
            </p>

            <div className="grid grid-cols-2 gap-4 mt-5 w-full">
              <button className="w-full aspect-[4.85/1] relative">
                <Image
                  alt="download from app store"
                  src={"/img/app-store-button.svg"}
                  fill
                  className="object-cover"
                />
              </button>
              <button className="w-full aspect-[4.85/1] relative">
                <Image
                  alt="download from play store"
                  src={"/img/play-store-button.svg"}
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
