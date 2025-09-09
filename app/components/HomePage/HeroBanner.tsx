import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="w-full">
       <Image
        src="/images/HomePage/fullway-hero-image-placeholder.jpg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className=" object-cover h-[39.9375rem] md:h-screen w-full"
      />

      <div className="absolute inset-0 -bottom-40 md:inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090909]" />
      <div className="absolute inset-0 -bottom-40 md:inset-0 bg-gradient-to-b from-black/85 via-black/0 to-transparent" />

      <div className="hidden md:block absolute bottom-20 w-full">
        <div className="max-w-7xl mx-auto font-[800] italic text-[3rem] ">
          <p className="">BEST TIRES</p>
          <div className="flex gap-[1rem]">
            <p>FOR</p>
            <p className="text-fullwayRed">YOUR</p>
            <p>VEHICLE</p>
          </div>
        </div>
      </div>

      <div className=" md:hidden absolute bottom-[3rem] w-full">
        <div className=" mx-[1rem] font-[700] italic text-[2.25rem] leading-none">
          <p className="">BEST TIRES</p>
          <div className="flex flex-col ">
            <div className="flex gap-[0.5rem]">
              <p>FOR</p>
              <p className="text-fullwayRed">YOUR</p>
            </div>
            <p>VEHICLE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
