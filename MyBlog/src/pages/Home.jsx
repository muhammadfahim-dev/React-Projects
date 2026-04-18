import React from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";

function Home({ blogs }) {
  return (
    <div>
      <Navbar />

      <h1 className="ml-19 font-bold my-2 text-xl bg-white shadow shadow-gray-300 w-250 px-4 py-2 rounded">
        Latest Blog Posts
      </h1>

      <div className="grid place-items-center py-5 grid-cols-3 w-250  mx-auto my-5 bg-white rounded shadow shadow-gray-500">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
