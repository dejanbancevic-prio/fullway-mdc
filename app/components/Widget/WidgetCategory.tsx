"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client/react";
import {
  AllProductsWidgetDocument,
  AllProductsWidgetQuery,
  AllProductsWidgetQueryVariables,
} from "@lib/__generated__/graphql";
import WidgetCategoryBySizeContent from "./WidgetBySizeContent/WidgetCategoryBySizeContent";
import { WidgetConfigurableProductItem } from "@lib/types/widget/widget.types";
import { ProductVariant } from "@lib/types/product/product.types";

type WidgetCategoryProps = {
  onFilteredProductsChange: (products: WidgetConfigurableProductItem[]) => void;
};

const WidgetCategory = ({ onFilteredProductsChange }: WidgetCategoryProps) => {
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
                className="rounded-none w-[9.0625rem] font-[700] bg-[#E0E0E0]"
              >
                BY SIZE
              </TabsTrigger>
            </TabsList>
            <TabsContent value="size">
              <WidgetCategoryBySizeContent
                loading={loading}
                selectedWidth={selectedWidth}
                setSelectedWidth={setSelectedWidth}
                selectedAr={selectedAr}
                setSelectedAr={setSelectedAr}
                selectedDiameter={selectedDiameter}
                setSelectedDiameter={setSelectedDiameter}
                handleFindTire={handleFindTire}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WidgetCategory;
