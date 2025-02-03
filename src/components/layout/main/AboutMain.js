
import About5 from "@/components/sections/abouts/About5";
import Brands from "@/components/sections/brands/Brands";
import ContactFrom from "@/components/sections/contact-form/ContactFrom";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Overview from "@/components/sections/overviews/Overview";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Image from "next/image";
import image from "./../../../assets/images/Choose.png"

const AboutMain = () => {
  return (
    <div className="pt-20 bg-white">
      {/* <HeroPrimary title="About Page" path={"About Page"} /> */}
      <About5/>
      <Overview />
      <div className=" container d-flex justify-center items-center">

     
      <Image className="m-auto" src={image} width={1000}   alt="Image"/>
      </div>
    <ContactFrom/>
    </div>
  );
};

export default AboutMain;
