"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC } from "react";

interface Pagination {
  current_page: number;
  total: number;
  size: number;
}

type PageChangeHandler = (page: number) => void;

interface PaginatorProps {
  pagination?: Pagination;
  onPageChange?: PageChangeHandler;
}

const Paginator: FC<PaginatorProps> = ({
  pagination,
  onPageChange = () => console.log("add fn"),
}) => {
  const { current_page = 1, total = 200, size = 10 } = pagination || {};

  const total_pages = Math.ceil(total / size);

  const ELLIPSIS = "...";

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    // Always show the first three and last three pages
    const startPages = [1, 2, 3].filter((page) => page <= total_pages);
    const endPages = [total_pages - 2, total_pages - 1, total_pages].filter(
      (page) => page > 3 && page <= total_pages,
    );

    // Include pages around the current page
    const middlePages = [
      current_page - 1,
      current_page,
      current_page + 1,
    ].filter((page) => page > 3 && page < total_pages - 2);

    // Merge and sort unique page numbers
    const uniquePages = Array.from(
      new Set([...startPages, ...middlePages, ...endPages]),
    ).sort((a, b) => a - b);

    // Add ellipses for gaps
    for (let i = 0; i < uniquePages.length; i++) {
      pages.push(uniquePages[i]);

      if (uniquePages[i + 1] && uniquePages[i + 1] > uniquePages[i] + 1) {
        pages.push("...");
      }
    }

    return pages;
  };

  const handlePrevClick = () => {
    if (current_page > 1) onPageChange(current_page - 1);
  };

  const handleNextClick = () => {
    if (current_page < total_pages) onPageChange(current_page + 1);
  };

  return (
    <div className="flex items-center gap-2 my-5 lg:text-sm border-t border-[#EAECF0] pt-3">
      <button
        aria-label="Previous Page"
        onClick={handlePrevClick}
        disabled={current_page === 1}
        className="p-2 lg:w-full lg:max-w-[84px] ml-auto  rounded-md
         flex gap-2 items-center justify-center text-[#667085]
         disabled:text-[#BCBCBC]"
      >
        <ArrowLeft size={14} />{" "}
        <span className="hidden md:inline-block">Previous</span>
      </button>

      <div className="w-full justify-center hidden lg:flex">
        {getPageNumbers().map((page, index) => (
          <button
            key={`${page}-${index}`}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === ELLIPSIS}
            aria-disabled={page === ELLIPSIS}
            className={`p-3 h-10 flex items-center justify-center
             aspect-square rounded-md  ${
               page === current_page
                 ? "bg-[#f5f5f5] text-[#005A8D] font-semibold"
                 : ""
             } ${page === ELLIPSIS ? "cursor-default text-[#667085]" : ""}text-[#667085] `}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center lg:hidden">
        Page {current_page} of {total_pages}
      </div>

      <button
        aria-label="Next Page"
        onClick={handleNextClick}
        disabled={current_page === total_pages}
        className="p-2 lg:w-full lg:max-w-[84px] text-[#667085] ml-auto  rounded-md
         flex gap-2 items-center justify-center
         disabled:text-[#BCBCBC]"
      >
        <span className="hidden md:inline-block">Next</span>{" "}
        <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default Paginator;
