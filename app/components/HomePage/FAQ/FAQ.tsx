import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto text-black py-[3rem]">
        <div className="flex flex-col ">
          <p className="font-[400] text-[1.125rem] italic">HERE TO HELP YOU</p>

          <p className="font-[800] text-[2.5rem] italic">
            FREQUENTLY ASKED QUESTIONS - FAQ
          </p>

          <FAQAccordion />

          <div className="flex justify-center">
            <Button className="buttonSkew-white text-base font-[700] w-[14.688rem] mt-[1.5rem]">
              <Link href="/">SHOP ALL TIRES</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
