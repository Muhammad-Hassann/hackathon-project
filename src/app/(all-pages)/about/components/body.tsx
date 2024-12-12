import React from "react";
import BDiet from "./balanceddiet";
import WCU from "./ChooseUs";
import TS from "./teamSection";
import Menu from "./menu";
import Testimonial from "@/components/Testimonial";
function body() {
  return (
    <>
      <BDiet />
      <WCU />
      <TS />
      <Testimonial textColor='text-black' />
      <Menu/>
    </>
  );
}

export default body;
