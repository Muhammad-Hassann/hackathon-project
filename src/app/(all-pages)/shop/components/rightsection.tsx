import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 bg-white border-r px-4 py-6 space-y-8">
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

      {/* Category Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Category</h2>
        <div className="space-y-3">
          {[
            "Sandwiches",
            "Burger",
            "Chicken Chop",
            "Drink",
            "Pizza",
            "Veg",
            "Non Veg",
            "Uncategorized",
          ].map((category) => (
            <label key={category} className="block">
              <input type="checkbox" className="mr-2" />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="mb-4 relative">
        <Image
          src="/images/shop-side.png" // Replace with your banner image path
          alt="Product Banner"
          className=" w-full"
          width={300}
          height={250}
        />
        {/* Price on top left */}

        {/* Content in the center */}
        <div className="absolute top-8 left-4  text-white ">
          <p className="text-md text-white font-semibold">Perfect Taste</p>
          <h2 className="text-xl font-bold mt-1">Classic Restaurant</h2>
          <p className="  text-primary-yellow text-sm font-bold rounded">
            $4.95
          </p>
        </div>

        {/* "Shop Now" on the bottom left */}
        <div className="absolute bottom-8 left-4 cursor-pointer flex items-center space-x-1 text-white font-semibold ">
          <span>Shop Now</span>
          <IoArrowForwardCircleOutline className="text-2xl text-white " />
        </div>
      </div>

      {/* Filter by Price Section */}
      <div className="space-y-4">
  <h2 className="font-bold text-lg mb-2">Filter By Price</h2>
  <input
    type="range"
    className="w-full appearance-none h-1 bg-yellow-500 rounded outline-none focus:ring-2 focus:ring-yellow-300
      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
      [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2
      [&::-webkit-slider-thumb]:border-yellow-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:hover:scale-110
      [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
      [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2
      [&::-moz-range-thumb]:border-yellow-500 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:hover:scale-110"
  />
  <div className="flex justify-between w-full">
    <p className="text-gray-500">From $0 to $8000</p>
    <p className="text-gray-500">Filter</p>
  </div>
</div>



      {/* Latest Products Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Latest Products</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-4 border-b pb-2"
            >
              <Image
                src={`/images/Vector.png`}
                alt={`Product ${item}`}
                className="w-16 h-16 rounded"
                width={60}
                height={60}
              />
              <div>
                <p className="font-semibold text-gray-800">Product Name</p>
                <p className="text-gray-500">$5.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tags Section */}
      <div>
        <h2 className="font-bold text-lg mb-2">Product Tags</h2>
        <div className="flex flex-wrap gap-4">
          {["Sandwiches", "Our Menu", "Pizza", "Chicken", "Exclusive"].map(
            (tag) => (
              <span
                key={tag}
                className="text-sm px-2 py-1 border-b border-slate-300  cursor-pointer"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
