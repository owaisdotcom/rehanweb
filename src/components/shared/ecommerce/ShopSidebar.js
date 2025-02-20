// "use client";

// import { useState } from "react";
// import ButtonPrimary from "../buttons/ButtonPrimary";

// const filterAccordions = [
//   {
//     controllerName: "Availability",
//     inputName: "availability",
//     checks: ["In stock", "Out of stock"],
//   },
//   {
//     controllerName: "Product type",
//     inputName: "productType",
//     checks: ["Apparel & Accessories", "Jacket"],
//   },
//   {
//     controllerName: "Brand",
//     inputName: "brand",
//     checks: ["Apple", "Amazon"],
//   },
//   {
//     controllerName: "Color",
//     inputName: "color",
//     checks: [
//       "Black",
//       "Blue",
//       "Grey",
//       "Pink",
//       "Red",
//       "Violet",
//       "White",
//       "Yellow",
//     ],
//   },
//   {
//     controllerName: "Size",
//     inputName: "size",
//     checks: ["S", "M", "L", "XL", "XXL"],
//   },
// ];

// const ShopSidebar = ({
//   handleFilters,
//   availability,
//   type,
//   brand,
//   color,
//   size,
//   handleReset,
//   category,
// }) => {
//   return (
//     <div
//       className={`modal-container ${
//         category ? "" : "xl:col-start-1 xl:col-span-3"
//       }`}
//     >
//       <div
//         className="mb-35px flex justify-between items-center"
//         data-aos="fade-up"
//       >
//         <h4 className="text-size-22 leading-1.2 font-bold text-blackColor dark:text-blackColor-dark">
//           Filter:
//         </h4>
//         <button
//           onClick={handleReset}
//           className="text-contentColor  dark:text-contentColor-dark  border-b border-blackColor   dark:border-blackColor-dark hover:text-primaryColor hover:border-b-primaryColor dark:hover:text-primaryColor   dark:hover:border-b-primaryColor leading-1.2"
//         >
//           Remove all
//         </button>
//       </div>
//       <div className="mb-30px" data-aos="fade-up">
//         <ButtonPrimary
//           type={"button"}
//           onClick={() => handleFilters(null, null, null, true)}
//         >
//           $0.00-$80.00
//         </ButtonPrimary>
//       </div>
//       {/* accordion filters */}
//       <div className="gap-y-50px flex flex-col mb-50px text-blackColor dark:text-blackColor-dark leading-1.8">
//         {/* Availability */}
//         {filterAccordions?.map(({ controllerName, checks, inputName }, idx) => (
//           <ul key={idx} className="accordion-container" data-aos="fade-up">
//             <li className="accordion active shadow-accordion2 dark:shadow-accordion-dark p-5">
//               <div className="accordion-controller cursor-pointer block w-full">
//                 <div className="flex items-center">
//                   <p className="w-0 h-0 border-x-9 border-y-5px border-transparent border-l-blackColor dark:border-l-blackColor-dark inline-block translate-x-1"></p>

//                   <p className="ml-0.5">{controllerName}</p>
//                 </div>
//               </div>
//               <div className="accordion-content overflow-hidden">
//                 <div className="content-wrapper pt-10px">
//                   <ul className="flex flex-col gap-y-10px">
//                     {checks?.map((check, idx1) => (
//                       <li key={idx1} className="flex items-center gap-1">
//                         <input
//                           checked={
//                             inputName === "availability"
//                               ? availability.includes(check) || false
//                               : inputName === "productType"
//                               ? type.includes(check) || false
//                               : inputName === "brand"
//                               ? brand.includes(check)
//                               : inputName === "color"
//                               ? color.includes(check) || false
//                               : inputName === "size"
//                               ? size.includes(check) || false
//                               : false
//                           }
//                           type="checkbox"
//                           id={check}
//                           onChange={(e) => handleFilters(e, inputName, check)}
//                         />{" "}
//                         <label htmlFor={check}> {check}</label>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopSidebar;

"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ShopSidebar = ({ handleFilters = () => {}, handleReset, categoryId, subcategoryId, products, setSortedProducts }) => {
  const [subcategories, setSubcategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("A-Z");
  const pathname = usePathname();
  const router = useRouter();
  console.log(categoryId)

  const pathSegments = pathname.split("/");
  const categoryIdFromURL = pathSegments[2] ?? null;
  const subcategoryIdFromURL = pathSegments[4] ?? null;
  console.log(subcategoryIdFromURL)
  useEffect(() => {
    const fetchSubcategories = async () => {
      if (!categoryIdFromURL) return;

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
      }
    };

    fetchSubcategories();
  }, [categoryIdFromURL]);

  const handleSortChange = (order) => {
    setSortOrder(order);
    let sortedData;

    if (order === "A-Z") {
      sortedData = [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "Z-A") {
      sortedData = [...products].sort((a, b) => b.name.localeCompare(a.name));
    }

    setSortedProducts(sortedData); // Update sorted products
  };

  const handleSubcategoryClick = (subcategoryId) => {
    router.push(`/category/${categoryId}/subcategory/${subcategoryId}`);
  };

  return (
    <div className="modal-container xl:col-start-1 xl:col-span-3 bg-white p-6 rounded-lg shadow-lg max-w-[300px] w-full">
      {subcategories.length > 0 && (
        <div className="mb-5" data-aos="fade-up">
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
      )}

      <div className="mb-5 flex justify-between items-center" data-aos="fade-up">
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
            type={"button"}
            className="w-full py-3 px-4 text-left border rounded-md bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 focus:ring-2 focus:ring-primaryColor focus:outline-none"
          >
            Sort By: {sortOrder}
          </ButtonPrimary>
          <div className=" w-full bg-white border rounded-md shadow-lg mt-2">
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
