import InstructorAssignmentsMain from "@/components/layout/main/dashboards/InstructorAssignmentsMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";
import ThemeController from "@/components/shared/others/ThemeController";
import DsahboardWrapper from "@/components/shared/wrappers/DsahboardWrapper";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Instructor Assignments | M. Azam & Sons",
  description: "Instructor Assignments | M. Azam & Sons",
};
const Instructor_Assignments = () => {
  return (
    <PageWrapper>
      <main>
        <DsahboardWrapper>
          <DashboardContainer>
            <InstructorAssignmentsMain />
          </DashboardContainer>
        </DsahboardWrapper>
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Instructor_Assignments;
