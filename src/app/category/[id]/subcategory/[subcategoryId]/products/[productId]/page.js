// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import ThemeController from "@/components/shared/others/ThemeController";
// import PageWrapper from "@/components/shared/wrappers/PageWrapper";
// import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

// const ProductDetailPage = () => {
//   const { id, subcategoryId, productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedColor, setSelectedColor] = useState("Violet");

//   const colors = ["red", "blue", "green", "yellow", "violet"];

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `https://mathsflix-backend.vercel.app/api/products/categories/${id}/subcategories/${subcategoryId}/products/${productId}`
//         );

//         if (!response.ok) throw new Error("Failed to fetch product");

//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id && subcategoryId && productId) {
//       fetchProduct();
//     }
//   }, [id, subcategoryId, productId]);

//   if (loading) return <p>Loading product...</p>;
//   if (!product) return <p>Product not found</p>;

//   return (
//     <PageWrapper>
//       <main>
//         <ThemeController />

//         <HeroPrimary path={`Shop page > Product Page`} title={product.name} />

//         <div className="container-fluid-2 shop py-100px">

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-30px bg-white p-6 rounded-lg">

//             <div className="p-4">
//               <img
//                 src={product.images?.[0]}
//                 alt={product.name}
//                 className="w-full rounded-md"
//               />
//             </div>

//             <div className="p-4">
//               <h1 className="text-3xl font-bold">{product.name}</h1>
//               <p className="text-gray-600">{product.description}</p>

//               <div className="flex items-center gap-3 mt-2">
//                 <span className="text-lg text-gray-500 line-through">$67.00</span>
//                 <span className="text-xl text-red-500 font-bold">$32.00</span>
//                 <span className="bg-black text-white text-sm px-2 py-1 rounded">Sale -27%</span>
//               </div>

//               <div className="mt-3">
//                 <p className="text-green-600 font-semibold">Only {product.stock} items in stock!</p>
//                 <p className="text-red-500 text-xs">Hurry up! Sale ends in:</p>
//                 <div className="flex gap-1 mt-1">
//                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">97 Days</span>
//                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">02 Hrs</span>
//                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">45 Min</span>
//                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">37 Sec</span>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <p className="font-semibold">Size:</p>
//                 <div className="flex gap-3 mt-1">
//                   {["X", "L", "M", "S"].map((size) => (
//                     <button key={size} className="border px-3 py-1 rounded-md hover:bg-gray-200">
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <p className="font-semibold">Color:</p>
//                 <div className="flex gap-1 mt-2">
//                   {colors.map((color) => (
//                     <button
//                       key={color}
//                       className={`w-10 h-10 rounded-full border-2 ${
//                         selectedColor === color ? "border-black" : "border-gray-300"
//                       }`}
//                       style={{ backgroundColor: color }}
//                       onClick={() => setSelectedColor(color)}
//                     ></button>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-4 flex gap-4 items-center">
//                 <input
//                   type="number"
//                   min="1"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                   className="w-16 border px-2 py-1 rounded-md text-center"
//                 />
//                 <button className="bg-primaryColor text-white px-5 py-2 rounded-md hover:bg-primaryColorDark">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </PageWrapper>
//   );
// };

// export default ProductDetailPage;

"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Loader from "@/components/Loader";
import ContactFrom from "@/components/sections/contact-form/ContactFrom";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeaturedProductsSlider2 from "@/components/shared/featured-products/FeaturedProductsSlider2";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";

