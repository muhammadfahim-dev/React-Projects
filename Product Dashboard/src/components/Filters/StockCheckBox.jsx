import React from "react";

function StockCheckBox({ setInStock, inStock }) {
  return (
    <div className="ml-10 flex items-center gap-2">
      <input
        type="checkbox"
        id="instock"
        checked ={inStock}
        onChange={(e) => setInStock(e.target.checked)}
      />
      <label htmlFor="instock" className="select-none text-sm font-medium">
        In Stock Only
      </label>
    </div>
  );
}

export default StockCheckBox;
