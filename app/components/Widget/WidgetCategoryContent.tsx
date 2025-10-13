"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PopoverWidget from "@components/Popover/PopoverWidget";
import { useEffect, useState } from "react";
import { SectionWidthItem } from "@lib/types";
import { useLazyQuery } from "@apollo/client/react";
import {
  TireSizesDocument,
  TireSizesQueryVariables,
} from "@lib/__generated__/graphql";

type WidgetCategoryProps = {
  sectionWidth: SectionWidthItem;
};

const WidgetCategoryContent = ({ sectionWidth }: WidgetCategoryProps) => {
  const [getTireSizes, { data, loading }] = useLazyQuery(TireSizesDocument);

  const [selectedWidth, setSelectedWidth] = useState<string>("");
  const [selectedAr, setSelectedAr] = useState<string>("");
  const [selectedRim, setSelectedRim] = useState<string>("");

  useEffect(() => {
    if (!selectedWidth) return;

    const variables: TireSizesQueryVariables = {
      input: {
        section_width: Number(selectedWidth),
        ...(selectedAr ? { aspect_ratio: Number(selectedAr) } : {}),
        ...(selectedRim ? { rim_diameter: Number(selectedRim) } : {}),
      },
    };

    getTireSizes({ variables });
  }, [selectedWidth, selectedAr, getTireSizes]);

  const handleFindTire = () => {
    if (!selectedWidth) return;

    const variables: TireSizesQueryVariables = {
      input: {
        section_width: Number(selectedWidth),
        ...(selectedAr ? { aspect_ratio: Number(selectedAr) } : {}),
        ...(selectedRim ? { rim_diameter: Number(selectedRim) } : {}),
      },
    };

    getTireSizes({ variables });
  };

  return (
    <div className="flex flex-col">
      <div className={`flex flex-col leading-none mb-[0.5rem] mx-[1rem]`}>
        <p className="font-[500] italic text-[1.125rem] ">TIRES JUST FOR YOU</p>
        <div className="text-[2.25rem] font-[700] italic">
          <h2>LET&apos;S FIND YOUR MATCH! </h2>
        </div>
      </div>
      {/* <pre>{JSON.stringify(data?.getTireSize?.aspect_ratios, null, 2)}</pre> */}
      <div className="relative w-full">
        <div className="bg-white w-[23.75rem] h-[26rem] mt-[2.25rem]" />

        <div className="absolute inset-0">
          <Tabs
            defaultValue="size"
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
              {loading ? (
                <div className="flex items-center justify-center py-[9rem] pr-[2.5rem]">
                  <div className="animate-spin rounded-full h-[3rem] w-[3rem] border-b-2 border-black"></div>
                </div>
              ) : (
                <div className="flex flex-col gap-[1rem] pr-[2rem] items-center">
                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Width</p>
                    <PopoverWidget
                      placeholderText="Select width"
                      items={sectionWidth ?? []}
                      getLabel={(item) => item ?? 0}
                      selected={selectedWidth ? Number(selectedWidth) : null}
                      onSelect={(value) => {
                        setSelectedWidth(value.toString());
                        setSelectedAr("");
                        setSelectedRim("");
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Aspect Ratio</p>
                    <PopoverWidget
                      placeholderText="Select aspect ratio"
                      items={data?.getTireSize?.aspect_ratios ?? []}
                      getLabel={(item) => item ?? 0}
                      selected={selectedAr ? Number(selectedAr) : null}
                      onSelect={(value) => {
                        setSelectedAr(value.toString());
                        setSelectedRim("");
                      }}
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Diameter</p>
                    <PopoverWidget
                      placeholderText="Select diameter"
                      items={data?.getTireSize?.rim_diameters ?? []}
                      getLabel={(item) => item ?? 0}
                      selected={selectedRim ? Number(selectedRim) : null}
                      onSelect={(value) => setSelectedRim(value.toString())}
                    />
                  </div>

                  <Button
                    className="buttonWidget"
                    onClick={handleFindTire}
                    disabled={!selectedWidth || loading}
                  >
                    {loading ? "SEARCHING..." : "FIND TIRE"}
                  </Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="vehicle">
              {loading ? (
                <div className="flex items-center justify-center py-[9rem] pr-[2.5rem]">
                  <div className="animate-spin rounded-full h-[3rem] w-[3rem] border-b-2 border-black"/>
                </div>
              ) : (
                <div className="flex flex-col gap-[1rem] pr-[2rem] items-center">
                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Year</p>
                    {/* <PopoverWidget
                    placeholderText="Select year"
                    items={yearItems}
                    getLabel={(item) => item.year}
                    onSelect={(value) => setSelection(value)}
                  /> */}
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Make</p>
                    {/* <PopoverWidget
                    placeholderText="Select make"
                    items={makeItems}
                    getLabel={(item) => item.make}
                    onSelect={(value) => setSelection(value)}
                  /> */}
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Model</p>
                    {/* <PopoverWidget
                    placeholderText="Select Model"
                    items={modelItems}
                    getLabel={(item) => item.model}
                    onSelect={(value) => setSelection(value)}
                  /> */}
                  </div>

                  <div className="flex flex-col">
                    <p className="font-[400] text-[1.125rem]">Trim</p>
                    {/* <PopoverWidget
                    placeholderText="Select Trim"
                    items={trimItems}
                    getLabel={(item) => item.trim}
                    onSelect={(value) => setSelection(value)}
                  /> */}
                  </div>

                  <Button className="buttonWidget">FIND TIRE</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WidgetCategoryContent;
