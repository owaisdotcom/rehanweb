
// "use client";
// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import ProductCard from "../products/ProductCard";
// import ProductModal from "../products/ProductModal";
// import { getFeaturedProducts } from "@/libs/apiService";

// const FeaturedProductsSlider = () => {
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [currentProduct, setCurrentProduct] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const products = await getFeaturedProducts();
//       console.log(products)
//       setFeaturedProducts(products);
//       setCurrentProduct(products?.[0] ?? null);
//     };
//     fetchProducts();
//   }, []);

//   const handleCurrentProduct = (id) => {
//     const product = featuredProducts.find((product) => product?.product?._id === id);
//     setCurrentProduct(product);
//   };

//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         grabCursor={true}
//         navigation={true}
//         modules={[Navigation]}
//         breakpoints={{
//           576: { slidesPerView: 2 },
//           992: { slidesPerView: 3 },
//           1500: { slidesPerView: 4 },
//         }}
//         className="featured-courses"
//       >
//         {featuredProducts?.map((product, id) => (
//           <SwiperSlide key={id}>
//             <ProductCard
//               product={product}
//               handleCurrentProduct={handleCurrentProduct}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//     </>
//   );
// };

// export default FeaturedProductsSlider;

"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../products/ProductCard";
import { getFeaturedProducts } from "@/libs/apiService";

const FeaturedProductsSlider = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        console.log("Featured Products API Response:", products);
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading featured products...</p>;
  if (featuredProducts.length === 0) return <p>No featured products available.</p>;

  return (
    <>
     
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1500: { slidesPerView: 4 },
        }}
        className="featured-products"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard 
              product={product} 
              categoryId={product.categoryId} 
              subcategoryId={product.subcategoryId} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedProductsSlider;
