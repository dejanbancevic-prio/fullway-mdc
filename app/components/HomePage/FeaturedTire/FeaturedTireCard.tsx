import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FeaturedTireCardProps = {
  name: string;
  model: string;
  bgImage: string;
  tireImage: string;
};

const FeaturedTireCard = ({
  name,
  model,
  bgImage,
  tireImage,
}: FeaturedTireCardProps) => {
  return (
    <div className="relative w-[21.5rem] h-[31.125rem] shadow-2xl ">
      <Image
        src={bgImage}
        alt="SUV Background"
        width={344}
        height={468}
        className="object-cover skew-x-[-3deg] w-[21.5rem] h-[31.125rem] "
      />

      <div className="absolute inset-[0rem] bg-black/30 skew-x-[-3deg] " />
      <div className="absolute inset-[0rem] bg-black/30 skew-x-[-3deg] " />

      <div className="absolute top-[1.75rem] md:-left-17 w-[266px] h-[296]">
        <Image
          src={tireImage}
          alt="HS 288 Tire"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-[2.25rem] left-[2.5rem] w-full">
        <p className="font-[300] text-[1.25rem] italic">{name}</p>
        <p className="font-[700] text-[2rem] italic">{model}</p>
        <Button className="buttonSkew text-base font-[700] gap-[0.5rem] mt-[0.438rem]">
          <Link href="/our-tires" className="flex justify-between">
            VIEW TIRES
            {
              <Image
                src="/icons/arrows/Arrow 3.svg"
                alt="Arrow 3"
                width={0}
                height={0}
                className="w-auto h-auto pl-[0.5rem]"
              />
            }
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedTireCard;
