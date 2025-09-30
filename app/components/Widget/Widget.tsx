import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PopoverWidget from "../Popover/PopoverWidget";

type WidgetProps = {
  titleStyle?: string;
};

const Widget = ({ titleStyle }: WidgetProps) => {
  return (
     <div className="flex flex-col md:max-w-7xl md:mx-auto w-full">
      <div
        className={`${titleStyle} "flex flex-col leading-none mb-[0.5rem] mx-[1rem] md:mx-[0rem]`}
      >
        <p className="font-[500] italic text-[1.125rem] ">TIRES JUST FOR YOU</p>

        <div className="hidden md:flex gap-[1rem] text-[2.25rem] md:text-[3rem] font-[700] md:font-[800]  italic">
          <p>LET&apos;S FIND YOUR MATCH! </p>
        </div>

        <div className="md:hidden flex gap-[1rem] text-[2.25rem] md:text-[3rem] font-[700] md:font-[800]italic">
          <p>
            LET&apos;S FIND YOUR <br /> MATCH!
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="bg-white w-[66.75rem] h-[26rem] md:h-[7.375rem] mt-[2.25rem]" />

        <div className="absolute inset-0">
          <Tabs
            defaultValue="vehicle"
            className="w-[25rem] text-black ml-[0.3rem]"
          >
            <TabsList className="skew-x-[-15deg] rounded-none mb-[1rem]">
              <TabsTrigger
                value="size"
                className="rounded-none w-[9.0625rem] font-[700]"
              >
                BY SIZE
              </TabsTrigger>
              <TabsTrigger
                value="vehicle"
                className="rounded-none w-[9.0625rem] font-[700]"
              >
                BY VEHICLE
              </TabsTrigger>
            </TabsList>
            <TabsContent value="size">
              <div className="flex flex-col md:flex-row gap-[1rem] md:items-end pr-[2rem] items-center">
                <div className="md:w-[2.25rem]" />
                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Width</p>
                  <PopoverWidget placeholderText={"Width"} style="rounded-none w-[17.125rem] text-start p-[0.5rem]" />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Aspect Ratio</p>
                  <Input
                    placeholder="Aspect Ratio"
                    className="rounded-none w-[17.125rem]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Diameter</p>
                  <Input
                    placeholder="Diameter"
                    className="rounded-none w-[17.125rem]"
                  />
                </div>

                <Button className="buttonWidget">FIND TIRE</Button>
              </div>
            </TabsContent>
            <TabsContent value="vehicle">
              <div className="flex flex-col md:flex-row gap-[1rem] md:items-end pr-[2rem] items-center">
                <div className="md:w-[2.25rem]" />
                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Year</p>
                  <Input
                    placeholder="Year"
                    className="rounded-none w-[17.125rem] md:w-[12.5938rem]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Make</p>
                  <Input
                    placeholder="Make"
                    className="rounded-none w-[17.125rem] md:w-[12.5938rem]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Model</p>
                  <Input
                    placeholder="Model"
                    className="rounded-none w-[17.125rem] md:w-[12.5938rem]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-[400] text-[1.125rem]">Trim</p>
                  <Input
                    placeholder="Trim"
                    className="rounded-none w-[17.125rem] md:w-[12.5938rem]"
                  />
                </div>

                <Button className="buttonWidget">FIND TIRE</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Widget;
