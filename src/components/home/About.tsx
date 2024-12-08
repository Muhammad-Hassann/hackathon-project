import Image from 'next/image';
import Button from '../Button';
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full px-6 lg:px-64 py-10 lg:py-20 gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
        <h2 className="text-primary-yellow font-great text-lg lg:text-2xl">
          About us
        </h2>
        <h1 className="text-white text-2xl lg:text-4xl font-bold max-w-full lg:max-w-[350px] mx-auto lg:mx-0">
          <span className="text-primary-yellow">We</span> Create the Best Foody Product
        </h1>
        <p className="mt-4 max-w-full lg:max-w-[450px] mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex gap-4 mt-2 items-center justify-center lg:justify-start">
              <FiCheck className="text-white font-bold" />
              <p className="max-w-full lg:max-w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        <Button className="mt-4 mx-auto lg:mx-0">Read More</Button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Main Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            className="rounded-none"
            src="/images/about1.png"
            alt="about"
            width={500}
            height={500}
          />
        </div>
        {/* Secondary Images */}
        <div className="flex gap-4 justify-center lg:justify-end">
          <Image src="/images/about2.png" alt="about" width={200} height={200} className="w-[40%] lg:w-[250px]" />
          <Image src="/images/about3.png" alt="about" width={200} height={200} className="w-[40%] lg:w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
