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

      <div className="absolute bottom-[3rem] w-full">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem]  w-full">
          <h1 className="font-[800] italic md:text-[3rem] text-[2.25rem] flex flex-col md:leading-normal leading-none">
            <span className="hidden md:flex flex-col gap-[1rem]">
              <span className="flex gap-[1rem]">
                <span className="text-fullwayRed">YOUR</span>
                <span>JOURNEY,</span>
              </span>
              <span className="flex gap-[1rem]">
                <span>OUR</span>
                <span>COMMITMENT.</span>
              </span>
            </span>

            <span className="md:hidden flex flex-col gap-[0.5rem]">
              <span className="flex gap-[0.5rem]">
                <span className="text-fullwayRed"> YOUR</span>
                <span>JOURNEY,</span>
              </span>
              <span className="flex gap-[0.5rem]">
                <span>OUR</span>
                <span>COMMITMENT.</span>
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroBanner;
