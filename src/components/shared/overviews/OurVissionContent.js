import Image from "next/image";
import vissionImage from "@/assets/images/opportunity.png";

const OurVisionContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
      {/* Image Section - Always on left */}
      <div className="lg:w-1/2 flex justify-center sm:order-1 order-2">
        <Image 
          src={vissionImage} 
          alt="Our Vision" 
          className="w-1/2 max-w-md" 
          placeholder="blur" 
        />
      </div>

      {/* Text Section - Always on right */}
      <div className="w-full md:w-1/2 text-left sm:order-2 order-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-yellow">
          Our Vision
        </h1>
        <p className="text-sm sm:text-base text-black dark:text-contentColor-dark leading-relaxed">
          Our vision is to <strong>lead the global market</strong> in protective leather gear,  
          always prioritizing your <strong>safety and performance</strong>.  
          We are committed to delivering <strong>innovative, high-quality, and durable products</strong>  
          that not only protect but also boost your <strong>confidence</strong> in any industry.  

          With a focus on <strong>excellence</strong>, we create <strong>reliable and stylish solutions</strong>  
          that help you perform at your best, every day.  

          <strong>Your safety is our priority</strong>, and we&apos;re here to support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default OurVisionContent;