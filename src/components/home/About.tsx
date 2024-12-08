import Image from 'next/image'
import Button from '../Button'
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <div className="flex justify-between items-center w-full px-64 py-20">
      <div className="w-1/2  flex flex-col gap-4">
    <h2 className="text-primary-yellow font-great text-2xl">About us</h2>
    <h1 className="text-white text-4xl font-bold max-w-[350px] ">
      <span className="text-primary-yellow ">We</span> Create the best foody product
    </h1>
    <p className="mt-4 max-w-[450px] ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    {Array(3).fill(0).map((_, index) => (
      <div key={index} className="flex gap-4 mt-2 items-center">
        <FiCheck className="text-white font-bold" />
        <p className="max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>
    ))}
    <Button  className="mt-4" />
  </div>

  {/* Right section */}
  <div className="w-1/2 flex flex-col gap-6 justify-end ">
    <div className="w-full flex justify-end">
      <Image className='rounded-none' src="/images/about1.png" alt="about" width={500} height={500} />
    </div>
    <div className='flex gap-2 justify-end'>

    <Image src="/images/about2.png" alt="about" width={250} height={250} />
    <Image src="/images/about3.png" alt="about" width={250} height={250} />
    </div>
  </div>
</div>
  )
}

export default About
