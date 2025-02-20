
import About5 from "@/components/sections/abouts/About5";
import Brands from "@/components/sections/brands/Brands";
import ContactFrom from "@/components/sections/contact-form/ContactFrom";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Overview from "@/components/sections/overviews/Overview";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Image from "next/image";
import chooseImage from "./../../../assets/images/Choose.png";
import craftImage from "./../../../assets/images/sewing-machine.png";
import deliverImage from "./../../../assets/images/delivery.png";

const AboutMain = () => {
  return (
    <div className="pt-20 bg-white">
      {/* <HeroPrimary title="About Page" path={"About Page"} /> */}
      <About5/>
      <Overview />
       {/* New Container for Three Images */}
       <h3 className="text-4xl font-semibold text-center py-3 text-yellow">Our Process</h3>
       <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center gap-6 py-20">
        {/* Choose */}
        <div className="w-full sm:w-1/3">
          <Image src={chooseImage} alt="Choose" className="mx-auto w-48 h-auto" />
          <p className="text-2xl font-bold mt-10 text-yellow">Choose</p>
        </div>

        {/* Craft */}
        <div className="w-full sm:w-1/3">
          <Image src={craftImage} alt="Craft" className="mx-auto w-48 h-auto" />
          <p className="text-2xl font-bold mt-10 text-yellow">Craft</p>
        </div>

        {/* Deliver */}
        <div className="w-full sm:w-1/3">
          <Image src={deliverImage} alt="Deliver" className="mx-auto w-48 h-auto" />
          <p className="text-2xl font-bold mt-10 text-yellow">Deliver</p>
        </div>
      </div>
    <ContactFrom/>
    </div>
  );
};

export default AboutMain;
