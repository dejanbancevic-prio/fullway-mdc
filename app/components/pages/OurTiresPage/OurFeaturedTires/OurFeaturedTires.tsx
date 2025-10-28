import Image from "next/image";
import OurFeaturedTiresCard from "./OurFeaturedTiresCard";
import HP108 from "@images/OurTiresPage/OurFeaturedTires/HP108.png";
import HP208 from "@images/OurTiresPage/OurFeaturedTires/HP208.png";
import HS266 from "@images/OurTiresPage/OurFeaturedTires/HS266.png";
import HS288 from "@images/OurTiresPage/OurFeaturedTires/HS288.png";
import HS998 from "@images/OurTiresPage/OurFeaturedTires/HS998.png";
import PC368 from "@images/OurTiresPage/OurFeaturedTires/PC368.png";
import PC369 from "@images/OurTiresPage/OurFeaturedTires/PC369.png";

const OurFeaturedTires = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/ProductPage/prodBg.jpg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover h-[221rem] md:h-[120.5625rem] w-full"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/100 via-transparent via-30% to-neutral-900/0" />

      <div className="absolute md:inset-0 -top-[17rem] flex flex-col items-center md:items-start w-full  mt-[19rem] md:mt-[12rem]">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col items-center  gap-[2.12rem] md:gap-[12rem]">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-[9.5rem] md:gap-0">
            <OurFeaturedTiresCard
              name={"HP 108"}
              text={
                "Designed for any element, to keep you safe through the whole year."
              }
              tireImage={HP108}
              url_key={"hp108"}
            />
            <OurFeaturedTiresCard
              name={"HS 266"}
              text={
                "All season tire manufactured for passenger vehicles and SUVs."
              }
              tireImage={HS266}
              url_key={"hs266"}
            />
            <OurFeaturedTiresCard
              name={"PC 369"}
              text={
                "The tread design allows the driver's full control over the vehicle during the drive.."
              }
              tireImage={PC369}
              url_key={"pc369"}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-[9.5rem] md:gap-0 mt-[7.5rem] md:mt-[0rem]">
            <OurFeaturedTiresCard
              name={"PC 368"}
              text={
                "The design improves the steering responsiveness and the driving stability."
              }
              tireImage={PC368}
              url_key={"pc368"}
            />
            <OurFeaturedTiresCard
              name={"HS 998"}
              text={
                "All season tire manufactured for SUVs, the tire offers excellent all weather traction."
              }
              tireImage={HS998}
              url_key={"hs998"}
            />
            <OurFeaturedTiresCard
              name={"HP 288"}
              text={
                "High performance, all season tire manufactured for SUV, crossover and light truck vehicles."
              }
              tireImage={HS288}
              url_key={"hs288"}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-[7.5rem] md:mt-[0rem] ">
            <OurFeaturedTiresCard
              name={"HS 208"}
              text={
                "It combines the all season compound and the asymmetric tread design for perfect grip."
              }
              tireImage={HP208}
              url_key={"hp208"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturedTires;
