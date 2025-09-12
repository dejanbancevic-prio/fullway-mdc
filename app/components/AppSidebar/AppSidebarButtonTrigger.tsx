"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";

const SidebarTriggerButton = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className="buttonSkew group text-base font-[700] px-[1rem]"
      onClick={toggleSidebar}
    >
      CHECK OUT
      <Image
        src="/icons/arrows/Icon=Arrow-Color=White.svg"
        alt="Arrow 3"
        width={1920}
        height={1080}
        className="w-auto h-auto pl-[0.5rem] group-hover:opacity-0"
      />
      <Image
        src="/icons/arrows/Icon=Arrow-Color=Dark.svg"
        alt="Arrow 3"
        width={1920}
        height={1080}
        className="w-auto h-auto pl-[0.5rem] absolute right-[1rem] opacity-0 group-hover:opacity-100"
      />
    </Button>
  );
};

export default SidebarTriggerButton;
