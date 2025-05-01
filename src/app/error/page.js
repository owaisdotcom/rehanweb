import ErrorMain from "@/components/layout/main/ErrorMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Error | MAS Leather Gloves",
  description: "Error | MAS Leather Gloves",
};

const Error = async () => {
  return (
    <PageWrapper>
      <main>
        <ErrorMain />
        
      </main>
    </PageWrapper>
  );
};

export default Error;
