import React from "react";

function CategoryFilter({ setFilter }) {
  return (
    <div className=" mx-10  flex flex-col gap-2">
      <label htmlFor="" className="text-sm font-bold text-gray-900">
        Category
      </label>
      <select
        name=""
        id=""
        className="text-sm text-gray-900 border border-gray-500 rounded w-30 outline-none p-1 bg-white"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home-Decoration</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
