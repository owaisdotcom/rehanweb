import CoursesMain from "@/components/layout/main/CoursesMain";
import CoursesFilter2 from "@/components/sections/courses/CoursesFilter2";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import FeaturedProducts from "@/components/sections/featured-products/FeaturedProducts";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Courses | M. Azam & Sons",
  description: "Courses | M. Azam & Sons",
};

const Courses = async () => {
  return (
    <PageWrapper>
      <main>
        <CoursesFilter2 />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Courses;
