"use client";

import { useState } from "react";
import { useLazyQuery } from "@apollo/client/react";
import {
  AllProductsWidgetDocument,
  AllProductsWidgetQuery,
  AllProductsWidgetQueryVariables,
} from "@lib/__generated__/graphql";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import WidgetBySizeContent from "./WidgetBySizeContent/WidgetBySizeContent";
import WidgetByVehicleContent from "./WidgetByVehicleContent/WidgetByVehicleContent";
import { WidgetConfigurableProductItem } from "@lib/types/widget/widget.types";
import { ProductVariant } from "@lib/types/product/product.types";

type WidgetProps = {
  titleStyle?: string;
};

const Widget = ({ titleStyle }: WidgetProps) => {
  // const [getTireSizes, { data, loading }] = useLazyQuery(TireSizesDocument);

  const [selectedWidth, setSelectedWidth] = useState<string>("");
  const [selectedAr, setSelectedAr] = useState<string>("");
  const [selectedDiameter, setSelectedDiameter] = useState<string>("");

  const router = useRouter();

  const [allProducts, setAllProducts] = useState<
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

    sessionStorage.setItem("filteredProducts", JSON.stringify(filtered));

    router.push("/category");
  };

  return (
    <div className="flex flex-col md:max-w-7xl md:mx-auto w-full">
      <div
        className={`${titleStyle} "flex flex-col leading-none mb-[0.5rem] mx-[1rem] md:mx-[0rem]`}
      >
        <p className="font-[500] italic text-[1.125rem] ">TIRES JUST FOR YOU</p>

        <div className="hidden md:flex gap-[1rem] text-[2.25rem] md:text-[3rem] font-[700] md:font-[800] italic">
          <h2>LET&apos;S FIND YOUR MATCH! </h2>
        </div>

        <div className="md:hidden flex gap-[1rem] text-[2.25rem] md:text-[3rem] font-[700] md:font-[800] italic">
          <p>
            LET&apos;S FIND YOUR <br /> MATCH!
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="bg-white w-[66.75rem] h-[26rem] md:h-[7.375rem] mt-[2.25rem]" />

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
              <WidgetBySizeContent
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
            <TabsContent value="vehicle">
              <WidgetByVehicleContent />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Widget;
