// import React from "react";
// import ProductCard from "../products/ProductCard";

// const FourColumContent = ({ products, handleCurrentProduct }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 -mx-15px">
//       {products?.map((product, idx) => (
//         <ProductCard
//           key={idx}
//           product={product}
//           handleCurrentProduct={handleCurrentProduct}
//         />
//       ))}
//     </div>
//   );
// };

// export default FourColumContent;

import React from "react";
import ProductCard from "../products/ProductCard";

const FourColumnContent = ({ products, handleCurrentProduct }) => {
  if (!products || products.length === 0) return <p>No products available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 -mx-15px">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          handleCurrentProduct={handleCurrentProduct}
        />
      ))}
    </div>
  );
};

export default FourColumnContent;