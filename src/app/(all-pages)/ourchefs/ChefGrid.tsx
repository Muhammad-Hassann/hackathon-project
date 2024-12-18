import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", title: "Chef", image: "/images/chef1.png" },
  { name: "Jorina Begum", title: "Chef", image: "/images/chef7.png" },
  { name: "M. Mohammed", title: "Chef", image: "/images/chef3.png" },
  { name: "Banna Kathy", title: "Chef", image: "/images/chef4.png" },
  { name: "Tahmina Rumi", title: "Chef", image: "/images/chef5.png" },
  { name: "Banu Dragon", title: "Chef", image: "/images/chef6.png" },
  { name: "Robin Metcalf", title: "Chef", image: "/images/chef7.png" },
  { name: "William Rumi", title: "Chef", image: "/images/chef8.png" },
  { name: "Kebs William Roy", title: "Chef", image: "/images/team.png" },
  { name: "Mahmud Hossin", title: "Chef", image: "/images/chef4.png" },
  { name: "Abser Rahman", title: "Chef", image: "/images/chef1.png" },
  { name: "Ronaldo Ruby", title: "Chef", image: "/images/chef3.png" },
];

export default function ChefsGrid() {
  return (
    <section className="p-6 bg-white md:px-20 lg:px-32 pt-16">

      {/* Chefs Grid */}
      <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white w-[310px] h-[450px] rounded overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 mx-auto"
          >
            {/* Chef Image */}
            <div className="relative w-full h-3/4">
              <Image
                src={chef.image}
                alt={`Portrait of Chef ${chef.name}`}
                layout="fill"
                className="object-cover"
                priority={index < 4} // Optimize initial images
              />
            </div>

            {/* Chef Information */}
            <div className="h-1/4 p-3 text-center flex flex-col justify-center">
              <h3 className="text-md sm:text-lg font-semibold text-gray-800">
                {chef.name}
              </h3>
              <p className="text-sm text-gray-500">{chef.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
