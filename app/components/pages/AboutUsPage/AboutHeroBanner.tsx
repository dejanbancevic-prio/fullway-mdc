import React from "react";
import Image from "next/image";

const AboutHeroBanner = () => {
  return (
    <div className="relative w-full h-[34rem] md:mt-[2rem]">
      <Image
        src="/images/HomePage/fullway-hero-image-placeholder.jpg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className="object-cover object-bottom w-full h-full"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090909]" />

      <div className="hidden md:block absolute bottom-[3rem] w-full">
        <div className="max-w-7xl mx-auto font-[800] italic text-[3rem] ">
          <div className="flex gap-[1rem]">
            <p className="text-fullwayRed">YOUR</p>
            <p>JOURNEY,</p>
          </div>
          <div className="flex gap-[1rem]">
            <p>OUR</p>
            <p>COMMITMENT.</p>
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

export default AboutHeroBanner;
