"use client";
import herobannerImage from "@/assets/images/herobanner/belt.png";
import herobannerImage2 from "@/assets/images/herobanner/canadian.webp";
import herobannerImage3 from "@/assets/images/herobanner/welding.png";
import herobannerImage4 from "@/assets/images/herobanner/mechanical.png";

import herobannerImage5 from "@/assets/images/herobanner/jacket.png";
import herobannerImage6 from "@/assets/images/herobanner/gloves.webp";
import herobannerImage7 from "@/assets/images/herobanner/wallet.png";
import herobannerImage8 from "@/assets/images/herobanner/mechanic.jpg";
import herobannerImage9 from "@/assets/images/herobanner/canadian.jpeg";
import herobannerImage10 from "@/assets/images/herobanner/assembly.webp";
import herobannerImage11 from "@/assets/images/herobanner/cow split.jpg";
import herobannerImage12 from "@/assets/images/herobanner/split.png";
import herobannerImage13 from "@/assets/images/herobanner/winter.png";
import { Navigation, Pagination, Autoplay  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide3 from "./HeroSlide3";
import useIsTrue from "@/hooks/useIsTrue";

const HeroSlider3 = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");

  const slides = [
    {
      title: (
        <>
          Discover the Finest <span className="text-secondaryColor">Assembly Gloves</span>
        </>
      ),
      subtitle: "Crafted for Protection and Comfort, Perfect for Every Task",
      image: herobannerImage6,  // Image for Assembly Gloves
      tag: "Engineered for Safety, Designed for Comfort",
    
    },
    {
      title: (
        <>
          Premium Collection of <span className="text-secondaryColor">Canadian Gloves</span>
        </>
      ),
      subtitle: "A Perfect Fit for Extreme Conditions, Designed for Durability",
      image: herobannerImage2,  // Image for Canadian Gloves
      tag: "Cold Weather Protection, Without Compromise",
      
    },
    {
      title: (
        <>
          Durable & Stylish <span className="text-secondaryColor">Welding Gloves</span>
        </>
      ),
      subtitle: "Maximum Protection for High-Temperature Environments",
      image: herobannerImage3,  // Image for Welding Gloves
      tag: "Designed for the Toughest Jobs",
     
    },
    {
      title: (
        <>
          Heavy-Duty <span className="text-secondaryColor">Mechanical Gloves</span>
        </>
      ),
      subtitle: "Precision Handling with Maximum Protection for Your Hands",
      image: herobannerImage4,  // Image for Mechanical Gloves
      tag: "Crafted for Strength and Precision",
      
    },
    {
      title: (
        <>
          Premium Quality <span className="text-secondaryColor">Split Leather Gloves</span>
        </>
      ),
      subtitle: "Designed for Comfort and Protection in Heavy-Duty Work",
      image: herobannerImage12,  // Image for Split Leather Gloves
      tag: "Tough and Reliable Protection",
     
    },
    {
      title: (
        <>
          Warm & Cozy <span className="text-secondaryColor">Winter Gloves</span>
        </>
      ),
      subtitle: "Keep Your Hands Warm and Comfortable in Cold Weather",
      image: herobannerImage13,  // Image for Winter Gloves
      tag: "Stay Warm, Stay Comfortable",

    },
    {
      title: (
        <>
          Premium Collection of <span className="text-secondaryColor">Leather Jackets</span>
        </>
      ),
      subtitle: "Elegance and Durability in Every Stitch, Elevate Your Style",
      image: herobannerImage5,  // Image for Leather Jackets
      tag: "Elevate Your Style with Timeless Elegance",
      
    },
    {
      title: (
        <>
          Durable & Stylish <span className="text-secondaryColor">Leather Wallets</span>
        </>
      ),
      subtitle: "Where Function Meets Luxury, Crafted to Last",
      image: herobannerImage7,  // Image for Leather Wallets
      tag: "Where Function Meets Luxury",
      
    },
    {
      title: (
        <>
          Unveil Classic <span className="text-secondaryColor">Leather Belts</span>
        </>
      ),
      subtitle: "The Ultimate Accessory for Every Occasion, Timeless Quality",
      image: herobannerImage,  // Image for Leather Belts
      tag: "The Perfect Finish for Every Outfit",
      
    },
  ];
  

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000, // Swipes every 5 seconds
        disableOnInteraction: false, // Keep autoplay even after user interaction
      }}
      grabCursor={true}
      modules={[Navigation, Pagination, Autoplay]}
      className={`ecommerce-slider ${
        isHome9 || isHome9Dark ? "leather-goods" : ""
      }py-25px md:py-50px lg:pt-50px lg:pb-75px 2xl:pt-35px 2xl:pb-15px 4xl:pt-77px 4xl:pb-125px

`}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide className="px-15px" key={idx}>
          <HeroSlide3 idx={idx} slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider3;
