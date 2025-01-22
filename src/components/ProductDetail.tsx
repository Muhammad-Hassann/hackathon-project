"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import { PiTote, PiHeart } from "react-icons/pi"
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosGitCompare } from "react-icons/io"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa"
import Navbar from "@/components/Nav2"
import Text from "./text"
import ProductList from "@/components/ProductList"
import Link from "next/link"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  originalPrice: number
  category: string
  tags: string[]
  imageUrl: string
  available: boolean
}

interface ProductDetailProps {
  product: Product
  addToCart: (item: { id: string; name: string; price: number; quantity: number }) => void
  relatedProducts: Product[]
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, addToCart, relatedProducts }) => {
  const [counter, setCounter] = useState(1)

  const icons = [
    { Icon: FaFacebookF, color: "text-[#1E1E1E]" },
    { Icon: FaTwitter, color: "text-[#1E1E1E]" },
    { Icon: FaInstagram, color: "text-[#1E1E1E]" },
    { Icon: FaLinkedinIn, color: "text-[#1E1E1E]" },
    { Icon: FaPinterest, color: "text-[#1E1E1E]" },
  ]

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: counter,
    })
  }

  return (
    <>
      <Navbar heading="Product Detail" secondLinkText="Product Detail" secondLinkHref={`/product/${product._id}`} />
      <section className="w-full px-4 md:px-16 lg:px-32 py-20 bg-white">
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Right Section: Main Image */}
          <div className="flex-1">
            <div className=" overflow-hidden h-full">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt="Product Image"
                layout="responsive"
                width={450}
                height={600}
                className="object-cover h-full"
                style={{ aspectRatio: "1 / 1" }}
              />
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="w-full lg:w-1/2">
            <div className="flex w-full justify-between items-center ">
              {/* In Stock Badge */}
              <h3 className="text-white bg-primary-yellow px-5 py-1 text-sm rounded-lg mb-2 ">
                {product.available ? "In Stock" : "Out of Stock"}
              </h3>

              {/* Navigation Section */}
              <div className="flex items-center gap-2">
                <Link href="/shop">
                  <IoIosArrowRoundBack className="text-black text-xl" />
                  <span className="text-black text-lg">Back to Shop</span>
                </Link>
              </div>
            </div>

            {/* Title */}
            <div className="border-b border-gray-300 py-5">
              <h1 className="text-4xl text-gray-800 font-semibold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-5 mt-2 max-w-[500px] ">{product.description}</p>
            </div>

            {/* Price & Add to Cart */}
            <div className="border-b border-gray-300 py-5">
              <p className="text-2xl text-gray-800 font-bold mb-4">${product.price.toFixed(2)}</p>
              {product.originalPrice > product.price && (
                <p className="text-gray-500 line-through mb-2">${product.originalPrice.toFixed(2)}</p>
              )}
              <p className="text-gray-600 my-2">Category: {product.category}</p>
              <div className="flex gap-4 max-w-[500px]">
                <div className="border border-gray-700 flex">
                  <button
                    onClick={() => setCounter(counter <= 1 ? 1 : counter - 1)}
                    className="py-2 px-3 border-r  border-gray-700 cursor-pointer  text-black text-xl"
                  >
                    -
                  </button>
                  <p className="py-2 px-4 border-r border-gray-700  text-black text-xl">{counter}</p>
                  <button
                    onClick={() => setCounter(counter + 1)}
                    className="py-2 px-3 cursor-pointer  text-black text-xl"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 px-6 py-3 bg-primary-yellow text-white rounded-md"
                  disabled={!product.available}
                >
                  <PiTote />
                  {product.available ? "Add to cart" : "Out of Stock"}
                </button>
              </div>
            </div>
            <div className="border-b border-gray-300 py-5">
              <div className="flex gap-4 text-gray-600 text-base">
                <div className="flex items-center gap-2">
                  <PiHeart />
                  Add to Wishlist
                </div>
                <div className="flex items-center gap-2">
                  <IoIosGitCompare />
                  Compare
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-base mt-2">Tags: {product.tags.join(", ")}</p>
              </div>
              <div className="flex items-center  space-x-2 mt-6">
                <p className="text-gray-600 text-base ">Share:</p>

                {icons.map(({ Icon, color }, index) => (
                  <a key={index} href="#" className="rounded-full p-1 bg-gray-600 text-white text-base">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Text />
        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Similar Products</h2>
          <ProductList products={relatedProducts} />
        </div>
      </section>
    </>
  )
}

export default ProductDetail

