"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { currentPageVar, searchVar, selectedTagsVar } from "@/lib/cache";
import { useReactiveVar } from "@apollo/client/react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type BlogHeaderProps = {
  tags: string[];
};

const BlogHeader = ({ tags }: BlogHeaderProps) => {
  const selectedTag = useReactiveVar(selectedTagsVar);
  const currentPage = useReactiveVar(currentPageVar);
  const searchValue = useReactiveVar(searchVar);

  const [localSearch, setLocalSearch] = useState(searchValue);
  const [tempSelectedTags, setTempSelectedTags] = useState<string[]>(
    selectedTagsVar()
  );

  const handleSearch = () => {
    searchVar(localSearch);
    currentPageVar(1);
  };

  return (
    <div className="flex w-full h-[12.375rem] md:h-[4.375rem] bg-[#141414]">
      <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col md:flex-row justify-between items-between md:gap-[2.25rem]">
        <div className="bg-[#141414] md:hidden h-[1.5rem] " />
        <div className="flex flex-col md:justify-between h-full w-full ">
          <p>Page {currentPage}</p>

          <div className="hidden gap-[0.5rem] md:flex md:items-end ">
            <p>Tags:</p>

            {tags.map((tag) => {
              const isSelected = selectedTagsVar().includes(tag);

              return (
                <Button
                  key={tag}
                  className={`p-0 pt-[0.7rem] underline cursor-pointer hover:text-fullwayGrey ${
                    isSelected ? "text-red-500" : "text-white"
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      selectedTagsVar(
                        selectedTagsVar().filter((t) => t !== tag)
                      );
                    } else {
                      selectedTagsVar([...selectedTagsVar(), tag]);
                    }
                    currentPageVar(1);
                  }}
                >
                  {tag}
                </Button>
              );
            })}
          </div>

          <div className="md:hidden flex w-full justify-between items-center">
            <div className="flex gap-[0.5rem] items-center ">
              <p>Tags:</p>
              <Button
                className={`bg-transparent underline cursor-pointer ${
                  selectedTagsVar().length === 0 ||
                  selectedTagsVar().includes("Reviews")
                    ? "text-fullwayRed"
                    : "text-white"
                }`}
                onClick={() => selectedTagsVar([])}
              >
                Reviews
              </Button>
            </div>
            <div className="flex justify-center items-center gap-[0.5rem]">
              <Drawer>
                <DrawerTrigger asChild>
                  <Image
                    src="/icons/other/Icon=Filter-Color=White.svg"
                    alt="Filter Icon"
                    width={1920}
                    height={1080}
                    className="w-[1rem] h-[1rem]"
                  />
                  {/* <Button className="bg-transparent underline m-0 p-0 text-[1rem] cursor-pointer">
                    Filter
                  </Button> */}
                </DrawerTrigger>

                <DrawerContent className="p-6">
                  <DrawerHeader>
                    <DrawerTitle></DrawerTitle>
                  </DrawerHeader>

                  <div className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col gap-[4rem] text-black ">
                      <div className="flex gap-[0.5rem] items-center">
                        <Image
                          src="/icons/other/Icon=Filter-Color=Dark.svg"
                          alt="Filter Icon"
                          width={1920}
                          height={1080}
                          className="w-[1rem] h-[1rem]"
                        />
                        Filter
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-[1rem] px-[0.7rem] my-[4rem]">
                      {tags.map((tag) => {
                        const isSelected = tempSelectedTags.includes(tag);
                        return (
                          <Button
                            key={tag}
                            className={`bg-white text-black border rounded-none font-[700] px-[1.5rem] italic ${
                              isSelected ? "bg-black text-white" : ""
                            }`}
                            onClick={() => {
                              if (isSelected) {
                                setTempSelectedTags(
                                  tempSelectedTags.filter((t) => t !== tag)
                                );
                              } else {
                                setTempSelectedTags([...tempSelectedTags, tag]);
                              }
                            }}
                          >
                            {tag}
                          </Button>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-[1rem] ">
                      <DrawerTrigger asChild>
                        <Button
                          className="buttonSkew-white font-[700] px-[1.5rem]"
                          onClick={() => {
                            selectedTagsVar(tempSelectedTags);
                            currentPageVar(1);
                          }}
                        >
                          FILTER
                        </Button>
                      </DrawerTrigger>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
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
          <div className="bg-[#141414] h-[1.5rem] md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
