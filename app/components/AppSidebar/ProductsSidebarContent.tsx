"use client";

import { useReactiveVar } from "@apollo/client/react";
import {
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  sidebarDataVar,
  sidebarSelectedProductRearVar,
  sidebarSelectedProductTypeVar,
  sidebarSelectedProductVar,
} from "@/lib/cache";
import Image from "next/image";
import { useState, useMemo } from "react";

type SidebarVariant = {
  label: string;
  url_key: string;
  stock_status: string;
  rim_diameter_text: string;
  selected?: boolean;
};

const ProductsSidebarContent = () => {
  const { toggleSidebar } = useSidebar();
  const data = useReactiveVar(sidebarDataVar) as SidebarVariant[];
  const sidebarSelectedProductType = useReactiveVar(
    sidebarSelectedProductTypeVar
  ) as "front" | "rear";

  const [search, setSearch] = useState("");
  const [openCollapsibles, setOpenCollapsibles] = useState<
    Record<string, boolean>
  >({});

  const filteredData = useMemo(() => {
    if (!search) return data;

    const searchLower = search.toLowerCase();
    return data.filter((variant) =>
      variant.label.toLowerCase().includes(searchLower)
    );
  }, [search, data]);

  const groupedData: Record<string, SidebarVariant[]> = filteredData.reduce(
    (acc, variant) => {
      const key = variant.rim_diameter_text || "Unknown";
      if (!acc[key]) acc[key] = [];
      acc[key].push(variant);
      return acc;
    },
    {} as Record<string, SidebarVariant[]>
  );

  const toggleCollapsible = (key: string) => {
    setOpenCollapsibles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-[0.5rem]">
      <div className="relative flex items-center justify-between mb-[1rem]">
        <input
          type="text"
          placeholder="Filter..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-[0.5rem] text-black border placeholder:text-gray-500 "
        />

        <div className=" absolute right-[0.5rem] text-sm text-gray-700 whitespace-nowrap">
          {filteredData.length} result{filteredData.length !== 1 ? "s" : ""}
        </div>
      </div>

      {Object.entries(groupedData).map(([rimDiameter, variants]) => {
        const isOpen = openCollapsibles[rimDiameter] ?? false;

        return (
          <Collapsible
            key={rimDiameter}
            open={isOpen}
            onOpenChange={() => toggleCollapsible(rimDiameter)}
            className="border text-black hover:!rounded-none"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild className="hover:!rounded-none">
                <SidebarMenuButton>
                  <div className="flex justify-between w-full py-[0.5rem] cursor-pointer">
                    <span>{rimDiameter}&rdquo;</span>
                    <Image
                      src="/icons/other/Color=Default.svg"
                      alt="Toggle"
                      width={1920}
                      height={1080}
                      className={`w-[1rem] h-[1rem] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent className="mt-[0.5rem] space-y-[0.5rem]">
                {variants.map((variant) => (
                  <SidebarMenuSub
                    key={variant.url_key}
                    className="flex w-full hover:bg-fullwayGrey cursor-pointer"
                    onClick={() => {
                      sidebarDataVar(
                        data.map((v) => ({
                          ...v,
                          selected: v.url_key === variant.url_key,
                        }))
                      );
                      sidebarSelectedProductType === "front"
                        ? sidebarSelectedProductVar(variant.url_key)
                        : sidebarSelectedProductRearVar(variant.url_key);
                      toggleSidebar();
                    }}
                  >
                    <div className="flex flex-col md:flex-row my-[0.5rem]">
                      {variant.label}
                      {variant.stock_status === "IN_STOCK" ? (
                        <div className="flex ml-[1rem] gap-[0.3rem] items-center">
                          <Image
                            src="/icons/other/greenCheck.svg"
                            alt="In Stock"
                            width={1920}
                            height={1080}
                            className="w-[1rem] h-[1rem]"
                          />
                          <p className="text-[#35D58A] font-[600] text-[0.75rem]">
                            In Stock
                          </p>
                        </div>
                      ) : (
                        <div className="flex gap-[0.3rem] items-center">
                          <Image
                            src="/icons/other/redX.svg"
                            alt="Out of Stock"
                            width={1920}
                            height={1080}
                            className="w-[1rem] h-[1rem]"
                          />
                          <p className="text-[#DC0014] font-[600] text-[0.75rem]">
                            Out of Stock
                          </p>
                        </div>
                      )}
                    </div>
                  </SidebarMenuSub>
                ))}
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default ProductsSidebarContent;
