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
import Loader from "@/components/Loader";

const FeaturedProductsSlider2 = ({ id, subcategoryId , productId}) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      if (id && subcategoryId) {
        try {
          const response = await fetch(
            `https://mathsflix-backend.vercel.app/api/products/categories/${id}/subcategories/${subcategoryId}/products`
          );

          if (!response.ok) throw new Error("Failed to fetch products");

          const data = await response.json();

          // Filter out the product with the given productId
          const filteredProducts = data?.products?.filter(
            (product) => product._id !== productId
          );

          setFeaturedProducts(filteredProducts || []);
        } catch (error) {
          console.error("Error fetching products:", error);
          setFeaturedProducts([]);
        } finally {
          setLoading(false);
        }
      }
    };

    if (id && subcategoryId) {
      fetchProducts();
    }
  }, [id, subcategoryId, productId]);

   

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (featuredProducts.length === 0)
    return <p className="my-10">No related products available.</p>;

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
              categoryId={id}
              subcategoryId={subcategoryId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedProductsSlider2;
