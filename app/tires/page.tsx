import GlobalPageHero from "@components/pages/OurTiresPage/GlobalPageHero";
import Widget from "@components/Widget/Widget";
import OurFeaturedTires from "@components/pages/OurTiresPage/OurFeaturedTires/OurFeaturedTires";
import { BreadcrumbComp } from "@components/Breadcrump/Breadcrumb";

export const metadata = {
  title: "Home of the best High-Performance & All-Season Tires",
  description:
    "Explore the complete collection of Fullway tires. Compare our advanced high-performance, all-season models to find the perfect balance of comfort and quality.",
};

const OurTiresPage = () => {
  return (
    <main className="flex flex-col">
      <GlobalPageHero
        name={"OUR TIRES"}
        desc={`We have a selected assortment of best performance tires for your
              vehicle, making sure you don't have to worry  whole
              year round and making sure the ride is as smooth as possible.`}
      />

      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Our Tires"}
        pathFirst={"/tires"}
      />

      <div className="bg-[#141414] w-full">
        <h2 className="font-[500] text-[1.125rem] italic md:max-w-7xl md:mx-auto mx-[1rem] pt-[0.5rem]">
          FULLWAY COLLECTION
        </h2>
      </div>

      <OurFeaturedTires />

      <div className="relative">
        <div className="bg-fullwayGrey w-full h-[36.4rem] md:h-[5.375rem] " />
        <div className="absolute inset-0 -top-[4rem] md:-top-[16.5rem] flex justify-center items-start z-20 mt-[6rem]">
          <Widget titleStyle="md:text-white text-black" />
        </div>
      </div>
    </main>
  );
};

export default OurTiresPage;
