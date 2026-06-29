import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import DownloadAppButton from "./DownloadAppButton";
import Image from "next/image";

const CtaHand = () => {
  return (
    <div className="mt-10 relative">
      <Image
        src={"/img/cta-phone-bg.png"}
        fill
        alt="cta bg"
        className="object-cover object-center"
      />

      <MaxWidthWrapper className="grid gap-10 md:gap-0 md:grid-cols-[1fr_550px]">
        <article className="flex flex-col justify-center relative z-20">
          <h4 className="font-medium md:text-2xl pt-6 md:pt-0">
            Ready to Experience your city Smarter?
          </h4>
          <h3 className="inter text-2xl md:text-4xl font-bold text-[#292929] mb-3 md:mb-6">
            Download MyCityApp Now
          </h3>
          <DownloadAppButton />
        </article>

        <article className="relative aspect-square md:aspect-[1.18/1]">
          <Image
            src={"/img/hand_with_phone.png"}
            fill
            alt="download app"
            className="object-contain"
          />
        </article>
      </MaxWidthWrapper>
    </div>
  );
};

export default CtaHand;
