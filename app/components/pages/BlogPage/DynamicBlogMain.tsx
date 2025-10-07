import Image from "next/image";
import { parsePageBuilderHtml } from "@/lib/blog/parser/parsePageBuilderHtml";
import PagebuilderTableOfContents from "./PagebuilderComponents/PagebuilderTableOfContents";
import SchemaScript from "../../SEO/SchemaScript";
import { getBlogSchema } from "../../SEO/seoSchemas";
import { BlogItem } from "@/lib/types";

type DynamicBlogMainProps = {
  blog: BlogItem | undefined;
};

const DynamicBlogMain = ({ blog }: DynamicBlogMainProps) => {
  if (!blog) return null;

  const { tocFound, tocItems, parsedContent } = parsePageBuilderHtml(
    blog.content!
  );

  const title = blog.title ?? "";
  const authorName = blog.authors?.[0]
    ? `${blog.authors[0].firstname} ${blog.authors[0].lastname}`
    : "Unknown";
  const dateFormatted = blog.publish_date
    ? new Date(blog.publish_date).toLocaleDateString()
    : "";

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

      <div className="relative z-10 flex flex-col items-center text-center w-full px-4 md:px-0 py-12 md:max-w-7xl md:mx-auto">
        <div className=" w-full text-center mb-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="text-gray-300 mt-2">
            {authorName} - {dateFormatted}
          </p>
        </div>

        {!tocFound && (
          <div className="mb-[2rem]">
            <PagebuilderTableOfContents items={tocItems} />
          </div>
        )}

        <div className="bg-[#1a1a1a] p-[1.5rem] rounded-lg w-full flex flex-col items-center mb-[2rem]">
          {parsedContent}
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogMain;
