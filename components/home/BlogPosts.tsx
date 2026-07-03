'use client'
import React from "react";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../MaxWidthWrapper";
import BlogCard from "../BlogCard";
import { useRouter } from "next/navigation";
import { blogsData } from "@/lib/blogsData";

const BlogPosts = () => {
  const router = useRouter()
  return (
    <div>
      <MaxWidthWrapper>
        <header className=" mb-10">
          <div className="flex justify-between items-center mt-2 gap-3">
            <h5 className="font-inter text-[#101828] font-bold text-xl">
              All blog posts
            </h5>

            <Button variant="outline" onClick={()=>router.push('/blog')} className="font-semibold text-[#005A8D]">
              Read More
            </Button>
          </div>
        </header>

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
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogPosts;
