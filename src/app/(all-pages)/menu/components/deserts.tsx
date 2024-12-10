import Image from "next/image";
import { BsCupHot } from "react-icons/bs";

export default function StarterMenu() {
  return (
    <section className="bg-white py-20 px-8 md:px-24 lg:px-64 flex flex-col lg:flex-row items-start gap-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/starter4.png" // Replace with your image path
          alt="Starter Menu"
          width={400}
          height={200}
          className="ml-6 rounded-lg h-[500px]"
        />
      </div>

      {/* Menu Items */}
      <div className="w-full lg:w-1/2">
        {/* Title */}
        <span className="text-primary-yellow text-2xl mr-2">
          <BsCupHot className="text-primary-yellow" />
        </span>
        <h2 className="text-3xl font-bold text-gray-800 flex items-center">
          Deserts
        </h2>

        {/* Menu List */}
        <div className="mt-8 space-y-6">
          {/* Menu Item 1 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Fig and Lemon Cake
              </h3>
              <p className="text-gray-500 text-sm">
                Toasted French bread topped with almonds, cheddar
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg">325</p>
          </div>

          {/* Menu Item 2 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Creamy Mascarpone Cake
              </h3>
              <p className="text-gray-500 text-sm">
                Raspberries, mints, rosemary, whipped cream
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg">435</p>
          </div>

          {/* Menu Item 3 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Pastry, BlueBerry and Lemons
              </h3>
              <p className="text-gray-500 text-sm">
                Baked crust, avocados, pancetta and feta
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg">145</p>
          </div>

          {/* Menu Item 4 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Pain un Chocolate
              </h3>
              <p className="text-gray-500 text-sm">
                Spinach-infused coconut, crushed red chilies
              </p>
            </div>
            <p className="text-primary-yellow font-bold text-lg">355</p>
          </div>
        </div>
      </div>
    </section>
  );
}
