"use client"
import Link from "next/link";
import { useState } from "react";

// Define the types for the data structure
interface MenuItem {
  name: string;
  description: string;
  calories: string;
  price: string;
}

interface MenuData {
  categories: string[];
  items: MenuItem[];
}

const FoodMenu = () => {
  // Static data inside the component
  const menuData: MenuData = {
    categories: ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"],
    items: [
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        calories: "560 CAL",
        price: "32$",
      },
      {
        name: "Caesar Salad",
        description: "Crisp romaine with parmesan and Caesar dressing",
        calories: "320 CAL",
        price: "12$",
      },
      {
        name: "Spaghetti Bolognese",
        description: "Classic Italian pasta with rich meat sauce",
        calories: "800 CAL",
        price: "18$",
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center",
        calories: "540 CAL",
        price: "10$",
      },
      {
        name: "Mango Smoothie",
        description: "Fresh mango blended with yogurt",
        calories: "250 CAL",
        price: "5$",
      },
      {
        name: "Fried Chicken Wings",
        description: "Crispy fried wings with spicy dipping sauce",
        calories: "650 CAL",
        price: "15$",
      },
    ],
  };

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState<string>(
    menuData.categories[0]
  );

  const { categories, items } = menuData;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Our Food Menu</h1>
        <p className="text-gray-500 mt-2">
          Explore our delicious menu crafted with the finest ingredients.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 w-full">
        {categories.map((category, index) => (
          <span
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`pb-2 cursor-pointer transition-colors duration-300 whitespace-nowrap ${
              selectedCategory === category
                ? "text-primary-yellow border-b-2 border-primary-yellow"
                : "text-gray-500 hover:text-primary-yellow"
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Menu Items Grid - Responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex justify-between items-center cursor-pointer border-b border-gray-200 pb-4"
          >
            <div>
              <h3 className="text-lg font-semibold hover:text-primary-yellow">
                {item.name}
              </h3>
              <p className="text-gray-500">{item.description}</p>
              <span className="text-sm text-gray-400">{item.calories}</span>
            </div>
            <div className="text-lg font-bold text-primary-yellow">{item.price}</div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link href="/full-menu" legacyBehavior>
          <span className="px-6 py-2 border border-primary-yellow text-primary-yellow rounded hover:bg-primary-yellow hover:text-white transition duration-300">
            View Full Menu
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FoodMenu;
