import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

interface Product {
  _id: string
  name: string
  imageUrl: string
  price: number
  rating?: number
  reviews?: number
}

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className={i < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews || 0} reviews)</span>
            </div>
            <Link href={`/productdetail/${product._id}`}>
              <button className="w-full bg-primary-yellow text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors">
                View Product
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList

