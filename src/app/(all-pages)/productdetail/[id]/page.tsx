"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/ProductsContext";
import client from "@/lib/sanityClient";
import { AiFillStar } from "react-icons/ai";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  tags: string[];
  imageUrl: string;
  available: boolean;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { products, loading } = useProducts();

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
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);


  if (!product) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="w-full h-48 bg-gray-200" />
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded mb-4" />
            <div className="h-4 bg-gray-200 rounded mb-4" />
            <div className="flex items-center mb-2">
              <div className="flex text-gray-300">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <span className="ml-2 h-4 bg-gray-200 rounded w-16" />
            </div>
            <div className="w-full h-10 bg-gray-200 rounded" />
          </div>
        </div>
        ))}
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 4);

  return (
    <ProductDetail product={product} addToCart={addToCart} relatedProducts={relatedProducts} />
  );
}
