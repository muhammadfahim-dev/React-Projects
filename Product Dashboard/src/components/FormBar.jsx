import { Search } from "lucide-react";
import React from "react";

function FormBar({ searchTxt, setSearchTxt }) {
  return (
    <div className="flex justify-between items-center border border-gray-500 text-sm w-80 rounded overflow-hidden h-9">
      <div className="flex gap-2 items-center mx-2 py-1">
        <Search className="w-5" />
        <input
          type="text"
          placeholder="search...."
          className="outline-none border-none px-2"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
      </div>

      <button className="bg-blue-500 text-white text-sm px-3 py-2 cursor-pointer">
        Search
      </button>
    </div>
  );
}

export default FormBar;
