"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useDownloadModal } from "@/lib/stores/download-modal-store";

const links = [
  { label: "Features", value: "/features" },
  { label: "About Us", value: "/about-us" },
  { label: "Tourism", value: "/tourism" },
  { label: "Events", value: "/events" },
  { label: "Blog", value: "/blog" },
  { label: "FAQs", value: "/faqs" },
  { label: "Contact Us", value: "/contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openDownloadModal } = useDownloadModal();

  return (
    <header className="sticky top-0 lg:fixed lg:pt-8 w-full z-50">
      <MaxWidthWrapper className="overflow-visible lg:overflow-hidden border border-[#6DA9D2]/25 bg-white/95 shadow-[0_14px_45px_rgba(0,63,99,0.14)] backdrop-blur-xl lg:rounded-full lg:px-5 py-1 flex items-center relative">
        {/* Logo */}
        <Link href={"/"} className="relative aspect-[2.5/1] h-14.5">
          <Image
            src={"/mycity-logo.svg"}
            className="object-contain"
            fill
            alt="logo"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-3 font-medium text-base items-center ml-auto text-[#1E1E1E]">
          {links.map((item) => (
            <li key={item.value}>
              <Link
                href={item.value}
                className={`p-1 px-2 rounded-sm transition-colors ${
                  pathname.startsWith(item.value) ? "bg-[#D6E9F5]" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={openDownloadModal}
              className="cursor-pointer p-2.5 px-5 bg-[#E8C84A] hover:bg-[#D4B338] text-[#0B0B0B] rounded-full font-semibold shadow-[0_8px_20px_rgba(232,200,74,0.25)] transition-all hover:-translate-y-0.5"
            >
              Get the app
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="ml-auto text-[#1E1955] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl lg:hidden transition-all duration-300 overflow-y-auto ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col text-base font-medium text-[#1E1E1E] divide-y divide-gray-200">
            {links.map((item) => (
              <li key={item.value}>
                <Link
                  href={item.value}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 transition-colors ${
                    pathname.startsWith(item.value) ? "bg-[#D6E9F5] " : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-4">
              <button
                onClick={openDownloadModal}
                className="w-full p-3 bg-[#E8C84A] hover:bg-[#D4B338] cursor-pointer text-[#0B0B0B] rounded-full font-semibold transition-colors"
              >
                Get the app
              </button>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
