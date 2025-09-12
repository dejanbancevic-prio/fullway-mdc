import GlobalPageHero from "../components/OurTiresPage/GlobalPageHero";
import Widget from "../components/Widget/Widget";
import OurFeaturedTires from "../components/OurTiresPage/OurFeaturedTires/OurFeaturedTires";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import FAQ from "../components/FAQ/FAQ";

const OurTiresPage = () => {
  return (
    <main className="flex flex-col">
      <GlobalPageHero
        quote={"FULLWAY COLLECTION"}
        name={"OUR TIRES"}
        desc={` We have a selected assortment of best performance tires for your
              vehicle, making sure you don't have to worry  whole
              year round and making sure the ride is as smooth as possible `}
      />

      <BreadcrumbComp
        bgColor={"bg-black"}
        color={"text-white"}
        name={"Our Tires"}
        path={"/our-tires"}
      />

      <OurFeaturedTires />

      <div className="relative">
        <div className="bg-fullwayGrey w-full h-[10.375rem] md:h-[5.375rem] " />
        <div className="absolute inset-0 -top-[4rem] md:-top-[16.5rem] flex justify-center items-start z-20 mt-[6rem]">
          <Widget titleStyle="md:text-white text-black" />
        </div>
      </div>

      <div className="md:hidden mt-[24rem]">
        <FAQ />
      </div>
    </main>
  );
};

export default OurTiresPage;
