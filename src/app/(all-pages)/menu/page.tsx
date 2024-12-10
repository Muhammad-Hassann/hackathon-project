import React from "react";
import Starter from "./components/starter";
import Course from "./components/m-course";
import Desert from "./components/deserts";
import Drinks from "./components/drinks";
import End from "./components/end";
import Nav2 from "@/components/Nav2";
import Acheivements from "@/components/home/Achievements";


const page = () => {
  return (
    <>
      <Nav2 heading="Menu"
  secondLinkText="Menu"
  secondLinkHref="/menu"
  />
      <div>
        <Starter />
        <Course />
        {/* <span className="hidden"> */}
          <Acheivements />
        {/* </span> */}
        <Desert />
        <Drinks />
        <End />
      </div>
    </>
  );
};

export default page;
