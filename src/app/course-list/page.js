import CourseListMain from "@/components/layout/main/CourseListMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Course List | MAS Leather Gloves",
  description: "Course List | MAS Leather Gloves",
};

const Course_List = async () => {
  return (
    <PageWrapper>
      <main>
        <CourseListMain />
        
      </main>
    </PageWrapper>
  );
};

export default Course_List;