const ProductDetailPage = () => {
  const { id, subcategoryId, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://mathsflix-backend.vercel.app/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Your inquiry has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          company: "",
          message: "",
        });
      } else {
        setResponseMessage(
          result.message || "Submission failed. Please try again."
        );
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const handleInquiryClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, subcategoryId, productId]);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
    isVisible: false,
  });

  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imageRef.current;
    if (!img) return;

    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition((prev) => {
      if (prev.x === x && prev.y === y) return prev; // Prevent unnecessary re-renders
      return { x, y, isVisible: true };
    });
  };

  const handleMouseLeave = () => {
    setZoomPosition({ x: 0, y: 0, isVisible: false });
  };

  if (loading)
    return (
      <div>
        {" "}
        <HeroPrimary path={`Shop page > Product Page`} title={product?.name} />
        <Loader />
      </div>
    );
  if (!product) return <p>Product not found</p>;

  return (
    <PageWrapper>
      <main>
        <ThemeController />

        <HeroPrimary path={`Shop page > Product Page`} title={product?.name} />

        <div className="container-fluid-2 shop py-100px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
          <div className="relative w-auto border rounded-lg overflow-hidden">
      {/* Image Wrapper */}
      <div
        className="w-full h-full relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Original Image */}
        <img
          ref={imageRef}
          src={product.images?.[0] || "https://via.placeholder.com/300"}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Zoomed Image Overlay */}
        {zoomPosition.isVisible && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${product.images?.[0]})`,
              backgroundSize: "180%",
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transform: "scale(1.1)", // Slight scale to make it feel more fluid
              transition: "transform 0.1s ease-out",
              willChange: "transform",
            }}
          />
        )}
      </div>
    </div>
            {/* Product Details */}
            <div className="p-4 flex flex-col justify-start space-y-2">
            <h1 className="text-3xl font-semibold text-black">
  {product.name}
</h1>

<p className="text-black text-xl">{product.description}</p>

<p className="font-semibold text-gray-700">
  SKU: <span className="text-gray-500">{product.SKU}</span>
</p>
<p className="text-sm text-gray-500">
  Material: <span className="text-gray-700">{product.material}</span>
</p>
<p className="text-sm text-gray-500">
  Uses: <span className="text-gray-700">{product.uses}</span>
</p>
<p className="text-sm text-gray-500">
  Size: <span className="text-gray-700">{product.size}</span>
</p>
<p className="text-sm text-gray-500">
  Stock: <span className="text-gray-500">{product.stock}</span>
</p>

<p className="text-sm text-gray-500">
  Features: {product.features}
</p>

{/* New fields */}






              <div>
                <button
                  onClick={handleInquiryClick}
                  className="bg-yellow1 text-white px-4 py-2 rounded-lg hover:bg-yellow"
                >
                  Inquiry Product
                </button>
              </div>
              {isDialogOpen && (
  <div className="fixed inset-0 bg-[#0000006d] bg-opacity-50 flex justify-center items-center p-4">
    <div className="relative w-full max-w-4xl bg-white border rounded-lg shadow-lg flex overflow-hidden">
      {/* Left Section - Product Details */}
      <div className="w-1/2 p-4 flex flex-col justify-center items-center text-center">
  {/* Image Wrapper */}
  <div className="relative w-full  overflow-hidden">
    {/* Original Image */}
    <img
      src={product.images?.[0] || "https://via.placeholder.com/300"}
      alt={product.name}
      className="w-full h-full object-cover rounded"
    />
  </div>
  {/* Product Information */}
  <h1 className="text-2xl font-semibold mt-4">{product.name}</h1>
  <p className="text-gray-600 text-sm">SKU: <span className="text-gray-500">{product.SKU}</span></p>
</div>

      
      {/* Right Section - Inquiry Form */}
      <div className="w-1/2 p-4 flex flex-col justify-between border-l">
        <button onClick={handleCloseDialog} className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl">&times;</button>
        <h4 className="text-lg font-bold mb-2">Drop Your Inquiry</h4>
        <p className="text-sm text-gray-500 mb-3">Your email address will not be published. Required fields are marked *</p>
        {responseMessage && <div className="mb-2 text-green-600">{responseMessage}</div>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className="border p-1 rounded w-full" />
          {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
          
          <input name="email" type="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className="border p-1 rounded w-full" />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          
          <input name="phoneNumber" type="tel" placeholder="Phone Number *" value={formData.phoneNumber} onChange={handleChange} className="border p-1 rounded w-full" />
          {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber}</span>}
          
          <input name="country" placeholder="Country *" value={formData.country} onChange={handleChange} className="border p-1 rounded w-full" />
          {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
          
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-1 rounded w-full" />
          <input name="companyName" placeholder="Company Name (optional)" value={formData.companyName} onChange={handleChange} className="border p-1 rounded w-full" />
          
          <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} className="border p-1 rounded w-full h-20"></textarea>
          {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
          
          <button type="submit" className="bg-yellow  text-white font-semibold px-4 py-2 rounded w-full hover:bg-yellow1 transition" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  </div>
)}

            </div>
          </div>
        </div>
      </main>
      <div className="container">
        <HeadingPrimary>Related Products</HeadingPrimary>
        <div className="mt-5">
          <FeaturedProductsSlider2
            id={id}
            subcategoryId={subcategoryId}
            productId={productId}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductDetailPage;
