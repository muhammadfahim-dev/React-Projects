import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [minPrice, setMinPrice] = useState(5);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchTxt, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `https://dummyjson.com/products?limit=${50}&skip=${0}`,
      );

      if (!response.data) return;

      setProducts(response.data.products);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!products?.length) return;

    const result = [];

    products.forEach((product) => {
      const exists = result.find((item) => item.category === product.category);

      if (!exists) {
        result.push({
          category: product.category,
          thumbnail: product.thumbnail,
        });
      }
    });

    setCategory(result);
  }, [products]);

  const filteredProducts = products.filter((product) => {
    const filterByCategory =
      categoryFilter === "all" || product.category === categoryFilter;

    const priceFilter = product.price >= minPrice && product.price <= maxPrice;

    const searchFilter = product.title
      .toLowerCase()
      .includes(searchTxt.toLowerCase());

    return filterByCategory && priceFilter && searchFilter;
  });

  return (
    <div className="">
      <Navbar setSearchTxt={setSearchText} searchTxt={searchTxt} cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={filteredProducts}
              category={category}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              max={maxPrice}
              setMax={setMaxPrice}
              min={minPrice}
              setMin={setMinPrice}
            />
          }
        />

        <Route
          path="/product-details/:id"
          element={<ProductDetails products={products} setCart={setCart} />}
        />

        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
