"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

const SidebarTriggerButton = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className="buttonSkew text-base font-[700] px-[2rem]"
      onClick={toggleSidebar}
    >
      BUY NOW
    </Button>
  );
};

export default SidebarTriggerButton;
