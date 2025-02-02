// import React from "react";
// import AccordionHome from "./AccordionHome";
// import AccordionContainer from "@/components/shared/containers/AccordionContainer";
// import MobileMenuItem from "./MobileItem";
// import AccordionPages from "./AccordionPages";
// import AccordionCourses from "./AccordionCourses";
// import AccordionDashboard from "./AccordionDashboard";
// import AccordionEcommerce from "./AccordionEcommerce";

// const MobileMenuItems = () => {
//   const items = [
//     {
//       id: 1,
//       name: "Home",
//       path: "/",
//       accordion: "accordion",
//       // children: <AccordionHome />,
//     },
//     {
//       id: 2,
//       name: "About",
//       path: "/about",
//       accordion: "accordion",
//       // children: <AccordionPages />,
//     },
//     {
//       id: 3,
//       name: "Our Products",
//       path: "/",
//       accordion: "accordion",
//       // children: <AccordionCourses />,
//     },
//     {
//       id: 4,
//       name: "Contact",
//       path: "/contact",
//       accordion: "accordion",
//       // children: <AccordionDashboard />,
//     },
    
//   ];

//   return (
//     <div className="pt-8 pb-6 border-b border-borderColor dark:border-borderColor-dark">
//       <AccordionContainer>
//         {items.map((item, idx) => (
//           <MobileMenuItem key={idx} item={item} />
//         ))}
//       </AccordionContainer>
//     </div>
//   );
// };

// export default MobileMenuItems;

import React from "react";
import AccordionContainer from "@/components/shared/containers/AccordionContainer";
import MobileMenuItem from "./MobileItem";
import DropdownDashboard from "@/components/layout/header/DropdownDashboard";

const MobileMenuItems = () => {
  const items = [
    { id: 1, name: "Home", path: "/", accordion: false },
    { id: 2, name: "About", path: "/about", accordion: false },
    {
      id: 3,
      name: "Our Products",
      path: "#", 
      accordion: true,
      children: <DropdownDashboard />, 
    },
    { id: 4, name: "Contact", path: "/contact", accordion: false },
  ];

  return (
    <div className="pt-8 pb-6 border-b border-borderColor dark:border-borderColor-dark">
      <AccordionContainer>
        {items.map((item, idx) => (
          <div key={idx} className="block w-full">
            <MobileMenuItem item={item} />
          </div>
        ))}
      </AccordionContainer>
    </div>
  );
};

export default MobileMenuItems;
