import GlobalPageHero from "../components/pages/OurTiresPage/GlobalPageHero";
import Widget from "../components/Widget/Widget";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import BlogFeaturedTires from "../components/pages/BlogPage/BlogFeaturedTires";
import BlogHeader from "../components/pages/BlogPage/BlogHeader";
import { apolloClient } from "@/lib/apollo";
import {
  BlogPageQuery,
  BlogPageQueryVariables,
  BlogPageDocument,
} from "@/lib/__generated__/graphql";

const BlogPage = async () => {
  const pageSize = 6;
  const currentPage = 1;
  const keyWord = "%michelin%"; //michelin  //fullway

  const { data } = await apolloClient.query<
    BlogPageQuery,
    BlogPageQueryVariables
  >({
    query: BlogPageDocument,
    variables: {
      keyWord: keyWord,
      currentPage: currentPage,
      pageSize: pageSize,
    },
  });

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
        quote={"LET'S SHARE"}
        name={"BLOG"}
        desc={`We have a selected assortment of best performance tires for your vehicle, 
          making sure you don't have to worry whole year round and making sure the ride is as smooth as possible.`}
      />

      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        name={"Blog"}
        path={"/blog"}
      />

      <BlogHeader tags={uniqueTags} />

      <BlogFeaturedTires
        initialBlogs={blogs}
        totalCount={totalCount}
        pageSize={pageSize}
        initialPage={currentPage}
        keyword={keyWord}
      />

      <div id="widget" className="relative ">
        <div className="bg-fullwayGrey w-full h-[14.3125rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[6rem]">
          <Widget titleStyle="text-black" />
        </div>
      </div>

      <div className="flex bg-black w-full md:h-[6.3125rem] h-[26.3125rem]" />
    </main>
  );
};

export default BlogPage;
