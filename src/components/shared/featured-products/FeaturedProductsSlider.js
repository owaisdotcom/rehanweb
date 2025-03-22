"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard from "../products/ProductCard";
import { getFeaturedProducts } from "@/libs/apiService";
import Loader from "@/components/Loader";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 

const FeaturedProductsSlider = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        console.log("Featured Products API Response:", products);
        setFeaturedProducts(products || []); // Ensure it doesn't break on null
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center"><Loader /></div>;
  if (featuredProducts.length === 0) return <p className="text-center">No featured products available.</p>;

  return (
    <div className="w-full py-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        navigation={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }} // ✅ Adjusted autoplay settings
        modules={[Navigation, Autoplay]}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="px-4"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product?._id}>
            <ProductCard 
              product={product} 
              categoryId={product?.categoryId} 
              subcategoryId={product?.subcategoryId} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProductsSlider;
