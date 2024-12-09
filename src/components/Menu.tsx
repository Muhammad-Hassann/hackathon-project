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
      { name: "Chicken Sandwich", description: "Crispy chicken sandwich", price: "$7", img: "/images/menu2.png" },
      { name: "French Fries", description: "Crispy golden fries", price: "$3", img: "/images/menu3.png" },
      { name: "Hot Dog", description: "Juicy beef hot dog", price: "$4", img: "/images/menu4.png" },
    ],
  },
  {
    category: "Lunch",
    image: "/images/lunch.jpg",
    items: [
      { name: "Grilled Chicken", description: "Tender grilled chicken", price: "$12", img: "/images/menu5.png" },
      { name: "Caesar Salad", description: "Fresh Caesar salad", price: "$8", img: "/images/menu6.png" },
      { name: "Pasta Alfredo", description: "Creamy Alfredo pasta", price: "$10", img: "/images/menu1.png" },
      { name: "Taco Platter", description: "Assorted tacos", price: "$14", img: "/images/menu2.png" },
    ],
  },
  {
    category: "Dinner",
    image: "/images/dinner.jpg",
    items: [
      { name: "Steak", description: "Juicy grilled steak", price: "$25", img: "/images/menu3.png" },
      { name: "Lobster", description: "Freshly cooked lobster", price: "$30", img: "/images/menu4.png" },
      { name: "Salmon", description: "Grilled salmon fillet", price: "$20", img: "/images/menu5.png" },
      { name: "Veggie Platter", description: "Healthy vegetable platter", price: "$15", img: "/images/menu6.png" },
    ],
  },
  {
    category: "Desserts",
    image: "/images/desserts.jpg",
    items: [
      { name: "Chocolate Cake", description: "Rich chocolate cake", price: "$6", img: "/images/menu1.png" },
      { name: "Ice Cream", description: "Creamy ice cream", price: "$4", img: "/images/menu2.png" },
      { name: "Cheesecake", description: "Classic cheesecake", price: "$5", img: "/images/menu3.png" },
      { name: "Fruit Salad", description: "Refreshing fruit salad", price: "$3", img: "/images/menu4.png" },
    ],
  },
  {
    category: "Drink",
    image: "/images/drinks.jpg",
    items: [
      { name: "Soda", description: "Chilled soft drink", price: "$2", img: "/images/menu5.png" },
      { name: "Coffee", description: "Freshly brewed coffee", price: "$3", img: "/images/menu6.png" },
      { name: "Smoothie", description: "Fruit-based smoothie", price: "$5", img: "/images/menu1.png" },
      { name: "Cocktail", description: "Refreshing cocktail", price: "$7", img: "/images/menu2.png" },
    ],
  },
  {
    category: "Snacks",
    image: "/images/snacks.jpg",
    items: [
      { name: "Nachos", description: "Crispy nachos with dip", price: "$6", img: "/images/menu3.png" },
      { name: "Spring Rolls", description: "Vegetable spring rolls", price: "$5", img: "/images/menu4.png" },
      { name: "Popcorn", description: "Buttery popcorn", price: "$3", img: "/images/menu5.png" },
      { name: "Chicken Wings", description: "Spicy chicken wings", price: "$8", img: "/images/menu6.png" },
    ],
  },
  {
    category: "Soups",
    image: "/images/soups.jpg",
    items: [
      { name: "Tomato Soup", description: "Classic tomato soup", price: "$4", img: "/images/menu1.png" },
      { name: "Chicken Soup", description: "Hearty chicken soup", price: "$5", img: "/images/menu2.png" },
      { name: "Mushroom Soup", description: "Creamy mushroom soup", price: "$6", img: "/images/menu3.png" },
      { name: "Vegetable Soup", description: "Healthy veggie soup", price: "$4", img: "/images/menu4.png" },
    ],
  },
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
                ? "text-primary-yellow"
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
        <div className="space-y-2 sm:col-span-2 lg:col-span-1">
          {activeMenu &&
            activeMenu.items.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4  rounded-lg">
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
        <div className="space-y-2 sm:col-span-2 lg:col-span-1">
          {activeMenu &&
            activeMenu.items.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg">
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

      {/* Extra Menu Items Grid for Large Screens */}
      
    </div>
  );
};

export default Menu;
