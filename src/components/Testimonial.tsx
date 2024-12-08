'use client';
import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css'; // Import CSS for react-slick
import 'slick-carousel/slick/slick-theme.css'; // Import theme CSS for react-slick

const TestimonialCarousel = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold text-primary-yellow mb-10">
        What Our Customers Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center max-w-lg mx-auto relative"
          >
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
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
