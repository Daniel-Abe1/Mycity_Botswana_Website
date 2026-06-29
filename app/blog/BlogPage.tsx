"use client";
import BlogCard from "@/components/BlogCard";
import CtaPhone from "@/components/CtaPhone";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TextInput from "@/components/ui/inputs/TextInput";
// import Paginator from "@/components/ui/Paginator";
import { blogsData } from "@/lib/blogsData";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPosts = [
  {
    date: "17 Jan 2026",
    minRead: "3 mins read",
    title: "Suya, Jollof, and Online Deals: Shopping the Nigeria...",
    desc: "Whether it’s a late-night suya craving or grabbing fashion from top brands, discover how MyCityApp brings Nigeria’s food and shopping culture right into your pocket.",
    image: "/img/blog.png",
  },
  {
    date: "16 Jan 2026",
    minRead: "3 mins read",
    title: "MyCityApp 2.0: New Features Coming This Spring",
    desc: "Master our platform with these pro tips for finding events, booking tickets, and managing your bookings.",
    image: "/img/blog.png",
  },
  {
    date: "15 Jan 2026",
    minRead: "3 mins read",
    title: "How to Use MyCityApp as a Business Owner",
    desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/img/blog.png",
  },

  {
    date: "17 Jan 2026",
    minRead: "3 mins read",
    title: "Suya, Jollof, and Online Deals: Shopping the Nigeria...",
    desc: "Whether it’s a late-night suya craving or grabbing fashion from top brands, discover how MyCityApp brings Nigeria’s food and shopping culture right into your pocket.",
    image: "/img/blog.png",
  },
  {
    date: "16 Jan 2026",
    minRead: "3 mins read",
    title: "MyCityApp 2.0: New Features Coming This Spring",
    desc: "Master our platform with these pro tips for finding events, booking tickets, and managing your bookings.",
    image: "/img/blog.png",
  },
  {
    date: "15 Jan 2026",
    minRead: "3 mins read",
    title: "How to Use MyCityApp as a Business Owner",
    desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/img/blog.png",
  },
];

const BlogPage = () => {
  return (
    <div className="lg:pt-18">
      <MaxWidthWrapper className="mt-16 lg:mt-32 mb-12 flex flex-col items-center justify-center text-center gap-4">
        <h5 className="text-3xl md:text-[2.6rem] md:leading-[2.6rem] font-semibold text-[#014239] inter">
          Stay Updated with MyCityApp
        </h5>

        <p className="md:text-lg max-w-[887px] mb-2">
          Discover the latest events, city happenings, lifestyle stories, and
          platform updates
        </p>

        <div className="w-full max-w-[320px]">
          <TextInput
            startAdornment={
              <span className="">
                <SearchIcon size={20} />
              </span>
            }
            name="search-faq"
            placeholder="Search"
            value=""
            onChange={(val) => console.log(val)}
          />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="hidden">
        <h5 className="inter font-semibold text-[#101828] mb-5 text-xl">
          Recent blog posts
        </h5>
        <section className="grid md:grid-cols-2 gap-5 md:gap-10">
          <BlogCard
            image={blogPosts[0].image}
            title={blogPosts[0].title}
            desc={blogPosts[0].desc}
            date={blogPosts[0].date}
            minRead={blogPosts[0].minRead}
            slug="1"
          />

          <article className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Image */}
              <div className="relative h-[300px] md:h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={blogPosts[1].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 pb-5">
                {/* Row 2 — Meta */}
                <div className="flex font-semibold gap-1 text-sm text-[#014339]">
                  <span>{blogPosts[0].minRead}</span>•
                  <span>{blogPosts[0].date}</span>
                </div>

                {/* Row 3 — Title with arrow */}
                <Link
                  href="/blog/1"
                  className="font-semibold text-[#101828] inter line-clamp-2 hover:underline cursor-pointer"
                >
                  {blogPosts[0].title}
                </Link>

                {/* Row 4 — Description */}
                <p className="text-[#667085] text-sm line-clamp-3">
                  {blogPosts[0].desc}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Image */}
              <div className="relative  h-[300px] md:h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={blogPosts[1].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 pb-5">
                {/* Row 2 — Meta */}
                <div className="flex font-semibold gap-1 text-sm text-[#014339]">
                  <span>{blogPosts[0].minRead}</span>•
                  <span>{blogPosts[0].date}</span>
                </div>

                {/* Row 3 — Title with arrow */}
                <Link
                  href="/blog/1"
                  className="font-semibold text-[#101828] inter line-clamp-2 hover:underline cursor-pointer"
                >
                  {blogPosts[0].title}
                </Link>

                {/* Row 4 — Description */}
                <p className="text-[#667085] text-sm line-clamp-3">
                  {blogPosts[0].desc}
                </p>
              </div>
            </div>
          </article>
        </section>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="mt-5">
        <h5 className="inter font-semibold text-[#101828] mb-5 text-xl">
          All blog posts
        </h5>

        <section className="grid md:grid-cols-3 gap-5">
          {blogsData.map((item) => (
            <BlogCard
              image={item.imageUrl}
              title={item.title}
              desc={item.description}
              date={item.date}
              minRead={item.read}
              key={item.id}
              slug={item.slug}
            />
          ))}
        </section>

        {/* <Paginator /> */}
      </MaxWidthWrapper>

      <div className="mt-12">
        <CtaPhone />
      </div>
    </div>
  );
};

export default BlogPage;
