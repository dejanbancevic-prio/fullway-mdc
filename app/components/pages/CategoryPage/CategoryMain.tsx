import Image from "next/image";
import WidgetCategory from "@components/Widget/WidgetCategory";
import CategoryFeaturedTires from "./CategoryFeaturedTires";

const CategoryMain = () => {

  return (
    <div className="w-full relative">
      <Image
        src="/images/ProductPage/prodBg.jpg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover h-[304rem] md:h-[138.5625rem] w-full"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/100 via-transparent via-30% to-neutral-900/0" />

      <div className="absolute md:inset-0 -top-[1rem] flex flex-col md:flex-row gap-[2rem] md:max-w-7xl md:mx-auto">
        <div className="mt-[3rem]">
          <WidgetCategory />
        </div>

        <CategoryFeaturedTires />
      </div>
    </div>
  );
};

export default CategoryMain;
