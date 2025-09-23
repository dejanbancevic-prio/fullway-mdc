"use client";

import { useEffect, useState } from "react";
import { useQuery, useReactiveVar } from "@apollo/client/react";
import {
  BlogPageByTagDocument,
  BlogPageDocument,
} from "@/lib/__generated__/graphql";
import BlogCard from "./BlogCard";
import { PaginationComp } from "../../PaginationComp/PaginationComp";
import Image from "next/image";
import { currentPageVar, searchVar, selectedTagVar } from "@/lib/cache";

type BlogFeaturedTiresProps = {
  initialBlogs: any[];
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
  const selectedTag = useReactiveVar(selectedTagVar);
  const searchValue = useReactiveVar(searchVar);

  useEffect(() => {
    currentPageVar(1);
  }, [selectedTag]);

  const hasTag = selectedTag && selectedTag.trim() !== "";

  const { data, loading, networkStatus } = hasTag
    ? useQuery(BlogPageByTagDocument, {
        variables: {
          keyWord: keyword,
          currentPage,
          pageSize,
          tag_name: selectedTag,
        },
        notifyOnNetworkStatusChange: true,
      })
    : useQuery(BlogPageDocument, {
        variables: { keyWord: keyword, currentPage, pageSize },
        notifyOnNetworkStatusChange: true,
      });

  const rawBlogs =
    currentPage === initialPage && !selectedTag
      ? initialBlogs
      : data?.awBlogPosts?.items ?? [];

  const blogs =
    searchValue?.trim() === ""
      ? rawBlogs
      : rawBlogs.filter((blog) =>
          blog.title?.toLowerCase().includes(searchValue?.toLowerCase())
        );

  const totalCountWithTag = data?.awBlogPosts?.total_count ?? totalCount;
  const totalPages = Math.ceil(totalCountWithTag / pageSize);

  const isRefetching = networkStatus === 3;

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
          {loading || isRefetching ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
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
