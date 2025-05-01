import CoursesMain from "@/components/layout/main/CoursesMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";
export const metadata = {
  title: "Courses - Dark | MAS Leather Gloves",
  description: "Courses - Dark | MAS Leather Gloves",
};
const Courses_Dark = () => {
  return (
    <PageWrapper>
      <main className="is-dark">
        <CoursesMain />
        
      </main>
    </PageWrapper>
  );
};

export default Courses_Dark;
