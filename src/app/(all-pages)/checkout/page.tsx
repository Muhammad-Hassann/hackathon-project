"use client"
import { useState, type FormEvent } from "react"
import Image from "next/image"
import Nav2 from "@/components/Nav2"
import Input from "./Input"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import ThankYouDialog from "@/components/ThankYouDialog"

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getTotalPrice, clearCart } = useCart()
  const [showThankYouDialog, setShowThankYouDialog] = useState(false)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})

  const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {}
    const requiredFields = ["firstName", "lastName", "email", "phone", "address1", "city", "zipCode", "country"]

    requiredFields.forEach((field) => {
      const value = formData.get(field) as string
      if (!value || value.trim() === "") {
        errors[field] = `${
          field.charAt(0).toUpperCase() +
          field
            .slice(1)
            .replace(/([A-Z])/g, " $1")
            .trim()
        } is required`
      }
    })

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handlePlaceOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (validateForm(formData)) {
      try {
        // Here you would typically send the order to your backend
        console.log("Order placed successfully", Object.fromEntries(formData))
        clearCart()
        setShowThankYouDialog(true)
      } catch (error) {
        console.error("Error placing order:", error)
      }
    } else {
      console.error("Form validation failed", formErrors)
    }
  }

  return (
    <>
      <Nav2 heading="Checkout" secondLinkText="Checkout" secondLinkHref="/checkout" />
      <div className="container mx-auto px-4 md:px-16 lg:px-32 my-10">
        <form onSubmit={handlePlaceOrder} noValidate>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input type="text" label="First name" name="firstName" required error={formErrors.firstName} />
                    <Input type="text" label="Last name" name="lastName" required error={formErrors.lastName} />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input type="email" label="Email address" name="email" required error={formErrors.email} />
                    <Input type="tel" label="Phone number" name="phone" required error={formErrors.phone} />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input type="text" label="Company" name="company" />
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className={`w-full px-3 py-2 border ${
                          formErrors.country ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm`}
                        required
                      >
                        <option value="">Choose country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                      </select>
                      {formErrors.country && <p className="mt-1 text-sm text-red-600">{formErrors.country}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input label="City" type="text" name="city" required error={formErrors.city} />
                    <Input label="Zip Code" type="text" name="zipCode" required error={formErrors.zipCode} />
                  </div>

                  <Input type="text" label="Address 1" name="address1" required error={formErrors.address1} />
                  <Input type="text" label="Address 2" name="address2" />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sameAsShipping"
                    className="h-4 w-4 rounded border-gray-300 text-primary-yellow"
                  />
                  <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                    Same as shipping address
                  </label>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 w-72 h-12 px-3"
                >
                  Back to cart
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-yellow text-white rounded-md shadow-sm text-sm font-medium w-72 h-12"
                >
                  Place an order
                </button>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="my-20 p-6 rounded-lg border-2 border-gray-300">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative h-16 w-16">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${(getTotalPrice() * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-primary-yellow text-white rounded-md shadow-sm text-sm font-medium"
              >
                Place an order
              </button>
            </div>
          </div>
        </form>
      </div>
      <ThankYouDialog isOpen={showThankYouDialog} onClose={() => router.push("/shop")} />
    </>
  )
}

