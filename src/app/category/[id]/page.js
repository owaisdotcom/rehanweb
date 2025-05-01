'use client';
import CoursesMain from "@/components/layout/main/CoursesMain";
import CoursesFilter2 from "@/components/sections/courses/CoursesFilter2";
import CoursesFilter2New from "@/components/sections/courses/CoursesFilter2new";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import FeaturedProducts from "@/components/sections/featured-products/FeaturedProducts";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";



const Courses =  () => {
  const pathname = usePathname();
  // Extract categorySlug from the pathname
  const id = pathname.split('/').pop(); // Assuming the slug is the last part of the path
  console.log(id)
  return (
    <PageWrapper>
      <main>
        <CoursesFilter2New id={id} />
        
      </main>
    </PageWrapper>
  );
};

export default Courses;
