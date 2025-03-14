import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import Image from "next/image";
import storeImage from "@/assets/images/logo/logo.png"; // Make sure to update the image if needed
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <PageWrapper>
        <main>
          <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
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
            <div class="p-4 shadow-md rounded-lg">
              <img
                src="https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N95263s2.jpg?im=Resize,width=750"
                class="w-full h-64 object-cover rounded-md"
                alt="Gloves"
              />
              <h3 class="text-xl mt-4 font-medium">Signature Gloves</h3>
              <p class="text-gray-600 text-sm mt-2">
                Crafted for comfort and durability.
              </p>
            </div>
            <div class="p-4 shadow-md rounded-lg">
              <img
                src="https://i.redd.it/rz0lzegijk5c1.jpeg"
                class="w-full h-64 object-cover rounded-md"
                alt="Jacket"
              />
              <h3 class="text-xl mt-4 font-medium">Legacy Jackets</h3>
              <p class="text-gray-600 text-sm mt-2">
                Timeless style with premium leather.
              </p>
            </div>
            <div class="p-4 shadow-md rounded-lg">
              <img
                src="https://harshaystore.pk/cdn/shop/products/1_1_900x.jpg?v=1673269490"
                class="w-full h-64 object-cover rounded-md"
                alt="Wallet"
              />
              <h3 class="text-xl mt-4 font-medium">Heirloom Wallets</h3>
              <p class="text-gray-600 text-sm mt-2">
                Handcrafted wallets built to last.
              </p>
            </div>
            <div class="p-4 shadow-md rounded-lg">
              <img
                src="https://mender.pk/wp-content/uploads/2024/09/Camel-Brown-Plain-Leather-Belt-1.5-Inches-Wide.jpg"
                class="w-full h-64 object-cover rounded-md"
                alt="Belt"
              />
              <h3 class="text-xl mt-4 font-medium">Defining Belts</h3>
              <p class="text-gray-600 text-sm mt-2">
                Elegant belts for every occasion.
              </p>
            </div>
          </div>
          <section>
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
          <section className="p-6 dark:bg-gray-100 dark:text-gray-800 py-10">
  <div className="container mx-auto">
    <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-violet-600">
    How it Works
    </span>
    <h2 className="text-3xl font-bold text-center dark:text-gray-900">
      THE JOURNEY FROM CONCEPT TO CREATION
    </h2>
    <div className="grid gap-6 my-16 lg:grid-cols-4">
      {/* Step 1 */}
      <div className="flex flex-col items-center p-8 space-y-4 rounded-md shadow-md dark:bg-gray-50">
        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-2xl font-bold rounded-full bg-yellow text-white">
          1
        </div>
        <h3 className="text-xl font-semibold text-center">Inspiration Dialogue</h3>
        <p className="text-center text-gray-600">
          Your vision, ideas, and inspirations come to life through consultation.
        </p>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center p-8 space-y-4 rounded-md shadow-md dark:bg-gray-50">
        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-2xl font-bold rounded-full bg-yellow text-white">
          2
        </div>
        <h3 className="text-xl font-semibold text-center">Conceptual Refinement</h3>
        <p className="text-center text-gray-600">
          We refine and perfect the design before moving forward.
        </p>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center p-8 space-y-4 rounded-md shadow-md dark:bg-gray-50">
        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-2xl font-bold rounded-full bg-yellow text-white">
          3
        </div>
        <h3 className="text-xl font-semibold text-center">Master Crafting</h3>
        <p className="text-center text-gray-600">
          Our artisans bring your vision to reality with meticulous precision.
        </p>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col items-center p-8 space-y-4 rounded-md shadow-md dark:bg-gray-50">
        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-2xl font-bold rounded-full bg-yellow text-white">
          4
        </div>
        <h3 className="text-xl font-semibold text-center">Ceremonial Arrival</h3>
        <p className="text-center text-gray-600">
          Your masterpiece is delivered, ready to be cherished for a lifetime.
        </p>
      </div>
    </div>
  </div>
</section>

          <section class="bg-gray-100 py-12 text-center">
            <h2 class="text-2xl font-semibold">BEGIN YOUR LEATHER LEGACY</h2>
            <p class="mt-4 text-gray-600">
              From personal heirlooms to corporate collections, our team brings
              your vision to life.
            </p>
            <div class="mt-6 space-x-4">
              <button class="bg-yellow text-white px-6 py-3 rounded-lg hover:bg-yellow1">
                INITIATE YOUR MASTERPIECE
              </button>
              <Link href={"/contact"}>
                <button class="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange hover:text-white">
                  SPEAK WITH A CRAFTSMAN
                </button>
              </Link>
            </div>
          </section>
        </main>
      </PageWrapper>
    </>
  );
}
