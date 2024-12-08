import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string; 
  imageAlt?: string;
  centerText: string; 
  leftText: string; 
  className?: string; 
}

const CategoryCard: React.FC<CardProps> = ({ 
  imageSrc, 
  imageAlt = 'Card Image', 
  centerText, 
  leftText, 
  className 
}) => {
  return (
    <div className={`group relative w-96 h-64 overflow-hidden rounded-lg shadow-lg ${className}`}>
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-105"
      />
      {/* Hover Effects */}
      <div className="absolute inset-0 flex flex-col justify-center items-center  transition duration-500">
        {/* White Text (Center Center) */}
        <div className="bg-white text-black px-4 py-2 rounded-lg text-md font-bold opacity-0 group-hover:opacity-100 transition duration-500">
          {centerText}
        </div>
        {/* Yellow Text (Left Center) */}
        <div className="absolute left-0 bottom-14 text-white bg-primary-yellow px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
          {leftText}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
