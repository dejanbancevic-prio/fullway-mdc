"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProductPageQuery } from "@/lib/__generated__/graphql";
import ProductInfoTable from "./ProductInfoTable";
import { useState, useMemo } from "react";

type ProductItem = NonNullable<
  NonNullable<ProductPageQuery["products"]>["items"]
>[number];

type Variant = NonNullable<
  NonNullable<
    Extract<ProductItem, { __typename?: "ConfigurableProduct" }>
  >["variants"]
>[number];

type ProductInfoProps = {
  product: ProductItem;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const variants = (product?.__typename === "ConfigurableProduct"
    ? product.variants ?? []
    : []
  ).filter((v): v is Variant => v != null);

  const rimWidths = useMemo(() => {
    const widths = variants
      .map((v) => v?.product?.rim_diameter_text ?? null)
      .filter((w): w is string => Boolean(w));

    return Array.from(new Set(widths)).sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    );
  }, [variants]);

  const [selectedWidth, setSelectedWidth] = useState<string | null>(null);

  const filteredVariants =
    selectedWidth === null
      ? variants
      : variants.filter((v) => v?.product?.rim_diameter_text === selectedWidth);

  return (
    <div className="flex flex-col gap-[1.5rem] mx-[1rem] md:mx-[0rem] h-full">
      <div className="hidden md:flex justify-between w-full items-center">
        <div className="flex flex-col justify-between w-full h-[5rem]">
          <p className="font-[700] text-[2.25rem] border-b-5 border-fullwayRed w-fit leading-none italic">
            TIRE SIZES
          </p>
          <p className="font-[300] text-[1.25rem]">
            Select wheel size for a filtered view.
          </p>
        </div>

        <Image
          src="/images/HomePage/FeaturedTires/Coin.svg"
          alt="Coin Icon"
          width={28}
          height={28}
          className="w-[4.875rem] h-auto "
        />
      </div>

      <div className="md:hidden flex flex-col justify-center w-full items-center mb-[2rem]">
        <div className="flex flex-col justify-between w-full h-[7rem] gap-[0.7rem]">
          <div className="flex justify-between">
            <p className="font-[700] text-[2.25rem] border-b-5 border-fullwayRed w-fit leading-none italic">
              TIRE SIZES
            </p>
            <Image
              src="/images/HomePage/FeaturedTires/Coin.svg"
              alt="Coin Icon"
              width={28}
              height={28}
              className=" w-[3rem] h-auto "
            />
          </div>
          <p className="font-[300] text-[1.25rem] ">
            Select wheel size for a filtered view.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 w-full justify-start ">
        <Button
          className={`${
            selectedWidth === null
              ? "buttonSkew-white text-base font-[700]"
              : "buttonSkew text-base font-[700]"
          }`}
          onClick={() => setSelectedWidth(null)}
        >
          ALL
        </Button>

        {rimWidths.map((size, index) => (
          <Button
            key={index}
            className={`${
              selectedWidth === size
                ? "buttonSkew-white text-base font-[700]"
                : "buttonSkew text-base font-[700]"
            }`}
            onClick={() => setSelectedWidth(size)}
          >
            {size}
          </Button>
        ))}
      </div>

      {product?.__typename === "ConfigurableProduct" && (
        <ProductInfoTable
          variants={
            (filteredVariants ?? []).filter(
              (v): v is NonNullable<typeof v> => v != null
            ) as Variant[]
          }
        />
      )}
    </div>
  );
};

export default ProductInfo;
