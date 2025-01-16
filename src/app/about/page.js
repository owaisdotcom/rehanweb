import AboutMain from "@/components/layout/main/AboutMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "About | M. Azam & Sons",
  description: "About | M. Azam & Sons",
};

const About = async () => {
  return (
    <PageWrapper>
      <main>
        <AboutMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default About;
