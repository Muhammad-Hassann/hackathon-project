import Image from 'next/image';

const ChefCard = ({ image, name, designation }: any) => {
  return (
    <div className="relative w-full h-[390px] sm:h-[350px] md:h-[400px] overflow-hidden rounded ">
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      {/* Content */}
      <div className="absolute bottom-0 left-0 w- px-4 py-2 bg-white z-10">
        <h2 className="text-lg sm:text-xl font-bold text-textColor">{name}</h2>
        <p className="text-xs sm:text-sm text-gray-500">{designation}</p>
      </div>
    </div>
  );
};

export default ChefCard;
