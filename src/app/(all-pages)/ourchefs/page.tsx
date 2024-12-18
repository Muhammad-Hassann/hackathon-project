import React from "react";
import ChefGrid from "./ChefGrid";
import Navbar from "@/components/Nav2";

function page() {
  return (
    <>
       {/* Navbar */}
       <Navbar 
      heading="Our chefs"
      secondLinkText="Our chefs"
      secondLinkHref="/ourchefs"
      />
      <div className=" bg-white text-black">
        <ChefGrid />
      </div>
    </>
  );
}

export default page;
