"use client";
import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import MaxWidthWrapper from "./MaxWidthWrapper";
import EventCard from "./EventCard";
import { fetchAllDiscoveries, fetchDiscoveryCategories } from "@/lib/api";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 9;

const CityEventSection = ({ state = "" }: { state?: string }) => {
  const [selectedTab, setSelectedTab] = useState({
    state: "",
    category: "",
  });
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE);

  const {
    data: categoryData,
    isLoading: isLoadingCategories,
    error,
  } = useQuery<{
    categories: Category[];
  }>({
    queryKey: ["categories", state],
    queryFn: () =>
      fetchDiscoveryCategories({
        location: state.toUpperCase() || "ALL",
      }),
  });

  const firstCategory = categoryData?.categories[0]?.name ?? "";
  const selectedCategoryIsAvailable = categoryData?.categories.some(
    (category) => category.name === selectedTab.category,
  );
  const active =
    selectedTab.state === state && selectedCategoryIsAvailable
      ? selectedTab.category
      : firstCategory;

  const { data: discoveryData, isLoading: isLoadingDiscoveries } = useQuery<{
    discoveries: Discover[];
    count: number;
  }>({
    queryKey: ["discoveries", active, state],
    queryFn: () =>
      fetchAllDiscoveries({
        categoryName: active,
        location: state.toUpperCase() || undefined,
      }),
    enabled: !!active,
  });

  const paginatedData = useMemo(() => {
    if (!discoveryData?.discoveries)
      return { items: [], hasMore: false, total: 0 };

    const items = discoveryData.discoveries.slice(0, itemsToShow);
    const hasMore = itemsToShow < discoveryData.discoveries.length;

    return { items, hasMore, total: discoveryData.discoveries.length };
  }, [discoveryData, itemsToShow]);

  const handleTabChange = (categoryName: string) => {
    setSelectedTab({ state, category: categoryName });
    setItemsToShow(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <MaxWidthWrapper className="py-10">
      <div className="whitespace-nowrap flex gap-2 items-center overflow-x-auto">
        {isLoadingCategories ? (
          <div className="flex justify-center items-center py-4 w-full">
            <div className="w-8 h-8 border-4 border-[#005A8D] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : categoryData?.categories && categoryData.categories.length > 0 ? (
          categoryData.categories.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.name)}
              className={`p-2 px-3 font-medium min-w-[150px] cursor-pointer capitalize rounded-lg text-sm ${
                item.name === active
                  ? "bg-[#005A8D] text-white"
                  : "border text-[#1E1955] border-[#F2F2F2] "
              }`}
            >
              {item.name.toLowerCase()}
            </button>
          ))
        ) : (
          <div className="text-gray-500 py-2">No categories available</div>
        )}
      </div>

      <div className="my-10 flex flex-col gap-3">
        <h3 className="md:text-2xl text-[#005A8D] font-semibold inter mb-4 capitalize">
          {categoryData?.categories.find((c) => c.name === active)?.name ||
            "Discoveries"}
        </h3>

        <section className="grid md:grid-cols-3 gap-3">
          {isLoadingDiscoveries && (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-[#005A8D] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="col-span-full text-center py-10 text-red-500">
              Failed to load discoveries. Please try again.
            </div>
          )}

          {!isLoadingDiscoveries &&
            !error &&
            (!discoveryData || discoveryData.count === 0) && (
              <div className="col-span-full text-center py-10 text-gray-500">
                No listings found
              </div>
            )}

          {!isLoadingDiscoveries &&
            !error &&
            discoveryData &&
            discoveryData.count > 0 && (
              <>
                {paginatedData.items.map((item) => (
                  <EventCard
                    key={item.id}
                    title={item.name}
                    address={item.location}
                    date={item.startDate || ""}
                    startTime={item.startTime}
                    endDate={item.endDate}
                    endTime={item.endTime}
                    image={item.coverImageUrl || "/img/event-card.png"}
                  />
                ))}
              </>
            )}
        </section>

        {!isLoadingDiscoveries &&
          !error &&
          discoveryData &&
          discoveryData.count > 0 && (
            <>
              {paginatedData.hasMore && (
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={handleLoadMore}
                    className="my-12 h-12 w-full max-w-[245px] cursor-pointer border border-[#005A8D] font-semibold text-[#005A8D]"
                  >
                    Load More Events
                  </Button>
                </div>
              )}

              <div className="text-center text-sm text-gray-600 mt-4">
                Showing {paginatedData.items.length} of {paginatedData.total}{" "}
                discoveries
              </div>
            </>
          )}
      </div>
    </MaxWidthWrapper>
  );
};

export default CityEventSection;
