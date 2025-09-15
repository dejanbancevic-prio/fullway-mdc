import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react"; // using lucide-react icons

const BlogHeader = () => {
  return (
    <div className="flex w-full h-[4.375rem] mt-[3rem] md:mb-[0rem] mb-[10rem]">
      <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col md:flex-row justify-between items-center gap-[2.12rem] md:gap-[2.25rem]">
        <div className="flex flex-col justify-between h-full w-full ">
          <p>Page 2</p>
          <div className="gap-[0.5rem] hidden md:flex">
            <p>Tags:</p>
            <Link href="/blog" className="underline">
              Reviews
            </Link>

            <Link href="/blog" className="underline">
              Informative
            </Link>

            <Link href="/blog" className="underline">
              Summer
            </Link>

            <Link href="/blog" className="underline">
              Winter
            </Link>

            <Link href="/blog" className="underline">
              All Season
            </Link>
          </div>

          <div className="md:hidden flex w-full justify-between items-center">
            <div className="flex gap-[0.5rem] ">
              <p>Tags:</p>
              <Link href="/blog" className="underline text-fullwayRed">
                Reviews
              </Link>
            </div>
            <div className="flex justify-center items-center gap-[0.5rem]">
              <Image
                src="/icons/other/Icon=Filter-Color=White.svg"
                alt="Filter Icon"
                width={1920}
                height={1080}
                className="w-[1rem] h-[1rem] "
              />
              <Button className="bg-transparent underline m-0 p-0 text-[1rem] cursor-pointer">
                Filter
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.3rem]">
          <Label htmlFor="Search">Search blog:</Label>
          <div className="flex">
            <Input
              type="search"
              placeholder="Search blog here"
              className="rounded-none md:w-[26.25rem] h-[3rem]"
            />
            <Button className="bg-white text-black rounded-none italic h-[3rem] text-base font-[600] hover:text-white cursor-pointer">
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
