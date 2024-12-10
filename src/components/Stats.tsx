import Image from "next/image";
import { FaUserTie, FaUtensils, FaAward, FaSmile } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div className="relative w-full lg:flex hidden sm:flex-row md:block">
      {/* Background Image */}
      <div className="background-image">
        <Image
          src="/hero/stats.png" // Update this path as needed
          alt="Background"
          width={1920}
          height={469}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Overlay with Stats */}
      <div className="stats-overlay absolute inset-0 flex sm:flex-row items-center justify-center gap-8 px-6 bg-black/50 text-white">
        {/* Stat 1: Professional Chefs */}
        <div className="stat-item text-center w-1/2 md:w-auto">
          <FaUserTie className="text-4xl md:text-5xl mb-2 text-orange-500" />
          <h3 className="text-lg md:text-xl font-bold">Chefs</h3>
          <p className="text-xl md:text-2xl">420</p>
        </div>

        {/* Stat 2: Items Of Food */}
        <div className="stat-item text-center w-1/2 md:w-auto">
          <FaUtensils className="text-4xl md:text-5xl mb-2 text-orange-500" />
          <h3 className="text-lg md:text-xl font-bold">Food Items</h3>
          <p className="text-xl md:text-2xl">320</p>
        </div>

        {/* Stat 3: Years Of Experience */}
        <div className="stat-item text-center w-1/2 md:w-auto">
          <FaAward className="text-4xl md:text-5xl mb-2 text-orange-500" />
          <h3 className="text-lg md:text-xl font-bold">Experience</h3>
          <p className="text-xl md:text-2xl">30+</p>
        </div>

        {/* Stat 4: Happy Customers */}
        <div className="stat-item text-center w-1/2 md:w-auto">
          <FaSmile className="text-4xl md:text-5xl mb-2 text-orange-500" />
          <h3 className="text-lg md:text-xl font-bold">Customers</h3>
          <p className="text-xl md:text-2xl">220</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
