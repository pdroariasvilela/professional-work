/* eslint-disable react/prop-types */
import ButtonPrimayHig from "./ButtonPrimayHight";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = ({ MaskBG }) => {
  useEffect(() => {
    AOS.init({
      duration: 4400,
      once: true,
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-neutral-900 to-black z-0 overflow-hidden py-[100px]">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-white text-custom-48 font-bold md:text-md lg:text-custom-88 font-inter text-center leading-tight my-7"
      >
        let's work together
      </h1>
      <ButtonPrimayHig>Contact Me 👋</ButtonPrimayHig>
      <img
        src={MaskBG}
        className="absolute inset-0 z-[-1] w-full object-cover md:w-[400px] m-auto"
        alt=""
      />
    </div>
  );
};

export default ContactMe;
