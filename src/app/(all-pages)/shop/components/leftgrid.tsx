import Image from "next/image";
import React from "react";
import { PiHeart, PiTote, PiShare } from "react-icons/pi";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Fresh Lime", image: "/images/balance.png", price: "$3.00", oldPrice: "$5.00" },
    { id: 2, name: "Chocolate Muffin", image: "/images/shop2.png", price: "$4.00", oldPrice: "$6.00" },
    { id: 3, name: "Burger", image: "/images/choose4.png", price: "$10.00", oldPrice: "$12.00" },
    { id: 4, name: "Country Burger", image: "/images/shop4.png", price: "$8.00", oldPrice: "$10.00" },
    { id: 5, name: "Drink", image: "/images/shop6.png", price: "$2.00", oldPrice: "$3.00" },
    { id: 6, name: "Pizza", image: "/images/shop7.png", price: "$12.00", oldPrice: "$15.00" },
    { id: 7, name: "Cheese Butter", image: "/images/shop5.png", price: "$5.00", oldPrice: "$7.00" },
    { id: 8, name: "Sandwiches", image: "/images/about3.png", price: "$6.00", oldPrice: "$8.00" },
    { id: 9, name: "Chicken Chop", image: "/images/shop2.png", price: "$9.00", oldPrice: "$12.00" },
  ];

  return (
    <section className="py-8  md:pl-16 lg:pl-32">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 flex-wrap justify-between items-center ">
        <div className="pb-4 md:flex md:space-x-4">
          <label className="font-medium">
            Sort By:
            <select className="ml-2 border border-gray-400 outline-none focus:border-gray-500 text-gray-400 rounded p-2">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </label>
          <label className="font-medium">
            Show:
            <select className="ml-2 border border-gray-400 outline-none focus:border-gray-500 text-gray-400 rounded p-2">
              <option>Default</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </label>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full flex flex-wrap flex-col lg:flex-row gap-4 items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-[300px] shadow-sm hover:shadow-lg transition-all group"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover object-center"
              width={250}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-primary-yellow font-semibold">{product.price}</span>
                <span className="text-gray-400 line-through">{product.oldPrice}</span>
              </div>
            </div>
            {/* Hover Icons */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <span className="bg-white p-3  shadow-md hover:bg-primary-yellow transition">
                <PiShare className="text-primary-yellow hover:text-white " />
              </span>
              <span className="bg-white p-3  shadow-md hover:bg-primary-yellow transition">
                <PiHeart className="text-primary-yellow hover:text-white " />
              </span>
              <span className="bg-white p-3  shadow-md hover:bg-primary-yellow transition">
                <PiTote className="text-primary-yellow hover:text-white " />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">1</button>
          <button className="px-4 py-2 bg-primary-yellow text-white rounded">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">3</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
