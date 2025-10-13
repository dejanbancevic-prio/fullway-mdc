"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export function ProductPageSkeleton() {
  return (
    <div className="md:max-w-7xl md:mx-auto mx-[1rem] md:mt-[6.6rem] mt-[3rem]">
      <div className="flex flex-col md:flex-row w-full justify-between md:gap-[15rem] gap-[1rem]">
        <div className="flex justify-center md:justify-start w-full md:w-fit">
          <Image
            src="/images/HomePage/MostPopularTire/fullway-tire-frontview-w-wheel-template.png"
            alt="Fullway Tire"
            width={1920}
            height={1080}
            className="size-[20rem] md:size-[30.5625rem] md:ml-[0rem] ml-[0.29rem] "
          />
        </div>

        <div className="flex flex-col gap-[1.25rem] md:w-[34rem] w-full ">
          <div className="flex flex-col gap-[1rem]">
            <Image
              src="/icons/logo/Fullway-Logo-White.svg"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[7.125rem] h-[1.375rem]"
            />
            <Skeleton className="w-[12rem] h-[2.25rem] rounded-md" />

            <div className="flex items-start">
              <div className="flex items-center gap-[0.7rem]">
                <div className="flex gap-[0.3rem]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className="w-[1rem] h-[1rem] rounded-full"
                    />
                  ))}
                </div>

                <Skeleton className="font-[300] text-[0.8rem] md:text-[1rem]" />
              </div>

              <Skeleton />
            </div>

            <div className="flex justify-start font-[600] text-[1.15rem] md:gap-[1.5rem] gap-[0.7rem]">
              <p>ALL SEASON</p>
              <p>•</p>
              <p>HIGH PERFORMANCE</p>
            </div>

            <div className=" flex flex-col gap-[1rem] ">
              <Skeleton className="w-full h-[1rem] rounded-md" />
              <Skeleton className="w-full h-[1rem] rounded-md" />
              <Skeleton className="w-full h-[1rem] rounded-md" />
              <Skeleton className="w-[90%] h-[1rem] rounded-md" />
              <Skeleton className="w-[70%] h-[1rem] rounded-md" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[0.3rem]">
              <div className="flex w-full justify-between items-center">
                <p className="font-[400]">Choose tire size</p>
                <p className="font-[400] underline ">Does it fit?</p>
              </div>
              <Skeleton className="w-full h-[2.25rem] rounded-md" />

              <div>
                <Button className="bg-transparent hover:underline hover:bg-transparent p-0 cursor-pointer flex items-center ">
                  <Image
                    src="/icons/other/Icon=Plus-Color=White.svg"
                    alt="Plus"
                    width={1920}
                    height={1080}
                    className="w-[1rem] h-[1rem]"
                  />
                  Add additional tire size
                </Button>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-[0.2rem]">
                <Skeleton className="w-[12rem] h-[2rem] rounded-md" />

                <p className="font-[400] pt-[0.8rem]">/per tire</p>
              </div>

              <div className="flex justify-between w-full items-end leading-none mt-[0.5rem]">
                <div className="flex w-full font-[400] gap-[1.5rem] items-end">
                  <div className="flex w-full md:justify-between items-center ">
                    <Button className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center">
                      <Image
                        src="/icons/other/Icon=Minus-Color=White.svg"
                        alt="Minus"
                        width={1920}
                        height={1080}
                        className="w-[1rem] h-[1rem]"
                      />
                    </Button>

                    <div className="w-[2rem] text-center">1</div>

                    <Button className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center">
                      <Image
                        src="/icons/other/Icon=Plus-Color=White.svg"
                        alt="Plus"
                        width={1920}
                        height={1080}
                        className="w-[1rem] h-[1rem]"
                      />
                    </Button>

                    <Button className="buttonSkewSidebar h-[3rem] w-[14rem] ml-[2rem] md:w-[24rem] font-bold rounded-md">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-7xl md:mx-auto mx-[1rem] mt-[5rem] flex flex-col gap-[1.5rem]">
        <div className="hidden md:flex justify-between w-full items-center">
          <div className="flex flex-col justify-between w-full h-[5rem]">
            <h2 className="font-[700] text-[2.25rem] border-b-5 border-fullwayRed w-fit leading-none italic">
              TIRE SIZES
            </h2>
            <p className="font-[300] text-[1.25rem]">
              Select wheel size for a filtered view.
            </p>
          </div>

          <Image
            src="/images/HomePage/FeaturedTires/Coin.svg"
            alt="Coin Icon"
            width={28}
            height={28}
            className="w-[4.875rem] h-auto "
          />
        </div>

        <div className="md:hidden flex flex-col justify-center w-full items-center mb-[2rem]">
          <div className="flex flex-col justify-between w-full h-[7rem] gap-[0.7rem]">
            <div className="flex justify-between">
              <p className="font-[700] text-[2.25rem] border-b-5 border-fullwayRed w-fit leading-none italic">
                TIRE SIZES
              </p>
              <Image
                src="/images/HomePage/FeaturedTires/Coin.svg"
                alt="Coin Icon"
                width={28}
                height={28}
                className=" w-[3rem] h-auto "
              />
            </div>
            <p className="font-[300] text-[1.25rem] ">
              Select wheel size for a filtered view.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full justify-start">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="w-[5rem] h-[2.5rem] rounded-md" />
          ))}
        </div>

        <div className="relative h-[31rem] w-full overflow-hidden border border-neutral-700 rounded-md">
          <div className="bg-fullwayRed h-[3.5rem] w-full" />
          <div className="flex flex-col gap-[0.8rem] p-[1rem]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center gap-[1rem]"
              >
                {Array.from({ length: 9 }).map((_, j) => (
                  <Skeleton key={j} className="h-[1.25rem] w-full rounded-md" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
