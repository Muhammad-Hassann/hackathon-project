import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ProductsProvider } from "@/context/ProductsContext";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoodTuck | Online Food delivery",
  description: "Restaurant and Online Food delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-x-hidden`}>
      <ProductsProvider>
      <CartProvider>
        <Header />
        {children}
        <Footer />
        </CartProvider>
        </ProductsProvider>
        </body>
    </html>
  );
}
