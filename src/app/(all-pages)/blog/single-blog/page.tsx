import Nav2 from "@/components/Nav2";
import RightGrid from "../Blog-components/rightsection";
import SingleBlog from "./SingleBlog";
import { MyPlugin } from "./some";

export default function page() {
  return (
    <>
      <Nav2 heading="Blog Details"
  secondLinkText="Blog"
  secondLinkHref="/blog"/>
      <div className="bg-white flex ">
        <div className="w-full lg:w-[60%] px-4 lg:px-0">
        <div className="">
          <SingleBlog />
        </div>
        </div>
        <span className="hidden md:block lg:block w-[40%]">
          {" "}
          <RightGrid />
        </span>
      </div>
    </>
  );
}