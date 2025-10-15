import GlobalPageHero from "@components/pages/OurTiresPage/GlobalPageHero";
import { BreadcrumbComp } from "@components/Breadcrump/Breadcrumb";
import BlogFeaturedTires from "@components/pages/BlogPage/BlogFeaturedTires";
import BlogHeader from "@components/pages/BlogPage/BlogHeader";
import tempFullwayBlogs from "@lib/json/tempFullwayBlogs.json";
import Widget from "@components/Widget/Widget";

export const metadata = {
  title: "Find out about our products an more in our Education hub",
  description:
    "Visit the Fullway Education Hub for expert tips on tire maintenance, safety, and performance. Make smarter, more confident decisions about your tires.",
};

const BlogPage = async () => {
  const pageSize = 6;
  const currentPage = 1;
  const keyWord = "%fullway%"; //michelin //fullway

  const data = tempFullwayBlogs;

  const blogs = data?.awBlogPosts?.items ?? [];
  const totalCount = data?.awBlogPosts?.total_count ?? 0;

  const tagSet = new Set<string>();
  blogs.forEach((blog) =>
    blog?.tags?.items?.forEach((tag) => {
      if (tag?.name) tagSet.add(tag.name);
    })
  );

  const uniqueTags = Array.from(tagSet);

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
      />

      <div className="bg-[#141414] w-full">
        <h2 className="font-[500] text-[1.125rem] italic md:max-w-7xl md:mx-auto mx-[1rem] pt-[0.5rem]">
          LET&apos;S SHARE
        </h2>
      </div>

      <BlogHeader tags={uniqueTags} />

      <BlogFeaturedTires
        initialBlogs={blogs}
        totalCount={totalCount}
        pageSize={pageSize}
        initialPage={currentPage}
        keyword={keyWord}
      />

      <div id="widget" className="relative scroll-mt-[8rem]">
        <div className="bg-fullwayGrey w-full md:h-[14.3125rem] h-[11.5rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[3rem]">
          <Widget titleStyle="text-black" />
        </div>
      </div>

      <div className="flex bg-black w-full md:h-[4.3125rem] h-[26.3125rem]" />
    </main>
  );
};

export default BlogPage;
