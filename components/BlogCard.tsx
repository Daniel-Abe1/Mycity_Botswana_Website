"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

interface BlogCardProps {
  image: string;
  title: string;
  desc: string;
  date: string;
  minRead: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  desc,
  date,
  minRead,
  slug,
}) => {
  const router = useRouter();
  return (
    <div className="bg-white">
      {/* Image */}
      <div className="relative aspect-[2/1.3] max-h-[240px] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="py-5 flex flex-col gap-3">
        {/* Row 2 — Meta */}
        <div className="flex font-semibold gap-1 text-sm text-[#014339]">
          <span>{minRead} read</span>•<span>{date}</span>
        </div>

        {/* Row 3 — Title with arrow */}
        <div
          className="flex items-start justify-between gap-2 cursor-pointer"
          onClick={() => router.push(`/blog/${slug}`)}
        >
          <h3 className="text-2xl font-semibold text-[#101828] inter line-clamp-3 flex-1 hover:underline">
            {title}
          </h3>
          <FiArrowUpRight
            className="mt-1 flex-shrink-0"
            color="#101828"
            size={22}
          />
        </div>

        {/* Row 4 — Description */}
        <p className="text-[#667085] line-clamp-3">{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
