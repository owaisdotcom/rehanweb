import React from "react";
import HreoName from "../section-names/HreoName";
import Image from "next/image";

const HeroSlide2 = ({ slide, idx, thumbsImages }) => {
  const { title, tag } = slide;

  // Map thumbs image according to the index
  const thumbsImage = thumbsImages?.[idx] || ""; // Safely access the image or fallback to an empty string

  return (
    <div
      className={`hero ${
        idx === 0
          ? "bg-[url('../assets/images/herobanner/hero1.webp')] "
          : idx === 1
          ? "bg-[url('../assets/images/herobanner/hero2.webp')]"
          : idx === 2
          ? "bg-[url('../assets/images/herobanner/hero4.jpeg')]"
          : idx === 3
          ? "bg-[url('../assets/images/herobanner/hero5.webp')]"
          : idx === 4
          ? "bg-[url('../assets/images/herobanner/hero10.jpg')]"
          : idx === 5
          ? "bg-[url('../assets/images/herobanner/hero6.jpeg')]"
          : idx === 6
          ? "bg-[url('../assets/images/herobanner/hero7.jpeg')]"
          : idx === 7
          ? "bg-[url('../assets/images/herobanner/hero8.jpeg')]"
          : idx === 8
          ? "bg-[url('../assets/images/herobanner/hero9.jpeg')]"
          : ""
      } relative z-0 bg-cover bg-no-repeat h-[465px] `}
    >
      <div className="bg-black bg-opacity-70 opacityClass overflow-hidden pt-50px pb-100px  md:pb-100px lg:pt-20px lg:pb-50px 2xl:pt-20 2xl:pb-100px">
        <div className="container 2xl:container-secondary-md relative overflow-hidden flex flex-col md:flex-row items-center">
          {/* Left Section: Title and Tag */}
          <div className="text-center md:text-left w-full md:w-1/2" data-aos="fade-up">
            <HreoName>{tag}</HreoName>
            <h1 className="text-size-32 md:text-size-50 lg:text-3xl 2xl:text-size-45 leading-42px md:leading-15 lg:leading-14 2xl:leading-90px text-whiteColor md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-3 md:mb-40px">
              {title}
            </h1>
            <div>
              <a
                href="#"
                className="text-whiteColor bg-primaryColor text-sm lg:text-md border border-primaryColor px-4 py-3 lg:px-10 lg:py-15px hover:text-primaryColor hover:bg-whiteColor rounded-full inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* Right Section: Thumbs Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
            {thumbsImage ? (
              <Image
                src={thumbsImage}
                alt="Thumbs"
                className="rounded-lg shadow-lg w-50 m-auto  lg:w-75 h-auto object-cover"
                width={500} // Specify dimensions for Image optimization
                height={500}
              />
            ) : (
              <p className="text-whiteColor">No image available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide2;
