import React, { useEffect } from "react";
import Brands from "../components/Brands";
import HomeProductCard from "../components/HomeProductCard";
import img from "../assets/61jFrDLtfOL._SR3000,600_.jpg";
import Footer from "../components/Footer";

function HomePage({
  products,
  category,
  setCategory,
}) {
  const fourProdcuts = products.slice(0, 6);

  return (
    <div className="w-[95vw] mx-auto">
      <div className="w-full h-[90vh] bg-[url(https://images.pexels.com/photos/36730630/pexels-photo-36730630.jpeg)] bg-cover rounded-xl overflow-hidden">
        <img className="w-full h-full " alt="" />
      </div>

      <div className="w-full my-10 ">
        <Brands
          products={products}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <h1 className="font-bold text-xl ml-5">Featured Products</h1>

      <div className=" flex w-full mx-auto items-center justify-between my-10">
        {fourProdcuts.map((product) => (
          <HomeProductCard product={product} key={product.id} />
        ))}
      </div>

      <div className="w-full mt-30 rounded-xl h-[50vh] overflow-hidden">
        <img src={img} alt="" className="w-full h-full" />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
