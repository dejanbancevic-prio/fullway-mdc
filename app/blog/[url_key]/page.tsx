import { BreadcrumbComp } from "@/app/components/Breadcrump/Breadcrumb";
import DynamicBlogMain from "@/app/components/pages/BlogPage/DynamicBlogMain";
import GlobalPageHero from "@components/pages/OurTiresPage/GlobalPageHero";
import tempFullwayBlogs from "@lib/json/tempFullwayBlogs.json";

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
      <GlobalPageHero
        name={"BLOG"}
        desc={`We have a selected assortment of best performance tires for your vehicle, 
          making sure you don't have to worry whole year round and making sure the ride is as smooth as possible.`}
      />

      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Blog"}
        pathFirst={"/blog"}
        nestedSecond={blog?.title}
        pathSecond={blog?.url_key}
      />

      <div className="bg-[#141414] w-full">
        <h2 className="font-[500] text-[1.125rem] italic md:max-w-7xl md:mx-auto mx-[1rem] pt-[0.5rem]">
          REVIEW
        </h2>
      </div>

      <DynamicBlogMain blog={blog} />
    </main>
  );
};

export default DynamicBlogPage;
