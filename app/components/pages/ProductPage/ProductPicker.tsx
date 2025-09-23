"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductPageQuery } from "@/lib/__generated__/graphql";
import SizeDropMenu from "./SizeDropMenu";
import Link from "next/link";
import { addToCart } from "@/lib/cart";

type ProductItem = NonNullable<
  NonNullable<ProductPageQuery["products"]>["items"]
>[number];

type ProductPickerProps = {
  product: ProductItem;
};

const ProductPicker = ({ product }: ProductPickerProps) => {
  const [countFront, setCountFront] = useState(1);
  const [countRear, setCountRear] = useState(1);
  const [newSelect, setNewSelect] = useState(false);

  const variants =
    product?.__typename === "ConfigurableProduct" ? product.variants ?? [] : [];

  // Transform GraphQL variants into dropdown-friendly options
  const options = variants.map((v) => ({
    label: v?.attributes?.[0]?.label ?? "Unknown",
    url_key: v?.product?.url_key ?? "",
    stock_status: v?.product?.stock_status ?? "",
  }));

  // First variant is default
  const firstVariant = variants[0];
  const defaultValue = firstVariant?.product?.url_key ?? "";

  // Track selected variant
  const [selectedVariantId, setSelectedVariantId] = useState(defaultValue);

  // Find the currently selected variant
  const selectedVariant = variants.find(
    (v) => v?.product?.url_key === selectedVariantId
  );

  const price =
    selectedVariant?.product?.price_range?.minimum_price?.final_price?.value ??
    0;

  return (
    <div className="flex flex-col gap-[0.6rem]">
      {!newSelect && (
        <div className="flex flex-col gap-[0.3rem]">
          <div className="flex w-full justify-between items-center">
            <p className="font-[400]">Choose tire size</p>
            <Link href={`#widget`} className="font-[400] underline ">
              Does it fit?
            </Link>
          </div>

          <SizeDropMenu
            options={options}
            defaultValue={defaultValue}
            onChange={(val) => {
              setSelectedVariantId(val);
              setCountFront(1);
            }}
          />

          <div>
            <Button
              onClick={() => setNewSelect(true)}
              className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center"
            >
              <Image
                src="/icons/other/Icon=Plus-Color=White.svg"
                alt="Plus"
                width={1920}
                height={1080}
                className="w-[1rem] h-[1rem]"
              />
              Add additional tire size
            </Button>
          </div>
        </div>
      )}

      {newSelect && (
        <div className="flex flex-col gap-[1rem] mb-[0.5rem]">
          <div className="flex w-full gap-[1rem] items-end">
            <div className="flex flex-col w-full gap-[0.3rem]">
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-[0.3rem]">
                  <p className="font-[400]">Choose </p>
                  <p className="font-bold"> front </p>
                  <p className="font-[400]">tire size</p>
                </div>

                <Link href={`#widget`} className="font-[400] underline">
                  Does it fit?
                </Link>
              </div>

              <SizeDropMenu
                options={options}
                defaultValue={defaultValue}
                onChange={(val) => {
                  setSelectedVariantId(val);
                  setCountFront(1);
                }}
              />
            </div>

            <div className="flex items-center pb-[0.2rem] gap-[0.7rem]">
              <Button
                onClick={() => setCountFront(Math.max(1, countFront - 1))}
                className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center"
              >
                <Image
                  src="/icons/other/Icon=Minus-Color=White.svg"
                  alt="Minus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
              </Button>

              <div className="w-[2rem] text-center">{countFront}</div>

              <Button
                onClick={() => setCountFront(countFront + 1)}
                className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center"
              >
                <Image
                  src="/icons/other/Icon=Plus-Color=White.svg"
                  alt="Plus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
              </Button>
            </div>
          </div>

          <div className="flex w-full gap-[1rem] items-end">
            <div className="flex flex-col w-full gap-[0.3rem]">
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-[0.3rem]">
                  <p className="font-[400]">Choose </p>
                  <p className="font-bold"> rear </p>
                  <p className="font-[400]">tire size</p>
                </div>

                <Link href={`#widget`} className="font-[400] underline">
                  Does it fit?
                </Link>
              </div>

              <SizeDropMenu
                options={options}
                defaultValue={defaultValue}
                onChange={(val) => {
                  setSelectedVariantId(val);
                  setCountRear(1);
                }}
              />
            </div>

            <div className="flex items-center pb-[0.2rem] gap-[0.7rem]">
              <Button
                onClick={() => setCountRear(Math.max(1, countRear - 1))}
                className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center"
              >
                <Image
                  src="/icons/other/Icon=Minus-Color=White.svg"
                  alt="Minus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
              </Button>

              <div className="w-[2rem] text-center">{countRear}</div>

              <Button
                onClick={() => setCountRear(countRear + 1)}
                className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center"
              >
                <Image
                  src="/icons/other/Icon=Plus-Color=White.svg"
                  alt="Plus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-[0.2rem]">
        <div className="font-[700] italic text-[2.25rem]">${price}</div>
        <p className="font-[400] pt-[0.8rem]">/per tire</p>
      </div>

      <div className="flex justify-between w-full items-end leading-none mt-[0.5rem]">
        <div className="flex w-full font-[400] gap-[1.5rem] items-end">
          {!newSelect && (
            <div className="flex w-full justify-between items-center ">
              <Button
                onClick={() => setCountFront(Math.max(1, countFront - 1))}
                className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center"
              >
                <Image
                  src="/icons/other/Icon=Minus-Color=White.svg"
                  alt="Minus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
              </Button>

              <div className="w-[2rem] text-center">{countFront}</div>

              <Button
                onClick={() => setCountFront(countFront + 1)}
                className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-center"
              >
                <Image
                  src="/icons/other/Icon=Plus-Color=White.svg"
                  alt="Plus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
              </Button>

              <Button
                className="buttonSkewSidebar w-[24rem] font-bold rounded-md"
                onClick={() => {
                  if (!selectedVariant) return;

                  addToCart({
                    url_key: selectedVariant.product?.url_key!,
                    name: selectedVariant.product?.name!,
                    size: selectedVariant.attributes?.[0]?.label!,
                    season_text: selectedVariant.product?.season_text!,
                    final_price:
                      selectedVariant.product?.price_range?.minimum_price
                        ?.final_price?.value ?? 0,
                    image_url:
                      selectedVariant.product?.image?.url?.replace(
                        /\/cache\/[^/]+/,
                        ""
                      ) || "",
                    quantity: countFront,
                  });
                }}
              >
                ADD TO CART
              </Button>
            </div>
          )}

          {newSelect && (
            <Button className="buttonSkewSidebar w-full font-bold rounded-md">
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPicker;
