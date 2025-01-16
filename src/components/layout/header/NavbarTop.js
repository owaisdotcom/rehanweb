import Image from "next/image";
import flagImage1 from "@/assets/images/icon/flag1.webp";
import flagImage2 from "@/assets/images/icon/flag2.webp";
import flagImage3 from "@/assets/images/icon/flag3.webp";
import DropdownCart from "./DropdownCart";
import LoginButton from "./LoginButton";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";
import logo1 from "@/assets/images/logo/logowithtext.png";
import Link from "next/link";

const NavbarTop = () => {
  return (
    <div className="hidden lg:grid grid-cols-12 items-center gap-4 border-b border-borderColor dark:border-borderColor-dark px-4 py-3">
      {/* Logo Section */}
      <div className="col-span-3 flex items-center">
        <Link href="/" className="block">
          <Image
            priority={false}
            src={logo1}
            alt="logo"
            className="w-16 sm:w-32"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="col-span-6">
        <form className="relative">
          <div className="text-blackColor dark:text-blackColor-dark py-2 px-4 border border-borderColor dark:border-borderColor-dark rounded-full">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full bg-transparent focus:outline-none placeholder:text-darkdeep4"
            />
          </div>
          <button
            type="submit"
            className="absolute top-1/2 right-5 -translate-y-1/2 text-blackColor dark:text-blackColor-dark"
          >
            <i className="icofont-search-1"></i>
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default NavbarTop;
