import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full">
      <img
        src="./images/HomePage/fullway-hero-image-placeholder.jpg"
        alt="Fullway Logo"
        className=" object-cover h-screen w-full"
      />

      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute bottom-0 w-full h-60 bg-gradient-to-t from-black/100 to-transparent" />

      <div className="absolute bottom-20 w-full">
        <div className="max-w-7xl mx-auto font-[800] italic text-[3rem] ">
          <p className="">BEST TIRES</p>
          <div className="flex gap-4">
            <p>FOR</p>
            <p className="text-fullwayRed">YOUR</p>
            <p>VEHICLE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
