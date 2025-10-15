import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WidgetByVehicleContent = () => {
  return (
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
  );
};

export default WidgetByVehicleContent;
