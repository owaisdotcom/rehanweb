import InstructorDashbordMain from "@/components/layout/main/dashboards/InstructorDashbordMain";

import DashboardContainer from "@/components/shared/containers/DashboardContainer";
import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Instructor Dashboard | MAS Leather Gloves",
  description: "Instructor Dashboard | MAS Leather Gloves",
};
const Instructor_Dashboard = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <InstructorDashbordMain />
          </DashboardContainer>
        </DsahboardWrapper>
        
      </main>
    </PageWrapper>
  );
};

export default Instructor_Dashboard;
