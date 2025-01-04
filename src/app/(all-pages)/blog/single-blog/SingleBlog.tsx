'use client';
import React from 'react';
import Image from 'next/image';
import { 
  FaRegComments, 
  FaRegCalendarAlt, 
  FaRegUser, 
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSearch } from 'react-icons/fa';

const SingleBlog = () => {
  const icons = [
    { Icon: FaFacebookF, color: 'text-[#1E1E1E]' },
    { Icon: FaTwitter, color: 'text-[#1E1E1E]' },
    { Icon: FaInstagram, color: 'text-[#1E1E1E]' },
    { Icon: FaPinterest, color: 'text-[#1E1E1E]' },
  ];
    const blog = {
        imageSrc: "/images/blog1.png",
        date: "Feb 14, 2022",
        comments: 3,
        author: "Admin",
        title: "10 Reasons To Do A Digital Detox Challenge",
        content:
          "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\nIn today’s fast-paced world, technology has become an integral part of our lives. From smartphones to social media, we are constantly connected. But this constant connectivity can take a toll on our mental and physical health.\n\nA digital detox can help you reconnect with yourself, improve your sleep quality, and enhance your overall well-being. In this blog, we will explore 10 compelling reasons to take on the digital detox challenge and how it can positively impact your life.\n\n1. Reduced Stress: Disconnecting from technology can significantly lower stress levels and help you find inner peace.\n2. Improved Focus: Without constant notifications, you can focus better on tasks and increase productivity.\n3. Better Relationships: Spending quality time with loved ones without distractions can strengthen your relationships.\n4. Enhanced Creativity: Taking a break from screens can give your brain the space it needs to think creatively.\n\nThese are just a few of the many benefits a digital detox can offer. So, are you ready to take the challenge? Let’s dive in and make a positive change!",
    };

    return (
        <div className="max-w-7xl pl-4 md:pl-24 lg:pl-32 py-10">
            <section className="bg-white mb-6 my-6 p-4 md:p-0">
                {/* Image Section */}
                <div className="relative w-full h-48 sm:h-64 md:h-96 overflow-hidden">
                    <Image
                        src={blog.imageSrc}
                        alt="Featured Image"
                        layout="intrinsic"
                        width={700}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Content Section */}
                <div className="mt-4 p-4 md:mt-6">
                    <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-4 flex-wrap gap-2">
                        <FaRegCalendarAlt className="text-primary-yellow mr-1" />
                        <span>{blog.date}</span>
                        <span className="hidden sm:inline">|</span>
                        <FaRegComments className="text-primary-yellow mr-1" />
                        <span>{blog.comments} Comments</span>
                        <span className="hidden sm:inline">|</span>
                        <FaRegUser className="text-primary-yellow mr-1" />
                        <span>{blog.author}</span>
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-4">{blog.title}</h1>
                    <div className="text-gray-700 mb-6 text-sm sm:text-base">{blog.content}</div>
                </div>
                <div className="pt-6 border-t border-neutral-300">
    	    <div className="flex justify-between items-center mb-4">
    	      <span className="text-sm text-neutral-500">Posted by Jane Murray</span>
    	      <div className="flex items-center gap-2 text-neutral-500">
    	        <span>Share:</span>
              <div className="flex  space-x-2">
            {icons.map(({ Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
    	      </div>
    	    </div>
    	    <h2 className="text-lg font-bold mb-4">Comments</h2>
    	    <div>
    	      <div className="mb-4">
    	        <div className="flex gap-4 items-center mb-2">
    	          <img 
    	            src="https://tools-api.webcrumbs.org/image-placeholder/50/50/avatars/1" 
    	            alt="User Avatar" 
    	            className="rounded-full w-[50px] h-[50px] object-cover" 
    	          />
    	          <div>
    	            <h3 className="font-bold">Alex</h3>
    	            <p className="text-neutral-600 text-sm">1 day ago</p>
    	          </div>
    	        </div>
    	        <p className="text-neutral-800">
    	          This helped me perfect my technique. Thanks for the clear instructions!
    	        </p>
    	      </div>
    	      <div className="mb-4">
    	        <div className="flex gap-4 items-center mb-2">
    	          <img 
    	            src="https://tools-api.webcrumbs.org/image-placeholder/50/50/avatars/2" 
    	            alt="User Avatar" 
    	            className="rounded-full w-[50px] h-[50px] object-cover" 
    	          />
    	          <div>
    	            <h3 className="font-bold">Emily</h3>
    	            <p className="text-neutral-600 text-sm">3 days ago</p>
    	          </div>
    	        </div>
    	        <p className="text-neutral-800">
    	          Can’t wait to try this recipe with my family this weekend!
    	        </p>
    	      </div>
    	    </div>
    	    <form className="mt-4">
    	      <div className="flex flex-col md:flex-row gap-4 mb-4">
    	        <input 
    	          type="text" 
    	          placeholder="Name" 
    	          className="border border-neutral-300 rounded-md p-2 w-full"
    	        />
    	        <input 
    	          type="email" 
    	          placeholder="Email" 
    	          className="border border-neutral-300 rounded-md p-2 w-full"
    	        />
    	      </div>
    	      <textarea 
    	        placeholder="Comment" 
    	        className="border border-neutral-300 rounded-md p-2 w-full h-[100px] mb-4"
    	      >
    	</textarea>
    	      <button 
    	        type="submit" 
    	        className="bg-primary-yellow text-white rounded-md px-6 py-2"
    	      >
    	        Post a comment
    	      </button>
    	    </form>
    	  </div>
            </section>
        </div>
    );
};

export default SingleBlog;
