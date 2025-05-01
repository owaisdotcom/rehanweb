import CourseGridMain from "@/components/layout/main/CourseGridMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Course Grid | MAS Leather Gloves",
  description: "Course Grid | MAS Leather Gloves",
};

const Course_Grid = async () => {
  return (
    <PageWrapper>
      <main>
        <CourseGridMain />
        
      </main>
    </PageWrapper>
  );
};

export default Course_Grid;
