"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { addToCart } from "@/lib/cart";
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
import ProductPickerExpand from "./ProductPickerExpand";
import SchemaScript from "@/app/components/SEO/SchemaScript";
import { ProductItem } from "@/lib/types";
import { getProductSchema } from "@/app/components/SEO/seoSchemas";

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

  const firstInStockVariant =
    variants.find((v) => v?.product?.stock_status === "IN_STOCK") ??
    variants[0];
  const defaultValue = firstInStockVariant?.product?.url_key ?? "";
  const sidebarSelectedProductKey = useReactiveVar(sidebarSelectedProductVar);
  const sidebarSelectedProductKeyRear = useReactiveVar(
    sidebarSelectedProductRearVar
  );

  const pathname = usePathname();
  useEffect(() => {
    if (!defaultValue) return;
    sidebarSelectedProductVar(defaultValue);
    sidebarSelectedProductRearVar(defaultValue);
  }, [defaultValue, pathname]);

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

  const productSchema = getProductSchema(product, variants);
  return (
    <div className="flex flex-col">
      <SchemaScript id={"product-schema"} schema={productSchema} />

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
            rounded-none hover:bg-neutral-800 font-[600] text-[1.1rem] w-full "
            onClick={() => {
              handleOpenSidebar("front");
              setCountFront(1);
            }}
          >
            <div className="flex justify-between w-full items-center">
              <div className="flex overflow-hidden">
                {selectedVariant?.attributes?.[0]?.label}
                <div className="flex ml-[1rem] gap-[0.3rem] items-center">
                  <Image
                    src="/icons/other/greenCheck.svg"
                    alt="In Stock"
                    width={1920}
                    height={1080}
                    className="w-[1rem] h-[1rem]"
                  />
                  <p className="hidden md:block text-[#35D58A] font-[600] text-[0.75rem]">
                    In Stock
                  </p>
                </div>
              </div>

              <Image
                src="/icons/other/Color=Light.svg"
                alt="Toggle"
                width={1920}
                height={1080}
                className={`w-[1rem] h-[1rem] rotate-90`}
              />
            </div>
          </Button>

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
        <ProductPickerExpand
          handleOpenSidebar={handleOpenSidebar}
          setCountFront={setCountFront}
          countFront={countFront}
          selectedVariant={selectedVariant ?? null}
          price={price}
          setCountRear={setCountRear}
          countRear={countRear}
          selectedVariantRear={selectedVariantRear ?? null}
          priceRear={priceRear}
          setNewSelect={setNewSelect}
        />
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
