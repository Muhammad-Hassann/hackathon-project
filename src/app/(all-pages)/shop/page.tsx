"use client";

import React, { useState } from "react";
import Nav2 from "@/components/Nav2";
import { useProducts } from "@/context/ProductsContext";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";

function Page() {
  const { products, loading, error } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const tags = Array.from(new Set(products.flatMap((p) => p.tags)));
  const maxPrice = Math.max(...products.map((p) => p.price));

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((c) => c !== category)));
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Skeleton Loader
  const Skeleton = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 rounded-lg h-64 w-full"
        ></div>
      ))}
    </div>
  );

  return (
    <>
      <Nav2 heading="Shop" secondLinkText="Shop" secondLinkHref="/shop" />
      <div className="bg-white py-10">
        <div className="flex flex-col lg:flex-row gap-4">
          {loading ? (
            // Fallback Skeleton while loading
            <div className="flex-1 w-full py-8 md:pl-16 lg:pl-32">
              <Skeleton />
            </div>
          ) : error ? (
            // Error handling UI
            <div className="flex-1 w-full text-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-primary-yellow text-white rounded hover:bg-yellow-600"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              {/* Left Section */}
              <div className="flex-1 w-full">
                <ProductGrid
                  products={products}
                  selectedCategories={selectedCategories}
                  priceRange={priceRange}
                  selectedTags={selectedTags}
                  searchQuery={searchQuery}
                />
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/4">
                <Sidebar
                  categories={categories}
                  tags={tags}
                  priceRange={{ min: 0, max: maxPrice }}
                  onCategoryChange={handleCategoryChange}
                  onPriceChange={handlePriceChange}
                  onTagClick={handleTagClick}
                  onSearch={handleSearch}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
