import React from "react";
import Nav2 from "@/components/Nav2";
import Body from "./components/body";

function page() {
  return (
    <>
          <Nav2 
          heading="Shopping Cart"
          secondLinkText="Cart"
          secondLinkHref="/cart"
          />
      <div className="w-full bg-white">
        <Body />
      </div>
    </>
  );
}

export default page;
