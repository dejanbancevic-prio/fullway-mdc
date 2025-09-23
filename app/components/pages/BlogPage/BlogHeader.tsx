"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { currentPageVar, searchVar, selectedTagVar } from "@/lib/cache";
import { useReactiveVar } from "@apollo/client/react";
import { useState } from "react";

type BlogHeaderProps = {
  tags: string[];
};

const BlogHeader = ({ tags }: BlogHeaderProps) => {
  const selectedTag = useReactiveVar(selectedTagVar);
  const currentPage = useReactiveVar(currentPageVar);
  const searchValue = useReactiveVar(searchVar);

  const [localSearch, setLocalSearch] = useState(searchValue);

  const handleSearch = () => {
    searchVar(localSearch);
    currentPageVar(1);
  };

  return (
    <div className="flex w-full h-[12.375rem] md:h-[4.375rem] bg-[#141414]">
      <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col md:flex-row justify-between items-between md:gap-[2.25rem]">
        <div className="bg-[#141414] md:hidden h-[1.5rem] "/>
        <div className="flex flex-col md:justify-between h-full w-full ">
          <p>Page {currentPage}</p>
          <div className="hidden gap-[0.5rem] md:flex md:items-end ">
            <p>Tags:</p>
            <Button
              className={`px-[0.5rem] pt-[1.25rem] underline cursor-pointer hover:text-fullwayGrey ${
                !selectedTag ? "text-red-500" : "text-white"
              }`}
              onClick={() => selectedTagVar("")}
            >
              Show All
            </Button>
            {tags.map((tag) => (
              <Button
                key={tag}
                className={`p-0 pt-[0.6rem] underline cursor-pointer hover:text-fullwayGrey ${
                  selectedTag === tag ? "text-red-500" : "text-white"
                }`}
                onClick={() => selectedTagVar(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>

          <div className="md:hidden flex w-full justify-between items-center">
            <div className="flex gap-[0.5rem] items-center ">
              <p>Tags:</p>
              <Button
                className={`  underline cursor-pointer hover:text-fullwayGrey ${
                  !selectedTag ? "text-red-500" : "text-white"
                }`}
                onClick={() => selectedTagVar("")}
              >
                Show All
              </Button>
            </div>
            <div className="flex justify-center items-center gap-[0.5rem]">
              <Image
                src="/icons/other/Icon=Filter-Color=White.svg"
                alt="Filter Icon"
                width={1920}
                height={1080}
                className="w-[1rem] h-[1rem]"
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
              value={localSearch!}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="rounded-none md:w-[26.25rem] h-[3rem]"
            />
            <Button
              onClick={handleSearch}
              className="bg-white text-black rounded-none italic h-[3rem] text-base font-[600] hover:text-white cursor-pointer"
            >
              SEARCH
            </Button>
          </div>
          <div className="bg-[#141414] h-[1.5rem] md:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
