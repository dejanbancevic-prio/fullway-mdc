import React from "react";
import Image from "next/image";
import OurFeaturedTiresCard from "./OurFeaturedTiresCard";

const OurFeaturedTires = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/black.jpg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover h-[218rem] md:h-[118.5625rem] w-full"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/100 via-transparent via-30% to-neutral-900/0" />

      <div className="absolute md:inset-0 -top-[17rem] flex items-center mt-[17rem] md:mt-[0rem]">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col  items-center gap-[2.12rem] md:gap-[12rem]">
          <div className="flex flex-col md:flex-row justify-between w-full gap-[9.5rem] md:gap-0">
            <OurFeaturedTiresCard
              name={"HP 108"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={
                "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
              }
            />
            <OurFeaturedTiresCard
              name={"HS 266"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={
                "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
              }
            />
            <OurFeaturedTiresCard
              name={"PC 369"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={
                "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
              }
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full gap-[9.5rem] md:gap-0 mt-[7.5rem] md:mt-[0rem]">
            <OurFeaturedTiresCard
              name={"PC 368"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={
                "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
              }
            />
            <OurFeaturedTiresCard
              name={"HS 998"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={
                "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
              }
            />
            <OurFeaturedTiresCard
              name={"HP 208"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={
                "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
              }
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center w-full mt-[7.5rem] md:mt-[0rem] ">
            <OurFeaturedTiresCard
              name={"HS 288"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={
                "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturedTires;
