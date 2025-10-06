import { BreadcrumbComp } from "@/app/components/Breadcrump/Breadcrumb";
import DynamicBlogMain from "@/app/components/pages/BlogPage/DynamicBlogMain";
import tempFullwayBlogs from "../../../lib/tempFullwayBlogs.json";
import Script from "next/script";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Read Your Tire's Sidewall: A Complete Guide",
  author: {
    "@type": "Person",
    name: "John Doe, Tire Expert",
  },
  datePublished: "2025-10-26",
  dateModified: "2025-10-26",
  image:
    "https://www.fullwaytires.com/blog/images/sidewall-guide.jpg",
  publisher: {
    "@type": "Organization",
    name: "Fullway Tires",
    logo: {
      "@type": "ImageObject",
      url:
        "https://www.fullwaytires.com/path/to/your/logo.png",
    },
  },
};

type DynamicBlogPageProps = {
  params: { url_key: string };
};

const DynamicBlogPage = async ({ params }: DynamicBlogPageProps) => {
  const { url_key } = await params;

  const blog = tempFullwayBlogs.awBlogPosts.items.find(
    (b) => b.url_key === url_key
  );

  return (
    <main className="flex flex-col">
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      <div className="flex bg-[#141414] w-full h-[6.3125rem]" />

      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Blog"}
        pathFirst={"/blog"}
        nestedSecond={blog?.title}
        pathSecond={blog?.url_key}
      />

      <DynamicBlogMain blog={blog} />
    </main>
  );
};

export default DynamicBlogPage;
