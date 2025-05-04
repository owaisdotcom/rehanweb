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
  At <strong>MAS Leather Gloves</strong>, we pride ourselves on over <strong>25 years of dedication</strong> to crafting premium leather safety products that prioritize <strong>protection, comfort, and style</strong>.  
  Our journey began with a commitment to <strong>quality and innovation</strong>, transforming us from a local operation into a <strong>globally recognized brand</strong>.  

  Today, we offer a wide range of products, including <strong>safety gloves, jackets, belts, wallets,</strong> and <strong>custom leather solutions</strong>, all designed with precision and care.  

  Built on <strong>trust</strong> and <strong>strong customer relationships</strong>, MAS Leather Gloves is committed to delivering <strong>durable, reliable, and stylish leather gear</strong>.  

  Whether in the workplace or daily life, our products are made to <strong>empower industries and individuals worldwide</strong>, ensuring <strong>safety and top-tier performance</strong> at every step.
</p>


      

    </div>
  );
};

export default AboutContent;
