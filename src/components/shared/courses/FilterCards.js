"use client";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import Loader from "@/components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // ✅ Ensure autoplay styles are loaded


const FilterCards = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://mathsflix-backend.vercel.app/api/products/categories"
        );
        const data = await response.json();
  
        if (data.length > 0) {
          // Extract the first category (Gloves) and its subcategories
          const firstCategory = data[0];
          const subcategories = firstCategory?.subcategories || [];
  
          // Extract remaining categories (excluding the first one)
          const remainingCategories = data.slice(1);
  
          // Combine structured data
          const formattedCategories = [
            firstCategory, // Main category (Gloves)
            ...subcategories.map((sub) => ({
              _id: sub._id,
              name: sub.name,
              description: sub.description,
              image: sub.image,
              isSubcategory: true, // Flag for UI differentiation
            })),
            ...remainingCategories,
          ];
  
          setCategories(formattedCategories);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCategories();
  }, []);
  
  

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="filter-contents flex flex-wrap sm:-mx-15px box-content "
      // ✅ AOS animation
    >
      <Swiper
        // slidesPerView={1}
        grabCursor={true}
        navigation={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }} // ✅ Autoplay enabled
        modules={[Navigation, Autoplay]} // ✅ Added Autoplay module
        breakpoints={{
          640: {
            slidesPerView: 2,
          
          },
          768: {
            slidesPerView: 3,
          
          },
          1024: {
            slidesPerView: 3,
           
          },
        }}
      >
        {categories.length > 0 ? (
          categories.map((category) => (
            <SwiperSlide key={category._id} > {/* ✅ AOS Animation */}
              <CourseCard
                course={{
                  id: category._id,
                  title: category.name,
                  image: category.image,
                  desc: category.description,
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p className="text-center">No categories available.</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default FilterCards;
