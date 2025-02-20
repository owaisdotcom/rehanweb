"use client";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import Loader from "@/components/Loader";

const FilterCards = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products/categories");
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="filter-contents flex flex-wrap sm:-mx-15px box-content mt-7 lg:mt-25px">
      {categories?.length ? (
        categories.map((category) => (
          <CourseCard
            key={category._id}
            course={{
              id: category._id,
              title: category.name,
              image: category.image,
              desc: category.description
            }}
          />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default FilterCards;
