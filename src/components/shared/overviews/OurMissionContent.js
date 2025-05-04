import Image from "next/image";
import missionImage from "@/assets/images/target.png";

const OurMissionContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-left">
        <h1 className="sm:text-4xl text-2xl font-semibold mb-4 text-yellow">
          Our Mission
        </h1>
        <p className="text-sm  sm:text-base text-black dark:text-contentColor-dark leading-relaxed">
          At <strong>MAS Leather Gloves</strong>, we’re here for your{" "}
          <strong>safety and peace of mind</strong>.  
          With over <strong>25 years of expertise</strong>, we craft{" "}
          <strong>premium leather safety gloves</strong> that offer{" "}
          <strong>unbeatable protection, comfort, and durability</strong>.  

          Every product we create, from our <strong>gloves</strong> to{" "}
          <strong>jackets, wallets, and belts</strong>,  
          is made with the <strong>utmost care and dedication</strong> to ensuring your{" "}
          <strong>well-being</strong>.  

          Trust us to deliver not just quality, but the confidence that comes with 
          knowing you’re protected.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <Image src={missionImage} alt="Our Mission" className="w-1/2 max-w-md" placeholder="blur" />
      </div>
    </div>
  );
};

export default OurMissionContent;
