import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

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
          <div className="flex w-full max-w-sm items-center md:mt-[0rem] mt-[1.5rem] md:mb-[0rem] mb-[2.25rem]">
            <Input
              type="email"
              placeholder="example@mail.com"
              className="rounded-none w-[17.688rem]"
            />
            <Button className="bg-white text-black rounded-none italic text-base font-[600] hover:text-white cursor-pointer">
              SIGN UP
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-between md:gap-[0rem] gap-[2.25rem]">
          <div className="flex flex-col md:flex-row justify-between gap-[1.5rem]">
            <div className="flex flex-col w-full">
              <p className="font-[600] text-[1.25rem]">COMPANY</p>
              <div className="md:w-[12.958rem] w-full border-b-1 font-[400] text-[1rem]" />
              <Link href={"/"}>About Us</Link>
              <Link href={"/"}>Contact Us</Link>
              <Link href={"/"}>Blog</Link>
            </div>

            <div className="flex flex-col w-full">
              <p className="font-[600] text-[1.25rem]">SUPPORT</p>
              <div className="md:w-[12.958rem] w-full border-b-1 font-[400] text-[1rem]" />
              <Link href={"/"}>About Us</Link>
              <Link href={"/"}>Contact Us</Link>
              <Link href={"/"}>Blog</Link>
            </div>

            <div className="flex flex-col w-full">
              <p className="font-[600] text-[1.25rem]">OUR TIRES</p>
              <div className="md:w-[12.958rem] w-full border-b-1 font-[400] text-[1rem]" />
              <Link href={"/"}>Passenger</Link>
              <Link href={"/"}>SUV</Link>
              <Link href={"/"}>Light Truck</Link>
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
        <p>2025 Fullway. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
