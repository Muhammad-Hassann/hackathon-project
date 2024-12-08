import Image from "next/image";
import { PiHamburger, PiCookie, PiWine } from "react-icons/pi";

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Images Grid */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full">
          {/* Top Left Large Image */}
          <div className="relative row-span-2 col-span-2">
            <Image
              src="/images/choose1.png"
              alt="Tacos with vegetables"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Top Right Medium Image */}
          <div className="relative col-span-2 row-span-1">
            <Image
              src="/images/choose2.png"
              alt="Gourmet burger"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Bottom Left Small Image */}
          <div className="relative row-span-1 col-span-1">
            <Image
              src="/images/choose3.png"
              alt="Appetizer"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Bottom Center Medium Image */}
          <div className="relative row-span-1 col-span-2">
            <Image
              src="/images/choose4.png"
              alt="Cheese burger"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Bottom Right Small Image */}
          <div className="relative row-span-1 col-span-1 ">
            <Image
              src="/images/choose5.png"
              alt="Plated dish"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-primary-yellow font-great text-2xl">
              Why Choose Us
            </h2>
            <h1 className="text-white text-4xl font-bold">
              <span className="text-primary-yellow">Ex</span>tra ordinary Taste
              and Experience
            </h1>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Ultrices mattis sed vitae mus risus.
            </p>
          </div>

          {/* Icons */}
          <div className="flex justify-start gap-6 mb-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary-yellow p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                <PiHamburger className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-md text-white">Fast Food</h2>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary-yellow p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                <PiCookie className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-md text-white">Snacks</h2>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary-yellow p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                <PiWine className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-md text-white">Beverages</h2>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center rounded-lg w-[380px] bg-white gap-4">
            <div className="w-2 h-28 rounded bg-[#FFA500]" />
            <div className="w-full border flex rounded-lg  py-4">
              <span className="text-primary-yellow  text-6xl font-sans font-bold pl-4">
                30+
              </span>
              <h2 className="text-2xl  font-semibold pl-8">
                Years of
                <br />
                Experience
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
