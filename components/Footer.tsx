import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import MaxWidthWrapper from "./MaxWidthWrapper";

const socials = [
  { name: "Twitter", icon: <FaTwitter />, href: "#" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "#" },
];

const sitemap = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "About Us", href: "/about-us" },
  { name: "Districts", href: "/districts" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Events", href: "/events" },
  { name: "Tourism", href: "/tourism" },
  { name: "Privacy Policy - CityApp Africa", href: "/botswana-privacy-policy" },
  {
    name: "Terms & Conditions - CityApp Africa",
    href: "/botswana-terms-conditions",
  },
  { name: "Contact Us", href: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0B0B] text-[#CCCFCE] px-6 lg:py-20 pb-18 pt-10">
      <MaxWidthWrapper className=" grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10">
        {/* Logo & Socials */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-3/1 w-44">
            <Image
              src={"/img/my-city-white-logo.svg"}
              className="object-contain"
              fill
              alt="logo"
            />
          </div>

          <div className="gap-4 text-xl mt-auto hidden md:flex">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="hover:text-white transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-sm hidden md:block"> © 2026 MyCityApp Africa</p>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] md:gap-8 gap-8">
          <article className="md:col-span-1">
            <h3 className="font-medium text-white mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@mycityappbw.com">info@mycityappbw.com</a>
              </li>
              <li>
                <a href="tel:+26772863551">(+267) 72 863 551</a>
              </li>
              <li>
                <a href="tel:+26774453004">(+267) 74 45 3004</a>
              </li>
            </ul>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_0.5fr] lg:gap-12 gap-8">
            <article>
              <h3 className="font-medium text-white mb-3">Sitemap</h3>
              <ul className="space-y-3 grid grid-cols-2 text-sm">
                {sitemap.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h3 className="font-medium text-white mb-3">Socials</h3>
              <ul className="space-y-3 text-sm">
                {socials.map((item) => (
                  <li key={item.name}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <section className="md:hidden">
          <div className="flex gap-4 text-xl mb-4">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="hover:text-white transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-sm"> © 2026 MyCityApp Africa</p>
        </section>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
