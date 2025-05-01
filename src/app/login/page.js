import LoginMain from "@/components/layout/main/LoginMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Login/Register | MAS Leather Gloves",
  description: "Login/Register | MAS Leather Gloves",
};
const Login = () => {
  return (
    <PageWrapper>
      <main>
        <LoginMain />
        
      </main>
    </PageWrapper>
  );
};

export default Login;
