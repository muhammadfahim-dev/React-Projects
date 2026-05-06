import React from "react";
import CartIncreament from "../components/CartIncreament";
import { Delete, Trash } from "lucide-react";

function CartItem({ item, cart, setCart }) {
  function handleAddToCart() {
    setCart((prev) => {
      const existedItem = cart.find((cartItem) => cartItem.id === item.id);

      if (existedItem) {
        return prev.map((cartItem) =>
          cartItem.id === existedItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  }

  function handleRemoveFromCart(id) {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0,
            }
          : cartItem,
      ),
    );
  }

  return (
    <div className="border border-gray-300 rounded my-2 flex justify-between items-center px-2">
      <div className="flex gap-3 items-center">
        <div className="w-25 h-25">
          <img src={item.thumbnail} alt="" className="w-full h-full" />
        </div>

        <div className="">
          <p className="text-sm font-bold w-30">{item.title}</p>

          <p className="text-green-600 font-bold text-sm mt-2">
            {item.stock ? "in stock" : "out of stock"}
          </p>
        </div>
      </div>

      <p className="font-bold">{item.price}</p>

      <div className="flex gap-2">
        <button
          className="bg-gray-200 px-3 text-center cursor-pointer font-black rounded"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          -
        </button>

        <span className="font-bold">{item.quantity}</span>

        <button
          onClick={handleAddToCart}
          className="bg-gray-200 px-3 text-center cursor-pointer font-black rounded"
        >
          +
        </button>
      </div>

      <p className="font-bold">{(item.price * item.quantity).toFixed(2)}</p>

      <Trash
        className="cursor-pointer "
        onClick={() => handleRemoveFromCart(item.id)}
      />
    </div>
  );
}

export default CartItem;
