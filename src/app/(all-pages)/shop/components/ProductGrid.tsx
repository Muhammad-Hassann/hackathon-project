import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";


const ProductGrid = () => {
  const products = [
    { id: 1, name: "Fresh Lime", image: "/images/balance.png", price: "$3.00", oldPrice: "$5.00" , path: "/productdetail"},
    { id: 2, name: "Chocolate Muffin", image: "/images/shop2.png", price: "$4.00", oldPrice: "$6.00" , path: "/productdetail"},
    { id: 3, name: "Burger", image: "/images/choose4.png", price: "$10.00", oldPrice: "$12.00", path: "/productdetail" },
    { id: 4, name: "Country Burger", image: "/images/shop4.png", price: "$8.00", oldPrice: "$10.00", path: "/productdetail" },
    { id: 5, name: "Drink", image: "/images/shop6.png", price: "$2.00", oldPrice: "$3.00" , path: "/productdetail"},
    { id: 6, name: "Pizza", image: "/images/shop7.png", price: "$12.00", oldPrice: "$15.00", path: "/productdetail" },
    { id: 7, name: "Cheese Butter", image: "/images/shop5.png", price: "$5.00", oldPrice: "$7.00" , path: "/productdetail"},
    { id: 8, name: "Sandwiches", image: "/images/about3.png", price: "$6.00", oldPrice: "$8.00" , path: "/productdetail"},
    { id: 9, name: "Chicken Chop", image: "/images/shop2.png", price: "$9.00", oldPrice: "$12.00", path: "/productdetail" },
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
     <ProductList products={products} />

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
