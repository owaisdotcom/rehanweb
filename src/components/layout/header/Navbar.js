"use client";
import { useState, useEffect, useRef } from "react";
import { FaHammer } from "react-icons/fa";
import Link from "next/link";
import NavItems from "./NavItems";
import NavbarLogo from "./NavbarLogo";
import NavbarRight from "./NavbarRight";
import NavItems2 from "./NavItems2";
import useIsTrue from "@/hooks/useIsTrue";
import NavbarTop from "./NavbarTop";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const lastScrollY = useRef(0); // Use ref instead of state
  const isHome1 = useIsTrue("/");
  const isHome2Dark = useIsTrue("/home-2-dark");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("ScrollY:", scrollY);

      if (scrollY > lastScrollY.current && scrollY > 100) {
        setIsSticky(true);
      } else if (scrollY < lastScrollY.current && scrollY < 130) {
        setIsSticky(false);
      }

      lastScrollY.current = scrollY; // Update the ref without re-rendering
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Header (Non-Sticky) */}
      {isHome1 && <NavbarTop />}

      {/* Sticky Spacer to Prevent Layout Shift */}
      <div className={`h-[53px] ${isSticky ? "block" : "hidden"}`}></div>

      {/* Navbar Section */}
      <div
        id="navbar"
        className={`transition-all duration-500 ease-in-out bg-[#EC9931] ${
          isSticky
            ? "fixed top-0 left-0 w-full z-50 shadow-md transform translate-y-0"
            : "relative transform translate-y-0"
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-12 h-[53px] gap-15px transition-all duration-500 ease-in-out">
          {/* Navbar Left */}
          <NavbarLogo />

          {/* Main Menu */}
          {isHome2Dark ? <NavItems2 /> : <NavItems />}

          {/* Custom Button */}
          <Link href="/custom">
            <button
              className="flex items-center py-2 mt-[3.5px] px-4 gap-2 text-black bg-white border rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              style={{ borderColor: "#FFD700" }}
            >
              <FaHammer />
              Custom
            </button>
          </Link>

          {/* Navbar Right */}
          <NavbarRight isHome2Dark={isHome2Dark} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
