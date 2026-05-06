import React from "react";

function SortFilter({ length }) {
  return (
    <div className=" w-full flex justify-between items-center">
      <div className="border rounded text-gray-400 text-sm font-bold ml-10 px-5 py-2">{`Showing 1 - ${length} of 200`}</div>

      <div className="flex gap-1 text-gray-500 rounded px-5 py-2 border border-gray-400">
        <h1 className="text-sm font-bold">Sort by</h1>

        <select name="" id="" className="outline-none">
          <option value="">Popularity</option>
        </select>
      </div>
    </div>
  );
}

export default SortFilter;
