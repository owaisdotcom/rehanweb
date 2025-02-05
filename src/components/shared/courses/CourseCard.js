"use client";
import Image from "next/image";
import Link from "next/link";
import  logo from "./../../../assets/images/logo/logo.png";

const CourseCard = ({ course }) => {
  const { id, title, image } = course;
  console.log(course);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="p-4 bg-white shadow-lg rounded-lg dark:bg-darkdeep3 dark:shadow-md">
        {/* Card Image */}
        <div className="relative mb-4">
          <Link href={`/category/${id}`} className="w-full overflow-hidden rounded block group">
            <Image
              src={image || "/default-category.jpg"}
              alt={title}
              priority={true}
              className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-110"
              width={300}
              height={300}
            />
            {/* Overlapping Logo */}
            <div className="absolute top-2 left-2 p-1 rounded-full shadow-md">
              <Image
                src={logo}  // Replace with your logo path
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Centered Title */}
        <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CourseCard;
