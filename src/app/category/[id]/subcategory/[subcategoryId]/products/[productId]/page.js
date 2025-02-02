"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const ProductDetailPage = () => {
  const { id, subcategoryId, productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Violet");

  const colors = ["red", "blue", "green", "yellow", "violet"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://mathsflix-backend.vercel.app/api/products/categories/${id}/subcategories/${subcategoryId}/products/${productId}`
        );

        if (!response.ok) throw new Error("Failed to fetch product");

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id && subcategoryId && productId) {
      fetchProduct();
    }
  }, [id, subcategoryId, productId]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <PageWrapper>
      <main>
        <ThemeController />

        <HeroPrimary path={`Shop page > Product Page`} title={product.name} />

        <div className="container-fluid-2 shop py-100px">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30px bg-white p-6 rounded-lg">

            <div className="p-4">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full rounded-md"
              />
            </div>

            <div className="p-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
              
              <div className="flex items-center gap-3 mt-2">
                <span className="text-lg text-gray-500 line-through">$67.00</span>
                <span className="text-xl text-red-500 font-bold">$32.00</span>
                <span className="bg-black text-white text-sm px-2 py-1 rounded">Sale -27%</span>
              </div>

              <div className="mt-3">
                <p className="text-green-600 font-semibold">Only {product.stock} items in stock!</p>
                <p className="text-red-500 text-sm">Hurry up! Sale ends in:</p>
                <div className="flex gap-2 mt-1">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">97 Days</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">02 Hrs</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">45 Min</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">37 Sec</span>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold">Size:</p>
                <div className="flex gap-3 mt-1">
                  {["X", "L", "M", "S"].map((size) => (
                    <button key={size} className="border px-3 py-1 rounded-md hover:bg-gray-200">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold">Color:</p>
                <div className="flex gap-2 mt-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === color ? "border-black" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-4 items-center">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-16 border px-2 py-1 rounded-md text-center"
                />
                <button className="bg-primaryColor text-white px-5 py-2 rounded-md hover:bg-primaryColorDark">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default ProductDetailPage;
