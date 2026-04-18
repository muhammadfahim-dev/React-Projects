import React from "react";

function SortByPrice({ sortOrder, setSortOrder }) {
  return (
    <div className="border border-gray-500 rounded px-2 py-1 text-[12px] bg-white w-50 font-medium">
      <label htmlFor="">Sort by Price: </label>

      <select
        name=""
        id=""
        className="border-none outline-none"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="lowToHigh">Low to High</option>
        <option value="HighToLow">High to Low</option>
      </select>
    </div>
  );
}

export default SortByPrice;
