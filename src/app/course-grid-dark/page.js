import CourseGridMain from "@/components/layout/main/CourseGridMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Course Grid - Dark | M. Azam & Sons",
  description: "Course Grid - Dark | M. Azam & Sons",
};
const Course_Grid_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <CourseGridMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Course_Grid_Dark;
