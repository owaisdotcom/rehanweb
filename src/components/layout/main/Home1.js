"use client";
import Loader from "@/components/Loader";
import About5 from "@/components/sections/abouts/About5";
import Blogs from "@/components/sections/blogs/Blogs";
import ContactFrom from "@/components/sections/contact-form/ContactFrom";
import CoursesFilter2 from "@/components/sections/courses/CoursesFilter2";
import FeaturedProducts from "@/components/sections/featured-products/FeaturedProducts";
import Features2 from "@/components/sections/features/Features2";
import Hero7 from "@/components/sections/hero-banners/Hero7";
import Hero8 from "@/components/sections/hero-banners/Hero8";
import BrandHero from "@/components/sections/sub-section/BrandHero";
import Counter2 from "@/components/sections/sub-section/Counter2";
import FeaturesMarque from "@/components/sections/sub-section/FeaturesMarque";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import ProductCard from "@/components/shared/products/ProductCard";
import SectionName from "@/components/shared/section-names/SectionName";
import { getFeaturedProducts } from "@/libs/apiService";
import { useEffect, useState } from "react";
import React from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const Home1 = () => {
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
  
    if (loading) return <div><Loader/></div>
    if (featuredProducts.length === 0) return <p>No featured products available.</p>;
  return (
    <>
      <Hero7 />
      {/* <BrandHero /> */}
      <About5 />
      <CoursesFilter2 type="lg" />
      <div className="my-5 md:mb-10" data-aos="fade-up">
            <div className="text-center">
              <SectionName>Our Featured Products</SectionName>
            </div>

            
      <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {featuredProducts?.map((product) => (
    <ProductCard
    key={product._id} // Ensuring each item has a unique key
    product={product}
    categoryId={product.categoryId}
    subcategoryId={product.subcategoryId}
    />
  ))}
</div>

  </div>

   
      {/* <Features2 /> */}
      {/* <Counter2 type="lg" /> */}
      {/* <Testimonials2 /> */}
      {/* <Blogs /> */}
      {/* <FeaturesMarque /> */}
      <ContactFrom/>
    </>
  );
};

export default Home1;
