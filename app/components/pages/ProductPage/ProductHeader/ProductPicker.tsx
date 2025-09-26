"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductPageQuery } from "@/lib/__generated__/graphql";
import SizeDropMenu from "./SizeDropMenu";
import Link from "next/link";
import { addToCart, CartItem } from "@/lib/cart";
import { toast } from "sonner";
import { useSidebar } from "@/components/ui/sidebar";
import {
  sidebarDataVar,
  sidebarSelectedProductRearVar,
  sidebarSelectedProductTypeVar,
  sidebarSelectedProductVar,
  sidebarTypeVar,
} from "@/lib/cache";
import { useReactiveVar } from "@apollo/client/react";
import { usePathname } from "next/navigation";

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

  const options = variants.map((v) => ({
    label: v?.attributes?.[0]?.label ?? "Unknown",
    url_key: v?.product?.url_key ?? "",
    stock_status: v?.product?.stock_status ?? "",
    rim_diameter_text: v?.product?.rim_diameter_text ?? "",
  }));

  const firstVariant = variants[0];
  const defaultValue = firstVariant?.product?.url_key ?? "";
  const sidebarSelectedProductKey = useReactiveVar(sidebarSelectedProductVar);
  const sidebarSelectedProductKeyRear = useReactiveVar(
    sidebarSelectedProductRearVar
  );

  const pathname = usePathname();
  useEffect(() => {
    if (!defaultValue) return;
    sidebarSelectedProductVar(defaultValue);
    sidebarSelectedProductRearVar(defaultValue);
  }, [
    defaultValue,
    pathname,
  ]);

  const { toggleSidebar } = useSidebar();
  const handleOpenSidebar = (target: string) => {
    if (!selectedVariant) return;

    sidebarDataVar(
      options.map((v) => ({
        ...v,
        selected: v.url_key === sidebarSelectedProductKey,
      }))
    );
    sidebarSelectedProductTypeVar(target);
    sidebarTypeVar("products");
    toggleSidebar();
  };

  // const [selectedVariantId, setSelectedVariantId] = useState(defaultValue);
  // const [selectedVariantIdRear, setSelectedVariantIdRear] = useState(
  //   defaultValue
  // );

  const selectedVariant = variants.find(
    (v) => v?.product?.url_key === sidebarSelectedProductKey
  );

  const selectedVariantRear = variants.find(
    (v) => v?.product?.url_key === sidebarSelectedProductKeyRear
  );

  const price =
    selectedVariant?.product?.price_range?.minimum_price?.final_price?.value ??
    0;

  const priceRear =
    selectedVariantRear?.product?.price_range?.minimum_price?.final_price
      ?.value ?? 0;

  return (
    <div className="flex flex-col">
      {!newSelect && (
        <div className="flex flex-col gap-[0.3rem]">
          <div className="flex w-full justify-between items-center">
            <p className="font-[400]">Choose tire size</p>
            <Link href={`#widget`} className="font-[400] underline ">
              Does it fit?
            </Link>
          </div>
          <Button
            className="bg-transparent text-start justify-start cursor-pointer border-1 
            rounded-none hover:bg-neutral-800 font-[600] text-[1.1rem] md:w-full w-[20rem]"
            onClick={() => {
              handleOpenSidebar("front");
              setCountFront(1);
            }}
          >
            <div className="flex justify-between w-full items-center">
              {selectedVariant?.attributes?.[0]?.label}

              <Image
                src="/icons/other/Color=Light.svg"
                alt="Toggle"
                width={1920}
                height={1080}
                className={`w-[1rem] h-[1rem] rotate-90`}
              />
            </div>
          </Button>

          {/* <SizeDropMenu
            options={options}
            defaultValue={defaultValue}
            onChange={(val) => {
              setSelectedVariantId(val);
              setCountFront(1);
            }}
          /> */}

          <div>
            <Button
              onClick={() => setNewSelect(true)}
              className="bg-transparent hover:underline hover:bg-transparent p-0 cursor-pointer flex items-center "
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
        <div className="flex flex-col justify-center gap-[0.5rem] mb-[0.5rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <div className="flex flex-col md:flex-row w-full gap-[1rem] md:items-end">
              <div className="flex flex-col w-full gap-[0.3rem]">
                <div className="flex w-full gap-[3rem] md:gap-[0rem] md:justify-between items-center">
                  <div className="flex gap-[0.3rem]">
                    <p className="font-[400]">Choose </p>
                    <p className="font-bold"> front </p>
                    <p className="font-[400]">tire size</p>
                  </div>

                  <Link href={`#widget`} className="font-[400] underline">
                    Does it fit?
                  </Link>
                </div>

                {/* <SizeDropMenu
                  options={options}
                  defaultValue={defaultValue}
                  onChange={(val) => {
                    setSelectedVariantId(val);
                    setCountFront(1);
                  }}
                /> */}

                <Button
                  className="bg-transparent text-start justify-start cursor-pointer border-1 
                  rounded-none hover:bg-neutral-800 font-[600] text-[1.1rem] md:w-full w-[20rem]"
                  onClick={() => {
                    handleOpenSidebar("front");
                    setCountFront(1);
                  }}
                >
                  <div className="flex justify-between w-full items-center">
                    {selectedVariant?.attributes?.[0]?.label}

                    <Image
                      src="/icons/other/Color=Light.svg"
                      alt="Toggle"
                      width={1920}
                      height={1080}
                      className={`w-[1rem] h-[1rem] rotate-90`}
                    />
                  </div>
                </Button>
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
            <div className="flex items-center gap-[0.2rem]">
              <div className="font-[700] italic text-[2.25rem]">${price}</div>
              <p className="font-[400] pt-[0.8rem]">/per tire</p>
            </div>
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <div className="flex flex-col md:flex-row w-full gap-[1rem] md:items-end">
              <div className="flex flex-col w-full gap-[0.3rem]">
                <div className="flex w-full gap-[3.3rem] md:gap-[0rem] md:justify-between items-center">
                  <div className="flex gap-[0.3rem]">
                    <p className="font-[400]">Choose </p>
                    <p className="font-bold"> rear </p>
                    <p className="font-[400]">tire size</p>
                  </div>

                  <Link href={`#widget`} className="font-[400] underline">
                    Does it fit?
                  </Link>
                </div>

                {/* <SizeDropMenu
                  options={options}
                  defaultValue={defaultValue}
                  onChange={(val) => {
                    setSelectedVariantIdRear(val);
                    setCountRear(1);
                  }}
                /> */}

                <Button
                  className="bg-transparent text-start justify-start cursor-pointer border-1 
                  rounded-none hover:bg-neutral-800 font-[600] text-[1.1rem] md:w-full w-[20rem]"
                  onClick={() => {
                    handleOpenSidebar("rear");
                    setCountFront(1);
                  }}
                >
                  <div className="flex justify-between w-full items-center">
                    {selectedVariantRear?.attributes?.[0]?.label}

                    <Image
                      src="/icons/other/Color=Light.svg"
                      alt="Toggle"
                      width={1920}
                      height={1080}
                      className={`w-[1rem] h-[1rem] rotate-90`}
                    />
                  </div>
                </Button>
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

            <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-[0.2rem]">
                <div className="font-[700] italic text-[2.25rem]">
                  ${priceRear}
                </div>
                <p className="font-[400] pt-[0.8rem]">/per tire</p>
              </div>

              <Button
                onClick={() => setNewSelect(false)}
                className="bg-transparent hover:bg-transparent hover:underline p-0 cursor-pointer flex items-center"
              >
                <Image
                  src="/icons/other/Icon=Minus-Color=White.svg"
                  alt="Plus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
                Cancel additional tire size
              </Button>
            </div>
          </div>

          <Button
            className="buttonSkewSidebar w-[21rem] md:w-full h-[3rem] font-bold rounded-md"
            onClick={() => {
              const itemsToAdd: CartItem[] = [];

              if (selectedVariant) {
                itemsToAdd.push({
                  url_key: selectedVariant.product?.url_key ?? "",
                  sku: selectedVariant.product?.sku ?? "",
                  name: selectedVariant.product?.name ?? "",
                  size: selectedVariant.attributes?.[0]?.label ?? "",
                  season_text: selectedVariant.product?.season_text ?? "",
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
              }

              if (selectedVariantRear) {
                itemsToAdd.push({
                  url_key: selectedVariantRear.product?.url_key ?? "",
                  sku: selectedVariantRear.product?.sku ?? "",
                  name: selectedVariantRear.product?.name ?? "",
                  size: selectedVariantRear.attributes?.[0]?.label ?? "",
                  season_text: selectedVariantRear.product?.season_text ?? "",
                  final_price:
                    selectedVariantRear.product?.price_range?.minimum_price
                      ?.final_price?.value ?? 0,
                  image_url:
                    selectedVariantRear.product?.image?.url?.replace(
                      /\/cache\/[^/]+/,
                      ""
                    ) || "",
                  quantity: countRear,
                });
              }

              if (itemsToAdd.length === 0) return;

              itemsToAdd.forEach(addToCart);

              toast("Products have been successfully added to your cart.", {});
            }}
          >
            ADD TO CART
          </Button>
        </div>
      )}

      {!newSelect && (
        <div className="flex flex-col">
          <div className="flex items-center gap-[0.2rem]">
            <div className="font-[700] italic text-[2.25rem]">${price}</div>
            <p className="font-[400] pt-[0.8rem]">/per tire</p>
          </div>

          <div className="flex justify-between w-full items-end leading-none mt-[0.5rem]">
            <div className="flex w-full font-[400] gap-[1.5rem] items-end">
              <div className="flex w-full md:justify-between items-center ">
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
                  className="buttonSkewSidebar h-[3rem] w-[14rem] ml-[2rem] md:w-[24rem] font-bold rounded-md"
                  onClick={() => {
                    if (!selectedVariant) return;

                    addToCart({
                      url_key: selectedVariant.product?.url_key ?? "",
                      sku: selectedVariant.product?.sku ?? "",
                      name: selectedVariant.product?.name ?? "",
                      size: selectedVariant.attributes?.[0]?.label ?? "",
                      season_text: selectedVariant.product?.season_text ?? "",
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

                    toast(
                      "Products have been successfully added to your cart.",
                      {}
                    );
                  }}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPicker;
