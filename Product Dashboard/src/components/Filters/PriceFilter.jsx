import React from "react";

function PriceFilter({ minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-sm font-bold text-gray-900">
        Price Range
      </label>
      <div className="">
        <input
          // value={minPrice}
          onChange={(e) => {
            if (!e.target.value) {
              setMinPrice(5);
            } else {
              setMinPrice(Number(e.target.value));
            }
          }}
          type="text"
          placeholder="min"
          className="border border-gray-500 text-sm py-1 outline-none w-15 px-3 rounded mr-5 bg-white"
        />
        <input
          // value={maxPrice}
          onChange={(e) => {
            if (!e.target.value) {
              setMaxPrice(1000);
            } else {
              setMaxPrice(Number(e.target.value));
            }
          }}
          type="text"
          placeholder="max"
          className="border border-gray-500 text-sm py-1 outline-none w-15 px-3 rounded ml-5 bg-white"
        />
      </div>
    </div>
  );
}

export default PriceFilter;
