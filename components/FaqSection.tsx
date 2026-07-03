"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CircleMinus, CirclePlus } from "lucide-react";

type AccordionItem = {
  id?: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
};

type Props = {
  item: AccordionItem;
  openBgClass?: string;
  closedBgClass?: string;
};

const Accordion = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className={`${
        open ? "" : ""
      } w-full mx-auto bg-[#EEEFEF] border-b border-[#AAADAC] last:border-none`}
    >
      <button
        className={`rounded-lg overflow-hidden transition-colors w-full
          duration-200 px-5 py-6 flex items-center justify-between cursor-pointer`}
        onClick={toggle}
      >
        <span className="font-medium">{item.title}</span>

        {open ? (
          <CircleMinus className="w-5 h-5 shrink-0 text-[#005A8D]" />
        ) : (
          <CirclePlus className="w-5 h-5 shrink-0 text-[#005A8D]" />
        )}
      </button>

      {/* Panel */}
      <section
        id={`accordion-panel-${item.id ?? 0}`}
        aria-labelledby={`accordion-trigger-${item.id ?? 0}`}
        className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maxHeight: open ? 1000 : 0,
          padding: open ? "0rem 1.5rem 1.5rem" : "0 2rem",
        }}
      >
        <div className="text-sm inter text-[#666867] w-[95%] leading-6">
          {item.content}
        </div>
      </section>
    </div>
  );
};

const accordionItems = [
  {
    title: "What can I do on MyCityApp Africa?",
    content:
      "Navigate, discover businesses, book events, access government services, and explore your city.",
  },
  {
    title: "Is MyCityApp Africa free to download and use?",
    content:
      "Yes, MyCityApp Africa is completely free to download and most features are available at no cost.",
  },
  {
    title: "Is MyCityApp Africa available across Botswana?",
    content:
      "Yes. MyCityApp Africa brings city discovery, events, local services, navigation and everyday experiences together for communities across Botswana.",
  },
  {
    title: "Can I pay bills on MyCityApp Africa?",
    content:
      "Yes, you can pay electricity, cable, and other utility bills directly on the app.",
  },
  {
    title: "How do I access MyCityApp Africa?",
    content:
      "You can Download MyCityApp Africa on Google PlayStore or Apple App Store.",
  },
];

const FaqSection = () => {
  return (
    <MaxWidthWrapper className=" my-10">
      <article>
        <div className="flex flex-col rounded-2xl overflow-hidden">
          {accordionItems.map((item) => (
            <Accordion key={item.title} item={item} />
          ))}
        </div>
      </article>
    </MaxWidthWrapper>
  );
};

export default FaqSection;
