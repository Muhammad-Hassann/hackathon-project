import Image from 'next/image';

const ChefCard = ({ image, name, designation }: any) => {
  return (
    <div className="relative w-full h-[390px] overflow-hidden rounded">
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
      {/* Content */}
      <div className="absolute bottom-0 left-0  px-4 py-2 bg-white  z-10">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-textColor">{designation}</p>
      </div>
    </div>
  );
};

export default ChefCard;
