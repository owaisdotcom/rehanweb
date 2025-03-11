"use client";
import React, { useRef, useState } from "react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide2 from "./HeroSlide2";
import universityImage1 from "@/assets/images/herobanner/university_1.jpg";
import universityImage2 from "@/assets/images/herobanner/university_2.jpg";
import universityImage3 from "@/assets/images/herobanner/university_3.jpg";
import herobannerImage from "@/assets/images/herobanner/hero1.webp";
import herobannerImage2 from "@/assets/images/herobanner/hero2.webp";
// import herobannerImage3 from "@/assets/images/herobanner/hero3.jpeg";
import herobannerImage4 from "@/assets/images/herobanner/hero4.jpeg";

import herobannerImage5 from "@/assets/images/herobanner/hero5.webp";
import herobannerImage6 from "@/assets/images/herobanner/hero6.jpeg";
import herobannerImage7 from "@/assets/images/herobanner/hero7.jpeg";
import herobannerImage8 from "@/assets/images/herobanner/hero8.jpeg";
import herobannerImage9 from "@/assets/images/herobanner/hero9.jpeg";
import herobannerImage10 from "@/assets/images/herobanner/hero10.jpg";
import Image from "next/image";
const HeroSlider2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliderRef = useRef(null)
  const slides = [
    {
      title: (
        <>
          Discover the Finest <span className="text-secondaryColor">Assembly Gloves</span>
        </>
      ),
      tag: "Engineered for Safety, Designed for Comfort",
    },
    {
      title: (
        <>
          Premium Collection of <span className="text-secondaryColor">Canadian Gloves</span>
        </>
      ),
      tag: "Cold Weather Protection, Without Compromise",
    },
    {
      title: (
        <>
          Durable & Stylish <span className="text-secondaryColor">Welding Gloves</span>
        </>
      ),
      tag: "Designed for the Toughest Jobs",
    },
    {
      title: (
        <>
          Heavy-Duty <span className="text-secondaryColor">Mechanical Gloves</span>
        </>
      ),
      tag: "Crafted for Strength and Precision",
    },
    {
      title: (
        <>
          Premium Quality <span className="text-secondaryColor">Split Leather Gloves</span>
        </>
      ),
      tag: "Tough and Reliable Protection",
    },
    {
      title: (
        <>
          Warm & Cozy <span className="text-secondaryColor">Winter Gloves</span>
        </>
      ),
      tag: "Stay Warm, Stay Comfortable",
    },
    {
      title: (
        <>
          Premium Collection of <span className="text-secondaryColor">Leather Jackets</span>
        </>
      ),
      tag: "Elevate Your Style with Timeless Elegance",
    },
    {
      title: (
        <>
          Durable & Stylish <span className="text-secondaryColor">Leather Wallets</span>
        </>
      ),
      tag: "Where Function Meets Luxury",
    },
    {
      title: (
        <>
          Unveil Classic <span className="text-secondaryColor">Leather Belts</span>
        </>
      ),
      tag: "The Perfect Finish for Every Outfit",
    },
  ];
  

  const thumbsImages = [herobannerImage, herobannerImage2,herobannerImage4,herobannerImage5, herobannerImage10,herobannerImage6,herobannerImage7,herobannerImage8,herobannerImage9];
  return (
    <>
        <Swiper
        ref={sliderRef}
        navigation={true}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={600} 
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
           swiper.slideTo(0,100)
          }
        }}
        className="ecommerce-slider2 w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <HeroSlide2 slide={slide} idx={idx} thumbsImages={thumbsImages} />
          </SwiperSlide>
        ))}
      </Swiper>
    
    </>
  );
};

export default HeroSlider2;
