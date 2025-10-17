"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type AppCarouselProps = {
  items: React.ReactNode[];
};

export function AppCarousel({ items }: AppCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / 3);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setCurrentPage(api.selectedScrollSnap());
    };

    api.on("select", updateState);
    updateState();

    return () => {
      api.off("select", updateState);
    };
  }, [api]);

  return (
    <div className=" w-full max-w-[705rem] relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          slidesToScroll: 3,
        }}
        className="w-full"
      >
        <CarouselContent className="flex gap-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="flex-[0_0_calc(33.333%-1rem)]">
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute -bottom-[2.65rem] right-[1rem] flex gap-[1rem] items-center z-50">
          <Image
            src={"/icons/arrows/Icon=Arrow-Color=Dark.svg"}
            alt="Previous"
            width={32}
            height={32}
            className={`w-[1.5rem] rotate-180  transition-opacity ${
              canScrollPrev ? "opacity-100 cursor-pointer" : "opacity-50"
            }`}
            onClick={() => canScrollPrev && api?.scrollPrev()}
          />

          <Image
            src={"/icons/arrows/Icon=Arrow-Color=Dark.svg"}
            alt="Next"
            width={32}
            height={32}
            className={`w-[1.5rem] transition-opacity ${
              canScrollNext ? "opacity-100 cursor-pointer" : "opacity-50"
            }`}
            onClick={() => canScrollNext && api?.scrollNext()}
          />
        </div>

        <div className="absolute -bottom-[2rem] left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`h-[0.2rem] w-[3rem] rounded-full transition-all ${
                i === currentPage ? "bg-[#141414]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
