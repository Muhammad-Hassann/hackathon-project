import Image from 'next/image';
import { FaRegComments, FaRegCalendarAlt, FaRegUser, FaArrowRight } from 'react-icons/fa';

const Blogcard = ({
  imageSrc,
  date,
  comments,
  author,
  title,
  description,
}: {
  imageSrc: string;
  date: string;
  comments: number;
  author: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="bg-white mb-6 rounded-lg my-6 shadow-lg p-4 md:p-6">
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-64 md:h-96 overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt="Featured Image"
          layout="intrinsic"
          width={700}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Content Section */}
      <div className="mt-4 sm:mt-6">
        <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-4 flex-wrap gap-2">
          <FaRegCalendarAlt className="text-primary-yellow mr-1" />
          <span>{date}</span>
          <span className="hidden sm:inline">|</span>
          <FaRegComments className="text-primary-yellow mr-1" />
          <span>{comments} Comments</span>
          <span className="hidden sm:inline">|</span>
          <FaRegUser className="text-primary-yellow mr-1" />
          <span>{author}</span>
        </div>
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">{description}</p>
        <button className="px-5 sm:px-7 py-2 sm:py-3 text-xs sm:text-sm text-primary-yellow border border-primary-yellow rounded hover:bg-primary-yellow hover:text-white transition">
          Read More <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Blogcard;
