'use client';
import { useState } from "react";
import Image from "next/image";

const categories = ["Breakfast", "Lunch", "Dinner", "Desserts", "Drink", "Snacks", "Soups"];

const menuData = [
  {
    category: "Breakfast",
    image: "/images/fast-food.jpg",
    items: [
      { name: "Cheeseburger", description: "Delicious cheesy burger", price: "$8", img: "/images/menu1.png" },
      { name: "Chicken Sandwich", description: "Crispy chicken sandwich", price: "$7", img: "/images/about3.png" },
      { name: "French Fries", description: "Crispy golden fries", price: "$3", img: "/images/menu3.png" },
      { name: "Hot Dog", description: "Juicy beef hot dog", price: "$4", img: "/images/menu4.png" },
    ],
  },
  // Other categories...
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeMenu = menuData.find((menu) => menu.category === activeCategory);

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-10 md:py-20">
      <div className="py-4 text-center">
        <h2 className="text-primary-yellow font-great text-xl sm:text-2xl">Choose &amp; Pick</h2>
        <h1 className="text-white text-3xl sm:text-4xl font-bold">
          <span className="text-primary-yellow">Fr</span>om Our Menu
        </h1>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto gap-6 mb-8 sm:flex-wrap sm:justify-center sm:space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-semibold px-4 py-2 rounded-full transition-colors duration-300 ${
              activeCategory === category
                ? "text-primary-yellow border-b-2 border-primary-yellow"
                : "text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Image Column */}
        <div className="flex justify-center items-center">
          {activeMenu && (
            <Image
              src={'/images/menu-main.png'}
              alt={activeMenu.category}
              width={600}
              height={600}
              className="object-cover rounded-lg max-w-full h-auto"
            />
          )}
        </div>

        {/* Menu Items */}
        <div className="space-y-6 sm:col-span-2 lg:col-span-1">
          {activeMenu &&
            activeMenu.items.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-md"
                />
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-white">{item.name}</h2>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <p className="text-primary-yellow font-bold">{item.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
