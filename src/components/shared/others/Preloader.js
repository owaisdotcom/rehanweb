import Image from "next/image";
import spinnerImage from "@/assets/images/logo/logo.png";

const Preloader = () => {
  return (
    <div className="preloader flex h-screen w-full items-center justify-center bg-whiteColor transition-all duration-700">
      {/* spinner */}
      <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] border-[3px] md:border-[5px] border-t-blue border-r-blue border-b-blue-light border-l-blue-light rounded-full animate-spin-infinit"></div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Image
          src={spinnerImage}
          alt="Preloader"
          className="w-8 md:w-10 block rounded-xl"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
};

export default Preloader;