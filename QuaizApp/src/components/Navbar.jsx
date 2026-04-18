import React from "react";
import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({ length, marks }) {
  return (
    <div className="w-full flex justify-between bg-gray-900 text-white p-3">
      <div className="flex gap-2 items-center cursor-pointer">
        <Lightbulb />

        <Link to={"/"} className="text-xl font-bold">
          React Quiz App
        </Link>
      </div>

      <div className="">{`score: ${marks}/ ${length}`}</div>
    </div>
  );
}

export default Navbar;
