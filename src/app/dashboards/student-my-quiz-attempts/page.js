import StudentMyQuizAttemptsMain from "@/components/layout/main/dashboards/StudentMyQuizAttemptsMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";
import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Student My Quiz Attempts | MAS Leather Gloves",
  description: "Student My Quiz Attempts | MAS Leather Gloves",
};
const Student_My_Quiz_Attempts = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <StudentMyQuizAttemptsMain />
          </DashboardContainer>
        </DsahboardWrapper>
        
      </main>
    </PageWrapper>
  );
};

export default Student_My_Quiz_Attempts;
