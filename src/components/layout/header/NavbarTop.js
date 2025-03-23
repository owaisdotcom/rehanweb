import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import logo1 from "@/assets/images/logo1.png";
import { FaMailBulk } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <div className="hidden lg:grid grid-cols-12 items-center gap-6 border-b border-borderColor dark:border-borderColor-dark px-4 py-3">
      {/* Logo Section */}
      <div className="col-span-3 flex items-center">
        <Link href="/" className="block">
          <Image priority={false} src={logo1} alt="logo" className="w-20 sm:w-36" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="col-span-4">
        <form className="relative">
          <div className="text-blackColor dark:text-blackColor-dark py-1.5 px-4 border  dark:border-borderColor-dark rounded transition-all duration-300 focus-within:border-yellow  dark:focus-within:bg-yellow-900">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent focus:outline-none placeholder:text-darkdeep4 text-sm"
            />
          </div>
          <button
            type="submit"
            className="absolute top-1/2 right-4 -translate-y-1/2 text-blackColor dark:text-blackColor-dark transition-all duration-300 hover:text-yellow"
          >
            <i className="icofont-search-1"></i>
          </button>
        </form>
      </div>

      {/* Contact & Location */}
      <div className="col-span-5 flex justify-end items-center gap-6">
        {/* Contact Info */}
        <div className="flex items-center gap-2 text-sm text-blackColor dark:text-white">
          <FiMail className="text-yellow text-2xl" />
          <span>masleathergloves@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blackColor dark:text-white">
          <FiPhone className="text-yellow text-2xl" />
          <span>+92 300 1234567</span>
        </div>

        {/* Location Info */}
        <div className="flex items-center gap-2 text-sm text-blackColor dark:text-white">
          <FiMapPin className="text-yellow text-2xl" />
          <span>Lahore, Pakistan</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
