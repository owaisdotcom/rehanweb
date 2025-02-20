const HeadingPrimary = ({ children, text }) => {
  return (
    <h3
      className={`text-2xl md:text-[30px] lg:text-size-34 font-bold text-blackColor dark:text-blackColor-dark  ${
        text === "center" ? "text-center" : ""
      }`}
      data-aos="fade-up"
    >
      <span className="inline-block text-2xl md:text-[30px] lg:text-size-34 leading-10  md:leading-40px 2xl:leading-12 ">
        {children}
      </span>
    </h3> 
  );
};

export default HeadingPrimary;
