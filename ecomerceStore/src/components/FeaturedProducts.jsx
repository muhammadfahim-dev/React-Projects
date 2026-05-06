import React from "react";
import StarRating from "./RatingStars";
import { Link } from "react-router-dom";

function FeaturedProducts({ product }) {
  return (
    <div className="flex flex-col gap-1 rounded shadow shadow-gray-500">
      <Link to={`/product-details/${product.id}`}>
        {" "}
        <img src={product.thumbnail} alt="" className="w-full mx-auto" />
      </Link>

      <h1 className="text-[12px] ml-3 font-bold text-gray-500">
        {product.title}
      </h1>

      <p className="text-[16px] font-bold ml-3">${product.price}</p>

      <div className="ml-3">
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
}

export default FeaturedProducts;
