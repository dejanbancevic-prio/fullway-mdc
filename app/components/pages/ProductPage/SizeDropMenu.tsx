import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

type SizeDropMenuProps = {
  options: { label: string; url_key: string; stock_status: string }[];
  defaultValue?: string;
  onChange?: (url_key: string) => void;
};

const SizeDropMenu = ({
  options,
  defaultValue,
  onChange,
}: SizeDropMenuProps) => {
  return (
    <div className="w-full">
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger className="w-full rounded-none cursor-pointer [&_svg]:!text-white [&_svg]:opacity-100">
          <SelectValue placeholder="Choose tire size" />
        </SelectTrigger>
        <SelectContent className="max-h-[15rem] overflow-y-auto">
          <SelectGroup>
            <SelectLabel>Choose tire size</SelectLabel>
            {options.map((opt) => (
              <SelectItem
                key={opt.url_key}
                value={opt.url_key}
                className="cursor-pointer"
              >
                {opt.label}
                {opt.stock_status === "IN_STOCK" ? (
                  <div className="flex gap-[0.3rem] items-center">
                    <Image
                      src="/icons/other/greenCheck.svg"
                      alt="In Stock"
                      width={1920}
                      height={1080}
                      className="w-[1rem] h-[1rem]"
                    />
                    <p className="text-[#35D58A] font-[600] text-[0.75rem]">
                      In Stock
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-[0.3rem] items-center">
                    <Image
                      src="/icons/other/redX.svg"
                      alt="Out of Stock"
                      width={1920}
                      height={1080}
                      className="w-[1rem] h-[1rem]"
                    />
                    <p className="text-[#DC0014] font-[600] text-[0.75rem]">
                      Out of Stock
                    </p>
                  </div>
                )}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SizeDropMenu;
