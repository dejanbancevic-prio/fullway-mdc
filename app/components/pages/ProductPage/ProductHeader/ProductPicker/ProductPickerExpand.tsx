import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { addToCart, CartItem } from "@/lib/cart/cart";
import { ProductVariant } from "@/lib/types";

type ProductPickerExpandProps = {
  handleOpenSidebar: (side: "front" | "rear") => void;
  toggleSidebar: () => void;
  setCountFront: (val: number) => void;
  countFront: number;
  selectedVariant: ProductVariant | null;
  price: number;

  setCountRear: (val: number) => void;
  countRear: number;
  selectedVariantRear: ProductVariant | null;
  priceRear: number;

  setNewSelect: (val: boolean) => void;
};

const ProductPickerExpand = ({
  handleOpenSidebar,
  toggleSidebar,
  setCountFront,
  countFront,
  selectedVariant,
  price,

  setCountRear,
  countRear,
  selectedVariantRear,
  priceRear,

  setNewSelect,
}: ProductPickerExpandProps) => {
  return (
    <div className="flex flex-col justify-center gap-[0.5rem] mb-[0.5rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="flex flex-col md:flex-row w-full gap-[1rem] md:items-end">
          <div className="flex flex-col w-full gap-[0.3rem]">
            <div className="flex w-full gap-[3rem] md:gap-[0rem] justify-between items-center">
              <div className="flex gap-[0.3rem]">
                <p className="font-[400]">Choose </p>
                <p className="font-bold"> front </p>
                <p className="font-[400]">tire size</p>
              </div>

              <Link href={`#widget`} className="font-[400] underline">
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
                <div className="flex">
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
            <div className="flex w-full gap-[3.3rem] md:gap-[0rem] justify-between items-center">
              <div className="flex gap-[0.3rem]">
                <p className="font-[400]">Choose </p>
                <p className="font-bold"> rear </p>
                <p className="font-[400]">tire size</p>
              </div>

              <Link href={`#widget`} className="font-[400] underline">
                Does it fit?
              </Link>
            </div>

            <Button
              className="bg-transparent text-start justify-start cursor-pointer border-1 
                  rounded-none hover:bg-neutral-800 font-[600] text-[1.1rem] w-full "
              onClick={() => {
                handleOpenSidebar("rear");
                setCountRear(1);
              }}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex">
                  {selectedVariantRear?.attributes?.[0]?.label}
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
            <div className="font-[700] italic text-[2.25rem]">${priceRear}</div>
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
        className="buttonSkewSidebar w-full h-[3rem] font-bold rounded-md"
        onClick={() => {
          const itemsToAdd: CartItem[] = [];

          if (selectedVariant) {
            itemsToAdd.push({
              url_key: selectedVariant.product?.url_key ?? "",
              sku: selectedVariant.product?.sku ?? "",
              id: selectedVariant.product?.id ?? 0,
              name: selectedVariant.product?.name ?? "",
              size: selectedVariant.attributes?.[0]?.label ?? "",
              season_text: selectedVariant.product?.season_text ?? "",
              final_price:
                selectedVariant.product?.price_range?.minimum_price?.final_price
                  ?.value ?? 0,
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
              id: selectedVariantRear.product?.id ?? 0,
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

          itemsToAdd.forEach((item) => addToCart({ item, toggleSidebar }));
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductPickerExpand;
