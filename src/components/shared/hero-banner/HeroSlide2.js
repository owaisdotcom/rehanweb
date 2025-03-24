import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSlide2 = ({ slide, idx }) => {
  const { title } = slide;
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    setAnimationKey((prevKey) => prevKey + 1); // Change key to force re-render
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [idx]);

  return (
    <div
      className={`hero ${
        [
          "bg-[url('../assets/images/herobanner/hero1.webp')]",
          "bg-[url('../assets/images/herobanner/hero2.webp')]",
          "bg-[url('../assets/images/herobanner/hero4.jpeg')]",
          "bg-[url('../assets/images/herobanner/hero5.webp')]",
          "bg-[url('../assets/images/herobanner/hero10.jpg')]",
          "bg-[url('../assets/images/herobanner/hero6.jpeg')]",
          "bg-[url('../assets/images/herobanner/hero7.jpeg')]",
          "bg-[url('../assets/images/herobanner/hero8.jpeg')]",
          "bg-[url('../assets/images/herobanner/hero9.jpeg')]",
        ][idx] || ""
      } relative bg-cover bg-center bg-no-repeat h-[520px] flex items-center`}
    >
      {/* Dark Overlay */}
      <div
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0) 100%)`,
  }}
  className="absolute inset-0"
></div>

      {/* Content Container */}
      <div
        key={animationKey} // Force re-render on idx change
        data-aos="fade-down"
        className="relative z-10 w-96 md:w-[500px] ml-8 md:ml-40 text-left text-white p-4 md:p-6 bgopacity shadow-xl rounded-xl"
      >
        <h1 className="text-2xl md:text-5xl font-bold leading-[1.2] tracking-wide mb-4">
          {title}
        </h1>
        <a
          href="categories"
          data-aos="fade-down"
          data-aos-delay="200"
          className="inline-block text-white bg-primaryColor px-4 py-2 rounded-full text-lg font-semibold transition duration-300 hover:bg-white hover:text-primaryColor border border-primaryColor"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default HeroSlide2;
