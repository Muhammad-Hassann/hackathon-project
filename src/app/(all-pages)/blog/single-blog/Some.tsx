import React from "react";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
                	<div className="w-[800px] bg-white shadow-lg rounded-lg p-6">  <div>
    	    <img 
    	      src="https://tools-api.webcrumbs.org/image-placeholder/800/300/food/1" 
    	      alt="Dish" 
    	      className="rounded-lg mb-4 object-cover w-full h-[300px]" 
    	    />
    	  </div>
    	  <h1 className="text-2xl font-title mb-2">
    	    10 Tricks to Ensure Perfect Fried Chicken Every Time
    	  </h1>
    	  <p className="font-medium text-neutral-600 mb-6">
    	    Learn how to properly fry chicken and achieve that irresistible golden crispiness.
    	  </p>
    	  <p className="text-neutral-700 leading-relaxed mb-4">
    	    When it comes to fried chicken, it’s not just a dish, it’s an art. You’ve probably faced soggy batter
    	    or chicken that’s raw on the inside, but don’t worry—these tips will help you overcome those frying challenges.
    	  </p>
    	  <blockquote className="bg-primary-100 text-primary-900 italic py-4 px-6 rounded-md border-l-4 border-primary-500 mb-6">
    	    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
    	    exercitation ullamco laboris nisi ut aliquip.
    	  </blockquote>
    	  <p className="text-neutral-700 leading-relaxed mb-4">
    	    Did you know the type of oil and its temperature greatly affects the texture of fried chicken? 
    	    Or that marinating your chicken beforehand makes the flavors seep into every bite? These aspects 
    	    bring a whole new meaning to properly cooking fried foods.
    	  </p>
    	  <div className="flex justify-center">
    	    <img 
    	      src="https://tools-api.webcrumbs.org/image-placeholder/400/250/food/2" 
    	      alt="Meal" 
    	      className="rounded-lg object-cover w-[400px] h-[250px]" 
    	    />
    	  </div>
    	  
    	  <p className="text-neutral-700 leading-relaxed mt-6">
    	    Share your favorite versions of fried chicken recipes in the comments section below. Whether you are 
    	    a chef in practice or an expert cook, let us know how these tips elevated your dish.
    	  </p>
    	  <div className="pt-6 border-t border-neutral-300">
    	    <div className="flex justify-between items-center mb-4">
    	      <span className="text-sm text-neutral-500">Posted by Jane Murray</span>
    	      <div className="flex gap-2 text-neutral-500">
    	        <span>Share:</span>
    	        <i className="fa-brands fa-facebook text-primary-500 w-6 h-6">
    	</i>
    	        <i className="fa-brands fa-twitter text-primary-500 w-6 h-6">
    	</i>
    	        <i className="fa-brands fa-linkedin text-primary-500 w-6 h-6">
    	</i>
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
    	        className="bg-primary-500 text-white rounded-md px-6 py-2"
    	      >
    	        Post a comment
    	      </button>
    	    </form>
    	  </div>
    	</div> 
                </div>
  )
}

