import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CountryDropMenu = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="md:w-[14rem] w-full rounded-none">
          <SelectValue placeholder="Choose country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Choose country</SelectLabel>
            <SelectItem value="US">US</SelectItem>
            <SelectItem value="Serbia">Serbia</SelectItem>
            <SelectItem value="Algeria">Algeria</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountryDropMenu;
