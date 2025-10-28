import Image from "next/image";
import ProductPicker from "./ProductPicker/ProductPicker";
import { YotpoReviews } from "@components/yotpo/YotpoReviews";
import { ProductItem } from "@lib/types/product/product.types";
import { getStars } from "@lib/product/starsCalc";
import ProductDescription from "./ProductDescription";

type ProductFeaturesProps = {
  product: ProductItem;
};

const ProductHeader = ({ product }: ProductFeaturesProps) => {
  const productVariant =
    product?.__typename === "ConfigurableProduct"
      ? product.variants?.[0]?.product
      : null;

  return (
    <div className="md:max-w-7xl md:mx-auto md:w-full mx-[1rem] md:mt-[3rem] mt-[2rem]">
      <div className="flex flex-col md:flex-row w-full justify-between md:gap-[5rem] gap-[2rem]">
        <div className="relative w-[20rem] md:w-[33.5625rem] aspect-[16/9]">
          <Image
            src="/images/HomePage/MostPopularTire/fullway-tire-frontview-w-wheel-template.png"
            alt="Fullway Tire"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-[1.25rem] md:w-[31.1875rem] w-full ">
          <div className="flex flex-col gap-[1rem]">
            <Image
              src="/icons/logo/Fullway-Logo-White.svg"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[7.125rem] h-[1.375rem]"
            />
            <h1 className="font-[700] text-[2.25rem] border-b-5 border-fullwayRed w-fit leading-none ">
              {product?.name!.slice(8).slice(0, 2) +
                " " +
                product?.name!.slice(8).slice(2)}
            </h1>

            <div className="flex items-start">
              <div className="flex items-center gap-[0.7rem]">
                <div className="flex gap-[0.3rem]">
                  {getStars(productVariant?.productRating?.ratingValue ?? 0)}
                </div>

                <div className="flex items-center gap-[0.5rem] font-[300] text-[0.8rem] md:text-[1rem] ">
                  {productVariant?.productRating?.ratingValue ?? "N/A"}
                  <div>
                    (
                    <YotpoReviews
                      text={productVariant?.productRating?.ratingCount ?? 0}
                      id={product?.id ?? 0}
                    />
                    )
                  </div>
                </div>
              </div>

              <p className="ml-[1rem] font-[300] text-[0.8rem] md:text-[1rem]">
                <YotpoReviews text={"Write a Review"} id={product?.id ?? 0} />
              </p>
            </div>

            <div className="flex justify-start font-[600] text-[1.15rem] md:gap-[1.5rem] gap-[0.7rem]">
              <p>ALL SEASON</p>
              <p>•</p>
              <p>HIGH PERFORMANCE</p>
            </div>

            <div className="font-[300] text-[1.25rem]">
              <ProductDescription html={product?.description?.html} />
            </div>

            <ProductPicker product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
