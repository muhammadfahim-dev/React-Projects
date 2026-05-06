import React from "react";
import { Link } from "react-router-dom";
import CategoryFilter from "../components/Filters/CategoryFilter";
import PriceFilter from "../components/Filters/PriceFilter";
import SortFilter from "../components/Filters/SortFilter";
import FeaturedProducts from "../components/FeaturedProducts";

function ProductsPage({
  category,
  products,
  categoryFilter,
  setCategoryFilter,
  min,
  setMin,
  max,
  setMax,
}) {
  return (
    <div className="">
      <hr className="border border-gray-300 w-full" />

      <div className="flex gap-1 font-bold ml-5 mt-2 text-gray-500 text-sm">
        <Link>Home</Link>
        <span>{">"}</span>
        <Link>Products</Link>
      </div>

      <div className="w-full min-h-screen grid grid-cols-[250px_1fr] pt-5 px-3">
        <div className="border rounded-xl pt-5 px-5 h-[75vh] sticky top-20">
          <h1 className="font-bold text-xl">Filters</h1>
          <CategoryFilter
            category={category}
            products={products}
            setCategoryFilter={setCategoryFilter}
          />

          <PriceFilter min={min} setMin={setMin} setMax={setMax} max={max} />
        </div>

        <div className="">
          <SortFilter length={products.length} />

          <div className=" w-full grid grid-cols-[150px_150px_150px_150px_150px] gap-10 justify-center py-5">
            {products.map((product) => (
              <FeaturedProducts product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
