import React from "react";

// {
//     "id": 11,
//     "title": "Annibale Colombo Bed",
//     "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
//     "category": "furniture",
//     "price": 1899.99,
//     "discountPercentage": 8.57,
//     "rating": 4.77,
//     "stock": 88,
//     "tags": [
//         "furniture",
//         "beds"
//     ],
//     "brand": "Annibale Colombo",
//     "sku": "FUR-ANN-ANN-011",
//     "weight": 10,
//     "dimensions": {
//         "width": 28.16,
//         "height": 25.36,
//         "depth": 17.28
//     },
//     "warrantyInformation": "1 year warranty",
//     "shippingInformation": "Ships in 1 month",
//     "availabilityStatus": "In Stock",
//     "reviews": [
//         {
//             "rating": 2,
//             "comment": "Would not recommend!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Christopher West",
//             "reviewerEmail": "christopher.west@x.dummyjson.com"
//         },
//         {
//             "rating": 4,
//             "comment": "Highly impressed!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Vivian Carter",
//             "reviewerEmail": "vivian.carter@x.dummyjson.com"
//         },
//         {
//             "rating": 1,
//             "comment": "Poor quality!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Mason Wright",
//             "reviewerEmail": "mason.wright@x.dummyjson.com"
//         }
//     ],
//     "returnPolicy": "No return policy",
//     "minimumOrderQuantity": 1,
//     "meta": {
//         "createdAt": "2025-04-30T09:41:02.053Z",
//         "updatedAt": "2025-04-30T09:41:02.053Z",
//         "barcode": "3610757456581",
//         "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
//     },
//     "images": [
//         "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
//         "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
//         "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
//     ],
//     "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
// }

function ProductCard({ item }) {
  return (
    <div className="w-70  border rounded bg-white border-gray-500 grid grid-cols-[100px_1fr] py-2 px-3">
      <div className="">
        <img src={item.thumbnail} alt="" />
      </div>

      <div className="py-3">
        <p className="text-[12px] font-bold mt-2 text-gray-900">{item.title}</p>

        <p className="text-[11px] text-gray-600 font-medium mt-1">
          category: {item.category}
        </p>

        <p className="text-[16px] font-bold mt-1">${item.price}</p>

        <div className="flex items-center justify-between mt-2">
          <button className="bg-green-500 font-medium text-white text-[12px] px-2 border-none py-1 rounded cursor-pointer">
            In Stock
          </button>

          <button className="bg-blue-500 text-white text-[12px] px-2 border-none py-1 rounded font-medium  cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
