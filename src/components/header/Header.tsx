"use client"
import { FiSearch } from "react-icons/fi"
import { PiUser, PiTote } from "react-icons/pi"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { useCart } from "@/context/CartContext"

const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <>
      {/* Main Header */}
      <div className="absolute top-0 left-0 text-white w-full flex justify-between items-center py-6 px-4 sm:px-8 lg:px-64 text-sm bg-black bg-opacity-75 z-50">
        {/* Logo */}
        <div className="font-bold text-xl sm:text-2xl">
          Food<span className="text-primary-yellow">tuck</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative cursor-pointer ${pathname === item.href && "text-primary-yellow"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Icons and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <FiSearch className="text-2xl font-bold cursor-pointer" />
            <PiUser onClick={() => router.push("/signup")} className="text-2xl font-bold cursor-pointer text-white" />
            <div className="relative">
              <PiTote
                onClick={() => router.push("/shoppingcart")}
                className="text-2xl font-bold cursor-pointer text-white"
              />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-yellow text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden bg-black bg-opacity-90 absolute top-16 left-0 w-full z-40 py-4 text-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`block py-2 text-white text-lg ${pathname === item.href && "text-primary-yellow"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex justify-center gap-6 mt-4">
            <FiSearch className="text-2xl font-bold cursor-pointer text-white" />
            <PiUser onClick={() => router.push("/signup")} className="text-2xl font-bold cursor-pointer text-white" />
            <div className="relative">
              <PiTote
                onClick={() => router.push("/shoppingcart")}
                className="text-2xl font-bold cursor-pointer text-white"
              />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-yellow text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
