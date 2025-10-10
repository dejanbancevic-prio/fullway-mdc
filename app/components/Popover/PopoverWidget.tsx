"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type PopoverWidgetProps<T> = {
  placeholderText: string;
  items: T[];
  getLabel: (item: T) => number;
  onSelect: (value: number) => void;
  selected?: T | null;
};

const PopoverWidget = <T,>({
  placeholderText,
  items,
  selected = null,
  getLabel,
  onSelect,
}: PopoverWidgetProps<T>) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: T) => {
    setOpen(false);
    onSelect(getLabel(item));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="rounded-none w-[17.125rem] text-start p-[0.5rem] cursor-pointer text-[#636363] border">
        {selected ? getLabel(selected) : placeholderText}
      </PopoverTrigger>

      <PopoverContent className="flex flex-wrap w-[19.1rem] max-h-[24.5rem] overflow-y-auto ml-[2rem]">
        {items.map((item, idx) => {
          const label = getLabel(item);
          const isSelected = selected && getLabel(selected) === label;
          return label === 0 || null || undefined ? (
            "No Matches"
          ) : (
            <Button
              key={idx}
              onClick={() => handleSelect(item)}
              className={`bg-transparent text-black border hover:text-fullwayRed hover:bg-transparent m-[0.2rem] ${
                isSelected ? "text-fullwayRed border-2" : ""
              }`}
            >
              {label}
            </Button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverWidget;
