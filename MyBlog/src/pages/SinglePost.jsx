import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function SinglePost({ blogs, setBlogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const filteredBlog = blogs.find((blog) => blog.id === Number(id));

  function removePost(id) {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    navigate("/");
  }

  return (
    <div>
      <Navbar />

      <div className="w-150 mx-auto py-5">
        <div className="border border-gray-300 rounded-2xl p-5">
          <h1 className="text-xl font-bold my-2">{filteredBlog.title}</h1>

          <p className="text-[12px] text-gray-500">
            by{" "}
            <span className="font-bold text-black">{filteredBlog.author} </span>
            | <span>{filteredBlog.date}</span>
          </p>
        </div>

        <p className="mt-10 text-sm text-gray-900 bg-white rounded p-5 border border-gray-300">
          {filteredBlog.content}
        </p>

        <div className="w-full flex justify-center gap-20 mt-15">
          <Link
            to={`/edit/${filteredBlog.id}`}
            className="bg-blue-500 text-white text-sm  rounded px-4 cursor-pointer py-1 
          "
          >
            Edit Post
          </Link>

          <button
            onClick={() => removePost(filteredBlog.id)}
            className="bg-red-500 text-white rounded px-3 py-1 text-sm cursor-pointer"
          >
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
