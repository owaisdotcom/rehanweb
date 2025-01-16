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
import React from "react";

const Home1 = () => {
  return (
    <>
      <Hero7 />
      {/* <BrandHero /> */}
      <About5 />
      <FeaturedProducts />
      {/* <Features2 /> */}
      <CoursesFilter2 type="lg" />
      {/* <Counter2 type="lg" /> */}
      {/* <Testimonials2 /> */}
      {/* <Blogs /> */}
      {/* <FeaturesMarque /> */}
      <ContactFrom/>
    </>
  );
};

export default Home1;
