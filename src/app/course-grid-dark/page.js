import CourseGridMain from "@/components/layout/main/CourseGridMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Course Grid - Dark | MAS Leather Gloves",
  description: "Course Grid - Dark | MAS Leather Gloves",
};
const Course_Grid_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <CourseGridMain />
        
      </main>
    </PageWrapper>
  );
};

export default Course_Grid_Dark;
