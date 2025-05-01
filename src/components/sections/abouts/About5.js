'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import storeImage from "@/assets/images/25.png";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";

const About5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-10 md:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* About section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* About left */}
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <h1 className="font-semibold leading-tight tracking-wide text-3xl sm:text-4xl lg:text-5xl pb-3 sm:pb-4">
              Welcome to Mas <br className="hidden sm:block" /> Leather Gloves
            </h1>
            <h1 className="font-semibold leading-tight tracking-tight text-[#EE9B33] text-2xl sm:text-3xl lg:text-4xl pb-3 sm:pb-4">
              Premium Leather Craftsmanship
            </h1>
            <h2 className="font-semibold text-xl sm:text-2xl text-blue pb-3 sm:pb-4">
              Safety, Style, Satisfaction
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
              Experience the finest quality leather products including{" "}
              <span className="text-[#EE9B33] font-medium">gloves</span>, jackets, wallets,
              and more. Designed for comfort, durability, and timeless style.
            </p>
            
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-3 sm:mr-4 dark:bg-whitegrey1-dark flex-shrink-0 mt-1"></i>
                <p className="text-base sm:text-lg font-medium text-blackColor dark:text-blackColor-dark">
                  High-quality leather gloves for Safety and Elegance.
                </p>
              </li>
              <li className="flex items-start group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-3 sm:mr-4 dark:bg-whitegrey1-dark flex-shrink-0 mt-1"></i>
                <p className="text-base sm:text-lg font-medium text-blackColor dark:text-blackColor-dark">
                  Premium leather jackets that define Luxury and Protection.
                </p>
              </li>
              <li className="flex items-start group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-3 sm:mr-4 dark:bg-whitegrey1-dark flex-shrink-0 mt-1"></i>
                <p className="text-base sm:text-lg font-medium text-blackColor dark:text-blackColor-dark">
                  Durable wallets, keychains, and belts crafted with care.
                </p>
              </li>
            </ul>
            
            <div className="mt-6 sm:mt-8">
              <a
                href="about"
                className="text-white bg-primaryColor text-base sm:text-lg border border-primaryColor px-5 py-2.5 sm:px-6 sm:py-3 hover:text-primaryColor hover:bg-white rounded-full inline-block transition-colors duration-300 dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
              >
                Read More
              </a>
            </div>
          </div>
          
          {/* About right */}
          <div className="order-1 lg:order-2 flex justify-center items-center" >
            <TiltWrapper>
              <div className="tilt">
                <Image
                  src={storeImage}
                  alt="Leather Goods"
                  className="w-36 sm:w-48 md:w-64 lg:w-72 xl:w-80 mx-auto"
                  placeholder="blur"
                  priority
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