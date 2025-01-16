import useIsSecondary from "@/hooks/useIsSecondary";

const FooterAbout = () => {
  const { isSecondary } = useIsSecondary();
  return (
    <div
      className="sm:col-start-1 sm:col-span-12 md:col-span-6  lg:col-span-4 mr-30px"
      data-aos="fade-up"
    >
      <h4 className="text-size-22 font-bold text-whiteColor mb-3">About us</h4>
      <p className="text-base lg:text-sm 2xl:text-base text-darkgray mb-30px leading-1.8 2xl:leading-1.8">
      M. Azam & Sons offers a wide range of high-quality leather products, specializing in gloves, jackets, wallets, keychains, and belts. We are committed to providing durable and stylish leather materials for everyday use.
      </p>

      
    
    </div>
  );
};

export default FooterAbout;
