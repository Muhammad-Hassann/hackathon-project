import Image from "next/image";
import { BsCupHot } from "react-icons/bs";

export default function StarterMenu() {
  return (
    <section className="bg-white py-8 px-4 md:py-16 md:px-8 lg:px-24 xl:px-64 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/images/starter1.png"
          alt="Starter Menu"
          width={400}
          height={200}
          className="rounded-lg object-cover h-[300px] md:h-[400px] lg:h-[500px]"
        />
      </div>

      {/* Menu Items */}
      <div className="w-full lg:w-1/2">
        {/* Title */}
          <BsCupHot className="text-primary-yellow text-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Starter Menu
          </h2>

        {/* Menu List */}
        <div className="mt-6 md:mt-8 space-y-6">
          {/* Menu Item 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Alder Grilled Chinook Salmon
              </h3>
              <p className="text-gray-500 text-sm mt-1 md:mt-0">
                Toasted French bread topped with almonds, cheddar
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg mt-2 sm:mt-0">
              325
            </p>
          </div>

          {/* Menu Item 2 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Berries and Crème Tart
              </h3>
              <p className="text-gray-500 text-sm mt-1 md:mt-0">
                Raspberries, mints, rosemary, whipped cream
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg mt-2 sm:mt-0">
              435
            </p>
          </div>

          {/* Menu Item 3 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Tormentoso Bush Pizza Pinotage
              </h3>
              <p className="text-gray-500 text-sm mt-1 md:mt-0">
                Baked crust, avocados, pancetta and feta
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg mt-2 sm:mt-0">
              145
            </p>
          </div>

          {/* Menu Item 4 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-gray-500 text-sm mt-1 md:mt-0">
                Spinach-infused coconut, crushed red chilies
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg mt-2 sm:mt-0">
              355
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
