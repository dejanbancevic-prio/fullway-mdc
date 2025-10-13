import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CartItem, removeFromCart } from "@/lib/cart/cart";

type CartProductListMobileProps = {
  items: CartItem[];
  totalPrice: number;
  increment: (url_key: string) => void;
  decrement: (url_key: string) => void;
  handleBuyNow: () => void;
};

const CartProductListMobile = ({
  items,
  totalPrice,
  increment,
  decrement,
  handleBuyNow,
}: CartProductListMobileProps) => {
  return (
    <div className="flex flex-col justify-between bg-black rounded-[0.5rem] p-[1rem] min-h-[41.5rem]">
      {items.length > 0 ? (
        <div>
          {items.map((item: CartItem, index) => (
            <div key={item.url_key}>
              <div className="flex flex-col  gap-[1.5rem] w-full mb-[1rem]">
                <div className="flex justify-between">
                  <div className="w-[7.75rem] h-[7.75rem] bg-neutral-200 rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src={
                        item.image_url ?? "/images/fullway-tire-default.jpeg"
                      }
                      alt="/images/fullway-tire-default.jpeg"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-fit"
                    />
                  </div>

                  <Button
                    className="bg-transparent hover:bg-transparent p-0 cursor-pointer flex items-start"
                    onClick={() => removeFromCart(item.url_key)}
                  >
                    <Image
                      src="/icons/other/Trash2.svg"
                      alt="Exit Icon"
                      width={1920}
                      height={1080}
                      className="w-[1.3rem] h-[1.3rem]"
                    />
                  </Button>
                </div>

                <div className="flex flex-col justify-between flex-1 ">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start w-full mb-[1rem]  ">
                      <p className="font-[700] text-[1.5rem] border-b-5 border-fullwayRed leading-none ">
                        {item.name}
                      </p>
                    </div>

                    <div className="font-[400]">
                      {item.size} • {item.season_text}
                    </div>
                  </div>

                  <div className="flex justify-end w-full items-end leading-none">
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
                  </div>
                  <div className="italic flex justify-end font-[700] text-[1.5rem] mt-[1rem]">
                    ${(item.final_price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>

              {index < items.length - 1 && (
                <div className="h-[0.07rem] bg-fullwayGrey w-full my-[1rem]" />
              )}
            </div>
          ))}

          <div className="flex justify-between items-center gap-[0.5rem]">
            <div className="font-[700] text-[1rem]">Total:</div>
            <div className="italic font-[700] text-[2rem]">
              ${totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="my-[1.5rem] text-[0.75rem] font-[300]">
            <div className="flex flex-col justify-between mb-2">
              <div className="">Prices are shown in Checkout process.</div>
              <div className="flex gap-[0.5rem]">
                <div className="">Shipping:</div>
                <div className="font-bold">Free!</div>
              </div>
            </div>
          </div>

          <Button
            className="buttonSkewSidebar w-full font-bold py-2 rounded-md"
            onClick={handleBuyNow}
          >
            BUY NOW
          </Button>
        </div>
      ) : (
        <div className="flex justify-center text-center font-[700] mt-[1rem]">
          You have no products in your shopping cart.{" "}
        </div>
      )}

      <div className="w-full text-[0.75rem] mt-[1rem] leading-relaxed text-center ">
        <span>You will be redirected to our partner, </span>
        <span className="font-bold">Priority Tire</span>
        <span> to complete your transaction.</span>
      </div>
    </div>
  );
};

export default CartProductListMobile;
