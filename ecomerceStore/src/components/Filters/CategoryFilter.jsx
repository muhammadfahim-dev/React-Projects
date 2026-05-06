import React from "react";
import { Link } from "react-router-dom";

function CategoryFilter({ category, products, setCategoryFilter }) {
  return (
    <div>
      <ul>
        <h1 className="font-bold mt-5 mb-2">Category</h1>

        {category.map((cat) => (
          <li
            key={cat.category}
            className="flex justify-between items-center my-1 text-gray-500"
          >
            <Link onClick={() => setCategoryFilter(cat.category)}>
              {cat.category}
            </Link>

            <p>
              (
              {
                products.filter((product) => product.category === cat.category)
                  .length
              }
              )
            </p>
          </li>
        ))}
        <li className="flex justify-between items-center my-1 text-gray-500">
          <Link onClick={() => setCategoryFilter("all")}>All</Link>
          <p>({products.length})</p>
        </li>
      </ul>
    </div>
  );
}

export default CategoryFilter;
