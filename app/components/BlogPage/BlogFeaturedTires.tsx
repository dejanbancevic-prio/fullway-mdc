import { PaginationComp } from "../PaginationComp/PaginationComp";
import Image from "next/image";

const BlogFeaturedTires = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/black.jpg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover h-[218rem] md:h-[78.25rem] w-full"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/100 via-transparent via-30% to-neutral-900/0" />

      <div className="absolute md:inset-0 -top-[17rem] flex items-center py-[3rem]">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col items-center gap-[2.12rem] md:gap-[12rem]">
          <PaginationComp />
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedTires;
