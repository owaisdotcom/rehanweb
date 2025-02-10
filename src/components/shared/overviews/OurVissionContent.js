import Image from "next/image";
import vissionImage from "@/assets/images/about/vision.jpg";

const OurVissionContent = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-xl font-semibold mb-10px text-yellow">Our Vision</h1>
      <p className="text-black dark:text-contentColor-dark mb-25px">
  Our vision is to <strong>lead the global market</strong> in protective leather gear, always prioritizing your <strong>safety and performance</strong>.  
  We are committed to delivering <strong>innovative, high-quality, and durable products</strong> that not only protect but also boost your <strong>confidence</strong> in any industry.  

  With a focus on <strong>excellence</strong>, we create <strong>reliable and stylish solutions</strong> that help you perform at your best, every day.  
  <strong>Your safety is our priority</strong>, and we’re here to support you every step of the way.
</p>

   
      {/* <Image src={vissionImage} alt="" className="w-full" placeholder="blur" /> */}
    </div>
  );
};

export default OurVissionContent;
