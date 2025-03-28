
'use client'
import React from "react"; 

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import Image from "next/image";
import storeImage from "@/assets/images/logo/logo.png";
import Link from "next/link";
export default function Custom() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      
        <main>
          <div  data-aos="fade-up" class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div class="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/4452527/pexels-photo-4452527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Background Image"
                class="object-cover object-center w-full h-full"
              />
              <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <h1 class="text-5xl font-bold leading-tight mb-4">
                ARTISTRY IN EVERY STITCH
              </h1>
              <p class="text-lg text-gray-300 mb-8">
                Where imagination meets craftsmanship. Transform your boldest
                ideas into heirloom-quality leather masterpieces that tell your
                unique story.
              </p>
              <a
                href="#"
                class="bg-yellow1 text-gray-900 hover:bg-yellow py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                UNLEASH YOUR CREATIVITY
              </a>
            </div>
          </div>
          <div className="container py-10">
            <h1 className="text-center text-xl sm:text-4xl font-bold ">
              THE ART OF LEATHER REIMAGINED
            </h1>
            <p className="text-center px-20 leading-8 py-5  tracking-wide text-base">
              For generations, we have transformed natural materials into
              objects of desire through our artisan-led approach. <br /> Our
              passion for leather crafting delivers unparalleled quality, style,
              and function.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 container py-10">
  <div  data-aos="fade-up" class="p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
    <img
      src="https://cdn11.bigcommerce.com/s-6e1n67clqw/images/stencil/1200x1200/products/76626/329460/smakymfizpwjrjbjjtjb__45747.1738261049.jpg?c=1"
      class="w-full h-64 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
      alt="Gloves"
    />
    <h3 class="text-xl mt-4 font-medium transition-colors duration-300 hover:text-gray-700">
      Signature Gloves
    </h3>
    <p class="text-gray-600 text-sm mt-2">
      Crafted for comfort and durability.
    </p>
  </div>

  <div  data-aos="fade-up" class="p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
    <img
      src="https://m.media-amazon.com/images/I/B1On3Y+j0-L._CLa%7C2140%2C2000%7C51Hyy3xf3eL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png"
      class="w-full h-64 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
      alt="Jacket"
    />
    <h3 class="text-xl mt-4 font-medium transition-colors duration-300 hover:text-gray-700">
      Legacy Jackets
    </h3>
    <p class="text-gray-600 text-sm mt-2">
      Timeless style with premium leather.
    </p>
  </div>

  <div  data-aos="fade-up" class="p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
    <img
      src="https://corporate.theelegance.pk/wp-content/uploads/2022/06/Promotional-Men-Wallet-Corporate-Gifts-in-Bulk.jpg"
      class="w-full h-64 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
      alt="Wallet"
    />
    <h3 class="text-xl mt-4 font-medium transition-colors duration-300 hover:text-gray-700">
      Heirloom Wallets
    </h3>
    <p class="text-gray-600 text-sm mt-2">
      Handcrafted wallets built to last.
    </p>
  </div>

  <div  data-aos="fade-up" class="p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
    <img
      src="https://cdn11.bigcommerce.com/s-5jktp/images/stencil/608x608/products/694/2138/Web_Belt__86721.1716655548.JPG?c=2"
      class="w-full h-64 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
      alt="Belt"
    />
    <h3 class="text-xl mt-4 font-medium transition-colors duration-300 hover:text-gray-700">
      Defining Belts
    </h3>
    <p class="text-gray-600 text-sm mt-2">
      Elegant belts for every occasion.
    </p>
  </div>
</div>

          <section  data-aos="fade-up">
            <div className="container mt-20">
              {/* about section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px pb-30px">
                {/* about left */}
                <div data-aos="fade-up">
                  <h1 className="font-semibold  leading-3 tracking-wide text-3xl pb-4">
                    WHERE VISIONS BECOME TANGIBLE
                  </h1>
                  <h1 className="font-semibold leading-3 tracking-tight text-[#EE9B33] text-4xl pb-4">
                    Premium Leather Craftsmanship
                  </h1>

                  <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
                    Your ideas, our craftsmanship—made real and made timeless.
                    Each product is a testament to quality, precision, and
                    artistry.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        Personalized customization with unique detailing
                      </p>
                    </li>
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        Ethically sourced premium leather materials
                      </p>
                    </li>
                    <li className="flex items-center group">
                      <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark"></i>
                      <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                        Expertly handcrafted by certified artisans
                      </p>
                    </li>
                  </ul>
                </div>
                {/* about right */}
                <div  data-aos="fade-up" className="overflow-visible" >
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
          <section data-aos="fade-up" className="p-6 dark:bg-gray-100 dark:text-gray-800 py-10">
  <div className="container mx-auto">
    <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-violet-600">
      How it Works
    </span>
    <h2 className="text-3xl font-bold text-center dark:text-gray-900">
      THE JOURNEY FROM CONCEPT TO CREATION
    </h2>
    <div className="grid gap-6 my-16 lg:grid-cols-4">
      {/* Steps */}
      {[
        { step: 1, title: "Inspiration Dialogue", desc: "Your vision, ideas, and inspirations come to life through consultation." },
        { step: 2, title: "Conceptual Refinement", desc: "We refine and perfect the design before moving forward." },
        { step: 3, title: "Master Crafting", desc: "Our artisans bring your vision to reality with meticulous precision." },
        { step: 4, title: "Ceremonial Arrival", desc: "Your masterpiece is delivered, ready to be cherished for a lifetime." }
      ].map(({ step, title, desc }) => (
        <div
          key={step}
          className="flex flex-col items-center p-8 space-y-4 rounded-md shadow-md dark:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-2xl font-bold rounded-full bg-yellow text-white transition-all duration-300 hover:scale-110 hover:bg-yellow1">
            {step}
          </div>
          <h3 className="text-xl font-semibold text-center">{title}</h3>
          <p className="text-center text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


          <section  data-aos="fade-up" class="bg-gray-100 py-12 text-center">
            <h2 class="text-2xl font-semibold">BEGIN YOUR LEATHER LEGACY</h2>
            <p class="mt-4 text-gray-600">
              From personal heirlooms to corporate collections, our team brings
              your vision to life.
            </p>
            <div class="mt-6 space-x-4">
              <Link href={"/category/67804b883c8cc403e459c4b5"}>
              <button class="bg-yellow text-white px-6 py-3 rounded-lg hover:bg-yellow1">
                INITIATE YOUR MASTERPIECE
              </button>
              </Link>
              <Link href={"/contact"}>
                <button class="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange hover:text-white">
                  SPEAK WITH A CRAFTSMAN
                </button>
              </Link>
            </div>
          </section>
        </main>
     
    </>
  );
}
