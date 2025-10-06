import AboutFactory from "../components/pages/AboutUsPage/AboutFactory";
import AboutHeroBanner from "../components/pages/AboutUsPage/AboutHeroBanner";
import Certification from "../components/pages/AboutUsPage/Certification";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import FeaturedTires from "../components/FeaturedTires/FeaturedTires";

export const metadata = {
  title: "Learn more about the Fullway mission and company values",
  description:
    "Learn about the Fullway Tires core mission. We're driven by our deep commitment to global engineering standards, innovative technology, and superior quality.",
};

const AboutUsPage = () => {
  return (
    <main className="flex flex-col">
      <AboutHeroBanner />

      <BreadcrumbComp
        bgColor={"bg-fullwayGrey"}
        color={"text-black"}
        nestedFirst={"About Us"}
        pathFirst={"/about-us"}
      />

      <AboutFactory />

      <Certification />

      <FeaturedTires />
    </main>
  );
};

export default AboutUsPage;
