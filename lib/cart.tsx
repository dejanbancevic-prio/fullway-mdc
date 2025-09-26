import { makeVar } from "@apollo/client";

export type CartItem = {
  url_key: string;
  sku: string;
  name: string;
  size: string;
  season_text: string;
  final_price: number;
  image_url: string;
  quantity: number;
};

export const cartItems = makeVar<CartItem[]>([]);

export const addToCart = (item: CartItem) => {
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
};

export const removeFromCart = (url_key: string) => {
  cartItems(cartItems().filter((i) => i.url_key !== url_key));
};
