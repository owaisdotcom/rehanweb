import Image from "next/image";
import vissionImage from "@/assets/images/about/vision.jpg";

const OurVissionContent = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-xl font-semibold mb-10px ">Our Vision</h1>
      <p className="text-black dark:text-contentColor-dark mb-25px">
      Our vision is to lead the global market in protective leather gear, always thinking of your safety and performance. We are committed to delivering innovative, high-quality, and durable products that not only protect but also boost your confidence in any industry. With a focus on excellence, we create reliable and stylish solutions that help you perform at your best, every day. Your safety is our priority, and we’re here to support you every step of the way.
      </p>
   
      {/* <Image src={vissionImage} alt="" className="w-full" placeholder="blur" /> */}
    </div>
  );
};

export default OurVissionContent;
