import { PaginationComp } from "../../PaginationComp/PaginationComp";
import Image from "next/image";
import BlogCard from "./BlogCard";

const BlogFeaturedTires = () => {
  const posts = Array(6).fill({
    name: "HS 266",
    bgImage:
      "/images/HomePage/FeaturedTires/fulllway-suv-bg-image-placeholder.jpg",
    userFullName: "John Deer",
    date: "July 4th, 2025",
  });

  return (
    <div className="relative w-full">
      <Image
        src="/images/ProductPage/prodBg.jpg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover w-full h-[218rem] md:h-[78.25rem]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/100 via-transparent via-30% to-neutral-900/0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col items-center gap-[4rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem] items-center md:justify-between">
            {posts.map((post, idx) => (
              <BlogCard
                key={idx}
                name={post.name}
                bgImage={post.bgImage}
                userFullName={post.userFullName}
                date={post.date}
              />
            ))}
          </div>

          <PaginationComp />
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedTires;
