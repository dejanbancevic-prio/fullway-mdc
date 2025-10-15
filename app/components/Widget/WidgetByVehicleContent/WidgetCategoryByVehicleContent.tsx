import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WidgetCategoryByVehicleContent = () => {
  return (
    <div className="flex flex-col gap-[1rem] pr-[2rem] items-center">
      <div className="flex flex-col">
        <p className="font-[400] text-[1.125rem]">Year</p>
        <Input placeholder="Year" className="rounded-none w-[17.125rem]" />
      </div>

      <div className="flex flex-col">
        <p className="font-[400] text-[1.125rem]">Make</p>
        <Input placeholder="Make" className="rounded-none w-[17.125rem]" />
      </div>

      <div className="flex flex-col">
        <p className="font-[400] text-[1.125rem]">Model</p>
        <Input placeholder="Model" className="rounded-none w-[17.125rem] " />
      </div>

      <div className="flex flex-col">
        <p className="font-[400] text-[1.125rem]">Trim</p>
        <Input placeholder="Trim" className="rounded-none w-[17.125rem] " />
      </div>

      <Button className="buttonWidget">FIND TIRE</Button>
    </div>
  );
};

export default WidgetCategoryByVehicleContent;
