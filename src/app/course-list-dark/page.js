import CourseListMain from "@/components/layout/main/CourseListMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Course List - Dark | M. Azam & Sons",
  description: "Course List - Dark | M. Azam & Sons",
};
const Course_List_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <CourseListMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Course_List_Dark;
