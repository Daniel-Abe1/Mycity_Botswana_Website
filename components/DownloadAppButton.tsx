"use client";

import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useDownloadModal } from "@/lib/stores/download-modal-store";

const DownloadAppButton = ({
  text = "Download App Now",
  maxWidth = "max-w-[300px]",
}) => {
  const { openDownloadModal } = useDownloadModal();

  return (
    <button
      className={`flex h-16 w-full cursor-pointer ${maxWidth} md:text-xl whitespace-nowrap gap-1 font-semibold items-center justify-center bg-[#FFDF55] hover:bg-[#FFDA00] p-2.5 px-4 text-black rounded-full`}
      onClick={openDownloadModal}
    >
      <span className="pr-1 border-r border-black mr-0.5 py-1">
        <FaApple size={25} />
      </span>
      <IoLogoGooglePlaystore size={25} />
      <span className="ml-0.5">{text}</span>
    </button>
  );
};

export default DownloadAppButton;
