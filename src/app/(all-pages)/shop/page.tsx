import React from "react";
import LeftGrid from "./components/leftgrid";
import RightGrid from "./components/rightsection";
import Nav2 from "@/components/Nav2";

function Page() {
  return (
    <>
      <Nav2 
        heading="Shop"
        secondLinkText="Shop"
        secondLinkHref="/shop"
      />
      <div className="bg-white py-10">
        <div className=" flex flex-col lg:flex-row gap-4">
          {/* Left Section */}
          <div className="flex-1 w-full">
            <LeftGrid />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/4">
            <RightGrid />
          </div>
        </div>

       
      </div>
    </>
  );
}

export default Page;
