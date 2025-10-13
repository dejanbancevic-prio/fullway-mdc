import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { sidebarTypeVar } from "@/lib/cache";

const NavSidebarContent = () => {
  const { toggleSidebar } = useSidebar();

  const handleSidebarType = (sidebarType: string) => {
    sidebarTypeVar(sidebarType);
  };

  return (
    <div className="flex flex-col justify-between h-full w-full p-[1rem]">
      <div className="flex flex-col gap-[4rem] text-black ">
        <div className="flex justify-between w-full items-center">
          <Link href="/">
            <Image
              src="/icons/logo/Fullway-Logo.svg"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[8.5522rem] h-[1.8401rem]"
              onClick={toggleSidebar}
            />
          </Link>

          <Button
            className="bg-transparent hover:bg-transparent p-0 cursor-pointer"
            onClick={toggleSidebar}
          >
            <Image
              src="/icons/other/Icon=Exit-Color=Dark.svg"
              alt="Exit Icon"
              width={1920}
              height={1080}
              className="w-[1rem] h-[1rem]"
            />
          </Button>
        </div>

        <div className="flex flex-col justify-start items-start gap-[1rem] ">
          <Button
            className="bg-transparent text-black p-0"
            onClick={toggleSidebar}
          >
            <Link className="navMenuLink" href="/tires">
              OUR TIRES
            </Link>
          </Button>

          <Button
            className="bg-transparent text-black p-0"
            onClick={toggleSidebar}
          >
            <Link className="navMenuLink" href="/about-us">
              ABOUT US
            </Link>
          </Button>
          <Button
            className="bg-transparent text-black p-0"
            onClick={toggleSidebar}
          >
            <Link className="navMenuLink" href="/blog">
              BLOG
            </Link>
          </Button>
          <Button
            className="bg-transparent text-black p-0"
            onClick={toggleSidebar}
          >
            <Link className="navMenuLink" href="/contact">
              CONTACT
            </Link>
          </Button>
        </div>
      </div>

      <div className="h-[19.5rem]"></div>

      <div className="flex flex-col gap-[1rem] ">
        <Button
          onClick={() => handleSidebarType("cart")}
          className=" buttonSkew-white font-[700]  "
        >
          <Image
            src="/icons/other/Icon=Cart-Color=Dark.svg"
            alt="Cart Icon Hover"
            width={1920}
            height={1080}
            className="w-[1rem] h-[1rem] "
          />
          CART
        </Button>

        <Button className="buttonSkew-white font-[700] px-[1.5rem]">
          <Link href="/category">FIND TIRES</Link>
        </Button>
      </div>
    </div>
  );
};

export default NavSidebarContent;
