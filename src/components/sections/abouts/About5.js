
import SectionNameSecondary from "@/components/shared/section-names/SectionNameSecondary";
import Image from "next/image";
import storeImage from "@/assets/images/logo/logo.png"; // Make sure to update the image if needed
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import HeadingPrimaryXl from "@/components/shared/headings/HeadingPrimaryXl ";
import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";

const About5 = () => {
  return (
    <section>
      <div className="container mt-20">
        {/* about section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px pb-30px">
          {/* about left */}
          <div data-aos="fade-up">
          <h1 className="font-bold text-3xl pb-4">
  Welcome to <span className="text-secondaryColor font-bold">MAS Leather Manufacturing </span>  
  by <i className="underline ">M. Azam & Sons</i> 
</h1>
<HeadingPrimary>
  Premium Leather Goods – Where Safety, Satisfaction, and Style Meet
</HeadingPrimary>


            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
              M. Azam & Sons offers a wide range of high-quality leather products, specializing in gloves, jackets, wallets, keychains, and belts. We are your trusted partner in high-quality leather manufacturing, ensuring protection with elegance. We are committed to providing durable and stylish leather materials for everyday use.
            </p>
            <ul className="space-y-5">
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  Premium leather gloves for comfort and durability.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  Stylish and functional leather jackets for all seasons.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  High-quality wallets, keychains, and belts made from premium leather.
                </p>
              </li>
            </ul>
          </div>
          {/* about right */}
          <div className="overflow-visible" data-aos="fade-up">
  <TiltWrapper>
    <div className="tilt pt-10 lg:pt-0 flex justify-center items-center">
      <Image
        src={storeImage} // Update image if needed
        alt="Leather Goods"
        className=" w-48 lg:w-72"
        placeholder="blur"
      />
    </div>
  </TiltWrapper>
</div>

        </div>
      </div>
    </section>
  );
};

export default About5;
