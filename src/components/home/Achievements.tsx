import Image from "next/image";

const Acheivements = () => {
  const cardData = [
    { icon: '/images/Group.svg', text: "Professional Chefs", number: "220" },
    { icon: '/images/Group1.svg', text: "Items of Food", number: "320" },
    { icon: '/images/Group2.svg', text: "Years of Experience", number: "30+" },
    { icon: '/images/Group3.svg', text: "Happy Customer", number: "420" },
  ];

  return (
    <div
      className="relative px-6 sm:px-16 md:px-32 lg:px-64 py-20 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/achievments-bg.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content */}
      <div className="relative w-full h-auto flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <Image
                height={120}
                width={120}
                src={card.icon}
                alt={card.text}
                className="w-[100px] h-[100px] object-contain"
              />
              <h2 className="text-white text-xl font-bold mt-3">{card.text}</h2>
              <span className="text-3xl text-white font-semibold mt-2">{card.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acheivements;
