import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeaturedTireCard from "./FeaturedTireCard";

const FeaturedTire = () => {
  return (
    <div className="w-full border-b-5 border-fullwayRed relative">
      <img
        src="./images/HomePage/FeaturedTires/fullway-featuredtires-bg-image.jpg"
        alt="Fullway Logo"
        className="object-cover h-[42.688rem] w-full"
      />

      <div className="absolute inset-0 bg-[linear-gradient(153deg,#1D1D1D_34.17%,rgba(29,29,29,0)_81.69%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(161deg,rgba(220,0,20,0)_40.32%,rgba(220,0,20,0.15)_98.53%)]" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-start">
          <div className="flex flex-col justify-start ">
            <Image
              src="/images/HomePage/FeaturedTires/Coin.svg"
              alt="Coin Icon"
              width={28}
              height={28}
              className="w-[4.875rem] h-auto mb-[3.5rem]"
            />

            <p className="font-[800] text-[1.125rem] mb-[1rem] italic">
              SHOP BY CATEGORY
            </p>

            <p className="font-[300] mb-[2.25rem]">
              The tire upgrades the all <br /> season weather traction.
            </p>

            <div className="flex items-center gap-[1.5rem]">
              <Button className="buttonSkew text-base font-[700] px-[1.1rem]">
                <Link href="/our-tires">SHOP ALL TIRES</Link>
              </Button>

              <Link href="/" className="font-[400] underline ">
                Find tires
              </Link>
            </div>
          </div>

          <FeaturedTireCard
            name={"PASSENGER"}
            model={"HS 266"}
            bgImage={
              "/images/HomePage/FeaturedTires/fulllway-passenger-bg-image-placeholder.jpg"
            }
            tireImage={
              "/images/HomePage/FeaturedTires/fullway-hs266-b-aca2-1-placeholder.png"
            }
          />
          <FeaturedTireCard
            name={"SUV"}
            model={"HS 288"}
            bgImage={
              "/images/HomePage/FeaturedTires/fulllway-suv-bg-image-placeholder.jpg"
            }
            tireImage={
              "/images/HomePage/FeaturedTires/fullway-hs266-b-aca2-1-placeholder.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedTire;
