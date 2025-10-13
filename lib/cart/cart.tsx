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

const STORAGE_KEY = "fullway_cart_v1";

function readStorage(): CartItem[] {
  try {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

function writeStorage(items: CartItem[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
  }
}

export const cartItems = makeVar<CartItem[]>(readStorage());


export const setCartItems = (items: CartItem[]) => {
  cartItems(items);
  writeStorage(items);
};


export const addToCart = ({ item, toggleSidebar }: addToCartProps) => {
  const existing = cartItems().find((i) => i.url_key === item.url_key);
  if (existing) {
    const updated = cartItems().map((i) =>
      i.url_key === item.url_key ? { ...i, quantity: i.quantity + item.quantity } : i
    );
    setCartItems(updated);
  } else {
    setCartItems([...cartItems(), item]);
  }

  toast.success(
    <div className="flex ml-[0.5rem] gap-[1.5rem] items-center w-full">
      <div className="flex flex-col gap-[0.25rem]">
        <span className="font-[800]">{item.name}</span>
        <p className="text-[#636363] ">has been successfully added to your cart.</p>
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
  const updated = cartItems().filter((i) => i.url_key !== url_key);
  setCartItems(updated);
};

export const incrementCartItem = (url_key: string) => {
  const updated = cartItems().map((i) =>
    i.url_key === url_key ? { ...i, quantity: i.quantity + 1 } : i
  );
  setCartItems(updated);
};

export const decrementCartItem = (url_key: string) => {
  const updated = cartItems().map((i) =>
    i.url_key === url_key ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
  );
  setCartItems(updated);
};
