import { Search, Store } from "lucide-react";
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-20 mb-5 w-full bg-blue-800 p-10 rounded-xl flex gap-35 text-white">
      <div className="text-white flex flex-col w-50 gap-5">
        <div className="flex gap-2 text-white font-bold">
          <Store />
          ShopVerse
        </div>

        <p className="text-sm ">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
        </p>

        <div className="flex gap-4">
          <FaFacebook />

          <BsTwitter />

          <BsInstagram />
        </div>
      </div>

      <div className="">
        <h1 className="font-bold mb-3">Shop</h1>

        <ul className="text-sm flex flex-col gap-2">
          <li>All Products</li>
          <li>Featured</li>
          <li>Best Sellers</li>
          <li>New Articles</li>
          <li>Others</li>
        </ul>
      </div>

      <div className="">
        <h1 className="font-bold mb-3">Shop</h1>

        <ul className="text-sm flex flex-col gap-2">
          <li>All Products</li>
          <li>Featured</li>
          <li>Best Sellers</li>
          <li>New Articles</li>
          <li>Others</li>
        </ul>
      </div>

      <div className="">
        <h1 className="font-bold mb-3">Shop</h1>

        <ul className="text-sm flex flex-col gap-2">
          <li>All Products</li>
          <li>Featured</li>
          <li>Best Sellers</li>
          <li>New Articles</li>
          <li>Others</li>
        </ul>
      </div>

      <div className="w-50">
        <h1 className="font-bold mb-3">Shop</h1>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          tenetur 
        </p>

        <div className="w-45 border flex mt-5 rounded">
          <input type="text" />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Footer;
