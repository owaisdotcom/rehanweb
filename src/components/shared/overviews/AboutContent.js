"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/overview.jpg";
import overviewKidImage from "@/assets/images/about/overview_kg.png";
import useIsTrue from "@/hooks/useIsTrue";
const AboutContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");
  return (
    <div>
      <p className="text-black dark:text-contentColor-dark mb-10px">
      At MAS Safety Leather, we pride ourselves on over 25 years of unwavering dedication to crafting premium leather safety products that prioritize protection, comfort, and style. Our journey began with a commitment to quality and innovation, propelling us from a local operation to a globally recognized brand. Today, we offer an extensive range of products, including safety gloves, jackets, belts, wallets, and custom leather solutions, all designed with precision and care. Built on the foundation of trust and strong relationships with our customers, MAS Safety Leather remains committed to exceeding expectations by delivering durable, reliable, and stylish leather gear. Whether on the job or in everyday life, our products are created to empower individuals and industries worldwide, ensuring safety and performance at every step.
      </p>
      

    </div>
  );
};

export default AboutContent;
