import Script from "next/script";
import FeaturedTires from "./components/FeaturedTires/FeaturedTires";
import HomeHeroBanner from "./components/pages/HomePage/HomeHeroBanner";
import MostPopularTire from "./components/pages/HomePage/MostPopularTire/MostPopularTire";
import Widget from "./components/Widget/Widget";

export const metadata = {
  title: "Fullway Tires | Only the best tires for your vehicle",
  description:
    "Discover our complete lineup of reliable high-performance and all-season tires, or use our advanced Tire Finder to get the perfect match for your vehicle today.",
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.fullwaytires.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.fullwaytires.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />

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
