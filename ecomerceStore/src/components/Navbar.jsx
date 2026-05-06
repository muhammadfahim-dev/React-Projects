import { Search, ShoppingCart, Store } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setSearchTxt, searchTxt, cart }) {
  return (
    <div className="w-full p-5 flex justify-between items-center sticky top-0 bg-blue-50">
      <Link to={"/"} className="flex gap-2 text-blue-500 font-bold">
        {" "}
        <Store />
        ShopVerse
      </Link>
      <div className="flex w-100 border items-center px-2 rounded">
        <Search className="h-4" />

        <input
          className="border-none outline-none px-3 py-1 "
          type="text"
          placeholder="search for products"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
      </div>

      <div className="flex gap-10">
        <Link to={"/login"} className="text-blue-500  font-bold">
          Login
        </Link>

        <Link to={"/cart"} className="relative">
          <ShoppingCart />
          <div className="absolute -top-4 right-1 px-1 rounded-full bg-red-500 text-[12px] text-white">
            {cart.filter((item) => item.quantity > 0).length}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
