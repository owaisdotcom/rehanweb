
export const getFeaturedProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/products/products/featured", {
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
  