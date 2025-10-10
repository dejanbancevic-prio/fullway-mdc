"use client";

import { useState } from "react";
import CategoryFeaturedTiresCard from "./CategoryFeaturedTiresCard";
import { PaginationComp } from "@components/PaginationComp/PaginationComp";

const tires = [
  {
    name: "HP 108",
    text: "Designed for any element, to keep you safe through the whole year.",
    tireImage:
      "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg",
    url_key: "hp108",
  },
  {
    name: "HS 266",
    text: "All season tire manufactured for passenger vehicles and SUVs.",
    tireImage:
      "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg",
    url_key: "hs266",
  },
  {
    name: "PC 369",
    text:
      "The tread design allows the driver's full control over the vehicle during the drive.",
    tireImage:
      "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg",
    url_key: "pc369",
  },
  {
    name: "PC 368",
    text:
      "The design improves the steering responsiveness and the driving stability.",
    tireImage:
      "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg",
    url_key: "pc368",
  },
  {
    name: "HS 998",
    text:
      "All season tire manufactured for SUVs, the tire offers excellent all weather traction.",
    tireImage:
      "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg",
    url_key: "hs998",
  },
  {
    name: "HP 208",
    text:
      "It combines the all season compound and the asymmetric tread design for perfect grip.",
    tireImage:
      "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg",
    url_key: "hp208",
  },
  {
    name: "HS 288",
    text:
      "High performance, all season tire manufactured for SUV, crossover and light truck vehicles.",
    tireImage:
      "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg",
    url_key: "hs288",
  },
];

const itemsPerPage = 8;

const CategoryFeaturedTires = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tires.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = tires.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col items-center gap-[2rem] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-fit gap-y-[11rem] gap-[2rem] md:mt-[12rem] pr-[1rem] md:p-0 mb-[9rem] md:mb-0">
        {currentItems.map((tire, idx) => (
          <CategoryFeaturedTiresCard
            key={idx}
            name={tire.name}
            text={tire.text}
            tireImage={tire.tireImage}
            url_key={tire.url_key}
          />
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
