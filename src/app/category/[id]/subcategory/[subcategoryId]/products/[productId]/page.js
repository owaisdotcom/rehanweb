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
//         

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
    const { name, value } = e.target;
    const staticPrefix = `I want to inquire about ${product?.title} (SKU: ${product?.sku}). `;
  
    // Strip static prefix if present
    const userInput = value.startsWith(staticPrefix)
      ? value.slice(staticPrefix.length)
      : value;
  
    setFormData((prev) => ({
      ...prev,
      [name]: userInput,
    }));
  
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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
        

        <HeroPrimary path={`Shop page > Product Page`} title={product?.name} />

        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-4 sm:p-8 rounded-lg shadow-md">
    {/* Product Image with Zoom */}
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] border rounded-lg overflow-hidden group">
      <div 
        className="w-full h-full relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Original Image */}
        <img
          ref={imageRef}
          src={product.images?.[0] ?? "https://via.placeholder.com/800"}
          alt={product.name}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            zoomPosition.isVisible ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Zoomed Image Overlay */}
        {zoomPosition.isVisible && (
          <div
            className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300"
            style={{
              backgroundImage: `url(${product.images?.[0]})`,
              backgroundSize: "200%",
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transform: "scale(1.2)",
              willChange: "transform",
              backgroundRepeat: "no-repeat"
            }}
          />
        )}
      </div>
      {/* Zoom Indicator (only shows on hover) */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Hover to zoom
      </div>
    </div>

    {/* Product Details */}
    <div className="p-4 flex flex-col justify-start space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {product.name}
      </h1>

      <p className="text-gray-700 text-lg sm:text-xl">{product.description}</p>
      
      <div className="space-y-3">
        {product?.SKU && (
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold">SKU:</span> {product.SKU}
          </p>
        )}

        {product?.material && (
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold">Material:</span> {product.material}
          </p>
        )}

        {product?.uses && (
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold">Uses:</span> {product.uses}
          </p>
        )}

        {product?.size && (
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold">Size:</span> {product.size}
          </p>
        )}

        {product?.stock && (
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold">Stock:</span> {product.stock}
          </p>
        )}

        {product?.features && (
          <div className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold">Features:</span> 
            <ul className="list-disc pl-5 mt-1">
              {product.features.split(',').map((feature, index) => (
                <li key={index}>{feature.trim()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={handleInquiryClick}
          className="bg-yellow hover:bg-yellow1 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Inquiry Product
        </button>
      </div>
    </div>
  </div>

  {/* Inquiry Dialog */}
  {isDialogOpen && (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={handleCloseDialog} 
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl z-10"
        >
          &times;
        </button>

        {/* Left Section - Product Details */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center text-center">
        <div className="relative w-full  overflow-hidden">
    {/* Original Image */}
    <img
      src={product.images?.[0] || "https://via.placeholder.com/300"}
      alt={product.name}
      className="w-full h-full object-cover rounded"
    />
  </div>
          <h1 className="text-xl font-bold text-center">{product.name}</h1>
          <p className="text-gray-600 text-sm mt-1">SKU: {product.SKU}</p>
        </div>
        
        {/* Right Section - Inquiry Form */}
        <div className="w-full md:w-1/2 p-6">
          <h4 className="text-xl font-bold mb-1">Drop Your Inquiry</h4>
          <p className="text-sm text-gray-500 mb-2">
            Your email address will not be published. Required fields are marked *
          </p>
          
          {responseMessage && (
            <div className={`mb-4 p-3 rounded ${responseMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {responseMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-1">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                name="fullName" 
                placeholder="John Doe" 
                value={formData.fullName} 
                onChange={handleChange} 
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
              <input 
                name="email" 
                type="email" 
                placeholder="your@email.com" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
              <input 
                name="phoneNumber" 
                type="tel" 
                placeholder="+1234567890" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber}</span>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Country *</label>
                <input 
                  name="country" 
                  placeholder="Country" 
                  value={formData.country} 
                  onChange={handleChange} 
                  className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">City</label>
                <input 
                  name="city" 
                  placeholder="City" 
                  value={formData.city} 
                  onChange={handleChange} 
                  className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Company Name (optional)</label>
              <input 
                name="companyName" 
                placeholder="Your Company" 
                value={formData.companyName} 
                onChange={handleChange} 
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
              <textarea
  name="message"
  placeholder="Message *"
  value={`I want to inquire about ${product?.name} (SKU: ${product?.SKU}). ${formData.message?.replace(/^.*?\)\.\s*/, '')}`}
  onChange={handleChange}
  className="border p-1 rounded w-full h-20 resize-none"
/>
              {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-yellow hover:bg-yellow1 text-white font-semibold px-4 py-3 rounded-md transition-colors duration-300"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )}
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
