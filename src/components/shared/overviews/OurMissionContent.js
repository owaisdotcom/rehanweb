import Image from "next/image";
import missionImage from "@/assets/images/about/mission.jpg";
const OurMissionContent = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-xl font-semibold mb-10px ">Our Mission</h1>
      <p className="text-black dark:text-contentColor-dark mb-25px">
      At MAS Safety Leather, we’re here for your safety and peace of mind. With over 25 years of expertise, we craft premium leather safety gloves that offer unbeatable protection, comfort, and durability. Every product we create, from our gloves to jackets, wallets, and belts, is made with the utmost care and dedication to ensuring your well-being. Trust us to deliver not just quality, but the confidence that comes with knowing you’re protected.
      </p>
      
      {/* <Image src={missionImage} alt="" className="w-full" placeholder="blur" /> */}
    </div>
  );
};

export default OurMissionContent;
