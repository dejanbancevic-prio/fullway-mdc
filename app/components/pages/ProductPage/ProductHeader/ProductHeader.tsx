import Link from "next/link";
import Image from "next/image";
import ProductPicker from "./ProductPicker/ProductPicker";
import { ProductPageQuery } from "@/lib/__generated__/graphql";
import amazonLinksRaw from "../../../../../lib/amazonReviewLinks.json";
import { YotpoReviews } from "../../../yotpo/YotpoReviews";

type ProductItem = NonNullable<
  NonNullable<ProductPageQuery["products"]>["items"]
>[number];

type ProductFeaturesProps = {
  product: ProductItem;
};

const ProductHeader = ({ product }: ProductFeaturesProps) => {
  const productVariant =
    product?.__typename === "ConfigurableProduct"
      ? product.variants?.[0]?.product
      : null;

  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const stars = [
      ...Array.from({ length: fullStars }).map((_, i) => (
        <Image
          key={`full-${i}`}
          src="/icons/other/Star1.svg"
          alt="Full Star"
          width={20}
          height={20}
          className="md:w-[1.25rem] md:h-[1.25rem] w-[0.8rem] h-[0.8rem]"
        />
      )),
    ];

    if (hasHalfStar) {
      stars.push(
        <Image
          key="half"
          src="/icons/other/MaskedStar.svg"
          alt="Half Star"
          width={20}
          height={20}
          className="md:w-[1.25rem] md:h-[1.25rem] w-[0.8rem] h-[0.8rem]"
        />
      );
    }

    return stars;
  };

  const amazonFormat: Record<string, { value: string }> = amazonLinksRaw;
  const amazonReviewLink =
    product?.url_key && amazonFormat[product?.url_key]?.value;

  return (
    <div className="md:max-w-7xl md:mx-auto mx-[1rem] md:mt-[4.6rem] mt-[3rem]">
      <div className="flex flex-col md:flex-row w-full justify-between md:gap-[15rem] gap-[1rem]">
        <div className="flex justify-center md:justify-start w-full md:w-fit">
          <Image
            src="/images/HomePage/MostPopularTire/fullway-tire-frontview-w-wheel-template.png"
            alt="Fullway Tire"
            width={1920}
            height={1080}
            className="size-[20rem] md:size-[30.5625rem] md:ml-[0rem] ml-[0.29rem] "
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

            <div className="flex flex-col md:flex-row items-start md:items-center gap-[0.7rem] md:gap-[1rem]">
              <div className="flex items-center gap-[0.7rem]">
                <div className="flex gap-[0.3rem]">
                  {getStars(productVariant?.productRating?.ratingValue ?? 0)}
                </div>

                <p className="font-[300] text-[0.8rem] md:text-[1rem]">
                  {productVariant?.productRating?.ratingValue ?? "N/A"}
                  <YotpoReviews
                    yotpo_review_count={productVariant?.productRating?.ratingCount ?? 0}
                    id={product?.id ?? 0}
                  />
                </p>
              </div>

              <div className="flex gap-[0.5rem] font-[300] text-[0.8rem] md:text-[1rem]">
                {amazonReviewLink ? (
                  <Link
                    href={amazonReviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline "
                  >
                    Write a Review
                  </Link>
                ) : (
                  <Link
                    href="https://www.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Write a Review
                  </Link>
                )}
                <div>on Amazon</div>
              </div>
            </div>

            <div className="flex justify-start font-[600] text-[1.15rem] md:gap-[1.5rem] gap-[0.7rem]">
              <p>ALL SEASON</p>
              <p>•</p>
              <p>HIGH PERFORMANCE</p>
            </div>

            <div className="font-[300] text-[1.25rem] ">
              <p>
                {productVariant?.description_overview?.paragraphs?.[0]?.title}
                {productVariant?.description_overview?.paragraphs?.[0]?.content
                  ?.split(".")
                  ?.filter(Boolean)[0]
                  ?.trim() + "."}
              </p>
            </div>

            <ProductPicker product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
