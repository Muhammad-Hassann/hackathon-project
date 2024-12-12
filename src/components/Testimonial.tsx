"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = ({textColor}: any) => {
  const testimonials = [
    {
      name: "John Doe",
      designation: "Software Engineer",
      image: "/images/user.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      designation: "Product Manager",
      image: "/images/user.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      rating: 4,
    },
    {
      name: "Michael Brown",
      designation: "UI Designer",
      image: "/images/user.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      rating: 5,
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="container mx-auto text-center">
        <div className="py-4">
          <h2 className="text-primary-yellow font-great text-xl md:text-2xl">
            Testimonials
          </h2>
          <h1 className={`${textColor || 'text-white'} text-2xl md:text-4xl font-bold mb-6`}>
            What our clients are saying
          </h1>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full max-w-[95%] md:max-w-[700px] mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white w-full md:w-[700px] rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center text-center relative">
                {/* Image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden -mt-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Quotation Mark */}
                <FaQuoteLeft className="text-3xl md:text-4xl text-primary-yellow mt-6" />

                {/* Testimonial Text */}
                <p className="mt-4 text-textColor text-sm md:text-base italic">
                  {testimonial.text}
                </p>

                {/* Rating Stars */}
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-base md:text-lg" />
                  ))}
                </div>

                {/* Name */}
                <h3 className="text-base md:text-lg font-semibold mt-4">
                  {testimonial.name}
                </h3>

                {/* Designation */}
                <p className="text-xs md:text-sm text-gray-400">
                  {testimonial.designation}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
