import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type PopoverWidgetProps = {
  placeholderText: string;
  style: string;
};

const PopoverWidget = ({ placeholderText, style }: PopoverWidgetProps) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger  className={`${style} cursor-pointer`}>{placeholderText}</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverWidget;
