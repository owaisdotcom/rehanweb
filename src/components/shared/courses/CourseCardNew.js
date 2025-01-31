"use client";
import Image from "next/image";
import Link from "next/link";

const CourseCardNew = ({ course }) => {
  const { id, title, image , categoryId} = course;
console.log(course)
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="p-4 bg-white shadow-lg rounded-lg dark:bg-darkdeep3 dark:shadow-md">
        {/* Card Image */}
        <div className="relative mb-4">
          <Link href={`/category/${categoryId}/subcategory/${id}`} className="w-full overflow-hidden rounded">
            <Image
              src={image || "/default-category.jpg"}
              alt={title}
              priority={true}
              className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-110"
              width={300}
              height={300}
            />
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

export default CourseCardNew;
