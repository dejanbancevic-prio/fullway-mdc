import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SidebarTriggerButton from "../../AppSidebar/CustomTrigger";
import WheelMotion from "./WheelMotion";

const MostPopularTire = () => {
  return (
    <div className="w-full border-t-5 border-fullwayRed">
      <img
        src="./images/HomePage/MostPopularTire/fullway-bg-image-red-suv.jpg"
        alt="Fullway Logo"
        className="relative object-cover w-full h-[calc(100vh-6rem)]"
      />

      <div className="absolute -bottom-236 -left-0 w-full h-235 bg-gradient-to-l from-black/100 to-transparent" />
      <div className="absolute -bottom-236 -left-0 w-full h-235 bg-gradient-to-l from-black/100 to-transparent" />
      <div className="absolute -bottom-236 -left-0 w-full h-235 bg-gradient-to-l from-black/100 to-transparent" />

      <div className="absolute -bottom-60 w-full">
        <div className="max-w-7xl mx-auto font-[800] italic">
          <p className="font-[500] text-[1.125rem]">FULLWAY SPECIAL</p>
          <div className="flex gap-4 text-[3rem]">
            <p>READY WHOLE</p>
            <p className="text-fullwayRed ">YEAR</p>
            <p>ROUND!</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-195 w-full">
        <div className="max-w-7xl flex justify-between mx-auto ">
          <div className="">
            <WheelMotion />
          </div>
          <div className="flex flex-col gap-[3.906rem]">
            <div className="w-full border-b-1 border-white" />
            <div className="flex flex-col gap-[1.5rem]">
              <p className="font-[700] text-[2.25rem] border-b-4 border-fullwayRed w-fit leading-none pb-1">
                HS 998
              </p>

              <div className="flex justify-start font-[600] text-[1.25rem] gap-[1.5rem]">
                <p>ALL SEASON</p>
                <p>•</p>
                <p>HIGH PERFORMANCE</p>
              </div>

              <div className="font-[300] text-[1.25rem]">
                <p>
                  The Fullway HS998 is a performance, all season tire <br />
                  manufactured for SUVs.
                </p>
                <p>
                  The tire offers excellent all weather traction. It combines
                  its all <br />
                  season compound and directional tread design to boost the{" "}
                  <br />
                  dry, wet and winter weather grip on the road surface.
                </p>
              </div>

              <div className="flex items-center gap-[1.5rem]">
                <SidebarTriggerButton />
                <Link href="/" className="font-[400] underline ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularTire;
