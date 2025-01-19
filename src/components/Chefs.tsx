import React from 'react';
import ChefCard from './ChefCard';
import client from '@/lib/sanityClient';

export const getData = async () => {
  const data = await client.fetch(`*[_type == "chef"] | order(_createdAt desc)[0...4]{
  name,
  position,
  "imageUrl": image.asset->url,
  description,
  available
}
`)
  return data
}; 

const Chefs = async () => {
  const chefs = await getData()
  interface IChef {
    name: string;
    position: string;
    imageUrl: string; 
    description: string; 
    available: boolean; 
  }
  

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-64 py-10">
      {/* Section Heading */}
      <div className='py-4'>
        <h2 className="text-primary-yellow font-great text-center text-2xl">Chefs</h2>
        <h1 className="text-white text-center text-4xl font-bold">
          <span className="text-primary-yellow">Me</span>et Our Chefs
        </h1>
      </div>

      {/* Chef Cards */}
      <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-4'>
        {chefs.map((chef: IChef, index: number) => (
          <ChefCard
            key={index}
            image={chef.imageUrl}
            name={chef.name}
            designation={chef.position}
          />
        ))}
      </div>

      {/* Button */}
      <div className='flex justify-center items-center mt-8'>
        <button className="border border-primary-yellow text-white text-sm py-3 px-7 rounded-full">
          See More
        </button>
      </div>
    </div>
  );
};

export default Chefs;
