// "use client";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import CoursesMain from "@/components/layout/main/CoursesMain";
// import ThemeController from "@/components/shared/others/ThemeController";
// import PageWrapper from "@/components/shared/wrappers/PageWrapper";
// import ShopMain from "@/components/layout/main/ecommerce/ShopMain";

// const Subcategory = () => {
//   const pathname = usePathname();
//   const [products, setProducts] = useState([]);
//   const [categoryData, setCategoryData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Extract categoryId and subcategoryId from the pathname
//   const pathSegments = pathname.split("/");
//   const categoryId = pathSegments[2] ?? null;
//   const subcategoryId = pathSegments[4] ?? null;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (categoryId && subcategoryId) {
//         try {
//           const response = await fetch(
//             `http://localhost:4000/api/products/categories/${categoryId}/subcategories/${subcategoryId}/products`
//           );
//           if (!response.ok) throw new Error("Failed to fetch products");

//           const data = await response.json();
//           setProducts(data?.products);
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     const fetchCategory = async () => {
//       if (categoryId) {
//         try {
//           const response = await fetch(
//             `http://localhost:4000/api/products/categories/${categoryId}`
//           );
//           if (!response.ok) throw new Error("Failed to fetch category");

//           const data = await response.json();
//           console.log(data)
//           setCategoryData(data?.subcategories);
//           console.log(categoryData)
//         } catch (error) {
//           console.error("Error fetching category:", error);
//         }
//       }
//     };

//     fetchProducts();
//     fetchCategory();
//   }, [categoryId, subcategoryId]);

//   return (
//     <PageWrapper>
//       <main>
//         <ThemeController />
//         <ShopMain products={products} categoryData={categoryData} />
//       </main>
//     </PageWrapper>
//   );
// };

// export default Subcategory;


"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import ShopMain from "@/components/layout/main/ecommerce/ShopMain";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Loader from "@/components/Loader";

const Subcategory = () => {
  const pathname = usePathname();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const pathSegments = pathname.split("/");
  const categoryId = pathSegments[2] ?? null;
  const subcategoryId = pathSegments[4] ?? null;
console.log(categoryId)
  useEffect(() => {
    const fetchProducts = async () => {
      if (categoryId && subcategoryId) {
        try {
          const response = await fetch(
            `https://mathsflix-backend.vercel.app/api/products/categories/${categoryId}/subcategories/${subcategoryId}/products`
          );

          if (!response.ok) throw new Error("Failed to fetch products");

          const data = await response.json();
          setProducts(data.products || []);
        } catch (error) {
          console.error("Error fetching products:", error);
          setProducts([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [categoryId, subcategoryId]);

  return (
    <PageWrapper>
      <main>
        <ThemeController />
        {loading ?<div> <HeroPrimary path={"Shop page"} title={"Shop"} /><Loader/></div> : <ShopMain products={products} categoryId={categoryId} subcategoryId={subcategoryId} />}
      </main>
    </PageWrapper>
  );
};

export default Subcategory;
