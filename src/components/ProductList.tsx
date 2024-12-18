import Image from "next/image"
import { PiHeart, PiTote} from "react-icons/pi";
import { IoIosGitCompare } from "react-icons/io";
import Link from "next/link";
const ProductList = ({products}: any) => {
  return (
    <div className="w-full flex flex-wrap flex-col lg:flex-row gap-4 items-center">
    {products.map((product: any) => (
        <Link href={'/productdetail'}>
      <div
        key={product.id}
        className="relative w-[300px] shadow-sm hover:shadow-lg transition-all group"

      >
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover object-center"
          width={250}
          height={300}
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-primary-yellow font-semibold">{product.price}</span>
            <span className="text-gray-400 line-through">{product.oldPrice}</span>
          </div>
        </div>
        {/* Hover Icons */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <span className="bg-white p-3  shadow-md hover:bg-primary-yellow transition">
            <IoIosGitCompare className="text-primary-yellow hover:text-white " />
          </span>
          <span className="bg-white p-3  shadow-md hover:bg-primary-yellow transition">
            <PiHeart className="text-primary-yellow hover:text-white " />
          </span>
          <span className="bg-white p-3  shadow-md hover:bg-primary-yellow transition">
            <PiTote className="text-primary-yellow hover:text-white " />
          </span>
        </div>
      </div>
      </Link>
    ))}
  </div>
  )
}

export default ProductList
