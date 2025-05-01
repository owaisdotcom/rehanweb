import ShopMain from "@/components/layout/main/ecommerce/ShopMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Shop | Mathsflix By Hashim Zia",
  description: "Shop | Mathsflix By Hashim Zia",
};

const Shop = async () => {
  return (
    <PageWrapper>
      <main>
        <ShopMain />
        
      </main>
    </PageWrapper>
  );
};

export default Shop;
