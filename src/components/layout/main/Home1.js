"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import ProductCard from "@/components/shared/products/ProductCard";
import { getFeaturedProducts } from "@/libs/apiService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Hero7 from "@/components/sections/hero-banners/Hero7";
import About5 from "@/components/sections/abouts/About5";
import CoursesFilter2 from "@/components/sections/courses/CoursesFilter2";
import Link from "next/link";

const Home1 = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
    <Hero7 />
      <About5 />
      <CoursesFilter2 type="lg" />
      <div className=" my-5 filter-container container-fluid-2 md:mb-10" data-aos="fade-up">
        <div className="text-left  my-5">
          <h1 className="font-semibold text-4xl tracking-wide uppercase my-5">
            Featured <span className="text-[#EE9B33]">Products</span>
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : featuredProducts.length === 0 ? (
          <p className="text-center">No featured products available.</p>
        ) : (
          <Swiper
            slidesPerView={4}
            grabCursor={true}
            navigation={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className=""
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product?._id}>
                <ProductCard
                  product={product}
                  categoryId={product?.categoryId}
                  subcategoryId={product?.subcategoryId}
                  onQuickView={() => setSelectedProduct(product)} // Handle modal opening
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Render Modal outside Swiper */}
      {selectedProduct && (
  <div className="relative z-high" role="dialog" aria-modal="true">
    {/* Background dimming with blur effect */}
    <div className="z-high fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity md:block" aria-hidden="true"></div>

    <div className="fixed inset-0 z-high w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center text-center px-4">
        <div className="relative flex w-full max-w-4xl transform overflow-hidden rounded-lg bg-white shadow-2xl">
          
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedProduct(null)}
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
              src={selectedProduct.images?.[0] || "https://via.placeholder.com/300"}
              alt={selectedProduct.name}
              className="w-full  m-auto rounded-lg object-cover bg-gray-100"
            />

            {/* Product Details */}
            <div className="text-left mb-4 ms-0">
              {selectedProduct.isFeatured && (
                <span className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded">
                  Featured Product
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mt-2">{selectedProduct.name}</h2>

              {/* SKU */}
              <p className="mt-2 text-sm text-gray-500">
                SKU: <span className="font-medium">{selectedProduct.SKU}</span>
              </p>

              {/* Stock */}
              <p className="mt-1 text-sm text-gray-500">
                Stock: <span className="font-medium">{selectedProduct.stock}</span>
              </p>

              {/* Description */}
              <section className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                <p className="text-gray-700">{selectedProduct.description}</p>
              </section>

              {/* Features */}
              <section className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                <p className="text-gray-700">{selectedProduct.features}</p>
              </section>

              {/* View Product Link */}
              <Link
                href={`/category/${selectedProduct.categoryId}/subcategory/${selectedProduct.subcategoryId}/products/${selectedProduct._id}`}
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

    </>
  );
};

export default Home1;
