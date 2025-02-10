import Image from "next/image";
import missionImage from "@/assets/images/about/mission.jpg";
const OurMissionContent = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-xl font-semibold mb-10px text-yellow">Our Mission</h1>
      <p className="text-black dark:text-contentColor-dark mb-25px">
  At <strong>MAS Safety Leather</strong>, we’re here for your <strong>safety and peace of mind</strong>.  
  With over <strong>25 years of expertise</strong>, we craft <strong>premium leather safety gloves</strong> that offer  
  <strong>unbeatable protection, comfort, and durability</strong>.  

  Every product we create, from our <strong>gloves</strong> to <strong>jackets, wallets, and belts</strong>,  
  is made with the <strong>utmost care and dedication</strong> to ensuring your <strong>well-being</strong>.  

  Trust us to deliver not just quality, but the confidence that comes with knowing you’re protected.
</p>

      {/* <Image src={missionImage} alt="" className="w-full" placeholder="blur" /> */}
    </div>
  );
};

export default OurMissionContent;
