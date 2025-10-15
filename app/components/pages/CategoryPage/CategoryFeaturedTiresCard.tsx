import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WidgetConfigurableProductItem } from "@lib/types/widget/widget.types";
import { getStars } from "@lib/product/starsCalc";
import { YotpoReviews } from "@components/yotpo/YotpoReviews";

type CategoryFeaturedTiresCardProps = {
  product: WidgetConfigurableProductItem;
};

const CategoryFeaturedTiresCard = ({
  product,
}: CategoryFeaturedTiresCardProps) => {
  const variant = product?.variants?.[0]?.product;

  const rawName = product?.name ?? "Unknown Tire";
  const name = rawName.replace(/^Fullway\s*/i, "");

  return (
    <div className="relative">
      <div className="absolute md:-top-[9rem] top-[1rem] left-[2rem] w-[17.8125rem] h-[21.9375rem]">
        <Image
          src={
            "/images/OurTiresPage/OurFeaturedTires/fullway-hs266-b-aca2-1 1.svg"
          }
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <div className="relative w-[24rem] h-[20rem] z-20">
        <div className="absolute md:inset-0 top-[9rem] md:top-0 bg-[#141414] border-2 border-white mx-[0.5rem] md:mx-[0rem] pb-[2rem] md:pb-[0rem]">
          <div className="flex flex-col md:justify-start justify-center items-center md:w-full w-[19.5rem] ">
            <p className="font-[700] text-[2.25rem] border-b-5 border-fullwayRed leading-none w-fit mb-[1rem] mt-[2rem]">
              {name}
            </p>
            <p className="font-[400] text-[1.25rem]  mb-[1rem]">
              {product?.variants?.[0]?.attributes?.[0]?.label ?? ""}
            </p>

            <div className="flex items-start">
              <div className="flex items-center gap-[0.7rem]">
                <div className="flex gap-[0.3rem]">
                  {getStars(variant?.productRating?.ratingValue ?? 0)}
                </div>

                <div className="flex items-center gap-[0.5rem] font-[300] text-[0.8rem] md:text-[1rem] ">
                  {variant?.productRating?.ratingValue ?? "N/A"}
                  <div>
                    (
                    <YotpoReviews
                      text={variant?.productRating?.ratingCount ?? 0}
                      id={product?.id ?? 0}
                    />
                    )
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center font-[400] text-center">
              <div className="flex items-center gap-[0.2rem]">
                <Image
                  src="/icons/other/SeasonIcon.svg"
                  alt="Plus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
                {variant?.season_text ?? "All Season"}
              </div>
              <div className="flex items-center gap-[0.2rem]">
                <Image
                  src="/icons/other/Union.svg"
                  alt="Plus"
                  width={1920}
                  height={1080}
                  className="w-[1rem] h-[1rem]"
                />
                {variant?.performance_text ?? "High Performance"}
              </div>
            </div>

            <Link
              href={`/tires/${product?.url_key}?size=${variant?.url_key ?? ""}`}
              className="flex justify-between"
            >
              <Button className="buttonSkew group text-base font-[700] gap-[0.5rem] mt-[1.5rem]">
                BUY NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeaturedTiresCard;
