import React, { useEffect, useState } from "react";

function Brands({ products, category, setCategory }) {
  return (
    <div className="w-full  flex justify-evenly items-center">
      {category.map((cat, i) => (
        <div
          key={i}
          className="w-28  flex flex-col items-center justify-center gap-2"
        >
          <div className="w-25 h-25 rounded-full bg-gray-200">
            {/* placeholder image (since cat has no image) */}
            <img src={cat?.thumbnail} alt={cat} />
          </div>

          <h1 className="text-sm font-bold text-center">{cat.category}</h1>
        </div>
      ))}
    </div>
  );
}

export default Brands;
