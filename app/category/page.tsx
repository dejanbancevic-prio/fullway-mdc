import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import CategoryFeaturedTires from "../components/pages/CategoryPage/CategoryFeaturedTires";

const CategoryPage = () => {
  return (
    <main className="flex flex-col">
      <div className="h-[5rem] bg-[#141414]" />
      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Category"}
        pathFirst={"/category"}
      />

      <div className="flex ">
        <CategoryFeaturedTires />
      </div>
    </main>
  );
};

export default CategoryPage;
