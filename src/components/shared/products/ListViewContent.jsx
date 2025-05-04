import React from "react";

const ListViewContent = ({ products, categoryId, subcategoryId }) => {
  return (
    <div className="space-y-4 mt-6 sm:mt-10">
      {products?.map((product) => (
        <div
          key={product._id}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
        >
          <img
            src={product.images?.[0] || "/default-product.jpg"}
            alt={product.name}
            className="w-full sm:w-40 md:w-48 lg:w-64 h-auto sm:h-full object-cover rounded"
          />
          <div className="flex-1 w-full sm:w-auto">
            <h3 className="text-base sm:text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600">SKU: {product.SKU}</p>
          </div>
          <a
            href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}
            className="w-full sm:w-auto text-center px-4 py-2 bg-yellow1 hover:bg-yellow text-white rounded-lg text-sm sm:text-base"
          >
            View Product
          </a>
        </div>
      ))}
    </div>
  );
};

export default ListViewContent;