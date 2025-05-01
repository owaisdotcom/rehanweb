import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSlide2 = ({ slide, idx }) => {
  const { title, path, tag } = slide;
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    setAnimationKey((prevKey) => prevKey + 1); // Change key to force re-render
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [idx]);

  const backgroundImages = [
    "bg-[url('../assets/images/herobanner/assembly.jpg')]",
    "bg-[url('../assets/images/herobanner/canadian.png')]",
    "bg-[url('../assets/images/herobanner/hero4.jpeg')]",
    "bg-[url('../assets/images/herobanner/mechanicglove.jpeg')]",
    "bg-[url('../assets/images/herobanner/hero10.jpg')]",
    "bg-[url('../assets/images/herobanner/winterglove.jpg')]",
    "bg-[url('../assets/images/herobanner/hero7.jpeg')]",
    "bg-[url('../assets/images/herobanner/hero8.jpeg')]",
    "bg-[url('../assets/images/herobanner/hero9.jpeg')]",
  ];

  return (
    <div
      className={`hero ${backgroundImages[idx] || ""} relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] md:h-[480px] flex items-center`}
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
        key={animationKey}
        data-aos="fade-down"
        className="relative z-10 w-full max-w-[90%] sm:max-w-[500px] mx-4 sm:mx-8 md:ml-40 text-center sm:text-left text-white p-4 sm:p-6 bg-opacity-90 sm:bg-opacity-0"
      >
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-wide mb-2 sm:mb-4">
          {title}
        </h1>
        {tag && (
          <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            {tag}
          </p>
        )}
        {path && (
          <a
            href={path}
            data-aos="fade-down"
            data-aos-delay="200"
            className="inline-block text-white bg-primaryColor px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition duration-300 hover:bg-white hover:text-primaryColor border border-primaryColor"
          >
            Explore More
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroSlide2;