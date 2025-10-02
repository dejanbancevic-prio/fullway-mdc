import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogPageQuery } from "@/lib/__generated__/graphql";

type BlogItem = NonNullable<
  NonNullable<BlogPageQuery["awBlogPosts"]>["items"]
>[number];

type BlogCardProps = {
  blog: BlogItem;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  const bgImage =
    "/images/HomePage/FeaturedTires/fulllway-suv-bg-image-placeholder.jpg";

  const formattedDate = blog?.publish_date
    ? new Date(blog.publish_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const author =
    blog?.authors && blog.authors.length > 0
      ? `${blog?.authors[0]?.firstname ?? ""} ${blog?.authors[0]?.lastname ??
          ""}`.trim()
      : "Unknown Author";

  return (
    <div className="relative w-[21.5rem] h-[31.125rem] shadow-2xl ">
      <div className=" pl-[0.3rem] pr-[2.2rem] md:px-0">
        <Image
          src={bgImage}
          alt="SUV Background"
          width={1920}
          height={1080}
          className="object-cover skew-x-[-3deg] w-[21.5rem] h-[31.125rem] "
        />
      </div>

      <div className="absolute inset-[0rem] mx-[0.3rem] mr-[2.2rem] md:mx-0 bg-black/30 skew-x-[-3deg]" />
      <div className="absolute inset-[0rem] mx-[0.3rem] mr-[2.2rem] md:mx-0 bg-black/30 skew-x-[-3deg]" />

      <Image
        src="/icons/logo/Fullway-Logo-White.svg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className="absolute top-[2rem] left-[3rem] w-[174px] h-[33px]"
      />

      <div className="absolute bottom-[2.25rem] left-[2.5rem] w-full">
        <p className="font-[300] text-[0.75rem] italic">Reviews</p>
        <h3 className="font-[600] text-[1.75rem] leading-none mt-[0.62rem] pr-[5rem]">
          {blog?.title}
        </h3>
        <p className="font-[400] pr-[10rem] md:pr-0">
          {author} • {formattedDate}
        </p>
        <Button className="buttonSkew group text-base font-[700] gap-[0.5rem] mt-[1.37rem]">
          <Link
            href={`/blog/${blog?.url_key}`}
            className="flex justify-between"
          >
            READ MORE
            <Image
              src="/icons/arrows/Icon=Arrow-Color=White.svg"
              alt="Arrow 3"
              width={1920}
              height={1080}
              className="w-auto h-auto pl-[0.5rem] group-hover:opacity-0"
            />
            <Image
              src="/icons/arrows/Icon=Arrow-Color=Dark.svg"
              alt="Arrow 3"
              width={1920}
              height={1080}
              className="w-auto h-auto pl-[0.5rem] absolute right-[1rem] top-[0.6rem] opacity-0 group-hover:opacity-100"
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
