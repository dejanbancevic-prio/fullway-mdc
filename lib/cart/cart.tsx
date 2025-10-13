import { Button } from "@/components/ui/button";
import { makeVar } from "@apollo/client";
import { sidebarTypeVar } from "@lib/cache";
import { toast } from "sonner";

export type CartItem = {
  url_key: string;
  sku: string;
  id: number;
  name: string;
  size: string;
  season_text: string;
  final_price: number;
  image_url: string;
  quantity: number;
};

type addToCartProps = {
  item: CartItem;
  toggleSidebar: () => void;
};

export const cartItems = makeVar<CartItem[]>([]);

export const addToCart = ({ item, toggleSidebar }: addToCartProps) => {
  const existing = cartItems().find((i) => i.url_key === item.url_key);
  if (existing) {
    cartItems(
      cartItems().map((i) =>
        i.url_key === item.url_key
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      )
    );
  } else {
    cartItems([...cartItems(), item]);
  }

  toast.success(
    <div className="flex ml-[0.5rem] gap-[1.5rem] items-center w-full">
      <div className="flex flex-col gap-[0.25rem]">
        <span className="font-[800]">{item.name}</span>
        <p className="text-[#636363] ">
          has been successfully added to your cart.
        </p>
      </div>

      <Button
        className="buttonSkew-black font-[800]"
        onClick={() => {
          sidebarTypeVar("cart");
          toggleSidebar();
        }}
      >
        See Cart
      </Button>
    </div>,
    {
      className: "!w-[21rem] md:!w-[27rem] flex items-start",
      duration: 2000,
    }
  );
};

export const removeFromCart = (url_key: string) => {
  cartItems(cartItems().filter((i) => i.url_key !== url_key));
};
