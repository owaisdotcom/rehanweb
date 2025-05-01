"use client";
import { useEffect, useState, useRef } from "react";
import ShopSidebar from "@/components/shared/ecommerce/ShopSidebar";
import { FiGrid, FiList } from "react-icons/fi";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";
import ThreeColumnContent from "@/components/shared/ecommerce/ThreeColumnContent";
import Pagination from "@/components/shared/others/Pagination";
import ProductModal from "@/components/shared/products/ProductModal";
import ListViewContent from "@/components/shared/products/ListViewContent";

const ShopPrimary = ({ products, categoryId, subcategoryId }) => {
  const fetchedProducts = products ?? [];
  const [viewMode, setViewMode] = useState("grid");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const shopRef = useRef(null);

  const totalProducts = sortedProducts?.length || 0;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const paginationItems = [...Array(totalPages)];

  useEffect(() => {
    if (Array.isArray(products)) {
      setSortedProducts(products);
      setCurrentProducts(products.slice(0, productsPerPage));
      setCurrentProduct(products?.[0] ?? null);
    }
  }, [products, productsPerPage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = currentPage * productsPerPage;
      const end = start + productsPerPage;
      setCurrentProducts(sortedProducts?.slice(start, end)) ?? [];
      setCurrentProduct(sortedProducts?.[start] ?? null);
    }, 500);
  
    return () => clearTimeout(timeout);
  }, [currentPage, productsPerPage, sortedProducts]);

  const handlePagination = (id) => {
    shopRef.current.scrollIntoView({ behavior: "smooth" });
    if (typeof id === "number") {
      setCurrentPage(id);
    } else if (id === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (id === "next" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section>
      <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" ref={shopRef}>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-15">
          {/* Main Content Area - comes first on mobile */}
          <div className="lg:col-span-9 sm:order-2 order-1">
            {/* View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="text-sm sm:text-base text-gray-600">
                Showing {currentProducts.length} of {totalProducts} products
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <select
                  className="border p-2 rounded text-sm sm:text-base"
                  value={productsPerPage}
                  onChange={(e) => setProductsPerPage(Number(e.target.value))}
                >
                  <option value={6}>6 per page</option>
                  <option value={12}>12 per page</option>
                  <option value={24}>24 per page</option>
                </select>
                <div className="flex gap-2">
                  <button
                    className={`px-3 py-2 rounded flex items-center gap-2 text-sm sm:text-base ${viewMode === "grid" ? "bg-primaryColor text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                    onClick={() => setViewMode("grid")}
                  >
                    <FiGrid className="w-4 h-4 sm:w-5 sm:h-5" /> Grid
                  </button>
                  <button
                    className={`px-3 py-2 rounded flex items-center gap-2 text-sm sm:text-base ${viewMode === "list" ? "bg-primaryColor text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                    onClick={() => setViewMode("list")}
                  >
                    <FiList className="w-4 h-4 sm:w-5 sm:h-5" /> List
                  </button>
                </div>
              </div>
            </div>

            <TabContentWrapper isShow>
              {viewMode === "grid" ? (
                <ThreeColumnContent products={currentProducts} categoryId={categoryId} subcategoryId={subcategoryId} />
              ) : (
                <ListViewContent products={currentProducts} categoryId={categoryId} subcategoryId={subcategoryId} />
              )}
            </TabContentWrapper>

            {totalProducts > productsPerPage && (
              <Pagination 
                pages={paginationItems} 
                totalItems={totalProducts} 
                handlePagesnation={handlePagination} 
                currentPage={currentPage} 
              />
            )}
            
            <ProductModal product={currentProduct} />
          </div>

          {/* Sidebar - comes after products on mobile */}
          <div className="lg:col-span-3 sm:order-1 order-2">
            <div className="sticky top-4">
              <ShopSidebar products={products} setSortedProducts={setSortedProducts} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPrimary;