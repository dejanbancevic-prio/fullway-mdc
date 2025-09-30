import React from "react";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import OurFeaturedTires from "../components/pages/OurTiresPage/OurFeaturedTires/OurFeaturedTires";
import Widget from "../components/Widget/Widget";
import FAQ from "../components/FAQ/FAQ";

const CategoryPage = () => {
  return (
    <main className="flex flex-col">
      <div className="h-[5rem] bg-[#141414]" />
      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Category"}
        pathFirst={"/category"}
      />

      <OurFeaturedTires />

      <div className="relative">
        <div className="bg-fullwayGrey w-full h-[10.375rem] md:h-[5.375rem] " />
        <div className="absolute inset-0 -top-[4rem] md:-top-[16.5rem] flex justify-center items-start z-20 mt-[6rem]">
          <Widget titleStyle="md:text-white text-black" />
        </div>
      </div>

      <FAQ />
    </main>
  );
};

export default CategoryPage;
