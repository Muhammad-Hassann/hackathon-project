"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { PiTote, PiHeart} from "react-icons/pi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosGitCompare } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import Navbar from "@/components/Nav2";
import Text from "./text";
import ProductList from "@/components/ProductList";
import Link from "next/link";

const relatedProducts = [
  {
    id: 1,
    name: "Dish 1",
    image: "/images/balance.png",
    price: "$20",
    rating: "4.5",
    reviews: 30,
  },
  {
    id: 2,
    name: "Dish 2",
    image: "/images/shop2.png",
    price: "$25",
    rating: "4.7",
    reviews: 45,
  },
  {
    id: 3,
    name: "Dish 3",
    image: "/images/shop3.png",
    price: "$18",
    rating: "4.6",
    reviews: 50,
  },
  {
    id: 4,
    name: "Dish 4",
    image: "/images/balance.png",
    price: "$22",
    rating: "4.8",
    reviews: 40,
  },
];

const ProductDetail = () => {
  const [counter, setCounter] = useState(1)

  const icons = [
    { Icon: FaFacebookF, color: 'text-[#1E1E1E]' },
    { Icon: FaTwitter, color: 'text-[#1E1E1E]' },
    { Icon: FaInstagram, color: 'text-[#1E1E1E]' },
    { Icon: FaLinkedinIn, color: 'text-[#1E1E1E]' },
    { Icon: FaPinterest, color: 'text-[#1E1E1E]' },
  ];

  return (
    <>
      <Navbar
        heading="Product Detail"
        secondLinkText="Product Detail"
        secondLinkHref="/productdetail"
      />
      <section className="w-full px-4 md:px-16 lg:px-32 py-20 bg-white">
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Left Section: Thumbnails */}
          <div className=" flex md:flex-col gap-4">
            {[
              "/images/detail1.png",
              "/images/detail2.png",
              "/images/detail3.png",
              "/images/detail4.png",
            ].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={80}
                className="object-cover border rounded-md"
              />
            ))}
          </div>

          {/* Right Section: Main Image */}
          <div className="flex-1">
            <div className=" overflow-hidden h-full">
              <Image
                src="/images/detail.png"
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
                In Stock
              </h3>

              {/* Navigation Section */}
              <div className="flex items-center gap-2">
                <IoIosArrowRoundBack className="text-black text-xl" />
                <p className="text-black text-lg">Prev</p>
                <p className="text-black text-lg">Next</p>
                <IoIosArrowRoundForward className="text-black text-xl" />
              </div>
            </div>

            {/* Title */}
            <div className="border-b border-gray-300 py-5">
              <h1 className="text-4xl text-gray-800 font-semibold mb-2">
                Yummy Chicken Chup
              </h1>
              <p className="text-gray-600 mb-5 mt-2 max-w-[500px] ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                repellat nihil provident sint quam pariatur voluptatibus,
                explicabo quasi, debitis dolores quaerat cum omnis! Ut minima
                maxime officiis? Doloribus qui quasi dolorum non similique unde
                quas odit.
              </p>
            </div>

            {/* Price & Add to Cart */}
            <div className="border-b border-gray-300 py-5">
              <p className="text-2xl text-gray-800 font-bold mb-4">$54.00</p>
            <div className="flex items-center gap-4  text-sm mb-4">
              <div className="flex items-center text-primary-yellow">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <span className="text-gray-500">| 5.0 Ratings</span>
              <span className="text-gray-500">| 20 Reviews</span>
            </div>
            <p className="text-gray-600 my-2">Dictum/cursus/ricsus</p>
            <div className="flex gap-4 max-w-[500px]">
            <div className="border border-gray-700 flex">
              <p 
              onClick={() => setCounter(counter <= 1 ? 1 : counter - 1)}
              className="py-2 px-3 border-r  border-gray-700 cursor-pointer  text-black text-xl">-</p>
              <p className="py-2 px-4 border-r border-gray-700  text-black text-xl">{counter}</p>
              <p 
              onClick={() => setCounter(counter + 1)}
              className="py-2 px-3 cursor-pointer  text-black text-xl">+</p>
            </div>
              <Link 
              href='/shoppingcart'
              className="flex items-center gap-2 px-6 py-3 bg-primary-yellow text-white rounded-md">
                <PiTote />
                Add to cart
              </Link>
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
              <p className="text-gray-600 text-base mt-2">Category: Pizza</p>
              <p className="text-gray-600 text-base mt-2">Tag: Our Shop</p>
            </div>
            <div className="flex items-center  space-x-2 mt-6">
              <p className="text-gray-600 text-base ">Share:</p>
              
            {icons.map(({ Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className=' rounded-full p-1 bg-gray-600 text-white text-base  '
              >
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
          <ProductList products={relatedProducts}/>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
