import GlobalPageHero from "../components/OurTiresPage/GlobalPageHero";
import Widget from "../components/Widget/Widget";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import BlogFeaturedTires from "../components/BlogPage/BlogFeaturedTires";

const BlogPage = () => {
  return (
    <main className="flex flex-col">
      <GlobalPageHero
        quote={"LET'S SHARE"}
        name={"BLOG"}
        desc={`We have a selected assortment of best performance tires for your vehicle, 
          making sure you don't have to worry whole year round and making sure the ride is as smooth as possible.`}
      />

      <BreadcrumbComp
        bgColor={"bg-black"}
        color={"text-white"}
        name={"Blog"}
        path={"/blog"}
      />

      <BlogFeaturedTires />

      <div id="widget" className="relative ">
        <div className="bg-fullwayGrey w-full h-[14.3125rem]" />
        <div className="absolute inset-0 flex justify-center items-start z-20 mt-[6rem]">
          <Widget titleStyle="text-black" />
        </div>
      </div>

      <div className=" flex bg-black w-full md:h-[6.3125rem] h-[26.3125rem] " />
     
    </main>
  );
};

export default BlogPage;
