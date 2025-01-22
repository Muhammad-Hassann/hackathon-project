import React, { useState } from "react";

const ProductDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="px-4 md:px-16 lg:px-32 py-20 bg-white w-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        <div
          className={`px-6 py-3 text-xl font-semibold cursor-pointer transition-colors duration-300 ${
            activeTab === "description"
              ? "text-white bg-primary-yellow"
              : "text-gray-700 "
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`px-6 py-3 text-xl font-semibold cursor-pointer transition-colors duration-300 ${
            activeTab === "reviews"
              ? "text-white bg-primary-yellow"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (24)
        </div>
      </div>

      {/* Content */}
      {activeTab === "description" && (
        <div className="mt-6 text-gray-800">
          <p className="text-base text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique
            porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu
            euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum
            suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget
            vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum.
            Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae.
            Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam
            ac, aliquam in Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus pariatur officia voluptate amet eos magnam possimus illo iusto
            ab soluta dolor officiis aperiam eligendi, voluptas quas sequi ullam
            veritatis, rerum provident at laborum consequatur? Nobis incidunt velit
            provident sed iure maxime explicabo aperiam, itaque impedit eaque hic
            repellat, fugit quisquam, tempora exercitationem eveniet repellendus quia
            suscipit. Labore autem velit incidunt, ut corrupti qui voluptates quidem
            harum eum esse rem voluptatibus repudiandae, animi, aspernatur ratione!
            Alias libero vel accusantium distinctio veniam et voluptatem iure optio.
            Quasi blanditiis impedit dolorum sequi voluptatum quas, illo consectetur
            labore alias qui? Reiciendis error doloremque deleniti.
          </p>
          <h3 className="text-xl font-semibold mt-6 ">Key Benefits</h3>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li className="text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li className="text-base text-gray-600">Lorem ipsum dolor sit amet.</li>
            <li className="text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum.</li>
            <li className="text-base text-gray-600">Lorem ipsum dolor sit amet consectetur .</li>
          </ul>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="mt-6 text-gray-800">
          <p className="text-base text-gray-600 leading-relaxed">
            Reviews content here. This section can be populated with user reviews or
            testimonials to give potential buyers insights into the product&apos;s quality.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
