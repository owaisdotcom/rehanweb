"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../assets/images/logo/logo.png";
import { useState } from "react";

const ProductCard = ({ product, categoryId, subcategoryId, onQuickView }) => {
  
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!product || !categoryId || !subcategoryId) {
    return <p>Invalid product data</p>;
  }
  const handleQuickView = () => {
   
      setIsModalOpen(true);
    
  };
  
  return (
    <div className="group relative overflow-hidden border-2 border-white hover:border-yellow transition-shadow duration-300 bg-white">
      {/* Product Image */}
      <div className="relative w-full h-64 group">
  {/* Featured Banner in a Cross */}
  {product?.isFeatured && <div className="absolute top-7 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 transform -rotate-45 shadow-lg">
    FEATURED
  </div>}

  <Link href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}>
    <Image
      src={product.images?.[0] || "/default-product.jpg"}
      alt={product.name}
      className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
      layout="fill"
    />
  </Link>

  {/* Quick View Button */}
  <button
    onClick={isHome ? onQuickView : handleQuickView}
    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow hover:bg-yellow1 text-white px-5 py-2 text-sm font-semibold rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
  >
    Quick View
  </button>

  {/* Logo Overlay */}
  <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
    <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" />
  </div>
</div>


      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 truncate">{product.name || "Product Name"}</h3>
        <Link
          href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}
          className="text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-300"
        >
          SKU: {product.SKU}
        </Link>
      </div>
         {/* Modal (Only on non-home pages) */}
         {!isHome && isModalOpen && product && (
        <div className="relative z-high" role="dialog" aria-modal="true">
          {/* Background dimming */}
          <div className="z-high fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity" aria-hidden="true"></div>

          <div className="fixed inset-0 z-high w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center px-4">
              <div className="relative flex w-full max-w-4xl transform overflow-hidden rounded-lg bg-white shadow-2xl">
                
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {/* Product Image */}
                  <img
                    src={product.images?.[0] || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="w-full rounded-lg object-cover bg-gray-100"
                  />

                  {/* Product Details */}
                  <div className="text-left mb-4 ms-0">
                    {product.isFeatured && (
                      <span className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded">
                        Featured Product
                      </span>
                    )}
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">{product.name}</h2>

                    {/* SKU */}
                    <p className="mt-2 text-sm text-gray-500">SKU: <span className="font-medium">{product.SKU}</span></p>

                    {/* Stock */}
                    <p className="mt-1 text-sm text-gray-500">Stock: <span className="font-medium">{product.stock}</span></p>

                    {/* Description */}
                    <section className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                      <p className="text-gray-700">{product.description}</p>
                    </section>

                    {/* Features */}
                    <section className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                      <p className="text-gray-700">{product.features}</p>
                    </section>

                    <Link
                      href={`/category/${product.categoryId}/subcategory/${product.subcategoryId}/products/${product._id}`}
                      className="mt-4 inline-flex items-center justify-center rounded-lg bg-yellow1 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-yellow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      View Product
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default ProductCard;
