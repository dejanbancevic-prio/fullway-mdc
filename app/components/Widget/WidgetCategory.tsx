"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PopoverWidget from "@components/Popover/PopoverWidget";
import { useEffect, useState } from "react";
import {
  ProductVariant,
  SectionWidthItem,
  WidgetConfigurableProductItem,
} from "@lib/types";
import { useLazyQuery } from "@apollo/client/react";
import {
  AllProductsWidgetDocument,
  AllProductsWidgetQuery,
  AllProductsWidgetQueryVariables,
} from "@lib/__generated__/graphql";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type WidgetCategoryProps = {
  sectionWidth?: SectionWidthItem;
  onFilteredProductsChange: (products: WidgetConfigurableProductItem[]) => void;
};

const WidgetCategory = ({
  sectionWidth,
  onFilteredProductsChange,
}: WidgetCategoryProps) => {
  // const [getTireSizes, { data, loading }] = useLazyQuery(TireSizesDocument);

  const [selectedWidth, setSelectedWidth] = useState<string>("");
  const [selectedAr, setSelectedAr] = useState<string>("");
  const [selectedDiameter, setSelectedDiameter] = useState<string>("");

  const [allProducts, setAllProducts] = useState<
    WidgetConfigurableProductItem[]
  >([]);
  const [filteredProducts, setFilteredProducts] = useState<
    WidgetConfigurableProductItem[]
  >([]);

  const [getProducts, { loading }] = useLazyQuery<
    AllProductsWidgetQuery,
    AllProductsWidgetQueryVariables
  >(AllProductsWidgetDocument);

  // useEffect(() => {
  //   if (!selectedWidth) return;

  //   const variables: TireSizesQueryVariables = {
  //     input: {
  //       section_width: Number(selectedWidth),
  //       ...(selectedAr ? { aspect_ratio: Number(selectedAr) } : {}),
  //       ...(selectedRim ? { rim_diameter: Number(selectedRim) } : {}),
  //     },
  //   };

  //   getTireSizes({ variables });
  // }, [selectedWidth, selectedAr, getTireSizes]);

  // const handleFindTire = () => {
  //   if (!selectedWidth) return;

  //   const variables: TireSizesQueryVariables = {
  //     input: {
  //       section_width: Number(selectedWidth),
  //       ...(selectedAr ? { aspect_ratio: Number(selectedAr) } : {}),
  //       ...(selectedRim ? { rim_diameter: Number(selectedRim) } : {}),
  //     },
  //   };

  //   getTireSizes({ variables });
  // };

  const handleFindTire = async () => {
    let products: WidgetConfigurableProductItem[] = allProducts;

    if (allProducts.length === 0) {
      const result = await getProducts({
        variables: {
          urlKeys: [
            "hp108",
            "hs266",
            "pc369",
            "pc368",
            "hs998",
            "hp208",
            "hs288",
          ],
        },
      });

      products =
        result.data?.products?.items?.filter(
          (item): item is WidgetConfigurableProductItem =>
            item?.__typename === "ConfigurableProduct"
        ) || [];

      setAllProducts(products);
    }

    const filtered: WidgetConfigurableProductItem[] = [];

    products.forEach((item) => {
      if (!item.variants) return;

      const matchingVariants = item.variants.filter(
        (v): v is ProductVariant => {
          const variant = v?.product;
          if (!variant || variant.stock_status !== "IN_STOCK") return false;

          const matchWidth = selectedWidth
            ? Number(variant.section_width_text) === Number(selectedWidth)
            : true;

          const matchAr = selectedAr
            ? Number(variant.aspect_ratio_text) === Number(selectedAr)
            : true;

          const matchDiameter = selectedDiameter
            ? Math.floor(Number(variant.rim_diameter_text)) ===
              Number(selectedDiameter)
            : true;

          return matchWidth && matchAr && matchDiameter;
        }
      );

      if (matchingVariants.length > 0) {
        filtered.push({ ...item, variants: matchingVariants });
      }
    });

    setFilteredProducts(filtered);
    onFilteredProductsChange(filtered);
  };

  return (
    <div className="flex flex-col">
      <div className={`flex flex-col leading-none mb-[0.5rem] mx-[1rem]`}>
        <p className="font-[500] italic text-[1.125rem] ">TIRES JUST FOR YOU</p>
        <div className="text-[2.25rem] font-[700] italic">
          <h2>LET&apos;S FIND YOUR MATCH! </h2>
        </div>
      </div>
      {/* <pre>{JSON.stringify(data?.getTireSize?.aspect_ratios, null, 2)}</pre> */}
      <div className="relative w-full">
        <div className="bg-white w-[23.75rem] h-[26rem] mt-[2.25rem]" />

        <div className="absolute inset-0">
          <Tabs
            defaultValue="size"
            className="w-[25rem] text-black ml-[0.3rem]"
          >
            <TabsList className="skew-x-[-15deg] rounded-none mb-[1rem]">
              <TabsTrigger
                value="size"
                className="rounded-none w-[9.0625rem] font-[700]"
              >
                BY SIZE
              </TabsTrigger>
              <TabsTrigger
                value="vehicle"
                className="rounded-none w-[9.0625rem] font-[700]"
              >
                BY VEHICLE
              </TabsTrigger>
            </TabsList>
            <TabsContent value="size">
              {loading ? (
                <div className="flex flex-col gap-[1rem] pr-[2rem] items-center">
                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Width</p>
                    <Skeleton className="w-[17.125rem] h-[2.5rem] rounded-md" />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Aspect Ratio</p>
                    <Skeleton className="w-[17.125rem] h-[2.5rem] rounded-md" />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Diameter</p>
                    <Skeleton className="w-[17.125rem] h-[2.5rem] rounded-md" />
                  </div>

                  <Button
                    onClick={handleFindTire}
                    disabled={loading}
                    className="buttonWidget"
                  >
                    FIND TIRE
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-[1rem] pr-[2rem] items-center">
                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Width</p>
                    <Input
                      placeholder="Width"
                      className="rounded-none w-[17.125rem]"
                      value={selectedWidth}
                      onChange={(e) => setSelectedWidth(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Aspect Ratio</p>
                    <Input
                      placeholder="Aspect Ratio"
                      className="rounded-none w-[17.125rem]"
                      value={selectedAr}
                      onChange={(e) => setSelectedAr(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Diameter</p>
                    <Input
                      placeholder="Diameter"
                      className="rounded-none w-[17.125rem]"
                      value={selectedDiameter}
                      onChange={(e) => setSelectedDiameter(e.target.value)}
                    />
                  </div>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="inline-block">
                        <Button
                          onClick={handleFindTire}
                          disabled={
                            loading ||
                            !selectedWidth ||
                            !selectedAr ||
                            !selectedDiameter
                          }
                          className="buttonWidget"
                        >
                          FIND TIRE
                        </Button>
                      </div>
                    </HoverCardTrigger>

                    {(!selectedWidth || !selectedAr || !selectedDiameter) && (
                      <HoverCardContent className="text-[0.75rem] font-[600] text-center bg-neutral-800 text-white border-none">
                        Please fill in all fields first.
                      </HoverCardContent>
                    )}
                  </HoverCard>
                </div>
              )}
            </TabsContent>
            <TabsContent value="vehicle">
              <div className="flex flex-col gap-[1rem] pr-[2rem] items-center">
                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Year</p>
                  <Input
                    placeholder="Year"
                    className="rounded-none w-[17.125rem]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Make</p>
                  <Input
                    placeholder="Make"
                    className="rounded-none w-[17.125rem]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Model</p>
                  <Input
                    placeholder="Model"
                    className="rounded-none w-[17.125rem] "
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Trim</p>
                  <Input
                    placeholder="Trim"
                    className="rounded-none w-[17.125rem] "
                  />
                </div>

                <Button className="buttonWidget">FIND TIRE</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WidgetCategory;
