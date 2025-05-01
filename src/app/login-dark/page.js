import LoginMain from "@/components/layout/main/LoginMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Login/Register - Dark | MAS Leather Gloves",
  description: "Login/Register - Dark | MAS Leather Gloves",
};
const Login_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <LoginMain />
        
      </main>
    </PageWrapper>
  );
};

export default Login_Dark;
