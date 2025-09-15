import FAQ from "./components/FAQ/FAQ";
import FeaturedTires from "./components/FeaturedTires/FeaturedTires";
import HomeHeroBanner from "./components/pages/HomePage/HomeHeroBanner";
import MostPopularTire from "./components/pages/HomePage/MostPopularTire/MostPopularTire";
import Widget from "./components/Widget/Widget";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <HomeHeroBanner />

      <MostPopularTire />

      <div className="relative mb-[12rem] md:mb-[0rem]">
        <div className="bg-fullwayGrey w-full md:h-[14.3125rem] h-[20rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[3rem]">
          <Widget titleStyle="text-black" />
        </div>
      </div>

      <FeaturedTires scrollId="widget" />

      <FAQ />

      <div id="widget" className="relative ">
        <div className="bg-fullwayGrey w-full h-[14.3125rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[6rem]">
          <Widget titleStyle="text-black" />
        </div>
      </div>

      <div className=" flex bg-black w-full md:h-[6.3125rem] h-[26.3125rem] " />
    </main>
  );
};

export default HomePage;
