// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const ProductCard = ({ product, handleCurrentProduct }) => {
//   return (
//     <div className="group">
//       <div className="sm:px-15px mb-30px">
//         <div className="p-15px bg-white shadow-lg dark:bg-darkdeep3 dark:shadow-md">
//           <div className="relative">
//             <Link href={`/products/${product?.product?._id}`} className="w-full overflow-hidden">
//               <Image
//                 src={product?.product?.images?.[0] ?? "/default-product.jpg"}
//                 alt={product?.product?.name || "Product Image"}
//                 className="w-full transition-all duration-300 group-hover:scale-110"
//                 width={300}
//                 height={300}
//               />
//             </Link>
//             <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:bottom-5">
//               <ul className="flex gap-[6px] justify-center items-center">
//                 <li className="h-46px">
//                   <Link  href={`/products/${product?.product?._id}`}>
//                   <button
//                     data-tip="Quick View"
//                     className="tooltip modal-open"
//                     onMouseEnter={() => handleCurrentProduct(product?.product?._id)}

//                     >
//                     <svg
//                       className="ionicon w-18px h-18px py-14px px-4 box-content text-contentColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor dark:text-contentColor-dark dark:bg-whiteColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor transition-all duration-300 rounded"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 512 512"
//                       >
//                       <path
//                         d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="32"
//                         ></path>
//                       <circle
//                         cx="256"
//                         cy="256"
//                         r="80"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeMiterlimit="10"
//                         strokeWidth="32"
//                         ></circle>
//                     </svg>
//                   </button>
//                         </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div>
//             <p className="text-sm text-gray-600 mt-2">
//               {product?.subcategoryName || "N/A"}
//             </p>
//             <Link
//               href={`/products/${product?.product?._id}`}
//               className="text-xl font-semibold text-gray-800 hover:text-primary mt-2 block"
//             >
//               Article No: {product?.product?.SKU}
//             </Link>


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="group">
//       <div className="sm:px-15px mb-30px">
//         <div className="p-15px bg-white shadow-lg dark:bg-darkdeep3 dark:shadow-md">
//           <div className="relative">
//             <Link href={`/products/${product._id}`} className="w-full overflow-hidden">
//               <Image
//                 src={product.images?.[0] || "/default-product.jpg"}
//                 alt={product.name}
//                 className="w-full transition-all duration-300 group-hover:scale-110"
//                 width={300}
//                 height={300}
//               />
//             </Link>
//           </div>

//           <div>
//             {/* Product Name */}
//             <p className="text-sm text-gray-600 mt-2">{product.name || "Product Name"}</p>

//             {/* SKU (Changed label from "Article No" to "SKU") */}
//             <Link
//               href={`/products/${product._id}`}
//               className="text-xl font-semibold text-gray-800 hover:text-primary mt-2 block"
//             >
//               SKU: {product.SKU}
//             </Link>

//             {/* Product Description */}
//             <p className="text-gray-600">{product.description}</p>

//             {/* Features (Added this missing field) */}
//             <p className="text-sm text-gray-500 mt-2">Features: {product.features}</p>

//             {/* Stock Information */}
//             <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// "use client";
// import Image from "next/image";
// import Link from "next/link";

// const ProductCard = ({ product, categoryId, subcategoryId }) => {
//   return (
//     <div className="group">
//       <div className="sm:px-15px mb-30px">
//         <div className="p-15px bg-white shadow-lg dark:bg-darkdeep3 dark:shadow-md">
//           <div className="relative">
//             <Link
//               href={`/category/${categoryId}/subcategories/${subcategoryId}/products/${product._id}`}
//               className="w-full overflow-hidden"
//             >
//               <Image
//                 src={product.images?.[0] || "/default-product.jpg"}
//                 alt={product.name}
//                 className="w-full transition-all duration-300 group-hover:scale-110"
//                 width={300}
//                 height={300}
//               />
//             </Link>
//           </div>

//           <div>
//             {/* Product Name */}
//             <p className="text-sm text-gray-600 mt-2">{product.name || "Product Name"}</p>

//             {/* SKU (Changed label from "Article No" to "SKU") */}
//             <Link
//               href={`/category/${categoryId}/subcategories/${subcategoryId}/products/${product._id}`}
//               className="text-xl font-semibold text-gray-800 hover:text-primary mt-2 block"
//             >
//               SKU: {product.SKU}
//             </Link>

//             {/* Product Description */}
//             <p className="text-gray-600">{product.description}</p>

//             {/* Features (Added this missing field) */}
//             <p className="text-sm text-gray-500 mt-2">Features: {product.features}</p>

//             {/* Stock Information */}
//             <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, categoryId, subcategoryId }) => {
  if (!product || !categoryId || !subcategoryId) {
    return <p>Invalid product data</p>;
  }

  return (
    <div className="group">
      <div className="sm:px-15px mb-30px">
        <div className="p-15px bg-white shadow-lg dark:bg-darkdeep3 dark:shadow-md">
          <div className="relative">
            <Link
              href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}
              className="w-full overflow-hidden"
            >
              <Image
                src={product.images?.[0] || "/default-product.jpg"}
                alt={product.name}
                className="w-full transition-all duration-300 group-hover:scale-110"
                width={300}
                height={300}
              />
            </Link>
          </div>

          <div>
            <p className="text-sm text-gray-600 mt-2">{product.name || "Product Name"}</p>

            <Link
              href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}
              className="text-xl font-semibold text-gray-800 hover:text-primary mt-2 block"
            >
              SKU: {product.SKU}
            </Link>

            <p className="text-gray-600">{product.description}</p>

            <p className="text-sm text-gray-500 mt-2">Features: {product.features}</p>

            <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
