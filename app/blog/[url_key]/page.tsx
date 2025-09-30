import { BreadcrumbComp } from "@/app/components/Breadcrump/Breadcrumb";
import DynamicBlogMain from "@/app/components/pages/BlogPage/DynamicBlogMain";
import tempFullwayBlogs from "../../../lib/tempFullwayBlogs.json";

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
