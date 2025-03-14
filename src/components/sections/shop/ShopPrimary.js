"use client";
import { useEffect, useState, useRef } from "react";
import ShopSidebar from "@/components/shared/ecommerce/ShopSidebar";
import { FiGrid, FiList } from "react-icons/fi";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";
import ThreeColumnContent from "@/components/shared/ecommerce/ThreeColumnContent";
import Pagination from "@/components/shared/others/Pagination";
import ProductModal from "@/components/shared/products/ProductModal";
import ListViewContent from "@/components/shared/products/ListViewContent";

const ShopPrimary = ({ products = [], categoryId, subcategoryId }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);
  const shopRef = useRef(null);

  const totalProducts = sortedProducts?.length || 0;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const paginationItems = [...Array(totalPages)];

  useEffect(() => {
    if (Array.isArray(sortedProducts) && sortedProducts.length > 0) {
      const start = currentPage * productsPerPage;
      const end = start + productsPerPage;
      setCurrentProducts(sortedProducts.slice(start, end));
      setCurrentProduct(sortedProducts[0] || null);
    } else {
      setCurrentProducts([]);
      setCurrentProduct(null);
    }
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
      <div className="container-fluid-2 shop py-100px" ref={shopRef}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-30px">
          <ShopSidebar products={products} setSortedProducts={setSortedProducts} />
          <div className="modal-container xl:col-start-4 xl:col-span-9">
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-600">
                Showing {currentProducts.length} of {totalProducts} products
              </div>
              <div className="flex gap-4">
                <select
                  className="border p-2 rounded"
                  value={productsPerPage}
                  onChange={(e) => setProductsPerPage(Number(e.target.value))}
                >
                  <option value={6}>6 per page</option>
                  <option value={12}>12 per page</option>
                  <option value={24}>24 per page</option>
                </select>
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center gap-2"
                  onClick={() => setViewMode("grid")}
                >
                  <FiGrid className="w-5 h-5" /> Grid View
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center gap-2"
                  onClick={() => setViewMode("list")}
                >
                  <FiList className="w-5 h-5" /> List View
                </button>
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
              <Pagination pages={paginationItems} totalItems={totalProducts} handlePagesnation={handlePagination} currentPage={currentPage} />
            )}
            <ProductModal product={currentProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPrimary;