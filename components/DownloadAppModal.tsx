"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDownloadModal } from "@/lib/stores/download-modal-store";

const DownloadAppModal = () => {
  const { isOpen, closeDownloadModal } = useDownloadModal();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 relative text-center w-[90vw] max-w-[550px]">
        <h2 className="text-2xl font-bold mb-2 text-[#005A8D]">
          Download MyCityApp Africa for free
        </h2>
        <p className="mb-2 text-[#848A8E]">For iOS & Android</p>

        <div className="relative w-full aspect-[2.88/1]">
          <Image
            alt="Download MyCityApp Africa"
            src={"/img/download-app-banner.png"}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-2 mb-8 px-7">
          {/* App Store */}
          <a
            href="https://apps.apple.com/us/app/mycityapp-africa/id6761128523"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-[4.85/1] relative block"
          >
            <Image
              alt="Download on the App Store"
              src={"/img/app-store-button.svg"}
              fill
              className="object-cover"
            />
          </a>

          {/* Play Store */}
          <a
            href="https://play.google.com/store/apps/details?id=ng.mtn.mycityapp.bw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-[4.85/1] relative block"
          >
            <Image
              alt="Get it on Google Play"
              src={"/img/play-store-button.svg"}
              fill
              className="object-cover"
            />
          </a>
        </div>

        <button
          className="absolute top-4 cursor-pointer right-4 text-gray-500 hover:text-gray-800 font-bold"
          onClick={closeDownloadModal}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default DownloadAppModal;
