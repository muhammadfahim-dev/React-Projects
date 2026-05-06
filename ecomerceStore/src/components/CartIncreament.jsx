import React from "react";

function CartIncreament({ itemCount, setItemCount, product }) {
  function increaseItem() {
    if (itemCount < product.stock) {
      setItemCount((prev) => prev + 1);
    }
  }

  function decreaseItem() {
    if (itemCount > 0) {
      setItemCount((prev) => prev - 1);
    }
  }

  return (
    <div className="flex gap-2 mt-5  ">
      <h1 className="text-sm font-bold">Quantity:</h1>
      <button
        onClick={decreaseItem}
        className="px-3 text-center font-bold  rounded cursor-pointer bg-gray-300 ml-4 mr-1"
      >
        -
      </button>

      <span className=" px-2 font-bold">{itemCount}</span>

      <button
        onClick={increaseItem}
        className="px-3 text-center font-bold  rounded cursor-pointer bg-gray-300 ml-1"
      >
        +
      </button>
    </div>
  );
}

export default CartIncreament;
