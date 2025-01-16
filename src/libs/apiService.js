
export const getFeaturedProducts = async () => {
    try {
      const response = await fetch("https://mathsflix-backend.vercel.app/api/products/products/featured", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data; // Assuming the API returns the featured products list.
    } catch (error) {
      console.error("Failed to fetch featured products:", error);
      return [];
    }
  };
  