// 'use client'
// import React, { useEffect, useState } from "react";
// import DropdownPrimary from "./DropdownPrimary";
// import Preloader from "@/components/shared/others/Preloader";

// const DropdownDashboard = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
        
//         const response = await fetch("https://mathsflix-backend.vercel.app/api/products/categories");
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const data = await response.json();
//         setCategories(data); // Set the fetched categories to state
//       } catch (err) {
//         setError(err.message); // Handle error
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchCategories(); // Call the fetch function
//   }, []);

//   // Handle loading and error states
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Map categories to dropdown items
//   const items = categories.map((category) => ({
//     name: category.name, // Map category name
//     status: null,
//     path: `/subcategories/${category._id}`, // Use `_id` for category path
//   }));

//   return <DropdownPrimary items={items} />;
// };

// export default DropdownDashboard;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DropdownPrimary from "./DropdownPrimary";
import Preloader from "@/components/shared/others/Preloader";

const DropdownDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://mathsflix-backend.vercel.app/api/products/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data); // Store categories in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>loading....</div>;
  if (error) return <div>Error: {error}</div>;

  // Map categories to dropdown items
  const items = categories.map((category) => ({
    name: category.name, 
    status: null,
    path: `/category/${category._id}`,
  }));

  return <DropdownPrimary items={items} />;
};

export default DropdownDashboard;
