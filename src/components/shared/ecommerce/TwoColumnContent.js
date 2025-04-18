// import ProductCard from "../products/ProductCard";

// const TwoColumnContent = ({ products, handleCurrentProduct }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 -mx-15px">
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

// export default TwoColumnContent;

// import ProductCard from "../products/ProductCard";

// const TwoColumnContent = ({ products, handleCurrentProduct }) => {
//   if (!products || products.length === 0) return <p>No products available.</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 -mx-15px">
//       {products.map((product) => (
//         <ProductCard
//           key={product._id}
//           product={product}
//           handleCurrentProduct={handleCurrentProduct}
          
//         />
//       ))}
//     </div>
//   );
// };

// export default TwoColumnContent;

import ProductCard from "../products/ProductCard";

const TwoColumnContent = ({ products, handleCurrentProduct, categoryId, subcategoryId }) => {
  if (!products || products.length === 0) return <p>No products available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 -mx-15px">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          categoryId={categoryId}
          subcategoryId={subcategoryId}
          handleCurrentProduct={handleCurrentProduct}
        />
      ))}
    </div>
  );
};

export default TwoColumnContent;
