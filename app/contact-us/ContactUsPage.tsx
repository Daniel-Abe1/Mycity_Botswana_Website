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
      <Link href="mailto:info@mycityappbw.com" className="hover:underline">
        info@mycityappbw.com
      </Link>
    ),
    desc: "Our friendly team is here to help.",
  },
  {
    label: "Office",
    icon: MapPin,
    value: <span>Gaborone, Botswana</span>,
    desc: "Come say hello at our office HQ.",
  },
  {
    label: "Phone",
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
    desc: "Mon–Fri from 8am to 5pm.",
  },
];

const ContactUsPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-[#F8FAFB] via-[#FDFEFE] to-white pt-20 lg:pt-44">
        <MaxWidthWrapper className="flex flex-col items-center gap-4 pb-16 text-center lg:pb-24">
          <p className="font-semibold text-[#005A8D]">Contact us</p>
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
                  <span className="rounded-full bg-[#DCECF5] p-4 text-[#005A8D] shadow-[0_8px_24px_rgba(0,90,141,0.10)]">
                    <Icon size={18} />
                  </span>
                  <p className="text-[#292929] text-lg">{item.label}</p>
                  <h5 className="text-[#444545]">{item.desc}</h5>
                  <h6 className="text-[#005A8D] max-w-60 mt-3">{item.value}</h6>
                </div>
              );
            })}
          </article>
        </MaxWidthWrapper>
      </section>

      <ContactUsForm imageUrl="/img/contact-us.png"/>

      <CtaPhone />
    </div>
  );
};

export default ContactUsPage;
