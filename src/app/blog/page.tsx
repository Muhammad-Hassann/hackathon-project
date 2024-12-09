import React from "react";
import Left from "./Blog-components/left";
import Nav2 from "@/components/Nav2";
import Header from "./header";
import RightGrid from "./Blog-components/rightsection";

function page() {
  return (
    <>
      <Nav2 />
      <Header />
      <div className="bg-white flex ">
        <Left />
        <span className="hidden md:block lg:block">
          {" "}
          <RightGrid />
        </span>
      </div>
    </>
  );
}

export default page;
