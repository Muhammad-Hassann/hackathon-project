'use client'
import Image from "next/image";
import Nav2 from "@/components/Nav2";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  return (
    <>
      <Nav2
        heading="Checkout"
        secondLinkText="Checkout"
        secondLinkHref="/checkout"
      />
      <div className="container mx-auto px-4 md:px-16 lg:px-32 my-10 ">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input type="text" label="First name" />
                  </div>
                  <div>
                    <Input type="text" label="Last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input type="email" label="Email address" />
                  </div>
                  <div>
                    <Input type="text" label="Phone number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input type="text" label="Company" />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "
                    >
                      <option value="">Choose country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input label="City" type="text" />
                  </div>
                  <div>
                    <Input label="Zip Code" type="text" />
                  </div>
                </div>

                <div>
                  <Input type="text" label="Address 1" />
                </div>

                <div>
                  <Input type="text" label="Address 2" />
                </div>
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
                <label
                  htmlFor="sameAsShipping"
                  className="text-sm text-gray-700"
                >
                  Same as shipping address
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between pt-4">
              <button
                onClick={() => router.back()}
                className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 w-72 h-12 px-3"
              >
                Back to cart
              </button>
              <button className="px-6 py-2 bg-primary-yellow text-white rounded-md shadow-sm text-sm font-medium w-72 h-12">
                Proceed to shipping
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="my-20 p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/images/checkout.png"
                      alt="Chicken Tikka Kebab"
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Chicken Tikka Kebab</h3>
                    <p className="text-sm text-gray-500">150 gm net</p>
                    <p className="text-sm text-gray-500">50$</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">130$</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">54.76$</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{"432.65$"}</span>
              </div>
            </div>

            <button className="w-full mt-6 px-6 py-3 bg-primary-yellow text-white rounded-md shadow-sm text-sm font-medium">
              Place an order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
