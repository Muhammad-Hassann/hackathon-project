import React from "react";
import Nav2 from "@/components/Nav2";
import RightGrid from "./Blog-components/rightsection";
import BlogPostPage from "./Blog-components/Blogpost";

function page() {
  return (
    <>
      <Nav2 heading="Blog List"
  secondLinkText="Blog"
  secondLinkHref="/blog"/>
      <div className="bg-white flex ">
        <div className="w-full lg:w-[60%] px-4 lg:px-0">
        <BlogPostPage />
        </div>
        <span className="hidden md:block lg:block w-[40%]">
          {" "}
          <RightGrid />
        </span>
      </div>
    </>
  );
}

export default page;
