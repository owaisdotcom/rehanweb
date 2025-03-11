"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ShopSidebar = ({ handleFilters = () => {}, handleReset, categoryId, subcategoryId, products, setSortedProducts }) => {
  const [subcategories, setSubcategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split("/");
  const categoryIdFromURL = pathSegments[2] ?? null;
  const subcategoryIdFromURL = pathSegments[4] ?? null;

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (!categoryIdFromURL) return;
      setIsLoading(true);

      try {
        const response = await fetch("https://mathsflix-backend.vercel.app/api/products/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");

        const data = await response.json();
        const selectedCategory = data.find(category => category._id === categoryIdFromURL);
        if (selectedCategory) {
          setSubcategories(selectedCategory.subcategories);
        } else {
          setSubcategories([]);
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubcategories();
  }, [categoryIdFromURL]);

  const handleSortChange = (order) => {
    setSortOrder(order);
    let sortedData = [...products];

    if (order === "A-Z") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "Z-A") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }

    setSortedProducts(sortedData);
  };

  const handleSubcategoryClick = (subcategoryId) => {
    router.push(`/category/${categoryId}/subcategory/${subcategoryId}`);
  };

  return (
    <div className="modal-container xl:col-start-1 xl:col-span-3 bg-white p-6 rounded-lg shadow-lg max-w-[300px] w-full">
      {isLoading ? (
        <div className="text-center text-yellow font-semibold">Loading categories...</div>
      ) : (
        subcategories.length > 0 && (
          <div className="mb-5">
            <h4 className="text-lg font-semibold text-yellow mb-3">Subcategories</h4>
            <ul className="text-gray-700">
              {subcategories.map((subcategory) => (
                <li
                  key={subcategory._id}
                  className={`py-1 border-b last:border-none cursor-pointer hover:text-primaryColor ${
                    subcategory._id === subcategoryIdFromURL ? " font-semibold text-yellow" : ""
                  }`}
                  onClick={() => handleSubcategoryClick(subcategory._id)}
                >
                  {subcategory.name}
                </li>
              ))}
            </ul>
          </div>
        )
      )}

      <div className="mb-5 flex justify-between items-center" >
        <h4 className="text-xl font-semibold text-gray-800">Filter Options</h4>
        <button
          onClick={handleReset}
          className="text-primaryColor font-medium hover:text-primaryColorDark transition-all"
        >
          Remove All
        </button>
      </div>

      <div className="mb-5">
        <div className="relative">
          <ButtonPrimary
            type="button"
            className="w-full py-3 px-4 text-left border rounded-md bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 focus:ring-2 focus:ring-primaryColor focus:outline-none"
          >
            Sort By: {sortOrder}
          </ButtonPrimary>
          <div className="w-full bg-white border rounded-md shadow-lg mt-2">
            <ul className="flex flex-col">
              <li
                onClick={() => handleSortChange("A-Z")}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              >
                A-Z
              </li>
              <li
                onClick={() => handleSortChange("Z-A")}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              >
                Z-A
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
