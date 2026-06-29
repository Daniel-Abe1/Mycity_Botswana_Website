"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import CtaPhone from "@/components/CtaPhone";
import ContactUsForm from "@/components/ContactUsForm";
import Link from "next/link";

const contactInfo = [
  {
    label: "Email",
    icon: Mail,
    value: (
      <Link href="mailto:admin@mycityapp.io" className="hover:underline">
         admin@mycityapp.io
      </Link>
    ),
    desc: "Our friendly team is here to help.",
  },
  {
    label: "Office",
    icon: MapPin,
    value: <Link href="https://wa.me/qr/DKPLHNMCX7N7J1" className="hover:underline">https://wa.me/qr/DKPLHNMCX7N7J1</Link>,
    desc: "Come say hello at our office HQ.",
  },
  {
    label: "Phone",
    icon: Phone,
    value: (
      <Link href="tel:+2349160006213" className="hover:underline">
        +2349160006213
      </Link>
    ),
    desc: "Mon–Fri from 8am to 5pm.",
  },
  {
    label: "Botswana Email",
    icon: Mail,
    value: (
      <Link href="mailto:info@mycityappbw.com" className="hover:underline">
        info@mycityappbw.com
      </Link>
    ),
    desc: "Contact our Botswana team.",
  },
  {
    label: "Botswana Phone",
    icon: Phone,
    value: (
      <span className="flex flex-col gap-2">
        <Link href="tel:+26772863551" className="hover:underline">
          (+267) 72 863 551
        </Link>
        <Link href="tel:+26774453004" className="hover:underline">
          (+267) 74 45 3004
        </Link>
      </span>
    ),
    desc: "Call our Botswana team.",
  },
];

const ContactUsPage = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-10 md:pb-6 flex flex-col gap-4 items-center mt-10 lg:mb-24 lg:mt-46">
        <p className="font-semibold text-[#014339]">Contact us</p>
        <h4 className="md:text-5xl text-2xl text-[#292929] font-semibold">
          We&apos;d love to hear from you
        </h4>
        <p className="text-lg text-[#666867]">
          Our friendly team is always here to chat.
        </p>

        <article className="grid md:grid-cols-3 gap-5 w-full mt-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col font-medium text-center gap-2 py-12 items-center justify-center"
              >
                <span className="p-2 bg-[#CCD9D7] text-[#01221D] rounded-full border-8 border-[#E8EDEB]">
                  <Icon size={18} />
                </span>
                <p className="text-[#292929] text-lg">{item.label}</p>
                <h5 className="text-[#444545]">{item.desc}</h5>
                <h6 className="text-[#014339] max-w-60 mt-3">{item.value}</h6>
              </div>
            );
          })}
        </article>
      </MaxWidthWrapper>

      <ContactUsForm imageUrl="/img/contact-us.png"/>

      <CtaPhone />
    </div>
  );
};

export default ContactUsPage;
