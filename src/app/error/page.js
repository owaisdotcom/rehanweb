import ErrorMain from "@/components/layout/main/ErrorMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Error | M. Azam & Sons",
  description: "Error | M. Azam & Sons",
};

const Error = async () => {
  return (
    <PageWrapper>
      <main>
        <ErrorMain />
        <ThemeController />
      </main>
    </PageWrapper>
  );
};

export default Error;
