import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CategoryFeaturedTiresCardProps = {
  name: string;
  text: string;
  tireImage: string;
  url_key: string;
};

const CategoryFeaturedTiresCard = ({
  name,
  text,
  tireImage,
  url_key,
}: CategoryFeaturedTiresCardProps) => {
  return (
    <div className="relative">
      <div className="relative w-[21.4375rem] h-[21.5rem] z-20">
        <div className="absolute md:inset-0 top-[9rem] md:top-0 bg-[#141414] border-2 border-white mx-[0.5rem] md:mx-[0rem] pb-[2rem] md:pb-[0rem]">
          <div className="flex flex-col justify-start items-center w-full ">
            <p className="font-[700] text-[1.5rem] border-b-5 border-fullwayRed leading-none w-fit mb-[1.5rem] mt-[2rem]">
              {name}
            </p>
            <p className="font-[300] text-[1.25rem] italic mb-[1rem]">
              ALL SEASON
            </p>
            <p className="font-[400] text-center px-[3rem] ">{text}</p>

            <Link href={`/product/${url_key}`} className="flex justify-between">
              <Button className="buttonSkew group text-base font-[700] gap-[0.5rem] mt-[3rem] ">
                BUY NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute md:-top-[9rem] top-[1rem] left-[2rem] w-[17.8125rem] h-[21.9375rem] ">
        <Image
          src={tireImage}
          alt="HS 288 Tire"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryFeaturedTiresCard;
