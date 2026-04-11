import React from "react";
import FormBar from "../components/FormBar";
import CategoryFilter from "../components/Filters/CategoryFilter";
import PriceFilter from "../components/Filters/PriceFilter";
import StockCheckBox from "../components/Filters/StockCheckBox";
import ProductList from "../components/ProductList";
import SortByPrice from "../components/Filters/SortByPrice";

function ProductFilterDashboard({
  products,
  page,
  totalPages,
  setPage,
  setFilter,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  setInStock,
  inStock,
  sortOrder,
  setSortOrder,
  setSearchTxt,
  searchTxt,
}) {
  const visiblePages = 5;

  let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  startPage = Math.max(1, endPage - visiblePages + 1);

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div>
      <h1 className="text-xl font-bold ">Product Filter Dashboard</h1>

      <hr className="w-full border border-gray-300 mt-5" />

      <div className="flex gap-5 pt-7">
        <FormBar searchTxt={searchTxt} setSearchTxt={setSearchTxt} />

        <div className="w-150 grid grid-cols-2 grid-rows-2 items-center justify-center">
          <CategoryFilter setFilter={setFilter} />
          <PriceFilter
            maxPrice={maxPrice}
            minPrice={minPrice}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
          />
          <StockCheckBox setInStock={setInStock} inStock={inStock} />
          <SortByPrice sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>
      </div>

      <hr className="w-full border border-gray-300" />

      <ProductList products={products} page={page} />

      <div className="flex gap-2 mt-6 mx-auto items-center justify-center">
        <button
          className="text-sm border border-gray-400 px-2 py-1 font-bold text-blue-500 rounded cursor-pointer"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        {pages.map((p) => (
          <button
            className={`${page === p ? "bg-blue-500 text-white px-3" : "px-3"} border border-collapse border-gray-400 px-1 text-[12px] font-bold text-gray-500 cursor-pointer rounded`}
            key={p}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="text-sm border border-gray-400 px-2 py-1 font-bold text-blue-500 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductFilterDashboard;
