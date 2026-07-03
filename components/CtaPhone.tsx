import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import DownloadAppButton from "./DownloadAppButton";
import Image from "next/image";

const CtaPhone = () => {
  return (
    <div className="relative">
      <Image
        src={"/img/cta-phone-bg.png"}
        fill
        alt="cta bg"
        className="object-cover object-center"
      />

      <MaxWidthWrapper className="grid md:grid-cols-[1fr_550px] relative z-20 pt-8">
        <article className="flex flex-col justify-center">
          <h4 className="font-medium md:text-2xl pt-6 md:pt-0">
            Ready to Experience your city Smarter?
          </h4>
          <h3 className="inter text-2xl md:text-4xl font-bold text-[#292929] mb-3 md:mb-6">
            Download MyCityApp Africa Now
          </h3>
          <DownloadAppButton />
        </article>

        <article className="flex items-end justify-center">
          <div className="relative w-[80%] aspect-square md:aspect-[1.18/1]">
            <Image
              src={"/img/cta-phone.png"}
              fill
              alt="download app"
              className="object-cover object-center"
            />
          </div>
        </article>
      </MaxWidthWrapper>
    </div>
  );
};

export default CtaPhone;
