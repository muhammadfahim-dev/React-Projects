import React from "react";
import { Link } from "react-router-dom";

function CartBtns({ setCart, currentProduct }) {
  function handleAddToCart() {
    setCart((prev) => {
      const existedItem = prev.find((item) => item.id === currentProduct.id);

      if (existedItem) {
        return prev.map((cartItem) =>
          cartItem.id === existedItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prev, { ...currentProduct, quantity: 1 }];
      }
    });
  }

  return (
    <div className="flex mt-20">
      <Link
        className="border px-5 text-blue-600 font-bold py-2 rounded cursor-pointer border-gray-400"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Link>

      <button className="border px-5 bg-blue-600 text-white font-bold py-2 rounded cursor-pointer border-gray-400 ml-5">
        Buy Now
      </button>
    </div>
  );
}

export default CartBtns;
