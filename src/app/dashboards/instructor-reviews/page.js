import InstructorReviewsMain from "@/components/layout/main/dashboards/InstructorReviewsMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";
import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Instructor Reviews | MAS Leather Gloves",
  description: "Instructor Reviews | MAS Leather Gloves",
};
const Instructor_Reviews = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <InstructorReviewsMain />
          </DashboardContainer>
        </DsahboardWrapper>
        
      </main>
    </PageWrapper>
  );
};

export default Instructor_Reviews;
