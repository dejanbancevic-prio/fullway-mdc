"use client";

import { Button } from "@/components/ui/button";
import { AppCarousel } from "@components/AppCarousel/AppCarousel";
import { testimonialsContent } from "@lib/testimonials/testimonialsContent";
import React, { useState } from "react";

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const mobileTestimonials = showAll
    ? testimonialsContent
    : testimonialsContent.slice(0, 3);

  return (
    <div className="bg-fullwayGrey">
      <div className="flex flex-col md:max-w-7xl md:mx-auto w-full">
        <div className="flex flex-col leading-none mb-[0.5rem] mt-[3rem] mx-[1rem] md:mx-[0rem] text-black">
          <p className="font-[500] italic text-[1.125rem] ">
            WHAT YOU SAY ABOUT US
          </p>

          <div className="flex gap-[1rem] text-[2.25rem] md:text-[3rem] font-[700] md:font-[800] italic">
            <h2>TESTIMONIALS</h2>
          </div>

          <div className="hidden md:block">
            <AppCarousel items={testimonialsContent} />
          </div>

          <div className="flex flex-col gap-[1rem] md:hidden">
            {mobileTestimonials.map((testimonial, idx) => (
              <div key={idx}>{testimonial}</div>
            ))}

            {testimonialsContent.length > 3 && (
              <Button
                onClick={() => setShowAll(!showAll)}
                className="buttonSkew-white text-base font-[700] w-[9.2374rem] mt-[1.5rem] self-center"
              >
                {showAll ? "SHOW LESS" : "READ MORE"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
