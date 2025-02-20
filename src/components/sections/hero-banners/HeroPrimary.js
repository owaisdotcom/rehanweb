import React from "react";
import Link from "next/link";
import BookImage from "@/components/shared/animaited-images/BookImage";
import GlobImage from "@/components/shared/animaited-images/GlobImage";
import BalbImage from "@/components/shared/animaited-images/BalbImage";
import TriangleImage from "@/components/shared/animaited-images/TriangleImage";

const HeroPrimary = ({ title, path }) => {
  console.log(title);
  return (
    <section data-aos="fade-up">
      {/* banner section */}
      <div className="bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-20px md:py-8 lg:py-60px 2xl:pb-80px 2xl:pt-20">
        {/* animated icons */}
        <div>
          {/* Add icons here if needed */}
        </div>
        <div className="container">
          <div className="text-center">
            <h1 className="text-2xl md:text-size-32 2xl:text-size-45 font-bold text-blackColor2 dark:text-blackColor2-dark leading-16 md:leading-12 lg:leading-16">
              {title}
            </h1>
            <ul className="flex gap-1 justify-center">
              <li>
                <Link
                  href="/"
                  className="text-base text-blackColor2 dark:text-blackColor2-dark hover:text-primaryColor dark:hover:text-primaryColor"
                >
                  Home <i className="icofont-simple-right"></i>
                </Link>
              </li>
              <li>
                <span className="text-base text-blackColor2 dark:text-blackColor2-dark mr-1.5">
                  {path}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPrimary;
