import Image from "next/image";
import { parsePageBuilderHtml } from "@/lib/blog/parser/parsePageBuilderHtml";
import PagebuilderTableOfContents from "./PagebuilderComponents/PagebuilderTableOfContents";
import SchemaScript from "@components/seo/SchemaScript";
import { getBlogSchema } from "@lib/seo/seoSchemas";
import { BlogItem } from "@/lib/types/blog/blog.types";
import Link from "next/link";
import React from "react";

type DynamicBlogMainProps = {
  blog: BlogItem | undefined;
};

const DynamicBlogMain = ({ blog }: DynamicBlogMainProps) => {
  if (!blog) return null;

  const { tocItems, parsedFullContent } = parsePageBuilderHtml(blog.content!);

  const title = blog.title ?? "";
  const authorName = blog.authors?.[0]
    ? `${blog.authors[0].firstname} ${blog.authors[0].lastname}`
    : "Unknown";
  const formattedDate = blog?.publish_date
    ? (() => {
        const date = new Date(blog.publish_date);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();

        const suffix =
          day % 10 === 1 && day !== 11
            ? "st"
            : day % 10 === 2 && day !== 12
            ? "nd"
            : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";

        return `${month} ${day}${suffix}, ${year}`;
      })()
    : "";

  const blogUrl = `https://www.fullwaytires.com/blog/${blog.url_key}`;

  const blogSchema = getBlogSchema(blog);

  return (
    <div className="relative w-full bg-black">
      <SchemaScript id={"blog-schema"} schema={blogSchema} />

      <div className="absolute inset-0 ">
        <Image
          src="/images/ProductPage/prodBg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full px-[1rem] md:px-0 py-[1rem] md:max-w-7xl md:mx-auto">
        <div className=" w-full text-center mb-[2rem] ">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        </div>

        <Image
          src="/images/BlogPage/blogHero.png"
          alt="Background"
          width={1920}
          height={1080}
          className="object-fit"
        />

        <div className="w-full flex flex-col items-center gap-[2.25rem]">
          <div className="w-full flex justify-between items-center font-[300] mt-[0.75rem] text-[1.25rem]">
            <p>
              {authorName}, {formattedDate}
            </p>
            <div className="flex gap-[0.75rem] items-center">
              Share on:
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  blogUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/socialMedia/Facebook-Icon.svg"
                  alt="Fullway Logo"
                  width={1920}
                  height={1080}
                  className="w-[1.563rem] h-[1.563rem]"
                />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  blogUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/socialMedia/LinkedIn-Icon.svg"
                  alt="Fullway Logo"
                  width={1920}
                  height={1080}
                  className="w-[1.563rem] h-[1.563rem]"
                />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  blogUrl
                )}&text=${encodeURIComponent("Check out this blog!")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/socialMedia/X-Icon.svg"
                  alt="Fullway Logo"
                  width={1920}
                  height={1080}
                  className="w-[1.563rem] h-[1.563rem]"
                />
              </Link>
            </div>
          </div>

          <div className="!flex !justify-between !gap-[3rem] !items-start !w-full ">
            <div className="w-full">
              <div className="mb-[2rem]">
                <PagebuilderTableOfContents items={tocItems} />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start text-start mb-[2rem]">
            {parsedFullContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogMain;
