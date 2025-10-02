import Image from "next/image";

const HomeHeroBanner = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/HomePage/fullway-hero-image-placeholder.jpg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className=" object-cover h-[39.9375rem] md:h-screen w-full"
      />

      <div className="absolute inset-0 -bottom-40 md:inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090909]" />
      <div className="absolute inset-0 -bottom-40 md:inset-0 bg-gradient-to-b from-black/85 via-black/0 to-transparent" />

      <div className="absolute md:bottom-20 bottom-[3rem] w-full">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem]">
          <h1 className="font-[800] italic md:text-[3rem] text-[2.25rem] flex flex-wrap md:leading-normal leading-none">
            BEST TIRES
            <span className="hidden md:flex gap-[1rem] w-full">
              <span>FOR</span>
              <span className="text-fullwayRed">YOUR</span>
              <span>VEHICLE</span>
            </span>
            <span className="md:hidden flex flex-col  ">
              <span className="flex gap-[0.5rem]">
                <span>FOR</span>
                <span className="text-fullwayRed">YOUR</span>
              </span>
              <span>VEHICLE</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroBanner;
