"use client"

import React from "react"
import ProductList from "@/components/ProductList"

interface Product {
  _id: string
  name: string
  slug: string
  category: string
  price: number
  tags: string[]
  imageUrl: string
  description: string
  available: boolean
}

interface ProductGridProps {
  products: Product[]
  selectedCategories: string[]
  priceRange: { min: number; max: number }
  selectedTags: string[]
  searchQuery: string
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategories,
  priceRange,
  selectedTags,
  searchQuery,
}) => {
  const [sortBy, setSortBy] = React.useState("newest")
  const [showCount, setShowCount] = React.useState(10)

  const filteredProducts = products
    .filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category))
    .filter((product) => product.price >= priceRange.min && product.price <= priceRange.max)
    .filter((product) => selectedTags.length === 0 || product.tags.some((tag) => selectedTags.includes(tag)))
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price
      case "price-high-low":
        return b.price - a.price
      default:
        return 0 // For "newest", assuming the original order is by newest
    }
  })

  const displayedProducts = sortedProducts.slice(0, showCount)

  return (
    <section className="py-8 md:pl-16 lg:pl-32">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 flex-wrap justify-between items-center">
        <div className="pb-4 md:flex md:space-x-4">
          <label className="font-medium">
            Sort By:
            <select
              className="ml-2 border border-gray-400 outline-none focus:border-gray-500 text-gray-400 rounded p-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </label>
          <label className="font-medium">
            Show:
            <select
              className="ml-2 border border-gray-400 outline-none focus:border-gray-500 text-gray-400 rounded p-2"
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </label>
        </div>
      </div>

      <ProductList products={displayedProducts} />

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">1</button>
          <button className="px-4 py-2 bg-primary-yellow text-white rounded">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">3</button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid

