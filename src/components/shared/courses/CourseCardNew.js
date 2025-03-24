"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../assets/images/logo/logo.png";

const CourseCardNew = ({ course }) => {
  const { id, title, image, categoryId } = course;
  console.log(course);

  return (
    <div data-aos="fade-up" className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <Link href={`/category/${categoryId}/subcategory/${id}`} className="block">
      <div className="p-4 bg-white shadow-lg rounded-lg dark:bg-darkdeep3 dark:shadow-md group transition-all duration-300 hover:shadow-xl">
        {/* Card Image */}
        <div className="relative mb-4 overflow-hidden rounded">
            <div className="relative w-full h-64">
              <Image
                src={image || "/default-category.jpg"}
                alt={title}
                priority={true}
                className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-110"
                width={300}
                height={300}
              />
            </div>
            {/* Logo at top-right */}
            <div className="absolute top-2 right-2 p-1 rounded-full shadow-md bg-white">
              <Image
                src={logo}
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
        </div>
        {/* Centered Title */}
        <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>
          </Link>
    </div>
  );
};

export default CourseCardNew;
