'use client'
import React, { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import client from "@/lib/sanityClient";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "food"]{
            name,
            category,
            price,
            originalPrice,
            tags,
            "imageUrl": image.asset->url,
            description,
            available
          }`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading placeholder
  }

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
