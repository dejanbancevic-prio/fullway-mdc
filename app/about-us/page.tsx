import AboutFactory from "../components/AboutUsPage/AboutFactory";
import AboutHeroBanner from "../components/AboutUsPage/AboutHeroBanner";
import Certification from "../components/AboutUsPage/Certification";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import FAQ from "../components/FAQ/FAQ";
import FeaturedTires from "../components/FeaturedTires/FeaturedTires";

const AboutUsPage = () => {
  return (
    <main className="flex flex-col">
      <AboutHeroBanner />

      <BreadcrumbComp
        bgColor={"bg-fullwayGrey"}
        color={"text-black"}
        name={"About Us"}
        path={"/about-us"}
      />

      <AboutFactory />

      <Certification />

      <FeaturedTires />

      <div className="md:hidden ">
        <FAQ />
      </div>
    </main>
  );
};

export default AboutUsPage;
