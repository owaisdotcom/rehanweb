import Home7 from "@/components/layout/main/Home7";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home-7 University - Dark | M. Azam & Sons",
  description: "Home-7 University - Dark | M. Azam & Sons",
};
const Home_7_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <Home7 />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Home_7_Dark;
