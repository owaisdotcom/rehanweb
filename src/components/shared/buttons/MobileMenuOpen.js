"use client";

import mobileMenu from "@/libs/mobileMenu";
import { useEffect } from "react";

const MobileMenuOpen = () => {
  useEffect(() => {
    mobileMenu();
  }, []);
  return (
    <button className="open-mobile-menu text-3xl text-darkdeep1  dark:text-whiteColor ">
      <i className="icofont-navigation-menu"></i>
    </button>
  );
};

export default MobileMenuOpen;
