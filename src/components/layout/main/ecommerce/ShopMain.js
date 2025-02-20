// import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
// import ShopPrimary from "@/components/sections/shop/ShopPrimary";

// const ShopMain = () => {
//   return (
//     <>
//       <HeroPrimary path={"Shop page"} title={"Shop"} />
//       <ShopPrimary />
//     </>
//   );
// };

// export default ShopMain;

// import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
// import ShopPrimary from "@/components/sections/shop/ShopPrimary";

// const ShopMain = ({ products }) => {  // Accept `products` as a prop
//   return (
//     <>
//       <HeroPrimary path={"Shop page"} title={"Shop"} />
//       <ShopPrimary products={products} />  {/* Pass products to ShopPrimary */}
//     </>
//   );
// };

// export default ShopMain;

import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import ShopPrimary from "@/components/sections/shop/ShopPrimary";
import FeaturedProductsSlider2 from "@/components/shared/featured-products/FeaturedProductsSlider2";

const ShopMain = ({ products, categoryId, subcategoryId, title }) => {
  console.log(categoryId)
  return (
    <>
      <HeroPrimary path={title} title={title} />
      <ShopPrimary products={products} categoryId={categoryId} subcategoryId={subcategoryId} />
      
    </>
  );
};

export default ShopMain;


