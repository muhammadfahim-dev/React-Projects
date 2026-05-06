import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/RatingStars";
import CartBtns from "../components/CartBtns";
import CartIncreament from "../components/CartIncreament";

function ProductDetails({ products, setCart }) {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id === Number(id));

  const [itemCount, setItemCount] = useState(0);
  const [thumbnail, setThumbnail] = useState(currentProduct.thumbnail);

  return (
    <div className="w-[80vw] mx-auto grid grid-cols-[400px_1fr] mt-5">
      <div className="h-[60vh]  grid grid-cols-[80px_1fr] overflow-hidden gap-5">
        <div className="">
          {currentProduct?.images?.map((url, i) => (
            <img
              onClick={() => setThumbnail(url)}
              src={url}
              key={i}
              className=" w-full mb-4 mt-2 bg-gray-200 rounded shadow shadow-gray-300"
            />
          ))}
        </div>

        <div className=" bg-gray-200 shadow shadow-gray-300 rounded-xl">
          <img src={thumbnail} className="w-full" alt="" />
        </div>
      </div>

      <div className="ml-5">
        <h1 className="text-xl font-bold">{currentProduct.title}</h1>

        <div className="flex items-center gap-3 my-1">
          <div className="">
            <StarRating rating={currentProduct.rating} />
          </div>

          <p>{currentProduct.rating}</p>
        </div>

        <div className="flex items-center gap-5 mb-2">
          <h1 className="text-xl font-bold">${currentProduct.price}</h1>
          <p className="bg-gray-200 text-[11px] p-1 rounded text-green-700 font-bold">
            {currentProduct.discountPercentage} off
          </p>
        </div>

        <p className="text-sm text-gray-500 my-1">
          {currentProduct.description}
        </p>

        <CartIncreament
          itemCount={itemCount}
          setItemCount={setItemCount}
          product={currentProduct}
        />

        <CartBtns setCart={setCart} currentProduct={currentProduct} />
      </div>
    </div>
  );
}

export default ProductDetails;
