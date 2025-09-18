import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <div className="relative w-full bg-fullwayGrey">
      <div className="md:max-w-7xl md:mx-auto mx-[1rem] text-black pt-[3rem]">
        <div className="flex flex-col ">
          <p className="font-[400] text-[1.125rem] italic">HERE TO HELP YOU</p>

          <p className="md:font-[800] font-[700] md:text-[2.5rem] text-[2.25rem] italic leading-none md:leading-16">
            FREQUENTLY ASKED QUESTIONS - FAQ
          </p>

          <FAQAccordion />

          <div className="flex justify-center">
            <Button className="buttonSkew-white text-base font-[700] w-[14.688rem] mt-[1.5rem] mb-[1rem] md:mb-[1.5rem] ">
              <Link href="/">VIEW ALL QUESTIONS</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
