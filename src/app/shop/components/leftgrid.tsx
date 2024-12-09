import Image from "next/image";
import React from "react";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Fresh Lime", image: "/cards.png", price: "$3.00", oldPrice: "$5.00" },
    { id: 2, name: "Chocolate Muffin", image: "/cards.png", price: "$4.00", oldPrice: "$6.00" },
    { id: 3, name: "Burger", image: "/cards.png", price: "$10.00", oldPrice: "$12.00" },
    { id: 4, name: "Country Burger", image: "/cards.png", price: "$8.00", oldPrice: "$10.00" },
    { id: 5, name: "Drink", image: "/cards.png", price: "$2.00", oldPrice: "$3.00" },
    { id: 6, name: "Pizza", image: "/cards.png", price: "$12.00", oldPrice: "$15.00" },
    { id: 7, name: "Cheese Butter", image: "/cards.png", price: "$5.00", oldPrice: "$7.00" },
    { id: 8, name: "Sandwiches", image: "/cards.png", price: "$6.00", oldPrice: "$8.00" },
    { id: 9, name: "Chicken Chop", image: "/cards.png", price: "$9.00", oldPrice: "$12.00" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-8 px-4">
      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="space-y-2 md:flex md:space-x-4">
          <label className="font-medium">
            Sort By:
            <select className="ml-2 border border-gray-300 rounded p-2">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </label>
          <label className="font-medium">
            Show:
            <select className="ml-2 border border-gray-300 rounded p-2">
              <option>Default</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </label>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-sm hover:shadow-lg transition-all">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-t-lg"
              width={400}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-red-500 font-semibold">{product.price}</span>
                <span className="text-gray-400 line-through">{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
