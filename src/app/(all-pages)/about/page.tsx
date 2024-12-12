import React from "react";
import Navbar from "@/components/Nav2";
import Body from "./components/body";

function page() {
  return (
    <>
      <Navbar heading="About"
        secondLinkText="About"
        secondLinkHref="/about" />
      <div className="bg-white w-full py-10">
        <Body />
      </div>
    </>
  );
}

export default page;
