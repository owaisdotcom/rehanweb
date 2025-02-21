
// export const getFeaturedProducts = async () => {
//     try {
//       const response = await fetch("https://mathsflix-backend.vercel.app/api/products/products/featured", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       return data; // Assuming the API returns the featured products list.
//     } catch (error) {
//       console.error("Failed to fetch featured products:", error);
//       return [];
//     }
//   };

const BASE_URL = "https://mathsflix-backend.vercel.app/api/products";

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

export const getFeaturedProducts = async () => {
  try {

    const categories = await getAllCategories();

    const response = await fetch(`${BASE_URL}/products/featured`);
    if (!response.ok) throw new Error("Failed to fetch featured products");

    const featuredProducts = await response.json();

    const productsWithIds = featuredProducts.map((item) => {
      const category = categories.find((cat) => cat.name === item.categoryName);
      const subcategory = category?.subcategories.find((sub) => sub.name === item.subcategoryName);

      return {
        ...item.product,
        categoryId: category?._id || null,  // Assign correct categoryId
        subcategoryId: subcategory?._id || null,  // Assign correct subcategoryId
      };
    });

    return productsWithIds.filter((product) => product.categoryId && product.subcategoryId); // Ensure only valid products are returned
  } catch (error) {
    console.error("Failed to fetch featured products:", error);
    return [];
  }
};
