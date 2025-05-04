import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/f2.png";
import Link from "next/link";
const NavbarLogo = () => {
  return (
    <>
  <div className="block lg:hidden lg:col-start-1 lg:col-span-2">
  <Link href="/" className="w-logo-sm lg:w-logo-sm">
    <Image priority={false} src={logo1} alt="logo" className="w-[106px]  sm:ml-16 bg-white p-1" />
  </Link>
</div>

    
            </>
  );
};

export default NavbarLogo;
