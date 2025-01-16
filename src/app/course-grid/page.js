import CourseGridMain from "@/components/layout/main/CourseGridMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Course Grid | M. Azam & Sons",
  description: "Course Grid | M. Azam & Sons",
};

const Course_Grid = async () => {
  return (
    <PageWrapper>
      <main>
        <CourseGridMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Course_Grid;
