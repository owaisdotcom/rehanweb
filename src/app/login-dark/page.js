import LoginMain from "@/components/layout/main/LoginMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Login/Register - Dark | M. Azam & Sons",
  description: "Login/Register - Dark | M. Azam & Sons",
};
const Login_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <LoginMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Login_Dark;
