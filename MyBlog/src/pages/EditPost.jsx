import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditPost({ blogs, setBlogs }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      let blogToEdit = blogs.find((blog) => blog.id === Number(id));

      if (blogToEdit) {
        setFormData(blogToEdit);
      }
    } else {
      setFormData({
        title: "",
        description: "",
        content: "",
        author: "",
      });
    }
  }, [id, blogs]);

  function updateOrCreatePost(data) {
    if (id) {
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === Number(id) ? { ...blog, ...data } : blog,
        ),
      );

      navigate(`/single-page/${id}`);
    } else {
      let dateObj = new Date().toISOString().split("T")[0];

      let newPost = {
        id: Date.now(),
        date: dateObj,
        ...data,
      };

      setBlogs((prevBlogs) => [...prevBlogs, newPost]);

      setFormData({
        title: "",
        description: "",
        content: "",
        author: "",
        author: "",
      });

      navigate(`/single-page/${newPost.id}`);
    }
  }

  return (
    <div className="">
      <Navbar />

      <div className="w-150 mx-auto p-5 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateOrCreatePost(formData);
          }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-bold text-gray-800">
            {id ? "Edit This Post" : "Create New Post"}
          </h1>
          <hr className="border border-gray-400" />
          <label className="text-sm font-bold mt-5">Author:</label>{" "}
          <input
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...setFormData, author: e.target.value })
            }
            placeholder="Author"
            className="bg-white w-90 border px-2 py-1 text-sm text-gray-600 rounded mt-1 outline-none"
          />
          <label htmlFor="" className="text-sm font-bold mt-5">
            Title:
          </label>
          <input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            type="text"
            placeholder="Enter post title"
            className="bg-white w-90 border px-2 py-1 text-sm text-gray-600 rounded mt-1 outline-none"
          />
          <label htmlFor="" className="text-sm font-bold mt-5">
            Description:
          </label>
          <input
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            type="text"
            placeholder="Enter a short description"
            className="bg-white w-90 border px-2 py-1 text-sm text-gray-600 rounded mt-1 outline-none"
          />
          <label htmlFor="" className="text-sm font-bold mt-5">
            Content:
          </label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            placeholder="Write your message here..."
            className="bg-white w-90 border px-2 py-1 text-sm text-gray-600 rounded mt-1 outline-none"
            name=""
            id=""
            rows={6}
            cols={30}
          ></textarea>
          <button className="bg-blue-500 text-white rounded px-3 py-1 w-20 ml-35 mt-4 cursor-pointer">
            {id ? "Update" : "Publish"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
