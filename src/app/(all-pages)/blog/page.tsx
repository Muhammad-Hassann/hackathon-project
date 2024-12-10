import React from "react";
import Nav2 from "@/components/Nav2";
import Header from "./header";
import RightGrid from "./Blog-components/rightsection";
import BlogPostPage from "./Blog-components/left";

function page() {
  return (
    <>
      <Nav2 heading="Blog List"
  secondLinkText="Blog"
  secondLinkHref="/blog"/>
      <div className="bg-white flex ">
        <BlogPostPage />
        <span className="hidden md:block lg:block">
          {" "}
          <RightGrid />
        </span>
      </div>
    </>
  );
}

export default page;
