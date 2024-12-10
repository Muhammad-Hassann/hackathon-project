import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  const partners = [
    { id: 1, imgSrc: "/images/logo1.png", alt: "Restaurant Logo" },
    { id: 2, imgSrc: "/images/logo2.png", alt: "Bakery Logo" },
    { id: 3, imgSrc: "/images/logo3.png", alt: "Fork & Spoon Logo" },
    { id: 4, imgSrc: "/images/logo4.png", alt: "Wolf Coffee Logo" },
    { id: 5, imgSrc: "/images/logo5.png", alt: "Bistro Logo" },
    { id: 6, imgSrc: "/images/logo6.png", alt: "Sugar Bakery Logo" },
  ];

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        {/* Title */}
        <p className="uppercase tracking-widest font-medium text-gray-600">
          Partners & Clients
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-2">
          We work with the best people
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 mt-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center items-center">
              <Image
                src={partner.imgSrc}
                alt={partner.alt}
                className="h-auto w-auto grayscale hover:grayscale-0 transition-all duration-300"
                width={120} // Increased size for better scaling
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
