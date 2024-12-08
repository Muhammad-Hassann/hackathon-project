'use client'
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
  {
    category: "Lunch",
    image: "/images/snacks.jpg",
    items: [
      { name: "Nachos", description: "Loaded nachos with cheese", price: "$6", img: "/images/menu5.png" },
      { name: "Onion Rings", description: "Golden crispy onion rings", price: "$5", img: "/images/menu6.png" },
      { name: "Spring Rolls", description: "Crispy vegetarian rolls", price: "$6", img: "/images/choose2.png" },
      { name: "Garlic Bread", description: "Buttery garlic bread slices", price: "$4", img: "/images/choose4.png" },
    ],
  },
  {
    category: "Dinner",
    image: "/images/beverages.jpg",
    items: [
      { name: "Lemonade", description: "Refreshing lemon drink", price: "$3", img: "/images/menu1.png" },
      { name: "Coffee", description: "Freshly brewed coffee", price: "$4", img: "/images/about3.png" },
      { name: "Iced Tea", description: "Cool and sweet iced tea", price: "$3", img: "/images/menu3.png" },
      { name: "Smoothie", description: "Healthy fruit smoothie", price: "$5", img: "/images/menu4.png" },
    ],
  },
  {
    category: "Desserts",
    image: "/images/desserts.jpg",
    items: [
      { name: "Chocolate Cake", description: "Rich chocolate dessert", price: "$7", img: "/images/menu5.png" },
      { name: "Ice Cream", description: "Creamy vanilla ice cream", price: "$3", img: "/images/menu6.png" },
      { name: "Donut", description: "Sweet glazed donut", price: "$2", img: "/images/choose2.png" },
      { name: "Brownie", description: "Fudgy chocolate brownie", price: "$4", img: "/images/choose4.png" },
    ],
  },
  {
    category: "Snacks",
    image: "/images/desserts.jpg",
    items: [
      { name: "Chocolate Cake", description: "Rich chocolate dessert", price: "$7", img: "/images/menu5.png" },
      { name: "Ice Cream", description: "Creamy vanilla ice cream", price: "$3", img: "/images/menu6.png" },
      { name: "Donut", description: "Sweet glazed donut", price: "$2", img: "/images/choose2.png" },
      { name: "Brownie", description: "Fudgy chocolate brownie", price: "$4", img: "/images/choose4.png" },
    ],
  },
  {
    category: "Drink",
    image: "/images/desserts.jpg",
    items: [
      { name: "Chocolate Cake", description: "Rich chocolate dessert", price: "$7", img: "/images/menu5.png" },
      { name: "Ice Cream", description: "Creamy vanilla ice cream", price: "$3", img: "/images/menu6.png" },
      { name: "Donut", description: "Sweet glazed donut", price: "$2", img: "/images/choose2.png" },
      { name: "Brownie", description: "Fudgy chocolate brownie", price: "$4", img: "/images/choose4.png" },
    ],
  },
  {
    category: "Soups",
    image: "/images/desserts.jpg",
    items: [
      { name: "Chocolate Cake", description: "Rich chocolate dessert", price: "$7", img: "/images/menu5.png" },
      { name: "Ice Cream", description: "Creamy vanilla ice cream", price: "$3", img: "/images/menu6.png" },
      { name: "Donut", description: "Sweet glazed donut", price: "$2", img: "/images/choose2.png" },
      { name: "Brownie", description: "Fudgy chocolate brownie", price: "$4", img: "/images/choose4.png" },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeMenu = menuData.find((menu) => menu.category === activeCategory);

  return (
    <div className="container mx-auto px-64 pb-20">
        <div className="py-4">
        <h2 className="text-primary-yellow font-great text-center text-2xl">Choose &amp; Pick</h2>
    <h1 className="text-white text-center text-4xl font-bold ">
      <span className="text-primary-yellow ">Fr</span>om Our Menu 
    </h1>
    </div>
      {/* Categories */}
      <div className="flex  gap-6 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-semibold px-4 py-2 rounded-full ${
              activeCategory === category
                ? "text-primary-yellow"
                : "text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Display */}
      <div className="grid grid-cols-12 gap-4">
        {/* First Column */}
        <div className="col-span-4">
          <div className="relative w-full h-full flex justify-center items-center ">
            {activeMenu && (
              <Image
                src="/images/menu-main.png"
                alt={activeMenu.category}
                width={600}
                height={600}
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-4 space-y-2">
          {activeMenu &&
            activeMenu.items.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 00 rounded-lg"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-md"
                />
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-white">{item.name}</h2>
                  <p className="text-sm ">{item.description}</p>
                  <p className="text-primary-yellow font-bold">{item.price}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Third Column */}
        <div className="col-span-4 space-y-2">
          {activeMenu &&
            activeMenu.items.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-md"
                />
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-white">{item.name}</h2>
                  <p className="text-sm  ">{item.description}</p>
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
