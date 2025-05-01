import BecomAnInstructorMain from "@/components/layout/main/BecomAnInstructorMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Become An Instructor | MAS Leather Gloves",
  description: "Become An Instructor | MAS Leather Gloves",
};
const Become_An_Instructor = () => {
  return (
    <PageWrapper>
      <main>
        <BecomAnInstructorMain />
        
      </main>
    </PageWrapper>
  );
};

export default Become_An_Instructor;
