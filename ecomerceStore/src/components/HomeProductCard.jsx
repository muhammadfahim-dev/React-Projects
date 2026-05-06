import React from "react";
import RatingStars from "../components/RatingStars";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeProductCard({ product }) {
  return (
    <div className="w-35 py-1 h-35 bg-gray-200 rounded flex flex-col gap-1">
      <Link to={"/products"}>
        {" "}
        <img src={product.thumbnail} alt="" />
      </Link>

      <h1 className="text-[12px] font-bold text-gray-500">{product.title}</h1>

      <p className="font-bold">{product.price}</p>

      <div className="">
        <div className="text-yellow-500 flex">
          <RatingStars rating={product.rating} />
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
