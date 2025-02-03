// import AccordionController from "@/components/shared/accordion/AccordionController";

// import MobileLink from "./MobileLink";
// import Accordion from "@/components/shared/accordion/Accordion";
// import AccordionContent from "@/components/shared/accordion/AccordionContent";
// const MobileMenuItem = ({ item }) => {
//   const { name, path, children, accordion } = item;

//   return !accordion ? (
//     <MobileLink item={{ name, path }} />
//   ) : (
//     <Accordion>
//       <AccordionController type={"primary"}>
//         <MobileLink item={{ name, path }} />
//       </AccordionController>
//       <AccordionContent>{children && children}</AccordionContent>
//     </Accordion>
//   );
// };

// export default MobileMenuItem;

import React, { useState } from "react";
import AccordionController from "@/components/shared/accordion/AccordionController";
import MobileLink from "./MobileLink";
import Accordion from "@/components/shared/accordion/Accordion";
import AccordionContent from "@/components/shared/accordion/AccordionContent";

const MobileMenuItem = ({ item }) => {
  const { name, path, children, accordion, idx } = item;

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return !accordion ? (
    <div className="w-full">
      <MobileLink item={{ name, path }} />
    </div>
  ) : (
    <Accordion isActive={isActive} onToggle={handleToggle}>
      <AccordionController type={"primary"} idx={idx} toggleAccordion={handleToggle}>
        <div className="w-full">
          <MobileLink item={{ name, path }} />
        </div>
      </AccordionController>
      <AccordionContent isActive={isActive}>
        {children && <div className="pl-4">{children}</div>}
      </AccordionContent>
    </Accordion>
  );
};

export default MobileMenuItem;
