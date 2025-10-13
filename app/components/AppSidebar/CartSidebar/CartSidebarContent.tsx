"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cartItems } from "@/lib/cart/cart";
import { useReactiveVar } from "@apollo/client/react";
import CartProductListMobile from "./CartProductListMobile";
import CartProductList from "./CartProductList";

const CartSidebarContent = () => {
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

  const handleBuyNow = () => {
    if (items.length === 0) return;

    const queryParams = items
      .map((item) => `${encodeURIComponent(item.id)}%3A${item.quantity}`)
      .join("%2C");

    const url = `https://www.prioritytire.com/addtocart/meta?products=${queryParams}`;
    console.log(url);
    window.open(url, "_blank");
  };

  const items = useReactiveVar(cartItems);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.final_price * item.quantity,
    0
  );

  return (
    <div>
      <div className=" md:block hidden p-[1rem] w-full bg-white text-white">
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

        <CartProductList
          items={items}
          totalPrice={totalPrice}
          increment={increment}
          decrement={decrement}
          handleBuyNow={handleBuyNow}
        />
      </div>

      <div className="md:hidden p-[1rem] w-full bg-white text-white">
        <div className=" flex justify-between items-center ">
          <Image
            src="/icons/logo/Logos.svg"
            alt="Logos"
            width={1920}
            height={1080}
            className="w-full h-full"
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

        <CartProductListMobile
          items={items}
          totalPrice={totalPrice}
          increment={increment}
          decrement={decrement}
          handleBuyNow={handleBuyNow}
        />
      </div>
    </div>
  );
};

export default CartSidebarContent;
