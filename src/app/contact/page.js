import ContactMain from "@/components/layout/main/ContactMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact | MAS Leather Gloves",
  description: "Contact | MAS Leather Gloves",
};

const Contact = async () => {
  return (
    <PageWrapper>
      <main>
        <ContactMain />
        
      </main>
    </PageWrapper>
  );
};

export default Contact;
