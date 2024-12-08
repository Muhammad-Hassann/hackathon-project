import React from "react";
import Image from "next/image";
import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa";

const BlogCard = ({ image, date, title }: any) => {
  return (
    <div className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-[450px] shadow-lg rounded-lg overflow-hidden flex flex-col bg-gray-800">
      {/* Image Section */}
      <div className="h-[70%] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Blog Details Section */}
      <div className="h-[30%] p-4 flex flex-col justify-between">
        {/* Date */}
        <p className="text-gray-400 text-sm">{date}</p>

        {/* Blog Title */}
        <h3 className="font-bold text-lg text-white">{title}</h3>

        {/* Learn More and Icons */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Learn More */}
          <a href="#" className="text-primary-yellow text-sm font-semibold">
            Learn More
          </a>

          {/* Icons */}
          <div className="flex space-x-3 text-gray-500">
            <FaHeart className="cursor-pointer hover:text-red-500" />
            <FaShareAlt className="cursor-pointer hover:text-blue-500" />
            <FaComment className="cursor-pointer hover:text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
