"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../assets/images/logo/logo.png";

const CourseCard = ({ course }) => {
  const { id, title, image, desc } = course;
  console.log(course);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className=" bg-white shadow-lg  dark:bg-darkdeep3 dark:shadow-md">
        {/* Card Image */}
        <div className="relative mb-4 w-full">
          <Link href={`/category/${id}`} className="w-full overflow-hidden  block group">
          <Image
  src={image || "/default-category.jpg"}
  alt={title}
  priority={true}
  className="w-full h-64 object-cover transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
  width={200}
  height={500}
/>

            {/* Overlapping Logo */}
            <div className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
              <Image
                src={logo}
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-start px-4 text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>

      
        {/* View Products Button */}
        <Link
          href={`/category/${id}`}
          className="mt-4 p-4 inline-flex items-center gap-1 text-yellow font-semibold text-sm hover:text-yellow1prod transition-all"
        >
          View Products <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
