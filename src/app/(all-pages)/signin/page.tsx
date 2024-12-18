
import Navbar from "@/components/Nav2";
import Link from "next/link";
import Image from "next/image";
import { PiEnvelopeSimple, PiLock } from 'react-icons/pi'
import Input from '../signup/SignUpInput'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar 
      heading="Sign up"
      secondLinkText="Sign up"
      secondLinkHref="/signup"
      />

      {/* Signin Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 ">Sign Up</h3>
          <form>
            <div className="mb-4">
            <Input 
              placeholder="Email"
              type="email"
              icon={<PiEnvelopeSimple/>}
              />
            </div>
            <div className="mb-4">
            <Input 
              placeholder="Password"
              type="password"
              icon={<PiLock />}
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-yellow text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              <Link href="#" className="text-gray-600 cursor-pointer">
                Forgot password?
              </Link>
            </p>
            <p className="text-center text-gray-600 mt-2">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary-yellow cursor-pointer">
                Sign up
              </Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg my-4">OR</p>
            <button className="w-full border text-black py-2 rounded mt-2 flex items-center justify-center gap-4">
              <Image src='/images/google.png' width={20} height={20} alt="Google"/>
              Sign in with Google
            </button>
            <button className="w-full border text-black py-2 rounded mt-2 flex items-center justify-center gap-4">
            <Image src='/images/apple.png' width={20} height={20} alt="Apple"/>
              Sign in with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
