import React from "react";
import FooterNavItems from "./FooterNavItems";
import FooterAbout from "./FooterAbout";
import FooterRecentPosts from "./FooterRecentPosts";

const FooterNavList = () => {
  const lists = [
    {
      heading: "Usefull Links",
      items: [
        {
          name: "About Us",
          path: "/about",
        },
        {
          name: "Our Products",
          path: "/instructors",
        },
        {
          name: "Contanct Us",
          path: "#",
        },
        {
          name: "Inquiry",
          path: "#",
        },
  
      ],
    },
    {
      heading: "Categories",
      items: [
        {
          name: "Gloves",
          path: "#",
        },
        {
          name: "Jackets",
          path: "#",
        },
        {
          name: "Wallets",
          path: "#",
        },
        {
          name: "Belts",
          path: "#",
        },
        {
          name: "Keychains",
          path: "#",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-12 gap-30px md:gap-y-5 lg:gap-y-0 pt-10px pb-10px md:pt-30px md:pb-30px lg:pt-50px ">
        {/* left */}
        <FooterAbout />

        {/* nav area */}
        {lists.map((list, idx) => (
          <FooterNavItems key={idx} list={list} idx={idx} />
        ))}

       
      </div>
    </section>
  );
};

export default FooterNavList;
