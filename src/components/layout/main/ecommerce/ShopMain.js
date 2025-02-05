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

const ShopMain = ({ products, categoryId, subcategoryId }) => {
  console.log(categoryId)
  return (
    <>
      <HeroPrimary path={"Shop page"} title={"Shop"} />
      <ShopPrimary products={products} categoryId={categoryId} subcategoryId={subcategoryId} />
    </>
  );
};

export default ShopMain;


