
import About5 from "@/components/sections/abouts/About5";
import Brands from "@/components/sections/brands/Brands";
import ContactFrom from "@/components/sections/contact-form/ContactFrom";
import FeatureCourses from "@/components/sections/featured-courses/FeatureCourses";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Overview from "@/components/sections/overviews/Overview";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const AboutMain = () => {
  return (
    <div className="pt-20">
      {/* <HeroPrimary title="About Page" path={"About Page"} /> */}
      <About5/>
      <Overview />
    <ContactFrom/>
    </div>
  );
};

export default AboutMain;
