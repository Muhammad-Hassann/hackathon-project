"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import ProductDetail from "@/components/ProductDetail"
import { useCart } from "@/context/CartContext"
import { useProducts } from "@/context/ProductsContext"
import client from "@/lib/sanityClient"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  originalPrice: number
  category: string
  tags: string[]
  imageUrl: string
  available: boolean
}
const Skeleton = ({ className }: {className: string}) => {
  return (
    <div
      className={`bg-gray-200 rounded animate-pulse ${className}`}
      style={{ backgroundColor: "#e2e2e2" }}
    ></div>
  );
};
export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()
  const { products, loading } = useProducts()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch<Product>(
          `*[_type == "food" && _id == $id][0]{
            _id,
            name,
            description,
            price,
            originalPrice,
            category,
            tags,
            "imageUrl": image.asset->url,
            available
          }`,
          { id },
        )
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (!product) {
    return (<div className="container mx-auto px-4 py-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image Skeleton */}
      <div className="aspect-square w-full bg-gray-200 rounded-xl animate-pulse"></div>

      {/* Product Details Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" /> {/* Title */}
        <Skeleton className="h-6 w-1/2" /> {/* Price */}
        <Skeleton className="h-20 w-full" /> {/* Description */}

        <div className="space-y-2">
          {/* Buttons */}
          <Skeleton className="h-12 w-1/3" />
          <Skeleton className="h-12 w-1/2" />
        </div>
      </div>
    </div>
    </div>
)  }

  const relatedProducts = products.filter((p) => p.category === product.category && p._id !== product._id).slice(0, 4)

  return <ProductDetail product={product} addToCart={addToCart} relatedProducts={relatedProducts} />
}

