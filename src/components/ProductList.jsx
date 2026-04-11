import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className=" grid grid-cols-3 py-5 gap-7">
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductList;
