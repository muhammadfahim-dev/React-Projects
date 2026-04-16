import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-500 p-4 w-full flex justify-between items-center">
      <Link to={"/"} className="text-xl font-bold text-white">
        MyBlog
      </Link>

      <Link
        to={"/new-post"}
        className="bg-blue-400 rounded border-none text-white px-3 py-1 cursor-pointer"
      >
        Add New Post
      </Link>
    </div>
  );
}

export default Navbar;
