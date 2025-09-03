import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full text-white">
      <div className="relative ">
        <img
          src="/fullway-hero-image-placeholder.jpg"
          alt="Fullway Logo"
          className="object-fill h-screen w-full"
        />
      </div>

      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute bottom-0 w-full h-60 bg-gradient-to-t from-black/100 to-transparent" />

      <div className="absolute bottom-20 left-70 font-[800]">
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <div className="flex gap-4 text-5xl italic">
          <h1>FOR</h1>
          <h1 className="text-fullwayRed">YOUR</h1>
          <h1>VEHICLE</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
