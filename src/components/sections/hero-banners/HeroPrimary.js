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
      <div className="bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-6 md:py-8 lg:py-10 2xl:py-12">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center space-y-3">
            <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-blackColor2 dark:text-blackColor2-dark leading-tight">
              {title}
            </h1>
            <ul className="flex gap-1 justify-center text-sm">
              <li>
                <Link
                  href="/"
                  className="text-blackColor2 dark:text-blackColor2-dark hover:text-primaryColor dark:hover:text-primaryColor"
                >
                  Home <i className="icofont-simple-right"></i>
                </Link>
              </li>
              <li>
                <span className="text-blackColor2 dark:text-blackColor2-dark ml-1">
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
