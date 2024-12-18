
'use client' 
import Link from 'next/link'
import Navbar from "@/components/Nav2";

 
export default function NotFound() {
  
  return (
    <div className="min-h-screen bg-white">
       {/* Navbar */}
       <Navbar 
      heading="Not Found"
      secondLinkText="404 error"
      secondLinkHref="/"
      />

      {/* Signup Form Section */}
      <section className="relative bg-white flex flex-col items-center justify-center pt-6">
        <div className="w-[630px] text-center">
          <h3 className="text-[66px] font-bold text-primary-yellow mb-6">404</h3>
          <p className="font-bold text-gray-800 text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px] mb-4 text-gray-600">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[18px] mb-6 text-gray-600">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-primary-yellow text-white text-sm font-bold px-7 py-3 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
