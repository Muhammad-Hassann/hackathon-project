import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaClock,
} from "react-icons/fa";
import { PiClockClockwise } from "react-icons/pi";

export default function Footer() {
  const links = [
    "FAQ",
    "Term & Condition",
    "Reporting",
    "Documentation",
    "Support Policy",
    "Privacy",
  ];
  const usefulLinks = ["about", "News", "Partners", "Team", "menu", "Contact"];
  const posts = [
    {
      title: "Is fastfood good for your body?",
      date: "February 28, 2022",
      image: "/images/recentPost.png",
    },
    {
      title: "Change your food habit With organic food",
      date: "February 28, 2022",
      image: "/images/recentPost.png",
    },
    {
      title: "Do you like fastfood for your life?",
      date: "February 28, 2022",
      image: "/images/recentPost.png",
    },
  ];

  const icons = [
    { Icon: FaFacebookF, color: "text-[#1E1E1E]" },
    { Icon: FaTwitter, color: "text-[#1E1E1E]" },
    { Icon: FaInstagram, color: "text-[#1E1E1E]" },
    { Icon: FaLinkedinIn, color: "text-[#1E1E1E]" },
    { Icon: FaPinterest, color: "text-[#1E1E1E]" },
  ];

  return (
    <footer className="bg-[#0D0D0D] text-white ">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-20">
        {/* Newsletter Section */}
        <div className="text-center w-full flex justify-between flex-col lg:flex-row  lg:px-16 px-0 ">
          <div className="mb-2">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary-yellow">St</span>ill Need Our
              Support?
            </h2>
            <p className="">
              Don't wait! Make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <form className="w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-primary-yellow text-white placeholder-white/60 px-4 py-3 mb-4 lg:mb-0 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="bg-white text-primary-yellow px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md font-semibold hover:bg-primary-yellow hover:text-white transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <div className="border-t border-primary-yellow my-8"></div>

        {/* Footer Sections */}
        <div className="flex w-full flex-wrap gap-12 mb-8 pt-8">
          {/* About Us Section */}
          <div className=" lg:w-2/6 max-w-[300px]">
            <h3 className="text-xl font-bold mb-6">About Us.</h3>
            <p className="mb-6">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable safe, and professional chauffeured car
              service in major cities across the World.
            </p>
            <div className="flex items-start">
              <div className="bg-primary-yellow flex items-center justify-center p-2 rounded mr-4 w-[77.23px] h-[70.79px]">
                <PiClockClockwise className="text-white text-3xl" />
              </div>
              <div className="text-[#C4C4C4]">
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="  lg:w-1/6">
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="text-[16px] leading-6 flex flex-col gap-4">
              {usefulLinks.map((link) => (
                <li key={link} className="text-[#C4C4C4] mb-2 capitalize">
                  <Link
                    href={`/${link}`}
                    className="hover:text-primary-yellow transition duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="  lg:w-1/6">
            <h3 className="text-xl font-bold mb-6">Help?</h3>
            <ul className="text-[16px] flex flex-col gap-4 leading-6">
              {links.map((link) => (
                <li key={link} className="mb-2 text-[#C4C4C4]">
                  <Link
                    href="/faq"
                    className="hover:text-primary-yellow transition duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className=" lg:w-2/6 max-w-[300px]">
            <h3 className="text-xl font-bold mb-8">Recent Post</h3>
            {posts.map((post, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={post.image}
                  alt=""
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold mb-1 text-[#C4C4C4]">{post.title}</h4>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
      </div>
      <div className="bg-primary-yellow py-6 px-4 md:px-24 lg:px-32 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[16px] text-white leading-6 mb-4 md:mb-0">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          {icons.map(({ Icon, color }, index) => (
            <a
              key={index}
              href="#"
              className={`bg-white p-2 rounded ${color} hover:text-primary-yellow transition duration-300`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
