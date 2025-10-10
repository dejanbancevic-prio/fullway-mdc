import Image from "next/image";

type GlobalPageHeroProps = {
  name: string;
  desc: string;
};

const GlobalPageHero = ({  name, desc }: GlobalPageHeroProps) => {
  return (
    <div className="w-full border-b-5 border-fullwayRed relative">
      <Image
        src="/images/OurTiresPage/ourtires-hero.jpg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className="object-cover md:pl-[50rem] md:object-[center_70%] h-[17rem] md:h-[18.0625rem] w-full overflow-hidden"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#090909] from-[48.85%] to-transparent to-[79.1%]" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#090909] from-[1.85%] to-transparent to-[79.1%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[47.36%] to-[rgba(220,0,20,0.20)] to-[100%]" />

      <div className="absolute inset-0 bg-[#141414] -z-10" />

      <div className="absolute md:inset-0 -top-[11.5rem] flex items-center mt-[17rem] md:mt-[3rem]">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col md:flex-row  items-start ">
          <div className="flex flex-col ">

            <h1 className="md:font-[800] font-[700] md:text-[3rem] text-[2.25rem] italic leading-none md:leading-16">
              {name}
            </h1>

            <p className=" hidden md:flex font-[300] text-[1.25rem] ">{desc}</p>

            <p className="md:hidden font-[300] mt-[1rem] leading-none">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPageHero;
