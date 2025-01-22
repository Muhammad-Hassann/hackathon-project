"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import client from "@/lib/sanityClient"

interface Product {
  _id: string
  name: string
  slug: string
  category: string
  price: number
  originalPrice: number
  tags: string[]
  imageUrl: string
  description: string
  available: boolean
}

interface ProductsContextType {
  products: Product[]
  loading: boolean
  error: string | null
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider")
  }
  return context
}

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch<Product[]>(
          `*[_type == "food"]{
            _id,
            name,
            "slug": slug.current,
            category,
            price,
            originalPrice,
            tags,
            "imageUrl": image.asset->url,
            description,
            available
          }`,
        )
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch products")
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return <ProductsContext.Provider value={{ products, loading, error }}>{children}</ProductsContext.Provider>
}

