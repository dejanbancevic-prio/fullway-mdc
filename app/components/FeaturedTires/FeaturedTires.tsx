import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeaturedTiresCard from "./FeaturedTiresCard";

type FeaturedTiresProps = {};

const FeaturedTires = ({}: FeaturedTiresProps) => {
  return (
    <div className="w-full border-b-5 border-fullwayRed relative">
      <Image
        src="/images/HomePage/FeaturedTires/fullway-featuredtires-bg-image.jpg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className="object-cover h-[95.5rem] md:h-[42.688rem] w-full"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#141414]/80 to-[#141414]/40" />
      <div className="absolute inset-0 bg-[linear-gradient(161deg,rgba(220,0,20,0)_40.32%,rgba(220,0,20,0.15)_98.53%)]" />

      <div className="absolute inset-0 flex items-center ">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col md:flex-row justify-between items-start gap-[2.12rem] md:gap-[0rem]">
          <div className="flex flex-col justify-start ">
            <Image
              src="/images/HomePage/FeaturedTires/Coin.svg"
              alt="Coin Icon"
              width={28}
              height={28}
              className="w-[4.875rem] h-auto md:mb-[3.5rem] mb-[1.5rem]"
            />

            <p className="font-[800] text-[1.125rem] mb-[1rem] italic">
              SHOP BY CATEGORY
            </p>

            <p className="font-[300] md:mb-[2.25rem] mb-[1.5rem]">
              The tire upgrades the all <br /> season weather traction.
            </p>

            <div className="flex items-center gap-[1.5rem]">
              <Button className="buttonSkew text-base font-[700] px-[1.1rem]">
                <Link href="/our-tires">SHOP ALL TIRES</Link>
              </Button>

              <Link href={`#widget`} className="font-[400] underline ">
                Find tires
              </Link>
            </div>
          </div>

          <FeaturedTiresCard
            name={"PASSENGER"}
            model={"HS 266"}
            bgImage={
              "/images/HomePage/FeaturedTires/fulllway-passenger-bg-image-placeholder.jpg"
            }
            tireImage={
              "/images/HomePage/FeaturedTires/fullway-hs266-b-aca2-1-placeholder.png"
            }
            url={"/product/hs266"}
          />
          <FeaturedTiresCard
            name={"SUV"}
            model={"HS 288"}
            bgImage={
              "/images/HomePage/FeaturedTires/fulllway-suv-bg-image-placeholder.jpg"
            }
            tireImage={
              "/images/HomePage/FeaturedTires/fullway-hs266-b-aca2-1-placeholder.png"
            }
            url={"/product/hs288"}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedTires;
