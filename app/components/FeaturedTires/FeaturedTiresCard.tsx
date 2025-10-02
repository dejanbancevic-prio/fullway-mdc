import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FeaturedTireCardProps = {
  name: string;
  model: string;
  bgImage: string;
  tireImage: string;
  url: string;
};

const FeaturedTiresCard = ({
  name,
  model,
  bgImage,
  tireImage,
  url,
}: FeaturedTireCardProps) => {
  return (
    <div className="relative w-[21.5rem] h-[31.125rem] shadow-2xl ">
      <Image
        src={bgImage}
        alt="SUV Background"
        width={1920}
        height={1080}
        className="object-cover skew-x-[-3deg] w-[21.5rem] h-[31.125rem] "
      />

      <div className="absolute inset-[0rem] bg-black/30 skew-x-[-3deg] " />
      <div className="absolute inset-[0rem] bg-black/30 skew-x-[-3deg] " />

      <div className="absolute top-[1.75rem] md:-left-17 w-[16.625rem] h-[18.5rem]">
        <Image
          src={tireImage}
          alt="HS 288 Tire"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-[2.25rem] left-[2.5rem] w-full">
        <p className="font-[300] text-[1.25rem] italic">{name}</p>
        <h3 className="font-[700] text-[2rem] italic">{model}</h3>
        <Button className="buttonSkew group text-base font-[700] gap-[0.5rem] mt-[0.438rem]">
          <Link href={url} className="flex justify-between">
            VIEW TIRES
            <Image
              src="/icons/arrows/Icon=Arrow-Color=White.svg"
              alt="Arrow 3"
              width={1920}
              height={1080}
              className="w-auto h-auto pl-[0.5rem] group-hover:opacity-0"
            />
            <Image
              src="/icons/arrows/Icon=Arrow-Color=Dark.svg"
              alt="Arrow 3"
              width={1920}
              height={1080}
              className="w-auto h-auto pl-[0.5rem] absolute right-[1rem] top-[0.6rem] opacity-0 group-hover:opacity-100"
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedTiresCard;
