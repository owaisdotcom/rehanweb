import AdminReviewsMain from "@/components/layout/main/dashboards/AdminReviewsMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";

import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Admin Reviews | M. Azam & Sons",
  description: "Admin Reviews | M. Azam & Sons",
};
const Admin_Reviews = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <AdminReviewsMain />
          </DashboardContainer>
        </DsahboardWrapper>
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Admin_Reviews;
