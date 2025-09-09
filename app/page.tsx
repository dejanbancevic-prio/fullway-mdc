import FAQ from "./components/HomePage/FAQ/FAQ";
import FeaturedTire from "./components/HomePage/FeaturedTire/FeaturedTire";
import HeroBanner from "./components/HomePage/HeroBanner";
import MostPopularTire from "./components/HomePage/MostPopularTire/MostPopularTire";
import Widget from "./components/Widget/Widget";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <HeroBanner />

      <MostPopularTire />

      <div className="relative">
        <div className="bg-fullwayGrey w-full md:h-[14.3125rem] h-[20rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[3rem]">
          <Widget />
        </div>
      </div>

      <FeaturedTire />

      <FAQ />

      <div className="relative">
        <div className="bg-fullwayGrey w-full h-[14.3125rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[6rem]">
          <Widget />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
