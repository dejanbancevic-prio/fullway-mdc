"use client";

import { useEffect, useState } from "react";
import { useQuery, useReactiveVar } from "@apollo/client/react";
import {
  BlogPageByTagDocument,
  BlogPageDocument,
  BlogPageQuery,
} from "@/lib/__generated__/graphql";
import BlogCard from "./BlogCard";
import { PaginationComp } from "../../PaginationComp/PaginationComp";
import Image from "next/image";
import { currentPageVar, searchVar, selectedTagsVar } from "@/lib/cache";
import tempFullwayBlogs from "../../../../lib/tempFullwayBlogs.json";

type BlogItem = NonNullable<
  NonNullable<BlogPageQuery["awBlogPosts"]>["items"]
>[number];

type BlogFeaturedTiresProps = {
  initialBlogs: BlogItem[];
  totalCount: number;
  pageSize: number;
  initialPage: number;
  keyword: string;
};

const BlogFeaturedTires = ({
  initialBlogs,
  totalCount,
  pageSize,
  initialPage,
  keyword,
}: BlogFeaturedTiresProps) => {
  const currentPage = useReactiveVar(currentPageVar);
  const selectedTags = useReactiveVar(selectedTagsVar);
  const searchValue = useReactiveVar(searchVar) ?? "";

  const [blogs, setBlogs] = useState<BlogItem[]>(initialBlogs);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalCount / pageSize)
  );

  useEffect(() => {
    currentPageVar(1);
  }, [selectedTags]);

  useEffect(() => {
    let filteredBlogs = tempFullwayBlogs.awBlogPosts.items ?? [];

    if (keyword) {
      const cleanKeyword = keyword.replace(/%/g, "").toLowerCase();
      filteredBlogs = filteredBlogs.filter((b) =>
        b.title?.toLowerCase().includes(cleanKeyword)
      );
    }

    if (selectedTags.length > 0) {
      filteredBlogs = filteredBlogs.filter((b) =>
        b.tags.items.some((tag) => selectedTags.includes(tag.name))
      );
    }

    if (searchValue?.trim() !== "") {
      filteredBlogs = filteredBlogs.filter((b) =>
        b.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    const startIdx = (currentPage - 1) * pageSize;
    const paginatedBlogs = filteredBlogs.slice(startIdx, startIdx + pageSize);

    setBlogs(paginatedBlogs);
    setTotalPages(Math.ceil(filteredBlogs.length / pageSize));
  }, [currentPage, selectedTags, searchValue, keyword, pageSize]);

  return (
    <div className="relative w-full">
      <Image
        src="/images/ProductPage/prodBg.jpg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover w-full h-[218rem] md:h-[78.25rem]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/100 via-transparent via-30% to-neutral-900/0" />

      <div className="absolute inset-0 flex flex-col items-start justify-start">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] md:mt-[2.25rem] w-full flex flex-col items-center gap-[4rem]">
          {blogs.length === 0 ? (
            <div className="flex items-center justify-center py-20 text-white">
              No blogs found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem] items-center md:justify-between">
              {blogs.map((blog, idx) => (
                <BlogCard key={idx} blog={blog} />
              ))}
            </div>
          )}

          {totalPages > 1 && searchValue === "" && (
            <PaginationComp
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={currentPageVar}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedTires;