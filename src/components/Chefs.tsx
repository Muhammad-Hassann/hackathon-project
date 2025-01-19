'use client'
import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import client from "@/lib/sanityClient";

interface IChef {
  name: string;
  position: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

const Chefs: React.FC = () => {
  const [chefs, setChefs] = useState<IChef[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "chef"] | order(_createdAt desc)[0...4]{
            name,
            position,
            "imageUrl": image.asset->url,
            description,
            available
          }`
        );
        setChefs(data);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChefs();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-10">
        <h2 className="text-primary-yellow font-bold text-xl">Loading Chefs...</h2>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-64 py-10">
      {/* Section Heading */}
      <div className="py-4">
        <h2 className="text-primary-yellow font-great text-center text-2xl">Chefs</h2>
        <h1 className="text-white text-center text-4xl font-bold">
          <span className="text-primary-yellow">Me</span>et Our Chefs
        </h1>
      </div>

      {/* Chef Cards */}
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-4">
        {chefs.map((chef, index) => (
          <ChefCard
            key={index}
            image={chef.imageUrl}
            name={chef.name}
            designation={chef.position}
          />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-8">
        <button className="border border-primary-yellow text-white text-sm py-3 px-7 rounded-full">
          See More
        </button>
      </div>
    </div>
  );
};

export default Chefs;
