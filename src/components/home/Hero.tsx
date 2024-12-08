import Image from "next/image"
import Button from "../Button"
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center px-64 relative">
  {/* Background image */}
  <div 
    className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-bottom opacity-5"
  ></div>

{/* Decorative line with icons */}
<div className="absolute left-44 top-1/2 h-[500px] -translate-y-1/2 flex flex-col items-center gap-6">
  <div className="w-[1px] bg-white h-1/3"></div>
  <span className=" text-white z-10">
  <FaFacebookF  className="text-white hover:text-primary-yellow"/>
  </span>
  <span className="p-2 rounded-full z-10">
    <FaTwitter  className="text-white hover:text-primary-yellow"/>
  </span>
  <span className=" text-white z-10">
  <FaPinterest  className="text-white hover:text-primary-yellow"/>
  </span>
  <div className="w-[2px] bg-white h-1/3"></div>
</div>


  {/* Left section */}
  <div className="w-1/2">
    <h2 className="text-primary-yellow font-great text-2xl">It&apos;s Quick &amp; Amusing</h2>
    <h1 className="text-white text-5xl font-bold max-w-[400px]">
      <span className="text-primary-yellow">Th</span>e Art of speed food Quality
    </h1>
    <p className="mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
    </p>
    <Button children="See Menu" className="mt-4" />
  </div>

  {/* Right section */}
  <div className="w-1/2 flex justify-end">
    <Image src="/images/hero.png" alt="hero" width={700} height={700} />
  </div>
</div>

  )
}

export default Hero
