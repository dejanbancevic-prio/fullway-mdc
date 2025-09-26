import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  return (
    <div className="bottom-0 w-full bg-black ">
      <div className="flex flex-col md:flex-row md:max-w-7xl md:mx-auto mx-[1rem] justify-between md:mt-[3rem] mt-[1rem] mb-[3rem] ">
        <div className="flex flex-col justify-between gap-[1.5rem]">
          <Image
            src="/icons/logo/Fullway-Logo-White.svg"
            alt="Fullway Logo"
            width={1920}
            height={1080}
            className="w-[10.875rem] h-[2.0625rem]"
          />
          <div className="flex flex-col ">
            <p className="font-[500] italic text-[1.125rem] ">
              WANT TO STAY UPDATED?
            </p>
            <p className="font-[700] italic text-[2.5rem] leading-none">
              SIGN UP TO OUR <br /> NEWSLETTER!
            </p>
          </div>

          <NewsLetterForm />
        </div>

        <div className="flex flex-col justify-between md:gap-[0rem] gap-[2.25rem]">
          <div className="flex flex-col md:flex-row justify-between gap-[1.5rem]">
            <div className="flex flex-col w-full">
              <p className="font-[600] text-[1.25rem]">COMPANY</p>
              <div className="md:w-[12.958rem] w-full border-b-1 font-[400] text-[1rem]" />
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/contact"}>Contact Us</Link>
              <Link href={"/blog"}>Blog</Link>
            </div>

            <div className="flex flex-col w-full">
              <p className="font-[600] text-[1.25rem]">SUPPORT</p>
              <div className="md:w-[12.958rem] w-full border-b-1 font-[400] text-[1rem]" />
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/contact"}>Contact Us</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/contact#faq"}>FAQ</Link>
            </div>

            <div className="flex flex-col w-full">
              <p className="font-[600] text-[1.25rem]">OUR TIRES</p>
              <div className="md:w-[12.958rem] w-full border-b-1 font-[400] text-[1rem]" />
              <Link href={"/product/hs266"}>Passenger</Link>
              <Link href={"/product/hs998"}>SUV</Link>
              <Link href={"/product/hs288"}>Light Truck</Link>
            </div>
          </div>

          <div className="flex gap-[1.5rem] justify-center md:justify-end">
            <Link href={"/"}>
              <Image
                src="/icons/socialMedia/Facebook-Icon.svg"
                alt="Fullway Logo"
                width={1920}
                height={1080}
                className="w-[1.563rem] h-[1.563rem]"
              />
            </Link>

            <Link href={"/"}>
              <Image
                src="/icons/socialMedia/Instagram-Icon.svg"
                alt="Fullway Logo"
                width={1920}
                height={1080}
                className="w-[1.563rem] h-[1.563rem]"
              />
            </Link>

            <Link href={"/"}>
              <Image
                src="/icons/socialMedia/LinkedIn-Icon.svg"
                alt="Fullway Logo"
                width={1920}
                height={1080}
                className="w-[1.563rem] h-[1.563rem]"
              />
            </Link>

            <Link href={"/"}>
              <Image
                src="/icons/socialMedia/Pinterest-Icon.svg"
                alt="Fullway Logo"
                width={1920}
                height={1080}
                className="w-[1.563rem] h-[1.563rem]"
              />
            </Link>

            <Link href={"/"}>
              <Image
                src="/icons/socialMedia/X-Icon.svg"
                alt="Fullway Logo"
                width={1920}
                height={1080}
                className="w-[1.563rem] h-[1.563rem]"
              />
            </Link>

            <Link href={"/"}>
              <Image
                src="/icons/socialMedia/Youtube-Icon.svg"
                alt="Fullway Logo"
                width={1920}
                height={1080}
                className="w-[1.563rem] h-[1.563rem]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center font-[300] mb-[1rem] mt-[3rem]">
        <p>{new Date().getFullYear()} Fullway. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
