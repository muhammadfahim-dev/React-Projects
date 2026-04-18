import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import blogsData from "./services/data";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePost";
import EditPage from "./pages/EditPost";

function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    console.log(JSON.parse(savedBlogs))
    return savedBlogs ? JSON.parse(savedBlogs) : blogsData;
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route
          path="/single-page/:id"
          element={<SinglePage blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route
          path="/new-post"
          element={<EditPage setBlogs={setBlogs} blogs={blogs} />}
        />
        <Route
          path="/edit/:id"
          element={<EditPage setBlogs={setBlogs} blogs={blogs} />}
        />
      </Routes>
    </div>
  );
}

export default App;
