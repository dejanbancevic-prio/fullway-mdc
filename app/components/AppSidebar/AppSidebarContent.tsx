"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { CartItem, cartItems, removeFromCart } from "@/lib/cart";
import { useReactiveVar } from "@apollo/client/react";

const AppSidebarContent = () => {
  const { toggleSidebar } = useSidebar();

  const increment = (url_key: string) => {
    const updated = items.map((item) =>
      item.url_key === url_key ? { ...item, quantity: item.quantity + 1 } : item
    );
    cartItems(updated);
  };

  const decrement = (url_key: string) => {
    const updated = items.map((item) =>
      item.url_key === url_key
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    cartItems(updated);
  };

  const items = useReactiveVar(cartItems);

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

      <div className="flex flex-col justify-between bg-black rounded-[0.5rem] p-[1rem] min-h-[48.5rem]">
        {items.length > 0 ? (
          <div>
            {items.map((item: CartItem, index) => (
              <div key={item.url_key}>
                <div className="flex  gap-[1.5rem] w-full mb-[1rem]">
                  <div className="w-[7.75rem] h-[7.75rem] bg-neutral-200 rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image_url}
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
                          onClick={() => removeFromCart(item.url_key)}
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

                      <div className="font-[400]">
                        {item.size} • {item.season_text}
                      </div>
                    </div>

                    <div className="flex justify-between w-full items-end leading-none">
                      <div className="flex font-[400] gap-[1.5rem] items-end">
                        <div className="flex items-end  gap-[1rem] ">
                          <Button
                            onClick={() => decrement(item.url_key)}
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

                          <span>{item.quantity}</span>
                          <Button
                            onClick={() => increment(item.url_key)}
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
                        ${item.final_price.toFixed(2)}
                      </div>
                      <div className="italic font-[700] text-[1.5rem]">
                        ${(item.final_price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>

                {index < items.length - 1 && (
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
        ) : (
          <div className="flex justify-center font-[700] mt-[1rem]">You have no items in your shopping cart. </div>
        )}

        <div className="flex w-full text-[0.75rem] mt-[1rem]">
          You will be redirected to our partner,
          <div className="font-bold ml-[0.3rem]">Priority Tire</div>, to
          complete your transaction.
        </div>
      </div>
    </div>
  );
};

export default AppSidebarContent;
