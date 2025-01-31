"use client";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import CourseCardNew from "./CourseCardNew";

const FilterCardsNew = ({id}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://mathsflix-backend.vercel.app/api/products/categories/${id}`);
        const data = await response.json();
        console.log(data)
        setCategories(data.subcategories);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="filter-contents flex flex-wrap sm:-mx-15px box-content mt-7 lg:mt-25px">
      {categories?.length ? (
        categories.map((category) => (
          <CourseCardNew
            key={category._id}
            course={{
              categoryId : id,
              id: category._id,
              title: category.name,
              image: category.image,
            }}
          />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default FilterCardsNew;
