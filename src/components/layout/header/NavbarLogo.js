import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/logo/logowithtext.png";
import Link from "next/link";
const NavbarLogo = () => {
  return (
    <>
  <div className="block lg:hidden lg:col-start-1 lg:col-span-2">
  <Link href="/" className="w-logo-sm lg:w-logo-sm">
    <Image priority={false} src={logo1} alt="logo" className="w-72 pt-2 sm:ml-16" />
  </Link>
</div>

    
            </>
  );
};

export default NavbarLogo;
