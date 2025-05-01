import StudentReviewsMain from "@/components/layout/main/dashboards/StudentReviewsMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";
import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Student Reviews | MAS Leather Gloves",
  description: "Student Reviews | MAS Leather Gloves",
};
const Student_Reviews = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <StudentReviewsMain />
          </DashboardContainer>
        </DsahboardWrapper>
        
      </main>
    </PageWrapper>
  );
};

export default Student_Reviews;
