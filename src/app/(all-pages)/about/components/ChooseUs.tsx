import Image from "next/image"; 
import React from "react";
import { PiStudentLight, PiCoffeeLight, PiPersonLight } from 'react-icons/pi';

const WhyChooseUs = () => {
  // Features array with consistent structure
  const features = [
    {
      Icon: PiStudentLight,
      title: "Best Chef",
      description:
        "Experience top-tier culinary expertise with our renowned chefs crafting exquisite dishes.",
    },
    {
      Icon: PiCoffeeLight,
      title: "120 Item Food",
      description:
        "Savor a diverse menu with 120 carefully curated items to delight your taste buds.",
    },
    {
      Icon: PiPersonLight,
      title: "Clean Environment",
      description:
        "Dine in a clean and welcoming environment designed for your comfort and safety.",
    },
  ];

  return (
    <div className="py-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="text-gray-700 mt-4 max-w-lg mx-auto">
          Discover why we stand out in offering exceptional service, quality, and an unmatched dining experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full mb-12">
        <div className="relative w-[80%] h-64 md:h-96">
          <Image
            src="/images/balance2.png" // Update with your image path
            alt="Why Choose Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center space-y-4"
          >
            <div className="text-7xl font-extralight">
              <Icon />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
