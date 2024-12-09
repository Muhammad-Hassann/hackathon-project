import Image from "next/image";
import Button from "../Button";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-between px-6 pt-28 lg:pt-0 lg:px-64">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-bottom opacity-5"
      ></div>

      {/* Decorative line with icons */}
      <div className="hidden lg:flex absolute left-10 xl:left-44 top-1/2 h-[500px] -translate-y-1/2 flex-col items-center gap-6">
        <div className="w-[1px] bg-white h-1/3"></div>
        <span className="text-white z-10">
          <FaFacebookF className="text-white hover:text-primary-yellow" />
        </span>
        <span className="p-2 rounded-full z-10">
          <FaTwitter className="text-white hover:text-primary-yellow" />
        </span>
        <span className="text-white z-10">
          <FaPinterest className="text-white hover:text-primary-yellow" />
        </span>
        <div className="w-[2px] bg-white h-1/3"></div>
      </div>

      {/* Left section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:justify-start">
        <h2 className="text-primary-yellow font-great text-lg lg:text-2xl">
          It&apos;s Quick &amp; Amusing
        </h2>
        <h1 className="text-white text-3xl lg:text-5xl font-bold max-w-full lg:max-w-[400px] mx-auto lg:mx-0">
          <span className="text-primary-yellow">Th</span>e Art of Speed Food Quality
        </h1>
        <p className="mt-4 text-sm lg:text-base max-w-full lg:max-w-[400px] mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <Button className="mt-4">See More</Button>
      </div>

      {/* Right section */}
      <div className="w-full hidden md:flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={500}
          height={500}
          className="w-[70%] md:w-[50%] lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
