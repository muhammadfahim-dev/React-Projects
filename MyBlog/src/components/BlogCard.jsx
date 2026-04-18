import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="w-60 rounded shadow shadow-gray-500 my-3 bg-white p-3 flex flex-col justify-evenly">
      <h1 className="text-[14px] font-bold ">{blog.title}</h1>

      <p className="text-[12px] text-gray-500 my-3">{blog.description}</p>

      <Link
        to={`/single-page/${blog.id}`}
        className="px-3 py-1 bg-blue-500 text-white rounded border-none text-sm w-30 flex items-center mx-auto cursor-pointer gap-2"
      >
        Read More
        <ChevronRight className="w-3 mt-0.5" />
      </Link>
    </div>
  );
}

export default BlogCard;
