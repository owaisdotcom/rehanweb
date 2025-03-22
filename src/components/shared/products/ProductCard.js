import Image from "next/image";
import Link from "next/link";
import logo from "./../../../assets/images/logo/logo.png";

const ProductCard = ({ product, categoryId, subcategoryId, onQuickView }) => {
  if (!product || !categoryId || !subcategoryId) {
    return <p>Invalid product data</p>;
  }

  return (
    <div className="group relative overflow-hidden border-2 border-white hover:border-yellow transition-shadow duration-300 bg-white">
      {/* Product Image */}
      <div className="relative w-full h-64">
        <Link href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}>
          <Image
            src={product.images?.[0] || "/default-product.jpg"}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            layout="fill"
          />
        </Link>

        {/* Quick View Button */}
        <button
          onClick={onQuickView}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow hover:bg-yellow1 text-white px-5 py-2 text-sm font-semibold rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          Quick View
        </button>

        {/* Logo Overlay */}
        <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
          <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 truncate">{product.name || "Product Name"}</h3>
        <Link
          href={`/category/${categoryId}/subcategory/${subcategoryId}/products/${product._id}`}
          className="text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-300"
        >
          SKU: {product.SKU}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
