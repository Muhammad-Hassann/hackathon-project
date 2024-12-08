import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  centerText: string;
  leftText: string;
  className?: string;
}

const CategoryCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = "Card Image",
  centerText,
  leftText,
  className,
}) => {
  return (
    <div
      className={`group relative w-full sm:w-72 md:w-80 lg:w-96 h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-105"
      />
      {/* Hover Effects */}
      <div className="absolute inset-0 flex flex-col justify-center items-center transition duration-500">
        {/* White Text (Center Center) */}
        <div className="bg-white text-black px-4 py-2 rounded-lg text-sm md:text-md lg:text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-500 text-center">
          {centerText}
        </div>
        {/* Yellow Text (Left Center) */}
        <div className="absolute left-2 sm:left-4 bottom-8 text-white bg-primary-yellow px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-md lg:text-lg opacity-0 group-hover:opacity-100 transition duration-500">
          {leftText}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
