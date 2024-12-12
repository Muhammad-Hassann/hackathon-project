import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const BalancedDiet = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 p-8 max-w-6xl mx-auto">
      {/* Left: Large Image */}
      <div className="w-full md:w-2/3">
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/images/choose1.png"
            alt="Tacos"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>

      {/* Right: Two Smaller Images */}
      <div className="w-full md:w-1/3 grid grid-rows-2 gap-4">
        <div className="relative w-full h-40 md:h-[190px]">
          <Image
            src="/images/choose3.png" // Replace with your image path
            alt="Food Preparation"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="relative w-full h-40 md:h-[190px]">
          <Image
            src="/images/balance.png" // Replace with your image path
            alt="Salad"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex flex-col items-start gap-6 max-w-md md:ml-12">
        <span className="text-primary-yellow font-great text-sm uppercase font-semibold">
          About us
        </span>
        <h2 className="text-3xl font-bold leading-snug">
          Food is an important <br /> part Of a balanced Diet
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Ut eu, sed
          egestas enim.
        </p>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-primary-yellow text-white font-semibold rounded-md shadow-md hover:bg-orange-600">
            Show more
          </button>
          <button className="flex items-center gap-2 font-semibold ">

            <span className="p-4 rounded-full bg-primary-yellow text-center text-white">
            <FaPlay />

            </span>
            Watch video
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalancedDiet;
