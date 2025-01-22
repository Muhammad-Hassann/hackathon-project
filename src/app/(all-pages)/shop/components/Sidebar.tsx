"use client"

import Image from "next/image"
import React from "react"
import { FaSearch } from "react-icons/fa"
import { IoArrowForwardCircleOutline } from "react-icons/io5"

interface SidebarProps {
  categories: string[]
  tags: string[]
  priceRange: { min: number; max: number }
  onCategoryChange: (category: string, checked: boolean) => void
  onPriceChange: (min: number, max: number) => void
  onTagClick: (tag: string) => void
  onSearch: (query: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  tags,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onTagClick,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPriceRange, setCurrentPriceRange] = React.useState(priceRange.max)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value)
    setCurrentPriceRange(newValue)
    onPriceChange(priceRange.min, newValue)
  }

  return (
    <aside className="w-full lg:w-64 bg-white border-r px-4 py-6 space-y-8">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-400 rounded px-4 py-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-yellow p-3">
          <FaSearch className="text-white" />
        </button>
      </form>

      {/* Category Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Category</h2>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="block">
              <input type="checkbox" className="mr-2" onChange={(e) => onCategoryChange(category, e.target.checked)} />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="mb-4 relative">
        <Image src="/images/shop-side.png" alt="Product Banner" className="w-full" width={300} height={250} />
        <div className="absolute top-8 left-4 text-white">
          <p className="text-md text-white font-semibold">Perfect Taste</p>
          <h2 className="text-xl font-bold mt-1">Classic Restaurant</h2>
          <p className="text-primary-yellow text-sm font-bold rounded">$4.95</p>
        </div>
        <div className="absolute bottom-8 left-4 cursor-pointer flex items-center space-x-1 text-white font-semibold">
          <span>Shop Now</span>
          <IoArrowForwardCircleOutline className="text-2xl text-white" />
        </div>
      </div>

      {/* Filter by Price Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Filter By Price</h2>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={currentPriceRange}
          onChange={handlePriceChange}
          className="w-full "
        />
        <div className="flex justify-between w-full">
          <p className="text-gray-500">
            From ${priceRange.min} to ${currentPriceRange}
          </p>
          <p className="text-gray-500">Filter</p>
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Latest Products</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center space-x-4 border-b pb-2">
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
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-2 py-1 border-b border-slate-300 cursor-pointer"
              onClick={() => onTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

