"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Nav2 from "@/components/Nav2"
import { useCart } from "@/context/CartContext"

function ShoppingCart() {
  const router = useRouter()
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart()
  const [couponCode, setCouponCode] = React.useState("")
  const [discount, setDiscount] = React.useState(0)

  const handleQuantityChange = (id: string, change: number) => {
    const item = cart.find((item) => item.id === id)
    if (item) {
      const newQuantity = Math.max(0, item.quantity + change)
      updateQuantity(id, newQuantity)
    }
  }

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
  }

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1) // 10% discount
    } else {
      setDiscount(0)
    }
  }

  const cartSubtotal = getTotalPrice()
  const shippingCharges = 30.0
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges

  return (
    <>
      <Nav2 heading="Shopping Cart" secondLinkText="Cart" secondLinkHref="/cart" />
      <div className="bg-white font-sans">
        <main className="py-12 px-6 md:px-16 lg:px-28">
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Quantity</th>
                  <th className="p-4 font-semibold">Total</th>
                  <th className="p-4 font-semibold">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex items-center">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                        width={64}
                        height={64}
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex w-max items-center gap-2 border border-gray-200 px-2 py-1 rounded-full">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <div className="w-8 h-8 flex items-center justify-center text-center">{item.quantity}</div>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td
                      className="p-4 text-black text-2xl hover:text-primary-yellow cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      &times;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coupon and Total Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center mt-10">
            {/* Coupon Code Section */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Coupon Code</h2>
              <div className="border border-gray-300 p-6 rounded-lg">
                <p className="text-base text-gray-600 my-4">Enter your coupon code if you have one.</p>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter your code"
                    className="flex-grow border rounded-l px-4 py-4 outline-none"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-primary-yellow text-white px-6 py-4 rounded-r font-semibold"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Total Amount Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Total Bill</h2>
              <div className="border border-gray-300 p-6 rounded-lg">
                <div className="flex justify-between mb-4">
                  <h5 className="text-bold text-lg">Cart Subtotal</h5>
                  <h5>${cartSubtotal.toFixed(2)}</h5>
                </div>
                <div className="flex justify-between mb-4">
                  <h5>Discount</h5>
                  <h5>${(cartSubtotal * discount).toFixed(2)}</h5>
                </div>
                <div className="flex justify-between mb-4 border-b border-gray-300">
                  <h5>Shipping Charges</h5>
                  <h5>${shippingCharges.toFixed(2)}</h5>
                </div>
                <div className="flex justify-between mt-4 font-semibold text-lg">
                  <h5>Total Amount</h5>
                  <h5>${totalAmount.toFixed(2)}</h5>
                </div>
              </div>
              <button
                onClick={() => router.push("/checkout")}
                className="w-full bg-primary-yellow text-white mt-4 py-3 rounded font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default ShoppingCart

