// "use client";
// import Link from "next/link";
// import ProductDetaislSlider from "./ProductDetaislSlider";
// import Countdown from "../countdown/Countdown";
// import { useState } from "react";
// import QuantityInput from "../inputs/QuantityInput";
// import Sizes from "../product-details/Sizes";
// import Colors from "../product-details/Colors";
// import { useCartContext } from "@/contexts/CartContext";
// import getAllProducts from "@/libs/getAllProducts";

// const ProductDetails = ({ product, isModal }) => {
//   const products = getAllProducts();
//   const { addProductToCart } = useCartContext();
//   const [quantity, setQuantity] = useState(1);
//   const [color, setColor] = useState("violet");
//   const [size, setSize] = useState("x");

//   const demoColors = [
//     { name: "Violet" },
//     { name: "Black" },
//     { name: "Blue" },
//     { name: "Grey" },
//     { name: "Pink" },
//   ];
//   const demoSizes = ["x", "xl", "m", "s"];
//   const {
//     id,
//     title,
//     price,
//     image,
//     status,
//     type,
//     previousPrice,
//     reviews,
//     sizes,
//     colors,
//   } = product || {};

//   const sliderProducts = [
//     product,
//     ...products?.filter(({ id: id1 }) => id1 !== id).slice(0, 7),
//   ];

//   const colorsWithImge = demoColors?.map((color, idx) => ({
//     ...color,
//     image: sliderProducts[idx]?.image,
//   }));
//   return product ? (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
//       {/* delails left  */}
//       <div className="relative">
//         <div className="md:sticky top-[100px]">
//           {/* Swiper  */}
//           <ProductDetaislSlider products={sliderProducts} currentId={id} />
//         </div>
//       </div>
//       {/* details right  */}
//       <div>
//         <div className="text-balckColor dark:text-blackColor-dark">
//           {/* title  */}
//           <p className="text-lg leading-1.2 text-blackColor dark:text-blackColor-dark mb-15px mt-1">
//             Book
//           </p>
//           <h4
//             className={`text-size-21 md:text-size-26 lg:text-4xl font-bold $  mb-5 `}
//           >
//             {isModal ? (
//               <Link
//                 href={`/ecommerce/products/${id}`}
//                 className="leading-1.2 text-contentColor dark:text-contentColor2-dark hover:text-primaryColor dark:hover:text-primaryColor"
//               >
//                 {title}
//               </Link>
//             ) : (
//               <span className="leading-1.2 text-blackColor dark:text-blackColor-dark">
//                 {title}
//               </span>
//             )}
//           </h4>
//           {/* price  */}
//           <div className="flex items-center mb-5">
//             <p className="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px">
//               <del>${previousPrice.toFixed(2)} </del>
//             </p>
//             <p className="text-lg leading-1.8 text-blackColor dark:text-blackColor-dark mr-6px">
//               ${price.toFixed(2)}
//             </p>
//             <p className="text-size-15 leading-1.8 text-whiteColor mr-6px px-10px bg-primaryColor rounded">
//               {status}
//             </p>
//             <p className="text-size-15 leading-1.8 text-whiteColor dark:text-whiteColor-dark mr-6px px-10px bg-blackColor dark:bg-blackColor-dark rounded">
//               -27%
//             </p>
//           </div>
//           {/* countdown  */}

//           {!isModal && (
//             <div>
//               <div className="flex gap-1 items-center mb-15px">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-clock timer__icon"
//                 >
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <polyline points="12 6 12 12 16 14"></polyline>
//                 </svg>
//                 <h6 className="text-xl font-bold leading-1.2 text-blackColor dark:text-blackColor-dark">
//                   Hurry up! Sale ends in
//                 </h6>
//               </div>
//               {/* countdown */}
//               <Countdown countdown={"small"} />
//             </div>
//           )}
//           {/* progressbar  */}
//           {!isModal && (
//             <div>
//               <h6 className="leading-1.2 font-bold text-blackColor dark:text-blackColor-dark mb-">
//                 Only 10 items in stock!
//               </h6>

//               <div className="h-1 w-full bg-blue-x-light rounded-md relative mt-15px mb-15px">
//                 <div className="text-center bg-primaryColor absolute top-0 left-0 w-1/2 h-full rounded-md leading-25px"></div>
//               </div>
//             </div>
//           )}
//           {/* sizes  */}
//           <Sizes sizes={demoSizes} size={size} setSize={setSize} />
//           {/* colors  */}
//           <Colors colors={colorsWithImge} color={color} setColor={setColor} />
//           {/* quantity  */}
//           <div className="mb-30px">
//             <p className="leading-1.8 mt-5 mb-7px">Quantity</p>
//             <div className="flex items-center gap-x-10px md:gap-x-5px lg:gap-x-10px 2xl:gap-x-5">
//               <QuantityInput quantity={quantity} setQuantity={setQuantity} />

//               <div className="border-2 border-blackColor dark:border-blackColor-dark rounded-full">
//                 <button
//                   onClick={() => {
//                     addProductToCart({
//                       id,
//                       title,
//                       price,
//                       quantity,
//                       color,
//                       image,
//                     });
//                     setQuantity(1);
//                   }}
//                   className="px-37px py-10px hover:text-primaryColor leading-1.8"
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* action button  */}
//           <div>
//             <button className="text-whiteColor dark:text-whiteColor-dark dark:hover:text-whiteColor leading-1.8 px-60px md:px-90px lg:px-110px py-3 md:py-15px bg-blackColor dark:bg-blackColor-dark hover:bg-primaryColor dark:hover:bg-primaryColor rounded-full">
//               By it now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <h2></h2>
//   );
// };

// export default ProductDetails;


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import QuantityInput from "../inputs/QuantityInput";
import { useCartContext } from "@/contexts/CartContext";

const ProductDetails = ({ product, isModal }) => {
  const { addProductToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("Product Data:", product);
  }, [product]);

  if (!product) {
    return <h2 className="text-center text-xl text-gray-500">No product details available</h2>;
  }

  const { _id, name, description, SKU, stock, images, features } = product;

  const productImage = images && images.length > 0 ? images[0] : "/default-image.jpg";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      <div className="relative w-[400px] h-[400px]">
        {productImage ? (
          <Image 
            src={productImage} 
            alt={name} 
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
        ) : (
          <p className="text-gray-500">Image not available</p>
        )}
      </div>

      <div className="text-black dark:text-white">
        <h4 className="text-2xl md:text-3xl font-bold mb-4">
          {isModal ? (
            <Link
              href={`/ecommerce/products/${_id}`}
              className="hover:text-primaryColor transition"
            >
              {name}
            </Link>
          ) : (
            <span>{name}</span>
          )}
        </h4>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 mb-3">{description}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">SKU: {SKU}</p>
        <p className={`text-sm font-semibold ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
          {stock > 0 ? `In stock: ${stock} items` : "Out of stock"}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <strong>Features:</strong> {features}
        </p>

        <div className="mt-4">
          <p className="font-semibold">Quantity</p>
          <div className="flex items-center gap-4 mt-2">
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            <button
              onClick={() => {
                addProductToCart({ _id, name, quantity, image: productImage });
                setQuantity(1);
              }}
              className="px-6 py-2 border border-black dark:border-white rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
            >
              Add to cart
            </button>
          </div>
        </div>

        <button className="w-full mt-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-primaryColor transition">
          Buy it now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;