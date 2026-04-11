import { useState, useEffect } from "react";
import axios from "axios";
import ProductFilterDashboard from "./pages/ProductFilterDashboard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("all");
  const [minPrice, setMinPrice] = useState(5);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [stock, setInStock] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTxt, setSearchTxt] = useState("");

  let filteredProducts = products.filter((product) => {
    const categoryMatch = filter === "all" || product.category === filter;

    const priceFilter = product.price >= minPrice && product.price < maxPrice;

    const filterByStock = !stock || product.stock > 0;
    const searchFilter = product.title
      .toLowerCase()
      .includes(searchTxt.toLowerCase());

    return categoryMatch && priceFilter && filterByStock && searchFilter;
  });

  let finalFilteredAndSorted = [...filteredProducts];

  if (sortOrder === "lowToHigh") {
    finalFilteredAndSorted.sort((a, b) => a.price - b.price);
  } else {
    finalFilteredAndSorted.sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    let skip = (page - 1) * limit;

    axios
      .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((response) => {
        setProducts(response.data.products);
        setTotal(response.data.total);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div className="w-full min-h-screen bg-gray-200 px-30 py-5">
      <ProductFilterDashboard
        products={finalFilteredAndSorted}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        setFilter={setFilter}
        maxPrice={maxPrice}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setInStock={setInStock}
        inStock={stock}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setSearchTxt={setSearchTxt}
        searchTxt={searchTxt}
      />
    </div>
  );
}

export default App;
