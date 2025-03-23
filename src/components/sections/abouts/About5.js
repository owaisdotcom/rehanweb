
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
          <h1 className="font-semibold  leading-3 tracking-wide text-4xl pb-4">
  Welcome to Mas <br/> Leather Gloves

</h1>
<h1 className="font-semibold leading-3 tracking-tight text-[#EE9B33] text-4xl pb-4">
  Premium Leather Craftsmanship 

</h1>
<h2 className="font-semibold text-2xl text-blue pb-4">
  Safety, Style, Satisfaction

</h2>


            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
              Expirience the finest quality leather products including <span className="text-[#EE9B33] ">gloves</span>, jackets, wallets and more. Designed for comfort, duaribiltiy and timeless style.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  High Quality leather gloves for Safety and Elegance.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  Premium leather jackets that define Luxury and Protection.
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  Duarable wallets, keychains, and belts crafted with care.
                </p>
              </li>
            </ul>
            <div>
              <a
                 href="about"
                className="text-whiteColor bg-primaryColor text-md lg:text-md border border-primaryColor mt-5 px-4 py-3 lg:px-5 lg:py-12px  hover:text-primaryColor hover:bg-whiteColor rounded-full inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
              >
                Read More
              </a>
            </div>
          </div>
          {/* about right */}
          <div className="overflow-visible" data-aos="fade-up">
  <TiltWrapper>
    <div className="tilt pt-10 lg:pt-0 flex justify-center items-center">
      <Image
        src={storeImage} // Update image if needed
        alt="Leather Goods"
        className=" w-32 lg:w-52"
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
