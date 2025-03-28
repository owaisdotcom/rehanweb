import React from "react";
import FooterNavItems from "./FooterNavItems";
import FooterAbout from "./FooterAbout";
import FooterRecentPosts from "./FooterRecentPosts";

// Importing social media icons
import FacebookIcon from "../../../assets/images/icon/facebook.png";
import InstagramIcon from "../../../assets/images/icon/instagram.png";
import LinkedInIcon from "../../../assets/images/icon/linkedin.png";
import WhatsAppIcon from "../../../assets/images/icon/whatsapp.png";
import FooterHeading from "@/components/shared/headings/FooterHeading";


const FooterNavList = () => {
  const socialLinks = [
    { href: "https://www.facebook.com", icon: FacebookIcon.src, alt: "Facebook" },
    { href: "https://www.instagram.com", icon: InstagramIcon.src, alt: "Instagram" },
    { href: "https://www.linkedin.com", icon: LinkedInIcon.src, alt: "LinkedIn" },
    { href: "https://www.whatsapp.com", icon: WhatsAppIcon.src, alt: "WhatsApp" },
  ];
  const lists = [
    {
      heading: "Useful Links",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Our Products", path: "/instructors" },
        { name: "Contact Us", path: "#" },
        { name: "Inquiry", path: "#" },
      ],
    },
    {
      heading: "Categories",
      items: [
        { name: "Gloves", path: "/category/67804b883c8cc403e459c4b5" },
        { name: "Jackets", path: "/category/67ddb28778a1e750021a4d95" },
        { name: "Wallets", path: "/category/67ddb2e378a1e750021a4d9f" },
        { name: "Belts", path: "/category/67ddbd2d9e389f15830b035a" },
        // { name: "Keychains", path: "#" },
      ],
    },
  ];
  console.log(FacebookIcon); // Should print the resolved image path


  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-y-5 lg:gap-y-0 pt-2 pb-2 md:pt-8 lg:pt-12">
        {/* Left Section */}
        <FooterAbout />

        {/* Navigation Links */}
        {lists.map((list, idx) => (
          <FooterNavItems key={idx} list={list} idx={idx} />
        ))}

        {/* Social Media Icons */}
        <div className="lg:col-start-10 lg:col-span-3">
        <FooterHeading>Socials</FooterHeading>
          <ul className="flex flex-col gap-4 ">
            {socialLinks.map(({ href, icon, alt }, index) => (
              <li key={index}>
                <a href={href} className="block w-10 h-10">
                  <img
                    src={icon}
                    alt={alt}
                    className="w-full h-full object-contain hover:opacity-80 transition-opacity duration-200"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterNavList;
