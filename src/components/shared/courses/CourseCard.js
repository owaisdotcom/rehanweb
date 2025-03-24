"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../assets/images/logo/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CourseCard = ({ course }) => {
  const { id, title, image, desc } = course;
    useEffect(() => {
      AOS.init({ duration: 1000, once: false }); // ✅ Initialize AOS
    }, []);

  return (
    <div data-aos="zoom-in"  className="w-full  p-4"> {/* Increased width */}
          <Link href={`/category/${id}`} className="w-full h-full block group">
      <div className="bg-white shadow-xl overflow-hidden dark:bg-darkdeep3 dark:shadow-md h-[500px] flex flex-col">  
        
        {/* Card Image - Takes more space */}
        <div className="relative w-full h-[75%] overflow-hidden">
            <Image
              src={image || "/default-category.jpg"}
              alt={title}
              priority={true}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              width={350}
              height={450}
            />

            {/* Overlapping Logo */}
            <div className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
        </div>

        {/* Content Area - Smaller height */}
        <div className="p-4 flex flex-col h-[25%]">
          {/* Title */}
          <h2 className="text-start text-lg font-semibold text-gray-800 dark:text-white mb-1">
            {title}
          </h2>

          {/* Description - Shortened */}
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {desc?.slice(0, 80) || "No description available"}
          </p>

          {/* View Products Button */}
          <Link
            href={`/category/${id}`}
            className="mt-auto inline-flex items-center gap-1 text-yellow font-semibold text-sm hover:text-yellow1prod transition-all"
            >
            View Products <span>&rarr;</span>
          </Link>
        </div>
      </div>
            </Link>
    </div>
  );
};

export default CourseCard;
