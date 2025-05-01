import CreateCourseMain from "@/components/layout/main/CreateCourseMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Create Course | MAS Leather Gloves",
  description: "Create Course | MAS Leather Gloves",
};
const Create_Course = () => {
  return (
    <PageWrapper>
      <main>
        <CreateCourseMain />
        
      </main>
    </PageWrapper>
  );
};

export default Create_Course;
