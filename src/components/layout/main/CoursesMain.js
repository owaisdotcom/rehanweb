import CoursesPrimary from "@/components/sections/courses/CoursesPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const CoursesMain = ({products, categoryData}) => {
  return (
    <>
   
      <CoursesPrimary card={true} products={products} categoryData={categoryData}  />
    </>
  );
};

export default CoursesMain;
