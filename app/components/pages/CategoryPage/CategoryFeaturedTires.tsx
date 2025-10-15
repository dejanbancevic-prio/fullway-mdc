"use client";

import { useState } from "react";
import CategoryFeaturedTiresCard from "./CategoryFeaturedTiresCard";
import { PaginationComp } from "@components/PaginationComp/PaginationComp";
import { WidgetConfigurableProductItem } from "@lib/types/widget/widget.types";

const itemsPerPage = 8;

type CategoryFeaturedTiresProps = {
  filteredProducts: WidgetConfigurableProductItem[];
};

const CategoryFeaturedTires = ({
  filteredProducts,
}: CategoryFeaturedTiresProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center font-[600] text-center md:text-wrap text-white md:w-[35rem] pr-[1rem] mx-[1rem] ">
        <div>
          <p className="md:ml-[10rem] md:mt-[21rem]">
            Please fill in the tire size fields or try different criteria to see
            available tires.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-[2rem] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-fit gap-y-[11rem] gap-[2rem] mx-[1rem] md:mx-0 md:mt-[12rem] md:pr-[1rem] md:p-0 mb-[9rem] md:mb-0">
        {currentItems.map((product) => (
          <CategoryFeaturedTiresCard key={product.id} product={product} />
        ))}
      </div>

      <PaginationComp
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CategoryFeaturedTires;
