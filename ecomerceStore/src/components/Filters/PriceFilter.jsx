import React, { useState } from "react";

function PriceRange({ min, setMin, max, setMax }) {
  return (
    <div className="">
      <h2 className="font-bold mb-4 mt-10">Price Range</h2>

      <div className="flex justify-center gap-15">
        <input
          type="text"
          placeholder="Min"
          onChange={(e) =>
            e.target.value === "" ? setMin(0) : setMin(Number(e.target.value))
          }
          value={min}
          className="w-15 outline-none border border-gray-500 rounded text-sm p-2"
        />

        <input
          value={max}
          onChange={(e) =>
            e.target.value === "" ? setMax(0) : setMax(Number(e.target.value))
          }
          type="text"
          placeholder="Max"
          className="w-15 outline-none border border-gray-500 rounded text-sm p-2"
        />
      </div>
    </div>
  );
}

export default PriceRange;
