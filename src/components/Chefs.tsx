import React from 'react';
import ChefCard from './ChefCard';

const Chefs = () => {
  const chefs = [
    {
      name: 'D.Estwood',
      designation: 'Chief Chef',
      image: '/images/chef1.png',
    },
    {
      name: 'D.Scoriesh',
      designation: 'Assistant Chef',
      image: '/images/chef2.png',
    },
    {
      name: 'M. William',
      designation: 'Advertising Chef',
      image: '/images/chef3.png',
    },
    {
      name: 'W. Readfroad',
      designation: 'Chef',
      image: '/images/chef4.png',
    },
  ];

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
        {chefs.map((chef, index) => (
          <ChefCard
            key={index}
            image={chef.image}
            name={chef.name}
            designation={chef.designation}
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
