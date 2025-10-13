import FeaturedTires from "./components/FeaturedTires/FeaturedTires";
import HomeHeroBanner from "./components/pages/HomePage/HomeHeroBanner";
import MostPopularTire from "./components/pages/HomePage/MostPopularTire/MostPopularTire";
import Widget from "./components/Widget/Widget";
import SchemaScript from "./components/seo/SchemaScript";
import { homeSchema } from "../lib/seo/seoSchemas";

export const metadata = {
  title: "Fullway Tires | Only the best tires for your vehicle",
  description:
    "Discover our complete lineup of reliable high-performance and all-season tires, or use our advanced Tire Finder to get the perfect match for your vehicle today.",
};

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <SchemaScript id={"home-schema"} schema={homeSchema} />

      <HomeHeroBanner />

      <MostPopularTire />

      <FeaturedTires />

      {/* <div id="widget" className="relative scroll-mt-[8rem]">
        <div className="bg-fullwayGrey w-full h-[14.3125rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[6rem]">
          <Widget titleStyle="text-black" />
        </div>
      </div> */}

      <div className=" flex bg-black w-full md:h-[6.3125rem] h-[26.3125rem] " />
    </main>
  );
};

export default HomePage;
