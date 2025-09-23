"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FeaturedTireCardProps = {
  name: string;
  text: string;
  tireImage: string;
  url_key: string;
};

const OurFeaturedTiresCard = ({
  name,
  text,
  tireImage,
  url_key,
}: FeaturedTireCardProps) => {

  return (
    <div className="relative">
      <div className="relative w-[21.4375rem] h-[21.5rem] z-20">
        <div className="absolute md:inset-0 top-[9rem] md:top-0 bg-[#141414] border-2 border-white skew-x-[-4deg] mx-[0.5rem] md:mx-[0rem] pb-[2rem] md:pb-[0rem]">
          <div className="flex flex-col justify-start items-center w-full ">
            <p className="font-[700] text-[1.5rem] border-b-5 border-fullwayRed leading-none w-fit mb-[1.5rem] mt-[2rem]">
              {name}
            </p>
            <p className="font-[300] text-[1.25rem] italic mb-[1rem]">
              ALL SEASON
            </p>
            <p className="font-[400] text-center px-[3rem] ">{text}</p>
            <Button
              className="buttonSkew group text-base font-[700] gap-[0.5rem] mt-[3rem] "
          
            >
              <Link href={`/product/${url_key}`} className="flex justify-between">
                CHECK OUT
                <Image
                  src="/icons/arrows/Icon=Arrow-Color=White.svg"
                  alt="Arrow 3"
                  width={1920}
                  height={1080}
                  className="w-auto h-auto pl-[0.5rem] group-hover:opacity-0"
                />
                <Image
                  src="/icons/arrows/Icon=Arrow-Color=Dark.svg"
                  alt="Arrow 3"
                  width={1920}
                  height={1080}
                  className="w-auto h-auto pl-[0.5rem] absolute right-[1rem] top-[0.6rem] opacity-0 group-hover:opacity-100"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute md:-top-[9rem] top-[1rem] left-[2.5rem] w-[17.8125rem] h-[21.9375rem] ">
        <Image
          src={tireImage}
          alt="HS 288 Tire"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default OurFeaturedTiresCard;
