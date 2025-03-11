import React from "react";
import ProductCard from "../products/ProductCard";

const ListViewContent = ({ products, categoryId, subcategoryId }) => {
  if (!products || products.length === 0) return <p>No products available.</p>;

  return (
    <div className="space-y-4 mt-10">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
        >
          <img
            src={product.images?.[0] || "/default-product.jpg"}
            alt={product.name}
            className="w-64 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600">SKU: {product.SKU}</p>
          
          </div>
          <a
            href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}
            className="px-4 py-2 bg-yellow1 hover:bg-yellow text-white rounded-lg"
          >
            View Product
          </a>
        </div>
      ))}
    </div>
  );
};

export default ListViewContent;
