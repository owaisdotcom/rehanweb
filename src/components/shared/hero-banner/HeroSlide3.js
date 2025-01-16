import Image from "next/image";
import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import HreoName from "../section-names/HreoName";
import PopupVideo from "../popup/PopupVideo";
import useIsTrue from "@/hooks/useIsTrue";

const HeroSlide3 = ({ slide, idx }) => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const { tag, title, subtitle, image } = slide;
  
  return (
    <div className="container 2xl:container-secondary-md relative overflow-hidden bgpic">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-30px">
        {/* banner Left */}
        <div
          data-aos="fade-up"
          className="md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7"
        >
          <div
            className={`3xl:pr-135px ${idx === 1 || idx === 4 ? "text-center" : idx === 2 ? "text-end" : ""}`}
          >
            <HreoName>{tag}</HreoName>
            <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18 text-blackColor dark:text-blackColor-dark md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
              {title}
            </h1>
            {/* Subtitle for description */}
            <p className="text-size-15 md:text-lg text-blackColor dark:text-blackColor-dark font-medium mb-10px">
              {subtitle}
            </p>
            <div className="mt-30px space-x-30px">
              
              <ButtonPrimary color="secondary" path="/ecommerce/shop">
                View Product
              </ButtonPrimary>
            </div>
          </div>
        </div>
        {/* banner right */}
        <div
          data-aos="fade-up"
          className="md:col-start-1 md:col-span-8 lg:col-start-8 lg:col-span-5"
        >
          <div className="relative">
            <Image className="w-full" src={image} alt="" placeholder="blur" />
            {(isHome9 || isHome9Dark) && idx == 0 ? (
              <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <PopupVideo />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide3;
