import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import { BsStarFill, BsStar } from "react-icons/bs";

const RightSection = () => {
  const icons = [
    { Icon: FaFacebookF, color: 'text-[#1E1E1E]' },
    { Icon: FaTwitter, color: 'text-[#1E1E1E]' },
    { Icon: FaInstagram, color: 'text-[#1E1E1E]' },
    { Icon: FaLinkedinIn, color: 'text-[#1E1E1E]' },
    { Icon: FaPinterest, color: 'text-[#1E1E1E]' },
  ];
  return (
    <aside className="w-full pr-4 md:pr-24 lg:pr-64 p-4 py-20 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-400 rounded  px-4 py-2"
        />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-yellow p-3 ">
          <FaSearch className="text-white" />
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <Image
          src="/images/user.png"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
        <p className="text-gray-500">Web Developer</p>
        <div className="flex justify-center items-center mt-3 space-x-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <BsStarFill key={i} className="text-primary-yellow" />
            ))}
          <span className="text-gray-500 text-sm ml-2">(1 review)</span>
        </div>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <FaFacebookF className="text-black cursor-pointer text-xl" />
          <FaTwitter className="text-black cursor-pointer text-xl" />
          <FaInstagram className="text-black cursor-pointer text-xl" />
          <FaLinkedinIn className="text-black cursor-pointer text-xl" />
        </div>
      </div>

      {/* Recent Post Card */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-[90px] h-[70px]">
              <Image
                src={`/images/blog${i + 1}.png`}
                alt={`Post ${i + 1}`}
                width={90}
                height={90}
                className="rounded-md w-full h-full object-cover object-center"
              />
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Feb 14, 2022</p>
                <p className="text-gray-700 text-sm font-medium">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter by Menu */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Filter by Menu</h3>
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <Image
                src={`/images/menu${i + 1}.png`}
                alt={`Menu ${i + 1}`}
                width={60}
                height={60}
                className="rounded-md"
              />
              <div className="ml-4 flex justify-between w-full">
                <p className="text-gray-700 font-medium">Menu {i + 1}</p>
                <p className="text-gray-500 text-sm">(12)</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Sandwich",
            "Tikka",
            "Bbq",
            "Restaurant",
            "Chicken Sharam",
            "Health",
            "Fast Food",
            "Burger",
            "Pizza",
            "Chicken",
            "Food",
          ].map((tag, i) => (
            <span
              key={i}
              className="border border-gray-300 text-gray-600 px-4 py-2 text-sm mx-1 cursor-pointer hover:bg-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Photo Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <Image
              key={i}
              src={`/images/choose${i + 1}.png`}
              alt={`Gallery ${i + 1}`}
              width={80}
              height={80}
              className="rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex  space-x-4">
            {icons.map(({ Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
      </div>
    </aside>
  );
};

export default RightSection;
