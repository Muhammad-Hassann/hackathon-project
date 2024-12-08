import React from "react";

const RestaurantCard = () => {
  return (
    <div
      className="relative px-4 sm:px-8 md:px-16 lg:px-64 py-20 h-[500px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('/images/dish.png')`,
      }}
    >
      {/* Right Content */}
      <div className="ml-auto w-full sm:w-3/4 md:w-1/2 flex flex-col items-end text-right text-white space-y-4">
        {/* Section Heading */}
        <h2 className="text-primary-yellow font-great text-2xl sm:text-3xl lg:text-4xl">
          Restaurant Active Process
        </h2>

        {/* Title */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold max-w-[600px] leading-snug">
          <span className="text-primary-yellow">We</span> Document Every Food
          Bean Process until it is saved
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base lg:text-lg max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap space-x-4 justify-end">
          <button className="px-6 py-2 bg-primary-yellow text-black font-bold rounded-full hover:bg-yellow-500 transition">
            Order Now
          </button>
          <button className="px-6 py-2 border border-primary-yellow text-white font-bold rounded-full hover:bg-primary-yellow hover:text-black transition">
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
