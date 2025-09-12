"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

type Product = {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
};

const initialData: { featured: Product[] } = {
  featured: [
    {
      id: "p1",
      name: "HP 105",
      size: "225/45R18",
      price: 982.42,
      image: "/images/Sidebar/TirePhoto.svg",
    },
    {
      id: "p2",
      name: "HP 106",
      size: "235/50R18",
      price: 982.42,
      image: "/images/Sidebar/TirePhoto.svg",
    },
    {
      id: "p3",
      name: "HP 107",
      size: "235/50R18",
      price: 982.42,
      image: "/images/Sidebar/TirePhoto.svg",
    },
  ],
};

const AppSidebarContent = () => {
  const { toggleSidebar } = useSidebar();
  const [count, setCount] = useState(1);

  const [items, setItems] = useState<Product[]>(initialData.featured);

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <div className="p-[1rem] w-full bg-white text-white">
      <div className="pb-[1.5rem] flex justify-between items-center">
        <Image
          src="/icons/logo/Logos.svg"
          alt="Logos"
          width={1920}
          height={1080}
          className="w-[30.75rem] h-[1.5rem] "
        />

        <Button
          className="bg-transparent hover:bg-transparent p-0 cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image
            src="/icons/other/Icon=Exit-Color=Dark.svg"
            alt="Exit Icon"
            width={1920}
            height={1080}
            className="w-[1rem] h-[1rem]"
          />
        </Button>
      </div>
      <div className="flex flex-col justify-between bg-black rounded-[0.5rem] p-[1rem] min-h-[51.5rem]">
        <div>
          {items.map((item, idx) => (
            <div key={item.id}>
              <div className="flex  gap-[1.5rem] w-full mb-[1rem]">
                <div className="w-[7.75rem] h-[7.75rem] bg-neutral-200 rounded-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Tire Image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-fit"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 ">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start w-full mb-[1rem]  ">
                      <p className="font-[700] text-[1.5rem] border-b-5 border-fullwayRed leading-none ">
                        {item.name}
                      </p>
                      <Button
                        className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-start"
                        onClick={() => removeItem(item.id)}
                      >
                        <Image
                          src="/icons/other/Icon=Exit-Color=White.svg"
                          alt="Exit Icon"
                          width={1920}
                          height={1080}
                          className="w-[1rem] h-[1rem]"
                        />
                      </Button>
                    </div>

                    <div className="font-[400]">{item.size} • All Season</div>
                  </div>

                  <div className="flex justify-between w-full items-end leading-none">
                    <div className="flex font-[400] gap-[1.5rem] items-end">
                      <div className="flex items-end  gap-[1rem] ">
                        <Button
                          onClick={() => setCount(Math.max(1, count - 1))}
                          className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-end"
                        >
                          <Image
                            src="/icons/other/Icon=Minus-Color=White.svg"
                            alt="Exit Icon"
                            width={1920}
                            height={1080}
                            className="w-[1rem] h-[1rem]"
                          />
                        </Button>

                        <div>{count}</div>

                        <Button
                          onClick={() => setCount(count + 1)}
                          className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-end"
                        >
                          <Image
                            src="/icons/other/Icon=Plus-Color=White.svg"
                            alt="Exit Icon"
                            width={1920}
                            height={1080}
                            className="w-[1rem] h-[1rem]"
                          />
                        </Button>
                      </div>
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="italic font-[700] text-[1.5rem]">
                      ${(item.price * count).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {idx < items.length - 1 && (
                <div className="h-[0.07rem] bg-fullwayGrey w-full my-[1rem]" />
              )}
            </div>
          ))}

          <div className="my-[1.5rem] text-[0.75rem] font-[300]">
            <div className="flex flex-col justify-between mb-2">
              <div className="">Prices are shown in Checkout process.</div>
              <div className="flex gap-[0.5rem]">
                <div className="">Shipping:</div>
                <div className="font-bold">Free!</div>
              </div>
            </div>
          </div>

          <Button className="buttonSkewSidebar w-full font-bold py-2 rounded-md">
            BUY NOW
          </Button>
        </div>

        <div className="flex w-full text-[0.75rem]">
          You will be redirected to our partner,
          <div className="font-bold ml-[0.3rem]">Priority Tire</div>, to
          complete your transaction.
        </div>
      </div>
    </div>
  );
};

export default AppSidebarContent;
