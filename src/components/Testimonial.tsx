'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Software Engineer',
      image: '/images/testimonial1.jpg',
      text: 'The service was fantastic! The food was delicious, and the atmosphere was cozy.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      designation: 'Product Manager',
      image: '/images/testimonial2.jpg',
      text: 'A wonderful experience! Highly recommended for all food lovers.',
      rating: 4,
    },
    {
      name: 'Michael Brown',
      designation: 'UI Designer',
      image: '/images/testimonial3.jpg',
      text: 'Great customer service and an excellent menu. I will come back for sure!',
      rating: 5,
    },
  ];

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900"
      style={{ padding: '0 1rem' }}
    >
      <div className="container mx-auto text-center pb-20 px-64">
        <div className="py-4">
          <h2 className="text-primary-yellow font-great text-2xl">Testimonials</h2>
          <h1 className="text-white text-4xl font-bold">What our clients are saying</h1>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            renderBullet: (index, className) => `
              <span class="${className} bg-primary-yellow text-white w-8 h-8 rounded-full flex items-center justify-center">
                ${index + 1}
              </span>`,
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full max-w-lg mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center relative">
                {/* Image */}
                <div className="absolute -top-12">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary-yellow">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Quotation Mark */}
                <FaQuoteLeft className="text-4xl text-primary-yellow mt-16" />

                {/* Testimonial Text */}
                <p className="mt-4 text-sm md:text-base italic">{testimonial.text}</p>

                {/* Rating Stars */}
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>

                {/* Designation */}
                <p className="text-sm text-gray-400">{testimonial.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-4 mt-6"></div>
      </div>
    </div>
  );
};

export default Testimonial;
