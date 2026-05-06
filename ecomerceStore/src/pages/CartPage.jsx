import React from "react";
import CartItem from "../components/CartItem";

function CartPage({ cart, setCart }) {
  let filteredProducts = cart.filter((item) => item.quantity > 0);

  return (
    <div className="w-[75vw] mx-auto">
      <h1 className="text-xl font-bold my-3">Your Cart ({cart.length})</h1>

      <div className="">
        <div className="flex justify-between font-bold">
          <p>Product</p>
          <p className="ml-40">Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p></p>
        </div>

        <hr className="w-full border border-gray-300 mt-2 mb-5" />

        <div className="flex flex-col gap-3">
          {filteredProducts.map((item) => (
            <CartItem item={item} key={item.id} cart={cart} setCart={setCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
