import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type WidgetBySizeContentProps = {
  loading: boolean;
  selectedWidth: string;
  setSelectedWidth: (value: string) => void;
  selectedAr: string;
  setSelectedAr: (value: string) => void;
  selectedDiameter: string;
  setSelectedDiameter: (value: string) => void;
  handleFindTire: () => void;
};

const WidgetBySizeContent = ({
  loading,
  selectedWidth,
  setSelectedWidth,
  selectedAr,
  setSelectedAr,
  selectedDiameter,
  setSelectedDiameter,
  handleFindTire,
}: WidgetBySizeContentProps) => {
  return (
    <div>
      {loading ? (
        <div className="flex flex-col md:flex-row gap-[1rem] md:items-end pr-[2rem] items-center">
          <div className="md:w-[2.25rem]" />
          <div className="flex flex-col">
            <p className="font-[400] text-[1.125rem]">Width</p>
            <Skeleton className="w-[17.125rem] h-[2.5rem] rounded-md" />
          </div>

          <div className="flex flex-col">
            <p className="font-[400] text-[1.125rem]">Aspect Ratio</p>
            <Skeleton className="w-[17.125rem] h-[2.5rem] rounded-md" />
          </div>

          <div className="flex flex-col">
            <p className="font-[400] text-[1.125rem]">Diameter</p>
            <Skeleton className="w-[17.125rem] h-[2.5rem] rounded-md" />
          </div>

          <Button className="buttonWidget">FIND TIRE</Button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-[1rem] md:items-end pr-[2rem] items-center">
          <div className="md:w-[2.25rem]" />
          <div className="flex flex-col">
            <p className="font-[400] text-[1.125rem]">Width</p>
            <Input
              placeholder="Width"
              className="rounded-none w-[17.125rem]"
              value={selectedWidth}
              onChange={(e) => setSelectedWidth(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-[400] text-[1.125rem]">Aspect Ratio</p>
            <Input
              placeholder="Aspect Ratio"
              className="rounded-none w-[17.125rem]"
              value={selectedAr}
              onChange={(e) => setSelectedAr(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-[400] text-[1.125rem]">Diameter</p>
            <Input
              placeholder="Diameter"
              className="rounded-none w-[17.125rem]"
              value={selectedDiameter}
              onChange={(e) => setSelectedDiameter(e.target.value)}
            />
          </div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="inline-block">
                <Button
                  onClick={handleFindTire}
                  disabled={
                    loading ||
                    !selectedWidth ||
                    !selectedAr ||
                    !selectedDiameter
                  }
                  className="buttonWidget"
                >
                  FIND TIRE
                </Button>
              </div>
            </HoverCardTrigger>

            {(!selectedWidth || !selectedAr || !selectedDiameter) && (
              <HoverCardContent className="text-[0.85rem] font-[600] text-center bg-neutral-800 text-white border-none">
                Please fill in all fields first.
              </HoverCardContent>
            )}
          </HoverCard>
        </div>
      )}
    </div>
  );
};

export default WidgetBySizeContent;
