import Link from "next/link";
import WheelMotion from "./WheelMotion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MostPopularTire = () => {
  return (
    <div className="w-full border-t-5 border-fullwayRed relative">
      <Image
        src="/images/HomePage/MostPopularTire/fullway-bg-image-red-suv.jpg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className="object-cover w-full h-[59.4375rem] md:h-[45.625rem]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1D1D1D]/90 to-[#1D1D1D]" />

      <div className="absolute inset-0 flex">
        <div className="max-w-7xl mx-auto w-full flex justify-center items-center">
          <div className="flex flex-col w-full">
            <div className="hidden md:flex flex-col mb-[2.5rem]">
              <p className="font-[500] italic text-[1.125rem]">
                FULLWAY SPECIAL
              </p>

              <h2 className="flex gap-[1rem] text-[3rem] font-[800] italic">
                <span>READY WHOLE</span>
                <span className="text-fullwayRed ">YEAR</span>
                <span>ROUND!</span>
              </h2>
            </div>

            <div className="md:hidden flex flex-col mx-[1rem] leading-none">
              <p className="font-[500] italic text-[1.125rem] mt-[2.5rem]">
                FULLWAY SPECIAL
              </p>

              <h2 className="flex flex-col text-[2.25rem] font-[700] italic">
                <span>READY WHOLE</span>
                <span className="flex gap-[1rem]">
                  <span className="text-fullwayRed ">YEAR</span>
                  <span>ROUND!</span>
                </span>
              </h2>
            </div>

            <div className="hidden md:flex w-full items-center gap-[3rem] ">
              <WheelMotion />

              <div className="flex flex-col gap-[3.906rem] w-fit">
                <div className="absolute w-full border-b-1 border-white" />
                <div className="flex flex-col gap-[1.5rem] pt-[3.91rem]">
                  <h3 className="font-[700] text-[2.25rem] border-b-4 border-fullwayRed w-fit leading-none pb-1">
                    HS 998
                  </h3>

                  <h4 className="flex justify-start font-[600] text-[1.25rem] gap-[1.5rem]">
                    <span>ALL SEASON</span>
                    <span>•</span>
                    <span>HIGH PERFORMANCE</span>
                  </h4>

                  <div className="font-[300] text-[1.25rem]">
                    <p>
                      The Fullway HS998 is a performance, all season tire <br />
                      manufactured for SUVs.
                    </p>
                    <p>
                      The tire offers excellent all weather traction. It
                      combines its all <br />
                      season compound and directional tread design to boost the{" "}
                      <br />
                      dry, wet and winter weather grip on the road surface.
                    </p>
                  </div>

                  <div className="flex items-center gap-[1.5rem]">
                    <Link href="/product/hs998">
                      <Button className="buttonSkew group text-base font-[700] px-[1rem]">
                        CHECK OUT
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
                          className="w-auto h-auto pl-[0.5rem] absolute right-[1rem] opacity-0 group-hover:opacity-100"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden flex flex-col w-full items-center">
              <WheelMotion />

              <div className="flex flex-col gap-[3.906rem] w-fit">
                <div className="flex flex-col gap-[1.5rem] pt-[3rem] mx-[1rem]">
                  <h3 className="font-[700] text-[2.25rem] border-b-4 border-fullwayRed w-fit leading-none pb-1">
                    HS 998
                  </h3>

                  <h4 className="flex justify-start font-[600] text-[1rem] gap-[1rem]">
                    <span>ALL SEASON</span>
                    <span>•</span>
                    <span>HIGH PERFORMANCE</span>
                  </h4>

                  <div className="font-[400] text-[1rem]">
                    <p>
                      The Fullway HS998 is a performance, all season tire
                      manufactured for SUVs. The tire offers excellent all
                      weather traction. It combines its all season compound and
                      directional tread design to boost the dry, wet and winter
                      weather grip on the road surface.
                    </p>
                  </div>

                  <div className="flex items-center gap-[1.5rem]">
                    <Link href="/product/hs998">
                      <Button className="buttonSkew group text-base font-[700] px-[1rem]">
                        CHECK OUT
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
                          className="w-auto h-auto pl-[0.5rem] absolute right-[1rem] opacity-0 group-hover:opacity-100"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularTire;
